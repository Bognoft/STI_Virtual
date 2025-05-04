var APP_DATA = {
  "scenes": [
    {
      "id": "0-sti-entrance",
      "name": "STI Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6162335840753457,
        "pitch": -0.34753408885358894,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.5419511253367872,
          "pitch": -0.2958591976690421,
          "rotation": 0,
          "target": "5-lobby"
        },
        {
          "yaw": 0.7761564135475467,
          "pitch": -0.05799596426637166,
          "rotation": 1.5707963267948966,
          "target": "3-basement-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-basement-1",
      "name": "Basement 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.4949845039204117,
        "pitch": 0.1049007064621641,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 2.764429065867109,
          "pitch": -0.12082055640339817,
          "rotation": 4.71238898038469,
          "target": "10-1st-floor-bathroom"
        },
        {
          "yaw": -1.4993240573019655,
          "pitch": 0.06784143032223078,
          "rotation": 0,
          "target": "2-basement-canteen"
        },
        {
          "yaw": -0.17368429533980212,
          "pitch": 0.06105467081845184,
          "rotation": 0,
          "target": "3-basement-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-basement-canteen",
      "name": "Basement Canteen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6242884808898772,
        "pitch": 0.06779175079986821,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -1.8224131588627603,
          "pitch": 0.226852077913815,
          "rotation": 0,
          "target": "1-basement-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6766634235276712,
          "pitch": -0.0280084188838714,
          "title": "Canteen",
          "text": "where you can buy meals at an affordable rate, also coffee if you need it."
        }
      ]
    },
    {
      "id": "3-basement-2",
      "name": "Basement 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.7566515639528362,
        "pitch": 0.02717473884685262,
        "fov": 1.3533735070440347
      },
      "linkHotspots": [
        {
          "yaw": -0.06463868268220097,
          "pitch": 0.04614186452217517,
          "rotation": 0,
          "target": "1-basement-1"
        },
        {
          "yaw": 2.0402390398434083,
          "pitch": 0.0141533274621235,
          "rotation": 0,
          "target": "4-basement-uniform"
        },
        {
          "yaw": -2.4035465057567773,
          "pitch": -0.11925531424321179,
          "rotation": 10.995574287564278,
          "target": "0-sti-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-basement-uniform",
      "name": "Basement Uniform",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5400254038523578,
        "pitch": 0.06436122358465468,
        "fov": 1.3533735070440347
      },
      "linkHotspots": [
        {
          "yaw": -2.648794289188956,
          "pitch": 0.04336717462180317,
          "rotation": 1.5707963267948966,
          "target": "3-basement-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6004282928492266,
          "pitch": -0.06945365007515925,
          "title": "School Shop",
          "text": "where you can buy your school supplies, and also where you claim your uniform!"
        }
      ]
    },
    {
      "id": "5-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.1187991722182753,
        "pitch": -0.017877881427772024,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -0.007284454872227286,
          "pitch": 0.043931736349811956,
          "rotation": 0,
          "target": "0-sti-entrance"
        },
        {
          "yaw": -2.3975414444019663,
          "pitch": 0.045742096461204085,
          "rotation": 1.5707963267948966,
          "target": "6-1st-floor-hallway-computer"
        },
        {
          "yaw": 2.3117907739685224,
          "pitch": 0.03275741037377955,
          "rotation": 4.71238898038469,
          "target": "11-1st-floor-elevator-hallway"
        },
        {
          "yaw": -2.573456233864734,
          "pitch": 0.04276417892268647,
          "rotation": 4.71238898038469,
          "target": "7-1st-floor-office-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0109131266009665,
          "pitch": 0.07121050953529995,
          "title": "Admin",
          "text": "this is the first office you see when entering the building, where payment and other inquiries about the school is conducted. Here is the list of the people who are facilitating the administration room Mr. Francis E. Salazar, Ms. Maricel B. Eugenio, Mr. Emil Anzures, Ms. Joan Montaril, Ms. J-ann Santos, Mr. David Salamat, Ms. Aleli Elester, Ms. Shiela Bernabe, Ptr. Joel Dela Cruz, Ms. Caila Mariano, Ms. Mariel Minorca Gamboa"
        }
      ]
    },
    {
      "id": "6-1st-floor-hallway-computer",
      "name": "1st Floor Hallway Computer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.4129583220836803,
        "pitch": 0.06442710486894576,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -0.3909230420195744,
          "pitch": 0.02348373317126473,
          "rotation": 0,
          "target": "9-1st-floor-comlab-2"
        },
        {
          "yaw": 0.5093228196206638,
          "pitch": -0.05415925701723978,
          "rotation": 0,
          "target": "8-1st-floor-comlab-1"
        },
        {
          "yaw": 1.6793675707925146,
          "pitch": 0.040058029142331364,
          "rotation": 0,
          "target": "11-1st-floor-elevator-hallway"
        },
        {
          "yaw": 1.9487133338529992,
          "pitch": 0.041544415822279745,
          "rotation": 1.5707963267948966,
          "target": "7-1st-floor-office-hallway"
        },
        {
          "yaw": 1.5160781698552652,
          "pitch": -0.02831779899309872,
          "rotation": 4.71238898038469,
          "target": "5-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0621289642447067,
          "pitch": -0.1562033040266897,
          "title": "Computer Lab 1",
          "text": "The Computer Laboratory 1, located at the ground floor, is an area for student’s tech-related activities and projects. The Computer lab is often used by IT and Digital art students."
        },
        {
          "yaw": -0.8227488045474693,
          "pitch": -0.1703176930706256,
          "title": "Computer Lab 2",
          "text": "The Computer Laboratory 2, located at the 4th floor, is an area for student’s tech-related activities and projects. the computer lab 2 has a printer which students can use to print theyre documents but you have to pay for it, and is facilitated by Mr. James Bolipata."
        }
      ]
    },
    {
      "id": "7-1st-floor-office-hallway",
      "name": "1st Floor Office Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5818353285480313,
        "pitch": 0.1762911419791493,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.4739248036846346,
          "pitch": 0.11485785615974464,
          "rotation": 4.71238898038469,
          "target": "10-1st-floor-bathroom"
        },
        {
          "yaw": 1.761473971901319,
          "pitch": 0.12370749282844606,
          "rotation": 7.853981633974483,
          "target": "13-1st-floor-kitchen"
        },
        {
          "yaw": -1.6407744174262664,
          "pitch": 0.09561531683922553,
          "rotation": 10.995574287564278,
          "target": "6-1st-floor-hallway-computer"
        },
        {
          "yaw": -1.4262309245148543,
          "pitch": 0.09713241348672597,
          "rotation": 14.137166941154074,
          "target": "5-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8447101391513883,
          "pitch": -0.08830097038412532,
          "title": "Office of the president",
          "text": "the office of Mr. Francis E. Salazar"
        },
        
      ]
    },
    {
      "id": "8-1st-floor-comlab-1",
      "name": "1st Floor Comlab 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.06793582368861273,
        "pitch": -0.0007558527428610518,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -2.5424164499869697,
          "pitch": 0.09043170228511244,
          "rotation": 0,
          "target": "6-1st-floor-hallway-computer"
        },
        {
          "yaw": 2.558915535699004,
          "pitch": 0.06151851910104078,
          "rotation": 0,
          "target": "5-lobby"
        }
      ],
      "infoHotspots": [
       
      ]
    },
    {
      "id": "9-1st-floor-comlab-2",
      "name": "1st Floor Comlab 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -1.3856133701622575,
        "pitch": 0.03902942292819134,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.1647902026031645,
          "pitch": -0.009328351212619879,
          "rotation": 0,
          "target": "6-1st-floor-hallway-computer"
        }
      ],
      "infoHotspots": [
        
      ]
    },
    {
      "id": "10-1st-floor-bathroom",
      "name": "1st Floor Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.631919855899496,
        "pitch": 0.223874134620468,
        "fov": 1.3533735070440347
      },
      "linkHotspots": [
        {
          "yaw": 1.6194165827083111,
          "pitch": -0.04570599659429497,
          "rotation": 0,
          "target": "18-2nd-floor-bathroom"
        },
        {
          "yaw": 1.163279905755818,
          "pitch": 0.2876815202692047,
          "rotation": 3.141592653589793,
          "target": "1-basement-1"
        },
        {
          "yaw": -1.3324115051502368,
          "pitch": 0.11376850542076689,
          "rotation": 0,
          "target": "13-1st-floor-kitchen"
        },
        {
          "yaw": -1.1330172019285598,
          "pitch": 0.10997694257088853,
          "rotation": 7.853981633974483,
          "target": "7-1st-floor-office-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-1st-floor-elevator-hallway",
      "name": "1st Floor Elevator Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.453053110412254,
        "pitch": 0.12851320408256406,
        "fov": 1.3533735070440347
      },
      "linkHotspots": [
        {
          "yaw": 1.636184017186757,
          "pitch": 0.07644153563645162,
          "rotation": 0,
          "target": "6-1st-floor-hallway-computer"
        },
        {
          "yaw": 1.8597101918116046,
          "pitch": 0.0801694703168856,
          "rotation": 1.5707963267948966,
          "target": "5-lobby"
        },
        {
          "yaw": -3.1318432976824226,
          "pitch": -0.257360641091255,
          "rotation": 4.71238898038469,
          "target": "12-1st-floor-to-2nd-floor"
        },
        {
          "yaw": -0.14200763921485304,
          "pitch": 0.1698529741113095,
          "rotation": 0,
          "target": "14-2nd-floor-stairs-hallway"
        },
        {
          "yaw": 0.10887086393408829,
          "pitch": 0.18087199681833432,
          "rotation": 3.141592653589793,
          "target": "3-basement-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-1st-floor-to-2nd-floor",
      "name": "1st Floor to 2nd Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.03356402407682069,
        "pitch": 0.16878939125663628,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -0.30310744993410665,
          "pitch": 0.4293092276154127,
          "rotation": 0,
          "target": "11-1st-floor-elevator-hallway"
        },
        {
          "yaw": 0.17224188192009926,
          "pitch": -0.12279712479696414,
          "rotation": 1.5707963267948966,
          "target": "14-2nd-floor-stairs-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-1st-floor-kitchen",
      "name": "1st Floor Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.2172202627644833,
        "pitch": 0.22390078322159468,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 2.188143050716681,
          "pitch": 0.13296911621780794,
          "rotation": 0,
          "target": "10-1st-floor-bathroom"
        },
        {
          "yaw": 0.5532245600629917,
          "pitch": 0.11628740100583457,
          "rotation": 1.5707963267948966,
          "target": "6-1st-floor-hallway-computer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2706389657356212,
          "pitch": 0.11356357621922974,
          "title": "Kitchen",
          "text": "A specialized classroom or teaching kitchen for the education of Culinary Arts and BS in Culinary Management (BSCM) students, where they will store, cook, and prepare food."
        }
      ]
    },
    {
      "id": "14-2nd-floor-stairs-hallway",
      "name": "2nd Floor Stairs Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 2.3491070319740555,
        "pitch": 0.010393738229977245,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.4518260288711895,
          "pitch": 0.35270066139068845,
          "rotation": 18.84955592153877,
          "target": "15-2nd-floor-hallway-middle"
        },
        {
          "yaw": 2.6045557910119843,
          "pitch": 0.345318230832099,
          "rotation": 1.5707963267948966,
          "target": "12-1st-floor-to-2nd-floor"
        },
        {
          "yaw": -3.113755370090413,
          "pitch": -0.22648438343934352,
          "rotation": 0,
          "target": "21-2nd-floor-to-3rd-floor"
        },
        {
          "yaw": -0.6256231133806978,
          "pitch": 0.13264896511343238,
          "rotation": 0,
          "target": "23-3rd-floor-stairs-hallway"
        },
        {
          "yaw": -0.3558763930339399,
          "pitch": 0.13967572400449413,
          "rotation": 3.141592653589793,
          "target": "11-1st-floor-elevator-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-2nd-floor-hallway-middle",
      "name": "2nd Floor Hallway Middle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.0185391630435472,
        "pitch": 0.06029203226768587,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.6036164650378106,
          "pitch": 0.3190969070508416,
          "rotation": 0,
          "target": "16-2nd-floor-3-way"
        },
        {
          "yaw": -1.5122711808076694,
          "pitch": 0.09655749941144265,
          "rotation": 0,
          "target": "14-2nd-floor-stairs-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7090216550655661,
          "pitch": -0.207717049098747,
          "title": "Clinic",
          "text": "The Clinic, located at the 2nd floor, is a small room that provides medical assistance for all students and teachers. Facilitated by  Ms. Celia Delos Reyes"
        }
      ]
    },
    {
      "id": "16-2nd-floor-3-way",
      "name": "2nd Floor 3 Way",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.4723227466441351,
        "pitch": 0.13732975522979984,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.943380614777415,
          "pitch": 0.11198719580617578,
          "rotation": 7.853981633974483,
          "target": "19-2nd-floor-library"
        },
        {
          "yaw": 1.0607682894463277,
          "pitch": 0.11551767346496966,
          "rotation": 4.71238898038469,
          "target": "20-2nd-floor-avr"
        },
        {
          "yaw": -0.012020799840032126,
          "pitch": 0.22554574261461724,
          "rotation": 0,
          "target": "17-2nd-floor-faculty-"
        },
        {
          "yaw": -1.6740535664188876,
          "pitch": 0.36075549799330275,
          "rotation": 0,
          "target": "15-2nd-floor-hallway-middle"
        }
      ],
      "infoHotspots": [
        
      ]
    },
    {
      "id": "17-2nd-floor-faculty-",
      "name": "2nd Floor Faculty ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.037970091439048,
        "pitch": 0.08552913739486101,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.4807731986906019,
          "pitch": 0.0826329231452938,
          "rotation": 4.71238898038469,
          "target": "18-2nd-floor-bathroom"
        },
        {
          "yaw": -1.6150597352608962,
          "pitch": 0.0834668733336148,
          "rotation": 0,
          "target": "16-2nd-floor-3-way"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6420313948851799,
          "pitch": -0.1548572185051853,
          "title": "Faculty Second Floor",
          "text": "Faculty 2nd Floor On the second floor, the first half of the faculty is where the professors' and teachers' lounge/office are located. Here is the List of Teachers that are in the 2nd Floor, Ms. Ar Ei Santos, Mr. Edward Yumul, Mr. Joefferson Azan, Ms. Regine Tolin, Mr. Rommel Tuazon, Ms. Cheontelle Marquez, Ms. Patricia Marcelino, Mr. John Vic Otakan, Mr. Vince Lenard Santos, Mr. Lester Gonzales, Ms. Niña Anita Faustino, Mr. Rongie Gonzales, Ms. Ann Kathrine Gumapos , Ms. Mary Joy Balbin, Mr. Kim Navarro, Ms. Princess Kaila Victoria, Ms. Andrea Reyes, Mr. Lourd Philip Dela Cruz, Mr. Freduard Manlapaz, Mr. Lloyd Mauricio, Mr. Alexander Venus, Mr. Eumir Angeles and Ms. Angelica Yap"
        }
      ]
    },
    {
      "id": "18-2nd-floor-bathroom",
      "name": "2nd Floor Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.4957965109432543,
        "pitch": 0.15378588981160135,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.091056083406226,
          "pitch": 0.30462803581891507,
          "rotation": 3.141592653589793,
          "target": "10-1st-floor-bathroom"
        },
        {
          "yaw": 1.4633101471478138,
          "pitch": -0.12234729838712255,
          "rotation": 0,
          "target": "26-3rd-floor-bathroom"
        },
        {
          "yaw": -1.1715221267574822,
          "pitch": 0.0674366280600367,
          "rotation": 1.5707963267948966,
          "target": "17-2nd-floor-faculty-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-2nd-floor-library",
      "name": "2nd Floor Library",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.9891192175769685,
        "pitch": 0.10664074479393015,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 2.831280098219244,
          "pitch": 0.02288049695689054,
          "rotation": 0,
          "target": "16-2nd-floor-3-way"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4834243192158736,
          "pitch": 0.07512729675198315,
          "title": "Library",
          "text": "The library, located at the 2nd floor, is a medium-sized room used by students and teachers for more isolated lectures, study sessions, and for reading literature. Ms. Claricel Mejia is the Librarian"
        }
      ]
    },
    {
      "id": "20-2nd-floor-avr",
      "name": "2nd Floor AVR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -3.0556722349226195,
        "pitch": 0.1936251715651789,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 0.5878981190863684,
          "pitch": 0.06720367684622452,
          "rotation": 0,
          "target": "16-2nd-floor-3-way"
        },
        {
          "yaw": -0.5252461136628774,
          "pitch": 0.0704971608381868,
          "rotation": 0,
          "target": "16-2nd-floor-3-way"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.0007572378767122245,
          "pitch": 0.002068817324746064,
          "title": "AVR",
          "text": "The Audio Visual Room, located at the 2nd floor, is a specialized room for formal presentation set-ups and events for all senior high school and college students."
        }
      ]
    },
    {
      "id": "21-2nd-floor-to-3rd-floor",
      "name": "2nd Floor to 3rd Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.9367629149507835,
        "pitch": 0.13408560199632902,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -2.8094205822010956,
          "pitch": -0.21929686050374286,
          "rotation": 1.5707963267948966,
          "target": "23-3rd-floor-stairs-hallway"
        },
        {
          "yaw": 2.955825713058948,
          "pitch": 0.40822439968375335,
          "rotation": 3.141592653589793,
          "target": "14-2nd-floor-stairs-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-3rd-floor-hallway",
      "name": "3rd Floor Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6114160594961078,
        "pitch": 0.08439469562831903,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.4828992738443745,
          "pitch": 0.08725918485608197,
          "rotation": 4.71238898038469,
          "target": "26-3rd-floor-bathroom"
        },
        {
          "yaw": -1.6314341727670296,
          "pitch": 0.34552488421863714,
          "rotation": 12.566370614359176,
          "target": "25-3rd-floor-3-way"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-3rd-floor-stairs-hallway",
      "name": "3rd Floor Stairs Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.9479936641420768,
        "pitch": 0.03978397238773823,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.249636993459438,
          "pitch": 0.44457749654835155,
          "rotation": 1.5707963267948966,
          "target": "21-2nd-floor-to-3rd-floor"
        },
        {
          "yaw": -0.02700956091364759,
          "pitch": 0.2416852819803097,
          "rotation": 0,
          "target": "25-3rd-floor-3-way"
        },
        {
          "yaw": 1.7010092774777652,
          "pitch": -0.05367359483903478,
          "rotation": 0,
          "target": "27-4th-stairway"
        },
        {
          "yaw": -2.120460827452133,
          "pitch": 0.3261912761417278,
          "rotation": 3.141592653589793,
          "target": "14-2nd-floor-stairs-hallway"
        },
        {
          "yaw": -2.363693916644449,
          "pitch": 0.3105994270128054,
          "rotation": 0,
          "target": "28-4th-floor-elevator-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-3rd-floor-window-hallway",
      "name": "3rd Floor Window Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.3718893867711053,
        "pitch": 0.03938419129321247,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -0.02394705235068173,
          "pitch": 0.10515629387301928,
          "rotation": 0,
          "target": "25-3rd-floor-3-way"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8576015796537195,
          "pitch": 0.12821374984861578,
          "title": "A True STIer",
          "text": "Salvatore Juan Carlos C Santos"
        }
      ]
    },
    {
      "id": "25-3rd-floor-3-way",
      "name": "3rd Floor 3 Way",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.7812932979982499,
        "pitch": 0.2062250160328496,
        "fov": 1.3533735070440347
      },
      "linkHotspots": [
        {
          "yaw": 1.6037630916601406,
          "pitch": 0.40800927586976066,
          "rotation": 6.283185307179586,
          "target": "22-3rd-floor-hallway"
        },
        {
          "yaw": -1.5638143327486471,
          "pitch": 0.15725167235816606,
          "rotation": 0,
          "target": "24-3rd-floor-window-hallway"
        },
        {
          "yaw": -0.029793426363648123,
          "pitch": 0.17630105077966007,
          "rotation": 0,
          "target": "23-3rd-floor-stairs-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-3rd-floor-bathroom",
      "name": "3rd Floor Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.4560591336481492,
        "pitch": 0.13909967494065612,
        "fov": 1.3533735070440347
      },
      "linkHotspots": [
        {
          "yaw": -1.1435975083188836,
          "pitch": 0.0038665108352908817,
          "rotation": 1.5707963267948966,
          "target": "22-3rd-floor-hallway"
        },
        {
          "yaw": 1.1845686931770931,
          "pitch": 0.3105685125088957,
          "rotation": 3.141592653589793,
          "target": "18-2nd-floor-bathroom"
        },
        {
          "yaw": 1.5370611230060867,
          "pitch": -0.08258657009836767,
          "rotation": 0,
          "target": "36-4th-floor-bathroom-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-4th-stairway",
      "name": "4th stairway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.2097320526902724,
        "pitch": 0.18806330843161234,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -0.18911872599593949,
          "pitch": 0.3013989143416804,
          "rotation": 1.5707963267948966,
          "target": "23-3rd-floor-stairs-hallway"
        },
        {
          "yaw": 0.17177396727021055,
          "pitch": -0.1708294713727696,
          "rotation": 1.5707963267948966,
          "target": "28-4th-floor-elevator-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-4th-floor-elevator-hallway",
      "name": "4th Floor Elevator Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.3700762117770537,
        "pitch": 0.12738313532806167,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 2.8733587976016146,
          "pitch": 0.38460762601601495,
          "rotation": 1.5707963267948966,
          "target": "27-4th-stairway"
        },
        {
          "yaw": -2.97579211733542,
          "pitch": -0.1749699397878075,
          "rotation": 4.71238898038469,
          "target": "41-5th-stairway_"
        },
        {
          "yaw": 1.5624553055884949,
          "pitch": 0.27211886831419463,
          "rotation": 0,
          "target": "29-4th-floor-office"
        },
        {
          "yaw": -0.5268880703448549,
          "pitch": 0.20121022632366703,
          "rotation": 3.141592653589793,
          "target": "23-3rd-floor-stairs-hallway"
        },
        {
          "yaw": -0.7212275016454814,
          "pitch": 0.20491367904142876,
          "rotation": 0,
          "target": "40-5th-floor-gym-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7171064306300057,
          "pitch": -0.03665648240879271,
          "title": "Office of the Academic Head",
          "text": "Ms. Mariel Minorca G. Valerio."
        }
      ]
    },
    {
      "id": "29-4th-floor-office",
      "name": "4th Floor Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.8087632208707243,
        "pitch": 0.02012017200519267,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.6292338380497977,
          "pitch": 0.5222179194941035,
          "rotation": 0,
          "target": "30-4th-floor-3-way-hallway"
        },
        {
          "yaw": -1.436286450932137,
          "pitch": 0.25421064484488554,
          "rotation": 0,
          "target": "28-4th-floor-elevator-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8619163075911338,
          "pitch": -0.1626407266718335,
          "title": "Student Council Office",
          "text": "facilitated by Ms. Shiela S. Bernabe."
        },
        
      ]
    },
    {
      "id": "30-4th-floor-3-way-hallway",
      "name": "4th Floor 3 Way Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 2.436737906513822,
        "pitch": 0.1338369448850436,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -0.07692233434540086,
          "pitch": 0.442047908062694,
          "rotation": 6.283185307179586,
          "target": "29-4th-floor-office"
        },
        {
          "yaw": 1.352067935174544,
          "pitch": 0.08761738822667908,
          "rotation": 4.71238898038469,
          "target": "34-4th-floor-speech-lab"
        },
        {
          "yaw": -1.5570785076678533,
          "pitch": 0.15209701666825737,
          "rotation": 0.7853981633974483,
          "target": "31-4th-floor-window-hallway"
        },
        {
          "yaw": 2.1956744238499537,
          "pitch": 0.06925937130574233,
          "rotation": 7.853981633974483,
          "target": "33-4th-floor-lab-1"
        },
        {
          "yaw": 1.5832101084186299,
          "pitch": 0.08639117755652137,
          "rotation": 12.566370614359176,
          "target": "36-4th-floor-bathroom-hallway"
        },
        {
          "yaw": 3.1048023135689995,
          "pitch": 0.1480798945395243,
          "rotation": 0,
          "target": "35-4th-floor-comlab-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5068713166267926,
          "pitch": -0.0675902207261938,
          "title": "Computer Lab 3",
          "text": "Located on the 4th floor, Comlab 3 is a dynamic learning space for ICT students, where coding, programming, and technology come to life. This lab offers an interactive environment for students to develop their coding skills, work on tech projects, and prepare for careers in the ever-evolving tech industry."
        },
        {
          "yaw": 2.292672988475199,
          "pitch": -0.007062691518417097,
          "title": "Laboratory 1",
          "text": "Located on the 4th floor, our Physics Lab 1 is a fully equipped space for students to explore the fundamental concepts of physics through hands-on experiments and demonstrations. From mechanics to motion, this lab encourages critical thinking and problem-solving in the world of science."
        }
      ]
    },
    {
      "id": "31-4th-floor-window-hallway",
      "name": "4th Floor Window Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.06531537260430298,
        "pitch": 0.17639488246750368,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 3.1265896955497334,
          "pitch": 0.05457540572603037,
          "rotation": 0,
          "target": "30-4th-floor-3-way-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-4th-floor-lab-2",
      "name": "4th Floor Lab 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5835046442836198,
        "pitch": 0.03519171683662492,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -1.9060500983666913,
          "pitch": 0.10506537503778901,
          "rotation": 0,
          "target": "30-4th-floor-3-way-hallway"
        },
        {
          "yaw": -1.2564351581349733,
          "pitch": 0.15414619975137356,
          "rotation": 0,
          "target": "36-4th-floor-bathroom-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-4th-floor-lab-1",
      "name": "4th Floor Lab 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.0339448823376003,
        "pitch": 0.1460944358209506,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.004831844015115,
          "pitch": 0.1327160895510957,
          "rotation": 0,
          "target": "30-4th-floor-3-way-hallway"
        },
        {
          "yaw": 1.6132023373867161,
          "pitch": 0.11130791237090776,
          "rotation": 0,
          "target": "36-4th-floor-bathroom-hallway"
        }
      ],
      "infoHotspots": [
       
      ]
    },
    {
      "id": "34-4th-floor-speech-lab",
      "name": "4th Floor Speech Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.4844227023697734,
        "pitch": 0.13206147015658587,
        "fov": 1.3533735070440347
      },
      "linkHotspots": [
        {
          "yaw": -1.1371325059435247,
          "pitch": 0.13290495450556428,
          "rotation": 0,
          "target": "30-4th-floor-3-way-hallway"
        },
        {
          "yaw": -1.8767580588422845,
          "pitch": 0.0906217543789456,
          "rotation": 0,
          "target": "36-4th-floor-bathroom-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5407750111137268,
          "pitch": 0.06986435901659149,
          "title": "Speech Lab",
          "text": "In the Speech Lab, students refine their public speaking and presentation skills. This specialized space provides a supportive environment for practice, with resources for speech analysis, recording, and feedback to help students become confident communicators."
        }
      ]
    },
    {
      "id": "35-4th-floor-comlab-3",
      "name": "4th Floor Comlab 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.02946722427711279,
        "pitch": 0.03656433112226232,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -2.2434353925089887,
          "pitch": 0.12244877272211241,
          "rotation": 0,
          "target": "30-4th-floor-3-way-hallway"
        }
      ],
      "infoHotspots": [
      
      ]
    },
    {
      "id": "36-4th-floor-bathroom-hallway",
      "name": "4th Floor Bathroom Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 1.4422523433860777,
        "pitch": -0.012126676130019831,
        "fov": 1.3533735070440347
      },
      "linkHotspots": [
        {
          "yaw": -0.9624529611560586,
          "pitch": 0.06696779717104917,
          "rotation": 0,
          "target": "32-4th-floor-lab-2"
        },
        {
          "yaw": -0.03207883506561515,
          "pitch": 0.2018823867866555,
          "rotation": 0,
          "target": "30-4th-floor-3-way-hallway"
        },
        {
          "yaw": 1.371225125802349,
          "pitch": 0.06648040889340301,
          "rotation": 3.141592653589793,
          "target": "26-3rd-floor-bathroom"
        },
        {
          "yaw": 1.527484958343976,
          "pitch": -0.10680363658013903,
          "rotation": 0,
          "target": "38-5th-floor-gym"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.64729722436706,
          "pitch": -0.03909253943319868,
          "title": "Laboratory 2",
          "text": "Also located on the 4th floor, Physics Lab 2 is a versatile space used for both hands-on experiments and lectures. Like Lab 1, it’s fully equipped for exploring key concepts in physics, including mechanics and other fundamental principles. This lab provides students with the opportunity to engage in practical experiments while also participating in theoretical lessons, making it an essential resource for their scientific education."
        }
      ]
    },
    {
      "id": "37-5th-floor-bleachers",
      "name": "5th Floor Bleachers",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.06591584837774533,
        "pitch": 0.12829878857554533,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -1.3913213020067197,
          "pitch": 0.007853801082838174,
          "rotation": 4.71238898038469,
          "target": "38-5th-floor-gym"
        },
        {
          "yaw": 1.5470555682390854,
          "pitch": 0.05664565312675762,
          "rotation": 4.71238898038469,
          "target": "38-5th-floor-gym"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-5th-floor-gym",
      "name": "5th Floor Gym",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.07549003940513899,
        "pitch": 0.03871215071087519,
        "fov": 1.3533735070440347
      },
      "linkHotspots": [
        {
          "yaw": -2.3822769847995158,
          "pitch": 0.002588398486265575,
          "rotation": 12.566370614359176,
          "target": "39-5th-floor-faculty"
        },
        {
          "yaw": -2.0387560226330628,
          "pitch": -0.17863526703416177,
          "rotation": 4.71238898038469,
          "target": "37-5th-floor-bleachers"
        },
        {
          "yaw": -3.1103776529386806,
          "pitch": 0.02477320095850999,
          "rotation": 0,
          "target": "40-5th-floor-gym-entrance"
        },
        {
          "yaw": 2.2012723612563647,
          "pitch": 0.019334572762094382,
          "rotation": 7.0685834705770345,
          "target": "37-5th-floor-bleachers"
        },
        {
          "yaw": -2.0338942580607267,
          "pitch": -0.0031455582169179763,
          "rotation": 4.71238898038469,
          "target": "36-4th-floor-bathroom-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-5th-floor-faculty",
      "name": "5th Floor Faculty",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.7207183146470673,
        "pitch": -0.0028604988259814945,
        "fov": 1.3533735070440347
      },
      "linkHotspots": [
        {
          "yaw": 1.425839687092962,
          "pitch": 0.0217242429127964,
          "rotation": 4.71238898038469,
          "target": "37-5th-floor-bleachers"
        },
        {
          "yaw": -2.661439252694212,
          "pitch": 0.06318280887870031,
          "rotation": 0,
          "target": "38-5th-floor-gym"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.407511036128561,
          "pitch": -0.1020853215863653,
          "title": "Faculty 5th Floor",
          "text": "On the fifth floor, the second half of the faculty is where also the professors' and teachers' lounge/office are located, especially the office facilitated for the PE teachers. Contains the teachers Ms. Eunice Vallejos, Mr. Peter Lance Visita, Mr. Janray Jariño, Mr. Edmer Caber, Mr. Ariel Gerald Alfonso, Mr. Gerry Navarro, Mr. Jason Arce, Ms. Mary Joy Loterte, Ms. Glazen Carey Perez, Mr. Joben Mc Lean Cruz, Ms. Imee Pascual, Ms. Jaymee Marcelo."
        }
      ]
    },
    {
      "id": "40-5th-floor-gym-entrance",
      "name": "5th Floor Gym Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.826887151565538,
        "pitch": 0.06579147299765253,
        "fov": 1.3533735070440347
      },
      "linkHotspots": [
        {
          "yaw": -0.6713622603444627,
          "pitch": 0.23678605189693158,
          "rotation": 2.356194490192345,
          "target": "41-5th-stairway_"
        },
        {
          "yaw": -1.5552509642000398,
          "pitch": 0.0621042191563852,
          "rotation": 0,
          "target": "38-5th-floor-gym"
        },
        {
          "yaw": 2.7138311089310054,
          "pitch": 0.13705469145428495,
          "rotation": 0,
          "target": "42-easteregg"
        },
        {
          "yaw": 2.9787364436898027,
          "pitch": 0.1301835738824515,
          "rotation": 3.141592653589793,
          "target": "28-4th-floor-elevator-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-5th-stairway_",
      "name": "5th stairway_",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -1.3697240283169734,
        "pitch": -0.018439314159007125,
        "fov": 1.3533735070440347
      },
      "linkHotspots": [
        {
          "yaw": -1.1683844331953743,
          "pitch": -0.14722580544337305,
          "rotation": 1.5707963267948966,
          "target": "40-5th-floor-gym-entrance"
        },
        {
          "yaw": -1.6827454448464056,
          "pitch": 0.3461761196769437,
          "rotation": 1.5707963267948966,
          "target": "28-4th-floor-elevator-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-easteregg",
      "name": "EasterEgg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -0.22335749632262747,
        "pitch": 0.05685062977651789,
        "fov": 1.3533735070440347
      },
      "linkHotspots": [
        {
          "yaw": -0.3834304612430479,
          "pitch": 0.2239033164216302,
          "rotation": 0,
          "target": "40-5th-floor-gym-entrance"
        },
        {
          "yaw": -0.03167032089958255,
          "pitch": 0.2210672274732417,
          "rotation": 0,
          "target": "40-5th-floor-gym-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "sti",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
