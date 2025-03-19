TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "id": "panorama_A4ED96A4_B034_A628_41DA_1671AC550B01",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "partial": false,
  "hfovMin": 86,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": 37.42,
    "panorama": {
     "class": "Panorama",
     "id": "panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758",
     "pitch": 0,
     "hfovMax": 120,
     "hfov": 360,
     "partial": false,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -134.79,
       "panorama": "this.panorama_A4ED96A4_B034_A628_41DA_1671AC550B01",
       "yaw": 37.42,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -20.86,
       "panorama": {
        "class": "Panorama",
        "id": "panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9",
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "partial": false,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 153.36,
          "panorama": "this.panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758",
          "yaw": -20.86,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 44.71,
          "panorama": {
           "class": "Panorama",
           "id": "panorama_A50D63BA_B037_7E18_41D2_0773535E7246",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "partial": false,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 129.19,
             "panorama": {
              "class": "Panorama",
              "id": "panorama_A4E02586_B037_5AE8_41E5_A9577E466334",
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "partial": false,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -53.51,
                "panorama": "this.panorama_A50D63BA_B037_7E18_41D2_0773535E7246",
                "yaw": 129.19,
                "distance": 1
               }
              ],
              "frames": [
               {
                "thumbnailUrl": "media/panorama_A4E02586_B037_5AE8_41E5_A9577E466334_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2688,
                   "class": "ImageResourceLevel",
                   "width": 5376,
                   "url": "media/panorama_A4E02586_B037_5AE8_41E5_A9577E466334_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_A4E02586_B037_5AE8_41E5_A9577E466334.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A50D63BA_B037_7E18_41D2_0773535E7246, this.camera_BD205F34_B0F5_DD25_41E2_244B36852553); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "id": "overlay_AAFD8B62_B015_5824_41E2_743148A4D5E0",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7.93,
                    "yaw": 129.19,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 148,
                       "class": "ImageResourceLevel",
                       "width": 66,
                       "url": "media/panorama_A4E02586_B037_5AE8_41E5_A9577E466334_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -27.19
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 129.19,
                    "hfov": 7.93,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 296,
                       "class": "ImageResourceLevel",
                       "width": 133,
                       "url": "media/panorama_A4E02586_B037_5AE8_41E5_A9577E466334_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -27.19
                   }
                  ]
                 }
                ]
               }
              ],
              "label": "BANHEIRO",
              "vfov": 180,
              "thumbnailUrl": "media/panorama_A4E02586_B037_5AE8_41E5_A9577E466334_t.jpg"
             },
             "yaw": -53.51,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -83.85,
             "panorama": {
              "class": "Panorama",
              "id": "panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC",
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "partial": false,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -140.95,
                "panorama": "this.panorama_A50D63BA_B037_7E18_41D2_0773535E7246",
                "yaw": -83.85,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -25.31,
                "panorama": {
                 "class": "Panorama",
                 "id": "panorama_A504AD61_B037_AA28_41DB_61C081EDD01C",
                 "pitch": 0,
                 "hfovMax": 120,
                 "hfov": 360,
                 "partial": false,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 160.34,
                   "panorama": "this.panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC",
                   "yaw": -25.31,
                   "distance": 1
                  }
                 ],
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_A504AD61_B037_AA28_41DB_61C081EDD01C_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2688,
                      "class": "ImageResourceLevel",
                      "width": 5376,
                      "url": "media/panorama_A504AD61_B037_AA28_41DB_61C081EDD01C_hq.jpeg"
                     },
                     {
                      "height": 2001,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_A504AD61_B037_AA28_41DB_61C081EDD01C.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.mainPlayList.set('selectedIndex', 10)"
                      }
                     ],
                     "id": "overlay_AD676DCB_B03D_587B_41E2_700754B00308",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.33,
                       "yaw": -116.26,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 38,
                          "class": "ImageResourceLevel",
                          "width": 47,
                          "url": "media/panorama_A504AD61_B037_AA28_41DB_61C081EDD01C_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -8.07
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -116.26,
                       "hfov": 6.33,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 77,
                          "class": "ImageResourceLevel",
                          "width": 95,
                          "url": "media/panorama_A504AD61_B037_AA28_41DB_61C081EDD01C_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -8.07
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC, this.camera_BECE9F53_B0F5_DD63_41AC_241FE5875B25); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "id": "overlay_AE385E4B_B03C_F87B_41A3_A0D557447AAC",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 8.16,
                       "yaw": -25.31,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 56,
                          "class": "ImageResourceLevel",
                          "width": 66,
                          "url": "media/panorama_A504AD61_B037_AA28_41DB_61C081EDD01C_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -23.8
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -25.31,
                       "hfov": 8.16,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 112,
                          "class": "ImageResourceLevel",
                          "width": 133,
                          "url": "media/panorama_A504AD61_B037_AA28_41DB_61C081EDD01C_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -23.8
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "label": "SALA DE JANTAR",
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_A504AD61_B037_AA28_41DB_61C081EDD01C_t.jpg"
                },
                "yaw": 160.34,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 24.05,
                "panorama": {
                 "class": "Panorama",
                 "id": "panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6",
                 "pitch": 0,
                 "hfovMax": 120,
                 "hfov": 360,
                 "partial": false,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -145.4,
                   "panorama": {
                    "class": "Panorama",
                    "id": "panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C",
                    "pitch": 0,
                    "hfovMax": 120,
                    "hfov": 360,
                    "partial": false,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 105.07,
                      "panorama": "this.panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6",
                      "yaw": -145.4,
                      "distance": 1
                     }
                    ],
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 2688,
                         "class": "ImageResourceLevel",
                         "width": 5376,
                         "url": "media/panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C_hq.jpeg"
                        },
                        {
                         "height": 2001,
                         "class": "ImageResourceLevel",
                         "width": 4002,
                         "url": "media/panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.mainPlayList.set('selectedIndex', 1)"
                         }
                        ],
                        "id": "overlay_AD99E13B_B035_481B_41BA_805FA65E144F",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.86,
                          "yaw": 52.81,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 59,
                             "class": "ImageResourceLevel",
                             "width": 59,
                             "url": "media/panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -5.93
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 52.81,
                          "hfov": 7.86,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 119,
                             "class": "ImageResourceLevel",
                             "width": 118,
                             "url": "media/panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -5.93
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6, this.camera_BE8C7F82_B0F5_DDDD_41E0_40DE19DCC4C2); this.mainPlayList.set('selectedIndex', 9)"
                         }
                        ],
                        "id": "overlay_AF50AB6D_B037_783F_41D2_4677D8ECF919",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.66,
                          "yaw": -145.4,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 59,
                             "class": "ImageResourceLevel",
                             "width": 59,
                             "url": "media/panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -32.56
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -145.4,
                          "hfov": 6.66,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 119,
                             "class": "ImageResourceLevel",
                             "width": 118,
                             "url": "media/panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -32.56
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "label": "QUINTAL",
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C_t.jpg"
                   },
                   "yaw": 105.07,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 81.45,
                   "panorama": {
                    "class": "Panorama",
                    "id": "panorama_A5073981_B037_EAE8_41E3_2BE7DE610736",
                    "pitch": 0,
                    "hfovMax": 120,
                    "hfov": 360,
                    "partial": false,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -41.9,
                      "panorama": "this.panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6",
                      "yaw": 81.45,
                      "distance": 1
                     }
                    ],
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_A5073981_B037_EAE8_41E3_2BE7DE610736_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 2688,
                         "class": "ImageResourceLevel",
                         "width": 5376,
                         "url": "media/panorama_A5073981_B037_EAE8_41E3_2BE7DE610736_hq.jpeg"
                        },
                        {
                         "height": 2001,
                         "class": "ImageResourceLevel",
                         "width": 4002,
                         "url": "media/panorama_A5073981_B037_EAE8_41E3_2BE7DE610736.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.mainPlayList.set('selectedIndex', 11)"
                         }
                        ],
                        "id": "overlay_AD350014_B03B_47ED_41B2_ECBF264EA171",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.84,
                          "yaw": -152.18,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 59,
                             "class": "ImageResourceLevel",
                             "width": 59,
                             "url": "media/panorama_A5073981_B037_EAE8_41E3_2BE7DE610736_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -7.19
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -152.18,
                          "hfov": 7.84,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 119,
                             "class": "ImageResourceLevel",
                             "width": 118,
                             "url": "media/panorama_A5073981_B037_EAE8_41E3_2BE7DE610736_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -7.19
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6, this.camera_BEF94F82_B0F5_DDDD_41D8_8B774C515DB5); this.mainPlayList.set('selectedIndex', 9)"
                         }
                        ],
                        "id": "overlay_AE0F581B_B035_581B_41E3_51ED8F925165",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.83,
                          "yaw": 81.45,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 59,
                             "class": "ImageResourceLevel",
                             "width": 59,
                             "url": "media/panorama_A5073981_B037_EAE8_41E3_2BE7DE610736_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -7.69
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 81.45,
                          "hfov": 7.83,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 119,
                             "class": "ImageResourceLevel",
                             "width": 118,
                             "url": "media/panorama_A5073981_B037_EAE8_41E3_2BE7DE610736_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -7.69
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "label": "COZINHA",
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_A5073981_B037_EAE8_41E3_2BE7DE610736_t.jpg"
                   },
                   "yaw": -41.9,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -145.15,
                   "panorama": "this.panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC",
                   "yaw": 24.05,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 14.88,
                   "panorama": {
                    "class": "Panorama",
                    "id": "panorama_A50AE571_B037_BA29_41A8_B4592CA46E02",
                    "pitch": 0,
                    "hfovMax": 120,
                    "hfov": 360,
                    "partial": false,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -123.8,
                      "panorama": "this.panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6",
                      "yaw": 14.88,
                      "distance": 1
                     }
                    ],
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_A50AE571_B037_BA29_41A8_B4592CA46E02_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 2688,
                         "class": "ImageResourceLevel",
                         "width": 5376,
                         "url": "media/panorama_A50AE571_B037_BA29_41A8_B4592CA46E02_hq.jpeg"
                        },
                        {
                         "height": 2001,
                         "class": "ImageResourceLevel",
                         "width": 4002,
                         "url": "media/panorama_A50AE571_B037_BA29_41A8_B4592CA46E02.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6, this.camera_BD38FF44_B0F5_DD64_41E3_1376EEF37CBB); this.mainPlayList.set('selectedIndex', 9)"
                         }
                        ],
                        "id": "overlay_AE18887F_B035_F81C_41DD_6DAEDB19BC96",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.68,
                          "yaw": 14.88,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 59,
                             "class": "ImageResourceLevel",
                             "width": 59,
                             "url": "media/panorama_A50AE571_B037_BA29_41A8_B4592CA46E02_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -13.47
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 14.88,
                          "hfov": 7.68,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 119,
                             "class": "ImageResourceLevel",
                             "width": 118,
                             "url": "media/panorama_A50AE571_B037_BA29_41A8_B4592CA46E02_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -13.47
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "label": "PISCINA",
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_A50AE571_B037_BA29_41A8_B4592CA46E02_t.jpg"
                   },
                   "yaw": -123.8,
                   "distance": 1
                  }
                 ],
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2688,
                      "class": "ImageResourceLevel",
                      "width": 5376,
                      "url": "media/panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6_hq.jpeg"
                     },
                     {
                      "height": 2001,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC, this.camera_BEEF8F73_B0F5_DD3C_41CD_5E4D6D08C69A); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "id": "overlay_AC08C044_B03F_C86D_41E0_C22882896304",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.64,
                       "yaw": 24.05,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 51,
                          "class": "ImageResourceLevel",
                          "width": 49,
                          "url": "media/panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -2.41
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 24.05,
                       "hfov": 6.64,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 103,
                          "class": "ImageResourceLevel",
                          "width": 99,
                          "url": "media/panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -2.41
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C, this.camera_BEC4EF53_B0F5_DD63_41B1_C5EF943FFAA3); this.mainPlayList.set('selectedIndex', 11)"
                      }
                     ],
                     "id": "overlay_ADE34DCE_B03C_F87D_41C2_97ED3419EF2A",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.78,
                       "yaw": 105.07,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "class": "ImageResourceLevel",
                          "width": 59,
                          "url": "media/panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -9.95
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 105.07,
                       "hfov": 7.78,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "class": "ImageResourceLevel",
                          "width": 118,
                          "url": "media/panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -9.95
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_A5073981_B037_EAE8_41E3_2BE7DE610736, this.camera_BED90F63_B0F5_DD23_4194_5F39102CA21C); this.mainPlayList.set('selectedIndex', 10)"
                      }
                     ],
                     "id": "overlay_AE0B9145_B03C_C86F_41DB_21AFE6D3D4B0",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.63,
                       "yaw": -41.9,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "class": "ImageResourceLevel",
                          "width": 59,
                          "url": "media/panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -14.98
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -41.9,
                       "hfov": 7.63,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "class": "ImageResourceLevel",
                          "width": 118,
                          "url": "media/panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -14.98
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_A50AE571_B037_BA29_41A8_B4592CA46E02, this.camera_BEE43F73_B0F5_DD3C_41CF_316DAB36603C); this.mainPlayList.set('selectedIndex', 12)"
                      }
                     ],
                     "id": "overlay_AE7A4BF2_B034_D825_41CC_757EF2A2FA92",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.81,
                       "yaw": -123.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "class": "ImageResourceLevel",
                          "width": 59,
                          "url": "media/panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6_0_HS_3_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -8.95
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -123.8,
                       "hfov": 7.81,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "class": "ImageResourceLevel",
                          "width": 118,
                          "url": "media/panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": -8.95
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "label": "SALA PRINCIPAL",
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6_t.jpg"
                },
                "yaw": -145.15,
                "distance": 1
               }
              ],
              "frames": [
               {
                "thumbnailUrl": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2688,
                   "class": "ImageResourceLevel",
                   "width": 5376,
                   "url": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 7)"
                   }
                  ],
                  "id": "overlay_AA6F5BE7_B00C_F82B_41D5_F0224C011D62",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7.89,
                    "yaw": 100.04,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 59,
                       "class": "ImageResourceLevel",
                       "width": 59,
                       "url": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -3.67
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 100.04,
                    "hfov": 7.89,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "class": "ImageResourceLevel",
                       "width": 118,
                       "url": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -3.67
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A504AD61_B037_AA28_41DB_61C081EDD01C, this.camera_BD7D8F05_B0F5_DEE7_41D1_A0F633F141A3); this.mainPlayList.set('selectedIndex', 8)"
                   }
                  ],
                  "id": "overlay_AAF8E755_B00D_C86C_41E3_D628EE3D7E9B",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7.84,
                    "yaw": 160.34,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 59,
                       "class": "ImageResourceLevel",
                       "width": 59,
                       "url": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -7.19
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 160.34,
                    "hfov": 7.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "class": "ImageResourceLevel",
                       "width": 118,
                       "url": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -7.19
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6, this.camera_BD738F05_B0F5_DEE7_41D4_C7A6C32837EE); this.mainPlayList.set('selectedIndex', 9)"
                   }
                  ],
                  "id": "overlay_AAE7339C_B00C_C81D_41C3_AF4DE6A3C6B7",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7.64,
                    "yaw": -145.15,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 59,
                       "class": "ImageResourceLevel",
                       "width": 59,
                       "url": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -14.72
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -145.15,
                    "hfov": 7.64,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "class": "ImageResourceLevel",
                       "width": 118,
                       "url": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -14.72
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A50D63BA_B037_7E18_41D2_0773535E7246, this.camera_BD665EF6_B0F5_DF24_41B7_3332064039DA); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "id": "overlay_AB3466DF_B00C_C81C_41DE_E12531C225DF",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.94,
                    "yaw": -83.85,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 56,
                       "class": "ImageResourceLevel",
                       "width": 66,
                       "url": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -38.88
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -83.85,
                    "hfov": 6.94,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 112,
                       "class": "ImageResourceLevel",
                       "width": 133,
                       "url": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": -38.88
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 11)"
                   }
                  ],
                  "id": "overlay_AC5DFA1C_B035_B81D_41DA_4BFE6B58D831",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7.8,
                    "yaw": 43.77,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 59,
                       "class": "ImageResourceLevel",
                       "width": 59,
                       "url": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_0_HS_4_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -9.2
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 43.77,
                    "hfov": 7.8,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 119,
                       "class": "ImageResourceLevel",
                       "width": 118,
                       "url": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": -9.2
                   }
                  ]
                 }
                ]
               }
              ],
              "label": "ENTRADA DA SALA ",
              "vfov": 180,
              "thumbnailUrl": "media/panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_t.jpg"
             },
             "yaw": -140.95,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -58.67,
             "panorama": "this.panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9",
             "yaw": 44.71,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -159.91,
             "panorama": {
              "class": "Panorama",
              "id": "panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B",
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "partial": false,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -18.72,
                "panorama": "this.panorama_A50D63BA_B037_7E18_41D2_0773535E7246",
                "yaw": -159.91,
                "distance": 1
               }
              ],
              "frames": [
               {
                "thumbnailUrl": "media/panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2688,
                   "class": "ImageResourceLevel",
                   "width": 5376,
                   "url": "media/panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.showPopupPanoramaOverlay(this.popup_91AC78DE_B01C_B81D_41B3_E892249D6D0C, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'iconColor':'#000000'}, null, null, null, null, null, false)"
                   }
                  ],
                  "id": "overlay_9022BA0A_B01D_5BE5_41E5_1904015FEF6E",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 22.88,
                    "yaw": 35.17,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 179,
                       "class": "ImageResourceLevel",
                       "width": 173,
                       "url": "media/panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B_0_HS_0_1_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -19.91
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Polygon"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 35.17,
                    "hfov": 22.88,
                    "roll": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 359,
                       "class": "ImageResourceLevel",
                       "width": 346,
                       "url": "media/panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -19.91
                   }
                  ]
                 },
                 {
                  "rotationX": 0,
                  "class": "PopupPanoramaOverlay",
                  "rotationZ": 0,
                  "popupMaxWidth": "95%",
                  "rotationY": 0,
                  "popupMaxHeight": "95%",
                  "hfov": 21.49,
                  "yaw": 35.17,
                  "hideEasing": "cubic_out",
                  "id": "popup_91AC78DE_B01C_B81D_41B3_E892249D6D0C",
                  "hideDuration": 500,
                  "showDuration": 500,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 717,
                     "class": "ImageResourceLevel",
                     "width": 800,
                     "url": "media/popup_91AC78DE_B01C_B81D_41B3_E892249D6D0C_0_0.jpg"
                    },
                    {
                     "height": 458,
                     "class": "ImageResourceLevel",
                     "width": 512,
                     "url": "media/popup_91AC78DE_B01C_B81D_41B3_E892249D6D0C_0_1.jpg"
                    }
                   ]
                  },
                  "showEasing": "cubic_in",
                  "pitch": -19.91
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_A50D63BA_B037_7E18_41D2_0773535E7246, this.camera_BE9FCF92_B0F5_DDFD_41DD_74D9E5DD211A); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "id": "overlay_90178566_B01B_C82D_41E5_D85B273BE8DF",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 12.66,
                    "yaw": -159.91,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 112,
                       "class": "ImageResourceLevel",
                       "width": 97,
                       "url": "media/panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -13.78
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -159.91,
                    "hfov": 12.66,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 225,
                       "class": "ImageResourceLevel",
                       "width": 194,
                       "url": "media/panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -13.78
                   }
                  ]
                 }
                ]
               }
              ],
              "label": "ENTRADA",
              "vfov": 180,
              "thumbnailUrl": "media/panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B_t.jpg"
             },
             "yaw": -18.72,
             "distance": 1
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_A50D63BA_B037_7E18_41D2_0773535E7246_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2688,
                "class": "ImageResourceLevel",
                "width": 5376,
                "url": "media/panorama_A50D63BA_B037_7E18_41D2_0773535E7246_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_A50D63BA_B037_7E18_41D2_0773535E7246.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC, this.camera_BEA42FA1_B0F5_DDDF_41E4_4FEF34077BE4); this.mainPlayList.set('selectedIndex', 6)"
                }
               ],
               "id": "overlay_A85799D5_B075_EA68_41CB_EC9FDDAFC929",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 7.73,
                 "yaw": -140.95,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 57,
                    "class": "ImageResourceLevel",
                    "width": 58,
                    "url": "media/panorama_A50D63BA_B037_7E18_41D2_0773535E7246_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -5.29
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -140.95,
                 "hfov": 7.73,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 115,
                    "class": "ImageResourceLevel",
                    "width": 116,
                    "url": "media/panorama_A50D63BA_B037_7E18_41D2_0773535E7246_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -5.29
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_A4E02586_B037_5AE8_41E5_A9577E466334, this.camera_BE916FA1_B0F5_DDDF_41DB_803BD71F98E8); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "id": "overlay_A90C07C2_B074_A668_41D4_E75C71D7E683",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 26.7,
                 "yaw": -53.51,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "class": "ImageResourceLevel",
                    "width": 87,
                    "url": "media/panorama_A50D63BA_B037_7E18_41D2_0773535E7246_0_HS_2_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -11.49
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Polygon"
               },
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -53.51,
                 "hfov": 26.7,
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 932,
                    "class": "ImageResourceLevel",
                    "width": 406,
                    "url": "media/panorama_A50D63BA_B037_7E18_41D2_0773535E7246_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -11.49
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9, this.camera_BEB65FB1_B0F5_DD3F_41DB_620BB5F2316E); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "id": "overlay_AB3CE6DD_B037_481C_41C1_4E22F917EEAA",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 7.48,
                 "yaw": 44.71,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 57,
                    "class": "ImageResourceLevel",
                    "width": 58,
                    "url": "media/panorama_A50D63BA_B037_7E18_41D2_0773535E7246_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -15.6
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 44.71,
                 "hfov": 7.48,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 115,
                    "class": "ImageResourceLevel",
                    "width": 116,
                    "url": "media/panorama_A50D63BA_B037_7E18_41D2_0773535E7246_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -15.6
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B, this.camera_BE4B8FB1_B0F5_DD3F_41DD_74A4D47B6D47); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "id": "overlay_AEE3FC6F_B01F_583C_41E5_B5D64B48E9EC",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 19.15,
                 "yaw": -18.72,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "class": "ImageResourceLevel",
                    "width": 41,
                    "url": "media/panorama_A50D63BA_B037_7E18_41D2_0773535E7246_0_HS_4_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -14.76
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Polygon"
               },
               "rollOverDisplay": false,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -18.72,
                 "hfov": 19.15,
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1376,
                    "class": "ImageResourceLevel",
                    "width": 288,
                    "url": "media/panorama_A50D63BA_B037_7E18_41D2_0773535E7246_0_HS_4_0.png"
                   }
                  ]
                 },
                 "pitch": -14.76
                }
               ]
              }
             ]
            }
           ],
           "label": "CORREDOR",
           "vfov": 180,
           "thumbnailUrl": "media/panorama_A50D63BA_B037_7E18_41D2_0773535E7246_t.jpg"
          },
          "yaw": -58.67,
          "distance": 1
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2688,
             "class": "ImageResourceLevel",
             "width": 5376,
             "url": "media/panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_A50D63BA_B037_7E18_41D2_0773535E7246, this.camera_BD1E5F24_B0F5_DD25_41E2_FEF346637F13); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "id": "overlay_A7B01E53_B00D_A668_41E1_6811833EB667",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7,
              "yaw": -58.67,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 46,
                 "class": "ImageResourceLevel",
                 "width": 52,
                 "url": "media/panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": 3.5
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -58.67,
              "hfov": 7,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 92,
                 "class": "ImageResourceLevel",
                 "width": 104,
                 "url": "media/panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9_0_HS_0_0.png"
                }
               ]
              },
              "pitch": 3.5
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 11)"
             }
            ],
            "id": "overlay_A7662324_B00F_7E28_41D3_3AA3839F03F2",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.76,
              "yaw": -158.03,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 57,
                 "class": "ImageResourceLevel",
                 "width": 58,
                 "url": "media/panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -3.29
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -158.03,
              "hfov": 7.76,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 115,
                 "class": "ImageResourceLevel",
                 "width": 116,
                 "url": "media/panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -3.29
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758, this.camera_BD09BF15_B0F5_DEE7_41D6_EC3DDFD87A83); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "id": "overlay_A7F54534_B00C_BA28_41C5_AE8093F2E350",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.76,
              "yaw": -20.86,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 40,
                 "class": "ImageResourceLevel",
                 "width": 42,
                 "url": "media/panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -0.4
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -20.86,
              "hfov": 5.76,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 81,
                 "class": "ImageResourceLevel",
                 "width": 85,
                 "url": "media/panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -0.4
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 0)"
             }
            ],
            "id": "overlay_A8691790_B00D_A6E8_418A_F3AAC698B438",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 5.49,
              "yaw": 29.01,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 38,
                 "class": "ImageResourceLevel",
                 "width": 41,
                 "url": "media/panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "pitch": -5.04
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 29.01,
              "hfov": 5.49,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 77,
                 "class": "ImageResourceLevel",
                 "width": 82,
                 "url": "media/panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -5.04
             }
            ]
           }
          ]
         }
        ],
        "label": "GARAGEM",
        "vfov": 180,
        "thumbnailUrl": "media/panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9_t.jpg"
       },
       "yaw": 153.36,
       "distance": 1
      }
     ],
     "frames": [
      {
       "thumbnailUrl": "media/panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2688,
          "class": "ImageResourceLevel",
          "width": 5376,
          "url": "media/panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9, this.camera_BD507EF6_B0F5_DF24_41DF_C6AC6B6CB82C); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "id": "overlay_A65C9EC3_B014_E668_41D5_DD6036E773E4",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.5,
           "yaw": 153.36,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 42,
              "class": "ImageResourceLevel",
              "width": 33,
              "url": "media/panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -1.53
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 153.36,
           "hfov": 4.5,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 84,
              "class": "ImageResourceLevel",
              "width": 67,
              "url": "media/panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -1.53
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_A4ED96A4_B034_A628_41DA_1671AC550B01, this.camera_BD5CFEE6_B0F5_DF25_41E3_BA40F51C6233); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "id": "overlay_A824C8AC_B00C_AA38_41E2_A777C2626B0F",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.2,
           "yaw": 37.42,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 48,
              "class": "ImageResourceLevel",
              "width": 46,
              "url": "media/panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -7.68
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 37.42,
           "hfov": 6.2,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 96,
              "class": "ImageResourceLevel",
              "width": 93,
              "url": "media/panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -7.68
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "id": "overlay_AE2A2DD2_B00F_D864_41E1_E3E2C637CF03",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.9,
           "yaw": -159.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 59,
              "class": "ImageResourceLevel",
              "width": 59,
              "url": "media/panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": 0.85
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -159.22,
           "hfov": 7.9,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "class": "ImageResourceLevel",
              "width": 118,
              "url": "media/panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758_0_HS_2_0.png"
             }
            ]
           },
           "pitch": 0.85
          }
         ]
        }
       ]
      }
     ],
     "label": "FACHADA",
     "vfov": 180,
     "thumbnailUrl": "media/panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758_t.jpg"
    },
    "yaw": -134.79,
    "distance": 1
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2688,
       "class": "ImageResourceLevel",
       "width": 5376,
       "url": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758, this.camera_BD159F24_B0F5_DD25_41CF_57D3D4949845); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_A6A83268_B01B_5E38_41E1_477046DBCBE4",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.49,
        "yaw": -134.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 38,
           "class": "ImageResourceLevel",
           "width": 41,
           "url": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -3.79
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -134.79,
        "hfov": 5.49,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 77,
           "class": "ImageResourceLevel",
           "width": 82,
           "url": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -3.79
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_9075015B_B00C_C81B_41B9_6DAA3364DCFD",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 73.24,
        "yaw": -83.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 136,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 4.05
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -83.5,
        "hfov": 73.24,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 751,
           "class": "ImageResourceLevel",
           "width": 1096,
           "url": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 4.05
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.setCameraSameSpotAsMedia(this.camera_BD2BBF34_B0F5_DD25_41D5_E927A78E1D85, this.panorama_A4ED96A4_B034_A628_41DA_1671AC550B01); this.startPanoramaWithCamera(this.panorama_A5073981_B037_EAE8_41E3_2BE7DE610736, this.camera_BD2BBF34_B0F5_DD25_41D5_E927A78E1D85); this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "id": "overlay_909E3E8D_B00C_B8FF_41C9_0E096ADBCB01",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.44,
        "yaw": -71.61,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 18,
           "url": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 15.81
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -71.61,
        "hfov": 8.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "class": "ImageResourceLevel",
           "width": 131,
           "url": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 15.81
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "id": "overlay_9450A00C_B0F4_C7FD_41D2_12D90B3FEE88",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.89,
        "yaw": -73.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 16,
           "url": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": 3.62
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -73.8,
        "hfov": 7.89,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 118,
           "url": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_0_HS_3_0.png"
          }
         ]
        },
        "pitch": 3.62
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "id": "overlay_9051E007_B0FB_47EC_41B2_6D48EDDF796D",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 26.09,
        "yaw": -92.2,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 183,
           "class": "ImageResourceLevel",
           "width": 198,
           "url": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_0_HS_4_1_0_map.gif"
          }
         ]
        },
        "pitch": -6.22
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
      "rollOverDisplay": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -92.2,
        "hfov": 26.09,
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 367,
           "class": "ImageResourceLevel",
           "width": 396,
           "url": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -6.22
       }
      ]
     }
    ]
   }
  ],
  "label": "FRENTE",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_t.jpg"
 },
 {
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_camera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -136.99,
   "pitch": 12.85
  }
 },
 "this.panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758",
 {
  "class": "PanoramaCamera",
  "id": "panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758_camera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -162.08,
   "pitch": 3.73
  }
 },
 "this.panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9",
 {
  "class": "PanoramaCamera",
  "id": "panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9_camera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 7,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -56.32,
   "pitch": -8.66
  }
 },
 "this.panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B",
 {
  "class": "PanoramaCamera",
  "id": "panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B_camera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_A4E02586_B037_5AE8_41E5_A9577E466334",
 {
  "class": "PanoramaCamera",
  "id": "panorama_A4E02586_B037_5AE8_41E5_A9577E466334_camera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 39.37,
   "pitch": -14.99
  }
 },
 "this.panorama_A50D63BA_B037_7E18_41D2_0773535E7246",
 {
  "class": "PanoramaCamera",
  "id": "panorama_A50D63BA_B037_7E18_41D2_0773535E7246_camera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -108.71,
   "pitch": -3.2
  }
 },
 "this.panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_camera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -145.47,
   "pitch": 1.88
  }
 },
 {
  "class": "Panorama",
  "id": "panorama_A51B4F3D_B037_A618_41DC_DF49CC98DF3F",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "label": "SALA DE V\u00cdDEO",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_A51B4F3D_B037_A618_41DC_DF49CC98DF3F_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2688,
       "class": "ImageResourceLevel",
       "width": 5376,
       "url": "media/panorama_A51B4F3D_B037_A618_41DC_DF49CC98DF3F_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_A51B4F3D_B037_A618_41DC_DF49CC98DF3F.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "id": "overlay_A9A4BAAE_B075_EE3B_41E1_E1F719ED81F0",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.87,
        "yaw": -121.28,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59,
           "url": "media/panorama_A51B4F3D_B037_A618_41DC_DF49CC98DF3F_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -5.43
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -121.28,
        "hfov": 7.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 118,
           "url": "media/panorama_A51B4F3D_B037_A618_41DC_DF49CC98DF3F_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -5.43
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "id": "overlay_A97BD81F_B07B_6A19_41E1_308BB356BFD9",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.51,
        "yaw": -90.13,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/panorama_A51B4F3D_B037_A618_41DC_DF49CC98DF3F_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -17.27
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -90.13,
        "hfov": 8.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 112,
           "class": "ImageResourceLevel",
           "width": 133,
           "url": "media/panorama_A51B4F3D_B037_A618_41DC_DF49CC98DF3F_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -17.27
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "thumbnailUrl": "media/panorama_A51B4F3D_B037_A618_41DC_DF49CC98DF3F_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A51B4F3D_B037_A618_41DC_DF49CC98DF3F_camera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -124.36,
   "pitch": 1.5
  }
 },
 "this.panorama_A504AD61_B037_AA28_41DB_61C081EDD01C",
 {
  "class": "PanoramaCamera",
  "id": "panorama_A504AD61_B037_AA28_41DB_61C081EDD01C_camera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -137.47,
   "pitch": -5.73
  }
 },
 "this.panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6",
 {
  "class": "PanoramaCamera",
  "id": "panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6_camera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -77.07,
   "pitch": 0.37
  }
 },
 "this.panorama_A5073981_B037_EAE8_41E3_2BE7DE610736",
 {
  "class": "PanoramaCamera",
  "id": "panorama_A5073981_B037_EAE8_41E3_2BE7DE610736_camera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 97.74,
   "pitch": -15.69
  }
 },
 "this.panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C",
 {
  "class": "PanoramaCamera",
  "id": "panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C_camera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -112.08,
   "pitch": -3.7
  }
 },
 "this.panorama_A50AE571_B037_BA29_41A8_B4592CA46E02",
 {
  "class": "PanoramaCamera",
  "id": "panorama_A50AE571_B037_BA29_41A8_B4592CA46E02_camera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 96.44,
   "pitch": -13.02
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_A4ED96A4_B034_A628_41DA_1671AC550B01",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A4ED96A4_B034_A628_41DA_1671AC550B01_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A5A9FBE9_B034_EE39_418E_173B0ACF5758_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A52DFA59_B034_AE19_41D1_45A5049BCFB9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A51DE7F7_B034_A628_41D2_1898E5C0E73B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_A4E02586_B037_5AE8_41E5_A9577E466334",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A4E02586_B037_5AE8_41E5_A9577E466334_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_A50D63BA_B037_7E18_41D2_0773535E7246",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A50D63BA_B037_7E18_41D2_0773535E7246_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A51D8184_B037_5AE8_41D2_05F1491A86CC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_A51B4F3D_B037_A618_41DC_DF49CC98DF3F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A51B4F3D_B037_A618_41DC_DF49CC98DF3F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_A504AD61_B037_AA28_41DB_61C081EDD01C",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A504AD61_B037_AA28_41DB_61C081EDD01C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A53A9B79_B037_EE18_41AE_9B7050D07FC6_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_A5073981_B037_EAE8_41E3_2BE7DE610736",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A5073981_B037_EAE8_41E3_2BE7DE610736_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A507B78F_B037_A6F8_41C0_3A482CCEFE8C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_A50AE571_B037_BA29_41A8_B4592CA46E02",
    "camera": "this.panorama_A50AE571_B037_BA29_41A8_B4592CA46E02_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_917F343E_B0FD_481D_41CF_470E5C05F352_t.jpg",
  "label": "20231008_100726942.mp4_play_BR",
  "video": {
   "mp4Url": "media/video_917F343E_B0FD_481D_41CF_470E5C05F352.mp4",
   "class": "VideoResource",
   "width": 540,
   "height": 960
  },
  "width": 540,
  "id": "video_917F343E_B0FD_481D_41CF_470E5C05F352",
  "loop": false,
  "height": 960,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "PlayList",
  "id": "playList_BFB92EB7_B0F5_DF23_41C5_DB4CDD591E34",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_917F343E_B0FD_481D_41CF_470E5C05F352",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_BFB92EB7_B0F5_DF23_41C5_DB4CDD591E34, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_BFB92EB7_B0F5_DF23_41C5_DB4CDD591E34, 0, this.video_917F343E_B0FD_481D_41CF_470E5C05F352)"
   }
  ]
 },
 "this.popup_91AC78DE_B01C_B81D_41B3_E892249D6D0C",
 {
  "class": "PanoramaCamera",
  "id": "camera_BD5CFEE6_B0F5_DF25_41E3_BA40F51C6233",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.21,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BD507EF6_B0F5_DF24_41DF_C6AC6B6CB82C",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 7,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 159.14,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BD665EF6_B0F5_DF24_41B7_3332064039DA",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 39.05,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BD7D8F05_B0F5_DEE7_41D1_A0F633F141A3",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 154.69,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BD738F05_B0F5_DEE7_41D4_C7A6C32837EE",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -155.95,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BD09BF15_B0F5_DEE7_41D6_EC3DDFD87A83",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -26.64,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BD1E5F24_B0F5_DD25_41E2_FEF346637F13",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -135.29,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BD159F24_B0F5_DD25_41CF_57D3D4949845",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -142.58,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BD2BBF34_B0F5_DD25_41D5_E927A78E1D85",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 97.74,
   "pitch": -15.69
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BD205F34_B0F5_DD25_41E2_244B36852553",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 126.49,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BD38FF44_B0F5_DD64_41E3_1376EEF37CBB",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 56.2,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BECE9F53_B0F5_DD63_41AC_241FE5875B25",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.66,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BEC4EF53_B0F5_DD63_41B1_C5EF943FFAA3",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 34.6,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BED90F63_B0F5_DD23_4194_5F39102CA21C",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -98.55,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BEEF8F73_B0F5_DD3C_41CD_5E4D6D08C69A",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 34.85,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BEE43F73_B0F5_DD3C_41CF_316DAB36603C",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -165.12,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BEF94F82_B0F5_DDDD_41D8_8B774C515DB5",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 138.1,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BE8C7F82_B0F5_DDDD_41E0_40DE19DCC4C2",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -74.93,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BE9FCF92_B0F5_DDFD_41DD_74D9E5DD211A",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.28,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BE916FA1_B0F5_DDDF_41DB_803BD71F98E8",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -50.81,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BEA42FA1_B0F5_DDDF_41E4_4FEF34077BE4",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 96.15,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BEB65FB1_B0F5_DD3F_41DB_620BB5F2316E",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 7,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 121.33,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_BE4B8FB1_B0F5_DD3F_41DD_74A4D47B6D47",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 20.09,
   "pitch": 0
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "toolTipPaddingRight": 6,
  "progressHeight": 10,
  "toolTipOpacity": 1,
  "progressBottom": 0,
  "toolTipPaddingLeft": 6,
  "shadow": false,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "paddingLeft": 0,
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "paddingRight": 0,
  "toolTipPaddingTop": 4,
  "progressBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderRadius": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowOpacity": 1,
  "minHeight": 50,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBottom": 5,
  "toolTipFontColor": "#606060",
  "paddingBottom": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderSize": 0,
  "minWidth": 100,
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "height": "100%",
  "playbackBarHeadShadow": true,
  "width": "100%",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 15,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "progressBorderRadius": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadOpacity": 1,
  "progressBorderColor": "#000000",
  "id": "MainViewer",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadWidth": 6,
  "progressOpacity": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "transitionDuration": 500,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0
 },
 {
  "class": "UIComponent",
  "borderSize": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingLeft": 0,
  "paddingTop": 0,
  "paddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "borderRadius": 0,
  "backgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "minHeight": 0,
  "top": 0,
  "visible": false,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "backgroundOpacity": 0.55,
  "data": {
   "name": "UIComponent3011"
  },
  "paddingBottom": 0,
  "left": 0,
  "minWidth": 0,
  "right": 0,
  "shadow": false
 },
 {
  "class": "ZoomImage",
  "borderSize": 0,
  "backgroundColor": [],
  "paddingLeft": 0,
  "paddingTop": 0,
  "paddingRight": 0,
  "borderRadius": 0,
  "backgroundColorRatios": [],
  "backgroundColorDirection": "vertical",
  "scaleMode": "custom",
  "minHeight": 0,
  "top": 0,
  "visible": false,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundOpacity": 1,
  "data": {
   "name": "ZoomImage3012"
  },
  "paddingBottom": 0,
  "left": 0,
  "minWidth": 0,
  "right": 0,
  "shadow": false
 },
 {
  "pressedIconColor": "#888888",
  "class": "CloseButton",
  "borderSize": 0,
  "iconBeforeLabel": true,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowBlurRadius": 6,
  "iconWidth": 20,
  "mode": "push",
  "verticalAlign": "middle",
  "paddingLeft": 5,
  "iconHeight": 20,
  "fontSize": 12,
  "paddingTop": 5,
  "gap": 5,
  "textDecoration": "none",
  "paddingRight": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "borderRadius": 0,
  "shadowSpread": 1,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorDirection": "vertical",
  "fontFamily": "Arial",
  "fontWeight": "normal",
  "horizontalAlign": "center",
  "minHeight": 0,
  "rollOverIconColor": "#666666",
  "top": 10,
  "layout": "horizontal",
  "cursor": "hand",
  "visible": false,
  "iconLineWidth": 5,
  "id": "closeButtonPopupPanorama",
  "borderColor": "#000000",
  "backgroundOpacity": 0.3,
  "data": {
   "name": "CloseButton3013"
  },
  "shadowColor": "#000000",
  "paddingBottom": 5,
  "fontColor": "#FFFFFF",
  "fontStyle": "normal",
  "label": "",
  "minWidth": 0,
  "right": 10,
  "shadow": false,
  "iconColor": "#000000"
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "class": "Player",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "creationPolicy": "delayed",
 "width": "100%",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scripts": {
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getKey": function(key){  return window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); }
 },
 "minHeight": 20,
 "id": "rootPlayer",
 "data": {
  "name": "Player15943"
 },
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "shadow": false,
 "contentOpaque": false,
 "overflow": "visible"
})