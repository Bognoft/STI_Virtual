/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;
  var currentScene = null;

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function() {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  var scenes = data.scenes.map(function(data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.  
    data.linkHotspots.forEach(function(hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function(hotspot) {
      var element = createInfoHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener('click', toggleSceneList);

  // Start with the scene list open on desktop.
  if (!document.body.classList.contains('mobile')) {
    showSceneList();
  }

  // Set handler for scene switch.
  scenes.forEach(function(scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    el.addEventListener('click', function() {
      switchScene(scene);
      if (document.body.classList.contains('mobile')) {
        hideSceneList();
      }
    });
  });

  // DOM elements for view controls.
  var viewUpElement = document.querySelector('#viewUp');
  var viewDownElement = document.querySelector('#viewDown');
  var viewLeftElement = document.querySelector('#viewLeft');
  var viewRightElement = document.querySelector('#viewRight');
  var viewInElement = document.querySelector('#viewIn');
  var viewOutElement = document.querySelector('#viewOut');

  // Dynamic parameters for controls.
  var velocity = 0.7;
  var friction = 3;

  // Associate view controls with elements.
  var controls = viewer.controls();
  controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(viewUpElement,     'y', -velocity, friction), true);
  controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(viewDownElement,   'y',  velocity, friction), true);
  controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(viewLeftElement,   'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement,  'x',  velocity, friction), true);
  controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -velocity, friction), true);
  controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    updateFloorVisibility(scene);
    startAutorotate();
  
    // Update the current scene
    currentScene = scene;
  
    console.log("🔹 Switched to Scene:", scene.data.id); // ✅ Debugging
  
    // Update UI elements
    updateSceneName(scene);
    updateSceneList(scene);
  
    // Highlight the current scene (delayed to allow DOM update)
    setTimeout(() => {
      highlightCurrentScene(scene.data.id);
    }, 500);
  
    // Update the infobox based on the floor
    const floor = getFloorFromScene(scene.data.id);
    updateInfobox(floor);
  }
  




  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    if (!scene) {
      console.error("updateSceneList was called with an undefined scene.");
      return;
    }
  
    console.log("Updating scene list for:", scene.data.id); // Debugging
  
    var sceneId = scene.data.id;
    var currentFloor = getFloorFromScene(sceneId);
    console.log("Detected floor:", currentFloor); // Debugging
  
    // Hide all floors and show only the active one
    document.querySelectorAll('.scenes').forEach(floorEl => {
      if (floorEl.getAttribute('data-floor') === currentFloor) {
        floorEl.style.display = 'block';
        console.log("Showing floor:", currentFloor);
      } else {
        floorEl.style.display = 'none';
      }
    });
  }


  

  function getFloorFromScene(sceneId) {
    console.log("Checking floor for scene ID:", sceneId); // Debugging
  
    const floorMap = {
      "0": "E",  // Entrance
      "1": "B", "2": "B", "3": "B", "4": "B",  // Basement
      "5": "1", "6": "1", "7": "1", "8": "1", "9": "1", "10": "1", "11": "1", "12": "1", "13": "1",  // 1st Floor
      "14": "2", "15": "2", "16": "2", "17": "2", "18": "2", "19": "2", "20": "2", "21": "2",  // 2nd Floor
      "22": "3", "23": "3", "24": "3", "25": "3", "26": "3",  // 3rd Floor
      "27": "4", "28": "4", "29": "4", "30": "4", "31": "4", "32": "4", "33": "4", "34": "4", "35": "4", "36": "4",  // 4th Floor
      "37": "5", "38": "5", "39": "5", "40": "5", "41": "5",  // 5th Floor
    };
  
    // Extract the first number before "-" in the scene ID
    var sceneNumber = sceneId.split("-")[0];
  
    // Check if sceneNumber exists in our floor mapping
    if (floorMap[sceneNumber]) {
      console.log("Detected Floor:", floorMap[sceneNumber]); // Debugging
      return floorMap[sceneNumber];
    } else {
      console.warn("Scene ID not mapped, defaulting to Floor 1:", sceneId);
      return "1"; // Default to 1st floor
    }
  }
  
  function showSceneList() {
    sceneListElement.classList.add('enabled');
    sceneListToggleElement.classList.add('enabled');
  }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function() {
      switchScene(findSceneById(hotspot.target));
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    // Create hotspot/tooltip header.
    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    var icon = document.createElement('img');
    icon.src = 'img/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    // Create title element.
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    // Create close element.
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = 'img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    // Construct header element.
    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    // Create text element.
    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = hotspot.text;

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // Create a modal for the hotspot content to appear on mobile mode.
    var modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modal');
    document.body.appendChild(modal);

    var toggle = function() {
      wrapper.classList.toggle('visible');
      modal.classList.toggle('visible');
    };

    // Show content when hotspot is clicked.
    wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);

    // Hide content when close icon is clicked.
    modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }






  function updateFloorVisibility(scene) {

    let floorNumber = getFloorNumber(scene.data.id);


    document.querySelectorAll(".scenes").forEach(floorList => {
        floorList.style.display = "none";
    });


    let activeFloor = document.querySelector(`.scenes[data-floor="${floorNumber}"]`);
    if (activeFloor) {
        activeFloor.style.display = "block";
    }
}

document.querySelectorAll('.scenes').forEach(el => {
  //console.log(el.getAttribute('data-floor')); // Logs all floors
});

function getFloorNumber(sceneId) {
    if (sceneId.includes("Entrance")) return E;
    if (sceneId.includes("1st-floor")) return 1;
    if (sceneId.includes("2nd-floor")) return 2;
    if (sceneId.includes("3rd-floor")) return 3;
    if (sceneId.includes("4th-floor")) return 4;
    if (sceneId.includes("5th-floor")) return 5;
    if (sceneId.includes("Basement")) return B;
    return 1; 
}


function switchToFloor(floorNumber) {
  console.log("Switching to Floor:", floorNumber);

  // Hide all floors in the scene list
  document.querySelectorAll(".scenes").forEach(floor => {
      floor.style.display = "none";
  });

  // Show only the selected floor in the scene list
  let activeFloor = document.querySelector(`.scenes[data-floor="${floorNumber}"]`);
  if (activeFloor) {
      activeFloor.style.display = "block";
  }

  // Close the overlay after selection
  closeNav();
}


document.querySelectorAll('.overlay-content .scene').forEach(function(el) {
el.addEventListener('click', function() {
  var sceneId = el.getAttribute('data-id');
  var scene = scenes.find(s => s.data.id === sceneId);
  if (scene) {
    switchScene(scene);
    closeNav(); // Close overlay after clicking
  }
});
});


function updateInfobox(floor) {
  const infobox = document.getElementById('infobox');
  const infoboxTitle = document.getElementById('infobox-title');
  const infoboxText = document.getElementById('infobox-text');
  const infoboxAudio = document.getElementById('infobox-audio');

  // Define floor-specific content
  const floorContent = {
    "E": {
      title: "Entrance",
      text: "Welcome to STI College Malolos!",
      audio: "audio/welcome.mp3"
    },
    "B": {
      title: "Basement",
      text: "The basement houses the canteen and parking lot. It's a bustling area where students gather for meals and socializing.",
      audio: "audio/basement.mp3"
    },
    "1": {
      title: "1st Floor",
      text: "The first floor includes the lobby, computer labs, and administrative offices. It's the main entrance to the college.",
      audio: "audio/floor1.mp3"
    },
    "2": {
      title: "2nd Floor",
      text: "The second floor features the library, AVR, and faculty offices. It's a quiet area for studying and meetings.",
      audio: "audio/second-floor.mp3"
    },
    "3": {
      title: "3rd Floor",
      text: "The third floor is primarily dedicated to teaching and learning, housing most of the classrooms for both senior high school and college students.",
      audio: "audio/third-floor.mp3"
    },
    "4": {
      title: "4th Floor",
      text: "The fourth floor is home to specialized labs like the physics and speech labs. It's a space for hands-on learning.",
      audio: "audio/fourth-floor.mp3"
    },
    "5": {
      title: "5th Floor",
      text: "The fifth floor features the gym and additional faculty offices. It's a place for physical activities and sports.",
      audio: "audio/Fifth Floor.mp3"
    }
  };

  // Update the infobox content
  if (floorContent[floor]) {
    infobox.style.display = 'block';
    infoboxTitle.textContent = floorContent[floor].title;
    infoboxText.textContent = floorContent[floor].text;
    infoboxAudio.src = floorContent[floor].audio;
    infoboxAudio.load(); // Reload the audio element
  } else {
    infobox.style.display = 'none'; // Hide if no content for the floor
  }
}



// Add this function to your index.js file
function getFloorFromScene(sceneId) {
  console.log("Checking floor for scene ID:", sceneId); // Debugging
  
  const floorMap = {
    "0": "E",  // Entrance
    "1": "B", "2": "B", "3": "B", "4": "B",  // Basement
    "5": "1", "6": "1", "7": "1", "8": "1", "9": "1", "10": "1", "11": "1", "12": "1", "13": "1",  // 1st Floor
    "14": "2", "15": "2", "16": "2", "17": "2", "18": "2", "19": "2", "20": "2", "21": "2",  // 2nd Floor
    "22": "3", "23": "3", "24": "3", "25": "3", "26": "3",  // 3rd Floor
    "27": "4", "28": "4", "29": "4", "30": "4", "31": "4", "32": "4", "33": "4", "34": "4", "35": "4", "36": "4",  // 4th Floor
    "37": "5", "38": "5", "39": "5", "40": "5", "41": "5",  // 5th Floor
  };


  var sceneNumber = sceneId.split("-")[0]; // Extracts first number

  if (floorMap[sceneNumber]) {
    return floorMap[sceneNumber]; 
  } else {
    return "1"; // Default to 1st floor
  }
}


function highlightCurrentScene(sceneId) {
  console.log("🔹 Trying to highlight scene:", sceneId); // Debugging

  // Remove 'active' class from the main scene list (NOT the overlay)
  document.querySelectorAll("#sceneList .scene").forEach(scene => {
    scene.classList.remove("active");
  });

  // Find and highlight the scene in the main scene list
  var currentSceneElement = document.querySelector(`#sceneList .scene[data-id="${sceneId}"]`);

  if (currentSceneElement) {
    currentSceneElement.classList.add("active");
    console.log("✅ Highlighted Scene in Scene List:", currentSceneElement.innerText); // Debugging
  } else {
    console.warn("⚠ Scene not found in scene list:", sceneId);
  }
}










  

  // Display the initial scene.
  switchScene(scenes[0]);

})();
