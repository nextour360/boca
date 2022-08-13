(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 125.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8DFB5873_98B7_0AF7_4186_EC8FC7BB67EB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -167,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_80168C1C_98B7_0A31_41CF_03F27A0A877A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B006607D_9E34_BA92_41AF_29C566DBE694_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 41.02,
   "backwardYaw": 29.36,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "A5",
 "id": "panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F",
 "thumbnailUrl": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_43FB4858_665F_4A92_41C4_DD45783EF723"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -143.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8D813866_98B7_0A1E_41B5_B0C4936C546C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B0065817_9E37_4A9E_41B4_70709824BE77_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 36.32,
   "backwardYaw": 135.93,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "A3",
 "id": "panorama_6EA0722C_65CB_FEB2_41C4_312488105662",
 "thumbnailUrl": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4348F185_665B_DA72_41C6_C81D5B2C3AAE"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_9634F458_98AD_1A31_41BB_C4CE98F22480",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_camera"
  },
  {
   "media": "this.panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_camera"
  },
  {
   "media": "this.panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_camera"
  },
  {
   "media": "this.panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_camera"
  },
  {
   "media": "this.panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_camera"
  },
  {
   "media": "this.panorama_6E895417_65CD_DA9E_41CF_DFEADC680081",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_camera"
  },
  {
   "media": "this.panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_camera"
  },
  {
   "media": "this.panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_camera"
  },
  {
   "media": "this.panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_camera"
  },
  {
   "media": "this.panorama_69F6871F_65CB_C68E_41D8_779F53B557AA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_camera"
  },
  {
   "media": "this.panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_camera"
  },
  {
   "media": "this.panorama_6EA0722C_65CB_FEB2_41C4_312488105662",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EA0722C_65CB_FEB2_41C4_312488105662_camera"
  },
  {
   "media": "this.panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_camera"
  },
  {
   "media": "this.panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_camera"
  },
  {
   "media": "this.panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_camera"
  },
  {
   "media": "this.panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_camera"
  },
  {
   "media": "this.panorama_6EAE320E_65CB_5E8E_4139_A941AE524054",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_camera"
  },
  {
   "media": "this.panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_camera"
  },
  {
   "media": "this.panorama_B0066809_9E34_CA72_41D2_582B13B44B5A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_camera"
  },
  {
   "media": "this.panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_camera"
  },
  {
   "media": "this.panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_camera"
  },
  {
   "media": "this.panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_camera"
  },
  {
   "media": "this.panorama_B006607D_9E34_BA92_41AF_29C566DBE694",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B006607D_9E34_BA92_41AF_29C566DBE694_camera"
  },
  {
   "media": "this.panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_camera"
  },
  {
   "media": "this.panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_camera"
  },
  {
   "media": "this.panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_camera"
  },
  {
   "media": "this.panorama_B0065817_9E37_4A9E_41B4_70709824BE77",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0065817_9E37_4A9E_41B4_70709824BE77_camera"
  },
  {
   "media": "this.panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_camera"
  },
  {
   "media": "this.panorama_B006D397_9E37_DD9E_41DB_FF4252741762",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B006D397_9E37_DD9E_41DB_FF4252741762_camera"
  },
  {
   "media": "this.panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_camera"
  },
  {
   "media": "this.panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_camera"
  },
  {
   "media": "this.panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_camera"
  },
  {
   "media": "this.panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_camera"
  },
  {
   "media": "this.panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_camera"
  },
  {
   "media": "this.panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_camera"
  },
  {
   "media": "this.panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182",
   "camera": "this.panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -24.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8DE88893_98B7_0A36_41B3_C16B16360424",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -81.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_80E88BAF_98B7_0E6E_41D4_AF020118B263",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 74.57,
   "backwardYaw": 143.89,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B006607D_9E34_BA92_41AF_29C566DBE694",
   "distance": 1
  },
  {
   "yaw": -76.18,
   "backwardYaw": 146.36,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326",
   "distance": 1
  },
  {
   "yaw": -34.05,
   "backwardYaw": -163.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "B13",
 "id": "panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182",
 "thumbnailUrl": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BD4D4F1F_9A4D_468E_41D3_CE3F82842AB2",
  "this.overlay_BE2D2500_9A77_5A72_41DF_3F96974E04E0",
  "this.overlay_BF7A3772_9A7B_C697_41DC_031E9E76B2CB"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -129.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8EFF79B3_98B7_0A77_41D1_24E89A655A7C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -138.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8D3D98EE_98B7_0BEE_41D8_3F8BD53565EC",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -167.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_80BC9B4B_98B7_0E17_41C5_C7D7558FB910",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -17.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8EBF596F_98B7_0AEF_41DA_632578408262",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 114.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8F52BB1C_98B7_0E32_4193_5046C1F29087",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -77.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8F361AB2_98B7_0E71_41C6_F1C9B015D6FB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -161.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8DE7F8A9_98B7_0A12_41D5_00E34D5115E7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -44.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8E73DA1F_98B7_0E2E_41DE_D50A5F2267CD",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 110.16,
   "backwardYaw": -109.25,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0",
   "distance": 1
  },
  {
   "yaw": -136.69,
   "backwardYaw": -65.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_69F6871F_65CB_C68E_41D8_779F53B557AA",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "A8",
 "id": "panorama_6EAE320E_65CB_5E8E_4139_A941AE524054",
 "thumbnailUrl": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_49110BC5_663C_CDF2_41CC_1A0D864199F5",
  "this.overlay_4964B16A_663D_5AB6_41BB_1B55B6FC91B7"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 102.49,
   "backwardYaw": -122.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "23",
 "id": "panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62",
 "thumbnailUrl": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CD33FE50_9A37_C692_41CF_16C4E789CF5D"
 ]
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_A1A50446_8850_E63E_41BC_6A9F2D887FC8.mp3",
  "oggUrl": "media/audio_A1A50446_8850_E63E_41BC_6A9F2D887FC8.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_A1A50446_8850_E63E_41BC_6A9F2D887FC8",
 "data": {
  "label": "Dinner Lounge"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -65.66,
   "backwardYaw": 13,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "LAZER",
 "id": "panorama_B006D397_9E37_DD9E_41DB_FF4252741762",
 "thumbnailUrl": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C0D133C6_9A55_5DFE_41D1_C8B529D84F10"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 3.18,
   "backwardYaw": 25.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00",
   "distance": 1
  },
  {
   "yaw": -122.41,
   "backwardYaw": -4.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "ENTRADA",
 "id": "panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73",
 "thumbnailUrl": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4CEED8AB_66D4_CBB6_41D1_839B0D50F60D",
  "this.overlay_4B67F129_66D4_BAB2_41CA_FFCC50512E6A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -168.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8E6DEA2B_98B7_0E17_41E2_FFF4D71FD40D",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -105.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_80AEBB61_98B7_0E13_41D5_AE9C32658A6D",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 19.34,
   "backwardYaw": -164.95,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00",
   "distance": 1
  },
  {
   "yaw": 138.8,
   "backwardYaw": 12.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "HALL ENTRADA",
 "id": "panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B",
 "thumbnailUrl": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4BE7A1F5_66CF_5D92_41CD_1D6FB859E59E",
  "this.overlay_4A76EDED_6635_45B2_41C4_D1EAFB470EDD"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -91.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_809EBB6C_98B7_0E12_41B8_680D6E265470",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -66.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8DF69884_98B7_0A11_41D6_A32E73D1AF4C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 88.89,
   "backwardYaw": -17.56,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B006607D_9E34_BA92_41AF_29C566DBE694",
   "distance": 1
  },
  {
   "yaw": -14.61,
   "backwardYaw": 23.06,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "21",
 "id": "panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2",
 "thumbnailUrl": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C31FAA53_9A4F_4E95_418C_2B88176C1BC5",
  "this.overlay_C385BB78_9A4C_CE93_41D2_8DA7750FD7DC"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8E4FFA43_98B7_0E17_41D4_008EA8024285",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -71.41,
   "backwardYaw": -96.21,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0065817_9E37_4A9E_41B4_70709824BE77",
   "distance": 1
  },
  {
   "yaw": 105.86,
   "backwardYaw": 1.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "14",
 "id": "panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8",
 "thumbnailUrl": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B9013F78_9A7B_4692_41B6_58DB5A62FD8E",
  "this.overlay_B9FD6E5C_9A75_C692_41D7_56C001D7D6EE"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8DFCF874_98B7_0AF1_41C8_9BB1FF95F347",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "7",
 "id": "panorama_6E895417_65CD_DA9E_41CF_DFEADC680081",
 "thumbnailUrl": "media/panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -33.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_80CAEBD9_98B7_0E33_41B1_6DF38A90D403",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 64.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8D0A891C_98B7_0A31_41D9_3BB0769F69EF",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 26.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8E3AD9E4_98B7_0A11_41DF_1EC2136C7BB7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8EB5597F_98B7_0AEE_41D4_163C769F5E65",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -46.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8FA98A58_98B7_0E32_4195_3348089B7C3C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 57.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8D5E494E_98B7_0A2E_41AD_912C5A260454",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -84.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8E5DFA36_98B7_0E71_41DF_2392A76264D5",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 108.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8ECBD9D9_98B7_0A33_41A8_F4B1A435E6BA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -3.72,
   "backwardYaw": -176.38,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_9634F458_98AD_1A31_41BB_C4CE98F22480",
 "thumbnailUrl": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_t.jpg",
 "label": "Aerea",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_88A2544E_98B3_3A11_41CE_80798AAD509F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 70.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8F627B12_98B7_0E36_41DA_2D3E82A028D1",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -78.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8D2A68F8_98B7_0BF2_41E2_E4BF102AA5BC",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 25.48,
   "backwardYaw": 3.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73",
   "distance": 1
  },
  {
   "yaw": -164.95,
   "backwardYaw": 19.34,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "5",
 "id": "panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00",
 "thumbnailUrl": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4B5007F2_66CC_C596_41C7_806A964C81B9",
  "this.overlay_4B091EB1_66CD_4792_41D3_733E79F19F4F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 143.89,
   "backwardYaw": 74.57,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182",
   "distance": 1
  },
  {
   "yaw": -17.56,
   "backwardYaw": 88.89,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2",
   "distance": 1
  },
  {
   "yaw": 162.49,
   "backwardYaw": -166.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "20",
 "id": "panorama_B006607D_9E34_BA92_41AF_29C566DBE694",
 "thumbnailUrl": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C23B84D0_9A54_FB92_41A0_F5678B0D625F",
  "this.overlay_C2100BDD_9A4C_CD92_41A3_89DCD7750CED",
  "this.overlay_C2E904F8_9A4D_5B92_4153_643290E79A20"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 114.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8EA6B992_98B7_0A31_41A0_772DAE13BDC2",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -36.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_80DA5BBC_98B7_0E72_41D7_E58DA6FCCD23",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 135.93,
   "backwardYaw": 36.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EA0722C_65CB_FEB2_41C4_312488105662",
   "distance": 1
  },
  {
   "yaw": 84.39,
   "backwardYaw": -54.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E",
   "distance": 1
  },
  {
   "yaw": 0.73,
   "backwardYaw": 171,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_69F6871F_65CB_C68E_41D8_779F53B557AA",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "A2",
 "id": "panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F",
 "thumbnailUrl": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4430E99B_6655_4D95_41D3_B78691F0DCA1",
  "this.overlay_4440D61A_665B_C696_41D9_BBE3E4B4564D",
  "this.overlay_501189EC_665B_4DB3_41C9_A65637A712E1"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 131.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8DEDC89D_98B7_0A33_41C2_41D5261876A3",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 145.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8E10EA05_98B7_0E13_41CC_843C5A18EA15",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -135.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8ED949CA_98B7_0A16_41E2_3F2101D65C83",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 103.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8D75293E_98B7_0A71_41C0_B113F2FCDC20",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 43.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8EEE79C1_98B7_0A13_41E1_65F083473A18",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 23.06,
   "backwardYaw": -14.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2",
   "distance": 1
  },
  {
   "yaw": -122.37,
   "backwardYaw": 102.49,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "SAL\u00c3O DE FESTA",
 "id": "panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E",
 "thumbnailUrl": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CC766416_9A4B_7A9E_41D3_D7CF1E89542D",
  "this.overlay_CCA8DEF9_9A35_C792_41CE_E3EE1B9663A8"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 50.84,
   "backwardYaw": 11.77,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_69F6871F_65CB_C68E_41D8_779F53B557AA",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "A6",
 "id": "panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F",
 "thumbnailUrl": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_43BDD453_665D_FA95_41D1_DB0E0B4A1B6E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_80C46BE6_98B7_0E1E_41E0_D93030D7F8B9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -8.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_80F85B95_98B7_0E33_41E2_FF4DE37F616B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "13",
 "id": "panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491",
 "thumbnailUrl": "media/panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "mouseControlMode": "drag_acceleration"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 15.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8F4C7B39_98B7_0E73_41E2_ACD9014FBF10",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 83.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8FE43A93_98B7_0E37_41DF_C30BB8A98040",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -160.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8FEA7A87_98B7_0E1E_41CF_548EF367CA38",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6"
  },
  {
   "yaw": -176.38,
   "backwardYaw": -3.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9634F458_98AD_1A31_41BB_C4CE98F22480",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "FACHADA",
 "id": "panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2",
 "thumbnailUrl": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4E1ADB14_663D_4E93_41C2_5602B0640FA0",
  "this.overlay_AF05E2C2_8870_A231_41CA_5520A470FA27",
  "this.overlay_887E61BD_98B5_3A73_41C5_2CC339FD7D86"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8FFBFA7C_98B7_0EF1_41C3_1B2189EB6365",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8F73CAFC_98B7_0FF1_41D4_C57F4F700529",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -30.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8D1FE90B_98B7_0A17_41D4_6A6294377F1B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -4.39,
   "backwardYaw": -122.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73",
   "distance": 1
  },
  {
   "yaw": 175.3,
   "backwardYaw": 4.2,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "3",
 "id": "panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435",
 "thumbnailUrl": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4F49AC7D_6634_CA92_41CC_BAFA00C63117",
  "this.overlay_4F6D0EDB_6637_4795_41C3_FD5C709FD3AF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8D01E92B_98B7_0A17_41C9_D98CDA9F867D",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -4.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8DD318BE_98B7_0A71_41DB_4675069E47B5",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -115.8,
   "backwardYaw": 44.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941",
   "distance": 1
  },
  {
   "yaw": -96.21,
   "backwardYaw": -71.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8",
   "distance": 1
  },
  {
   "yaw": 89.24,
   "backwardYaw": -153.92,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "BIKE",
 "id": "panorama_B0065817_9E37_4A9E_41B4_70709824BE77",
 "thumbnailUrl": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BB5C2473_9A4B_7A96_41CF_4AE0DC3AC134",
  "this.overlay_BBF861E7_9A4D_7DBE_41DD_888E96A121DB",
  "this.overlay_C602BA61_9A55_4EB2_419D_6F8C533D0FF3"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -24.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8DCBB8CB_98B7_0A28_41E0_3A4E84800EBA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6EA0722C_65CB_FEB2_41C4_312488105662_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -110.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8E26A9F7_98B7_0DFF_41E1_C9E83D83E1D0",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -156.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8F880A70_98B7_0EF1_41D7_06D591237A28",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -166.74,
   "backwardYaw": 162.49,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B006607D_9E34_BA92_41AF_29C566DBE694",
   "distance": 1
  },
  {
   "yaw": 2.96,
   "backwardYaw": -137,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941",
   "distance": 1
  },
  {
   "yaw": 13,
   "backwardYaw": -65.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B006D397_9E37_DD9E_41DB_FF4252741762",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "KIDS",
 "id": "panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7",
 "thumbnailUrl": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C7E8DDF4_9A5D_4592_41CA_2CC405B5F798",
  "this.overlay_C0698AA2_9A5C_CFB6_41C8_6FA707DDFF07",
  "this.overlay_C0555CD9_9A54_CB92_41C5_FDCBB38553F8"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8E82E9A0_98B7_0A11_41DA_6023D6576E13",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 171.09,
   "backwardYaw": 95.94,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "11",
 "id": "panorama_B0066809_9E34_CA72_41D2_582B13B44B5A",
 "thumbnailUrl": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C5AC4C21_9A55_4AB5_41D6_0B09594E8049"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 148,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8F106ACE_98B7_0E11_41D3_3FEB6844F0CB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 69.86,
   "backwardYaw": 155.98,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "B12",
 "id": "panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC",
 "thumbnailUrl": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BCCFF3FD_9A4C_BD92_41E0_3B948B786D9B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 57.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8F000AE9_98B7_0E12_41D3_A69EC5BF16B5",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -128.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8D7E692C_98B7_0A11_41D3_1BF3CDAEE60C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_9634F458_98AD_1A31_41BB_C4CE98F22480",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_camera"
  },
  {
   "media": "this.panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_camera"
  },
  {
   "media": "this.panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_camera"
  },
  {
   "media": "this.panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_camera"
  },
  {
   "media": "this.panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_camera"
  },
  {
   "media": "this.panorama_6E895417_65CD_DA9E_41CF_DFEADC680081",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6E895417_65CD_DA9E_41CF_DFEADC680081_camera"
  },
  {
   "media": "this.panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_camera"
  },
  {
   "media": "this.panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_camera"
  },
  {
   "media": "this.panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_camera"
  },
  {
   "media": "this.panorama_69F6871F_65CB_C68E_41D8_779F53B557AA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_camera"
  },
  {
   "media": "this.panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_camera"
  },
  {
   "media": "this.panorama_6EA0722C_65CB_FEB2_41C4_312488105662",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EA0722C_65CB_FEB2_41C4_312488105662_camera"
  },
  {
   "media": "this.panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_camera"
  },
  {
   "media": "this.panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_camera"
  },
  {
   "media": "this.panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_camera"
  },
  {
   "media": "this.panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_camera"
  },
  {
   "media": "this.panorama_6EAE320E_65CB_5E8E_4139_A941AE524054",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_camera"
  },
  {
   "media": "this.panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_camera"
  },
  {
   "media": "this.panorama_B0066809_9E34_CA72_41D2_582B13B44B5A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_camera"
  },
  {
   "media": "this.panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_camera"
  },
  {
   "media": "this.panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_camera"
  },
  {
   "media": "this.panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_camera"
  },
  {
   "media": "this.panorama_B006607D_9E34_BA92_41AF_29C566DBE694",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B006607D_9E34_BA92_41AF_29C566DBE694_camera"
  },
  {
   "media": "this.panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_camera"
  },
  {
   "media": "this.panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_camera"
  },
  {
   "media": "this.panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_camera"
  },
  {
   "media": "this.panorama_B0065817_9E37_4A9E_41B4_70709824BE77",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0065817_9E37_4A9E_41B4_70709824BE77_camera"
  },
  {
   "media": "this.panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_camera"
  },
  {
   "media": "this.panorama_B006D397_9E37_DD9E_41DB_FF4252741762",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B006D397_9E37_DD9E_41DB_FF4252741762_camera"
  },
  {
   "media": "this.panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_camera"
  },
  {
   "media": "this.panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_camera"
  },
  {
   "media": "this.panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_camera"
  },
  {
   "media": "this.panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_camera"
  },
  {
   "media": "this.panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_camera"
  },
  {
   "media": "this.panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_camera"
  },
  {
   "media": "this.panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 35, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_camera"
  }
 ],
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -69.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8D2178F8_98B7_0BF2_41C6_3E08E72A3767",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B02A26C6_9E34_C7FE_41C9_6908A7EC8491_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1500,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": 0,
   "easing": "cubic_in_out",
   "duration": 3300,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0
  }
 ],
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -109.25,
   "backwardYaw": 110.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EAE320E_65CB_5E8E_4139_A941AE524054",
   "distance": 1
  },
  {
   "yaw": 155.25,
   "backwardYaw": 149.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "A7",
 "id": "panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0",
 "thumbnailUrl": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_49EDFC7F_663C_CA8E_41CF_8FC1836E3747",
  "this.overlay_B35F2AA2_9A57_CFB6_41B5_82F1907CD2CD"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73"
  },
  {
   "yaw": 4.2,
   "backwardYaw": 175.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "2",
 "id": "panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6",
 "thumbnailUrl": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4E25D78A_663C_C677_41D5_B038D78CA5DD",
  "this.overlay_4EC8166B_663B_C6B5_41BB_53F07649AB03"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -32.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8D43796F_98B7_0AEF_41D4_FFCE3A99F2B7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 155.98,
   "backwardYaw": 69.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC",
   "distance": 1
  },
  {
   "yaw": -163.32,
   "backwardYaw": -34.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182",
   "distance": 1
  },
  {
   "yaw": 18.32,
   "backwardYaw": -122.2,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "B11",
 "id": "panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053",
 "thumbnailUrl": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B3DBCCD9_9A4B_4B92_41C9_C0C2A8D19C19",
  "this.overlay_B38DF03A_9A4B_7A96_41D6_C17B00DAC6AE",
  "this.overlay_BCAB4769_9A4F_46B2_418E_9FFA553D62A7"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -95.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8DC698E0_98B7_0A12_41C5_8778F0207A76",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -54.91,
   "backwardYaw": 84.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F",
   "distance": 1
  },
  {
   "yaw": 29.36,
   "backwardYaw": 41.02,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F",
   "distance": 1
  },
  {
   "yaw": -9.5,
   "backwardYaw": 101.77,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_69F6871F_65CB_C68E_41D8_779F53B557AA",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "A4",
 "id": "panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E",
 "thumbnailUrl": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4674A715_664D_C692_41D1_6AF2222C02F8",
  "this.overlay_45E7FEA2_664B_47B6_41D7_84BA60B12EC6",
  "this.overlay_4340A95D_665D_4A92_41CF_3E53AFCB8EE1"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B006D397_9E37_DD9E_41DB_FF4252741762_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 12.18,
   "backwardYaw": 138.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B",
   "distance": 1
  },
  {
   "yaw": 113.81,
   "backwardYaw": 147.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E",
 "thumbnailUrl": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_t.jpg",
 "label": "ELEVADORES",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4AE18D46_6637_CAFE_41D6_7F629C48DCB3",
  "this.overlay_49AF96E7_6635_C7BE_41D1_868C98A4023B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -90.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8FBFEA49_98B7_0E12_41E2_2C3B597A585A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 171,
   "backwardYaw": 0.73,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F",
   "distance": 1
  },
  {
   "yaw": 101.77,
   "backwardYaw": -9.5,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E",
   "distance": 1
  },
  {
   "yaw": 11.77,
   "backwardYaw": 50.84,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F",
   "distance": 1
  },
  {
   "yaw": -65.14,
   "backwardYaw": -136.69,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EAE320E_65CB_5E8E_4139_A941AE524054",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "A1",
 "id": "panorama_69F6871F_65CB_C68E_41D8_779F53B557AA",
 "thumbnailUrl": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_46557FF5_664F_C592_41B7_EF321619450B",
  "this.overlay_4554E956_6655_4A9E_41DA_B84680F59817",
  "this.overlay_44B834A5_6654_DBB2_41D2_672E27089032",
  "this.overlay_44E1FF83_6654_C676_41AB_462D51739CD9"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 146.36,
   "backwardYaw": -76.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182",
   "distance": 1
  },
  {
   "yaw": -32,
   "backwardYaw": 89.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "16",
 "id": "panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326",
 "thumbnailUrl": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BFAB2F8D_9A7D_458D_41D3_1103F4E8F570",
  "this.overlay_B86C73A0_9A7F_FDB2_41B8_91FF0D38F7FB"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 95.94,
   "backwardYaw": 171.09,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0066809_9E34_CA72_41D2_582B13B44B5A",
   "distance": 1
  },
  {
   "yaw": 133.32,
   "backwardYaw": 98.29,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "ACADEMIA",
 "id": "panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207",
 "thumbnailUrl": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C58E0E7A_9A4D_4696_41D0_3710140821FC",
  "this.overlay_C4DC1C53_9A4C_CA95_41B2_BC124EAB6E0E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 147.68,
   "backwardYaw": 113.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E",
   "distance": 1
  },
  {
   "yaw": 149.8,
   "backwardYaw": 155.25,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0",
   "distance": 1
  },
  {
   "yaw": 51.05,
   "backwardYaw": -48.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941",
   "distance": 1
  },
  {
   "yaw": -122.2,
   "backwardYaw": 18.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "B10",
 "id": "panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73",
 "thumbnailUrl": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B612BE5D_9DD5_C692_41D9_EE28670DBDC9",
  "this.overlay_B5C41187_9DCB_BA7E_41DD_BB23126252B5",
  "this.overlay_B20AE284_9A5C_DE72_41E0_2F1198714EB0",
  "this.overlay_B203CBFA_9A5B_CD96_41E0_4040C5ACEA76"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8E3759F1_98B7_0DF2_41C3_E326E049AB61",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8FD46A9A_98B7_0E36_41B6_F1A5183A59F1",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 165.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8FC46AAB_98B7_0E17_41DE_F1B4C2A22852",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 1.14,
   "backwardYaw": 105.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8",
   "distance": 1
  },
  {
   "yaw": 89.7,
   "backwardYaw": -32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "PISCINA",
 "id": "panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93",
 "thumbnailUrl": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B8A585B9_9A7D_4592_41B9_DAAB7BB601AD",
  "this.overlay_B8DFCD8D_9A7C_CA72_41D3_BE8DB4CEDD65"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -150.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8DD8D8B7_98B7_0A7F_41BB_07898982CE4B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 162.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8F99FA61_98B7_0E13_41E0_BDF6F4C70F89",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 13.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_80881B87_98B7_0E1F_41D1_BF35EDCB2458",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -41.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8D54F95E_98B7_0A31_41D0_D916542BCC22",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 57.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8E038A14_98B7_0E32_41D9_499E8F4635F5",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -153.92,
   "backwardYaw": 89.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0065817_9E37_4A9E_41B4_70709824BE77",
   "distance": 1
  },
  {
   "yaw": 98.29,
   "backwardYaw": 133.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "10",
 "id": "panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1",
 "thumbnailUrl": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BA4D3386_9A77_7E7E_418C_59AE9B824278",
  "this.overlay_BADB3936_9A75_4A9F_41D1_609E08AFE3C2"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -154.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_80347BFE_98B7_0DEE_41D0_D6F22A7635F7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -90.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8D63494D_98B7_0A12_41D7_1C78449D3674",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_80260C0E_98B7_0A2E_41D1_82D20BDEE89E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -74.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8F266AC0_98B7_0E11_41CF_519A6886F93B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 44.28,
   "backwardYaw": -115.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0065817_9E37_4A9E_41B4_70709824BE77",
   "distance": 1
  },
  {
   "yaw": -137,
   "backwardYaw": 2.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7",
   "distance": 1
  },
  {
   "yaw": -48.66,
   "backwardYaw": 51.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "B9",
 "id": "panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941",
 "thumbnailUrl": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C6BE68EF_9A5C_CB8E_41A2_DA44DD18141D",
  "this.overlay_C6AEC5B8_9A5D_4592_41C3_DED697FD49F8",
  "this.overlay_C6BBE593_9A5D_C596_41B5_8A1EC8C21064"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8E938997_98B7_0A3F_4171_63993B974B0A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "left": 0,
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 0.5,
 "minWidth": 100,
 "toolTipFontSize": 13,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "minHeight": 50,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--- LEFT PANEL 5"
 },
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_691B6C80_7506_9D4B_41B4_89FD1E7BCC23",
 "layout": "absolute",
 "width": 330,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "left": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "layout": "absolute",
 "width": 115.05,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "height": 641,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "---INFO photo"
 },
 "children": [
  "this.Container_6ECE8198_4F7D_CE0F_41B6_C7C8D7E8FF58",
  "this.Container_6EC9F199_4F7D_CE01_41C8_1A8AEA0A382B"
 ],
 "id": "Container_6EC9D199_4F7D_CE01_41CD_90869FADC821",
 "left": "0%",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "---PANORAMA LIST"
 },
 "children": [
  "this.Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB"
 ],
 "id": "Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
 "left": "0%",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "---LOCATION"
 },
 "children": [
  "this.Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
  "this.Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F"
 ],
 "id": "Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
 "left": "0%",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "---PHOTOALBUM"
 },
 "children": [
  "this.Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73"
 ],
 "id": "Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
 "left": "0%",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "---FLOORPLAN"
 },
 "children": [
  "this.Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5"
 ],
 "id": "Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
 "left": "0%",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_17522AC5_57D1_805F_41CA_96B265C364E4",
  "this.Container_17516AC5_57D1_805F_41CA_8E754787B1A2"
 ],
 "id": "Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8",
 "left": "0%",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "IconButton_A07FEC55_8850_66D2_41CA_BFE49D4B6528",
 "width": 207,
 "paddingLeft": 0,
 "class": "IconButton",
 "right": "-18.75%",
 "iconURL": "skin/IconButton_A07FEC55_8850_66D2_41CA_BFE49D4B6528.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "bottom": "-19.33%",
 "height": 115,
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 1095,
 "borderRadius": 0,
 "paddingBottom": 0,
 "maxWidth": 1095,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton27377"
 }
},
{
 "id": "IconButton_A126AD2E_8850_664E_4195_936F10ED41D1",
 "width": 198,
 "paddingLeft": 0,
 "class": "IconButton",
 "right": "0%",
 "iconURL": "skin/IconButton_A126AD2E_8850_664E_4195_936F10ED41D1.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "bottom": "0%",
 "height": 139,
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "click": "this.openLink('https://beacons.ai/nextour360', '_blank')",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 1095,
 "borderRadius": 0,
 "paddingBottom": 0,
 "maxWidth": 1095,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton27943"
 }
},
{
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 58,
 "paddingRight": 0,
 "mode": "toggle",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "maxWidth": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "data": {
  "name": "IconButton MUTE"
 },
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 58,
 "paddingRight": 0,
 "mode": "toggle",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "maxWidth": 58,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.23,
   "image": "this.AnimatedImageResource_90583793_87F0_A256_41C3_AECEE61D350C",
   "pitch": -1.14,
   "yaw": 41.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E, this.camera_8DD8D8B7_98B7_0A7F_41BB_07898982CE4B); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_43FB4858_665F_4A92_41C4_DD45783EF723",
 "data": {
  "label": "Circle Arrow 01 Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.23,
   "yaw": 41.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.82,
   "image": "this.AnimatedImageResource_90595792_87F0_A256_41D3_98CF31CB5245",
   "pitch": 1.11,
   "yaw": 36.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F, this.camera_8E73DA1F_98B7_0E2E_41DE_D50A5F2267CD); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4348F185_665B_DA72_41C6_C81D5B2C3AAE",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.82,
   "yaw": 36.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.64,
   "image": "this.AnimatedImageResource_9055779F_87F0_A24E_41CF_627E83167E03",
   "pitch": 0.3,
   "yaw": -76.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326, this.camera_80CAEBD9_98B7_0E33_41B1_6DF38A90D403); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BD4D4F1F_9A4D_468E_41D3_CE3F82842AB2",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.64,
   "yaw": -76.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.86,
   "image": "this.AnimatedImageResource_905557A0_87F0_A272_41C3_FC42FFBBDE50",
   "pitch": -0.93,
   "yaw": 74.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B006607D_9E34_BA92_41AF_29C566DBE694, this.camera_80DA5BBC_98B7_0E72_41D7_E58DA6FCCD23); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BE2D2500_9A77_5A72_41DF_3F96974E04E0",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.86,
   "yaw": 74.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.64,
   "image": "this.AnimatedImageResource_9055A7A0_87F0_A272_41E0_DB9F85644EC3",
   "pitch": -0.32,
   "yaw": -34.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053, this.camera_80C46BE6_98B7_0E1E_41E0_D93030D7F8B9); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BF7A3772_9A7B_C697_41DC_031E9E76B2CB",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.64,
   "yaw": -34.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.81,
   "image": "this.AnimatedImageResource_9058A795_87F0_A253_419A_4E9E37BF02C5",
   "pitch": -3.07,
   "yaw": -136.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_69F6871F_65CB_C68E_41D8_779F53B557AA, this.camera_8F52BB1C_98B7_0E32_4193_5046C1F29087); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_49110BC5_663C_CDF2_41CC_1A0D864199F5",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.81,
   "yaw": -136.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.36,
   "image": "this.AnimatedImageResource_90588795_87F0_A253_41B2_D026240C5E3C",
   "pitch": -6.25,
   "yaw": 110.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0, this.camera_8F627B12_98B7_0E36_41DA_2D3E82A028D1); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4964B16A_663D_5AB6_41BB_1B55B6FC91B7",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.36,
   "yaw": 110.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.46,
   "image": "this.AnimatedImageResource_90573798_87F0_A252_41DC_8AF33E437B7A",
   "pitch": -1.35,
   "yaw": 102.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E, this.camera_8D5E494E_98B7_0A2E_41AD_912C5A260454); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_CD33FE50_9A37_C692_41CF_16C4E789CF5D",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.46,
   "yaw": 102.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.4,
   "image": "this.AnimatedImageResource_9056B79B_87F0_A256_41CC_C354A82CFAAA",
   "pitch": -1.14,
   "yaw": -65.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7, this.camera_80168C1C_98B7_0A31_41CF_03F27A0A877A); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C0D133C6_9A55_5DFE_41D1_C8B529D84F10",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.4,
   "yaw": -65.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.99,
   "image": "this.AnimatedImageResource_905BE791_87F0_A253_41A3_89E6A8DE50A3",
   "pitch": -3.18,
   "yaw": 3.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00, this.camera_80347BFE_98B7_0DEE_41D0_D6F22A7635F7); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4CEED8AB_66D4_CBB6_41D1_839B0D50F60D",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.99,
   "yaw": 3.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.61,
   "image": "this.AnimatedImageResource_905BC791_87F0_A253_4164_C3BEAB109A5F",
   "pitch": 4.18,
   "yaw": -122.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435, this.camera_80260C0E_98B7_0A2E_41D1_82D20BDEE89E); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4B67F129_66D4_BAB2_41CA_FFCC50512E6A",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.61,
   "yaw": -122.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.22,
   "image": "this.AnimatedImageResource_905A2791_87F0_A253_41BE_09DB01BB5248",
   "pitch": 1.52,
   "yaw": 19.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00, this.camera_8F4C7B39_98B7_0E73_41E2_ACD9014FBF10); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4BE7A1F5_66CF_5D92_41CD_1D6FB859E59E",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.22,
   "yaw": 19.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.41,
   "image": "this.AnimatedImageResource_905A0792_87F0_A251_41B1_CB82EEF1CC6E",
   "pitch": 0.5,
   "yaw": 138.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E, this.camera_80BC9B4B_98B7_0E17_41C5_C7D7558FB910); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4A76EDED_6635_45B2_41C4_D1EAFB470EDD",
 "data": {
  "label": "Circle Arrow 02 Right"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.41,
   "yaw": 138.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.6,
   "image": "this.AnimatedImageResource_90588797_87F0_A25E_41DF_454A2B2A5EB6",
   "pitch": -0.11,
   "yaw": 88.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B006607D_9E34_BA92_41AF_29C566DBE694, this.camera_8F99FA61_98B7_0E13_41E0_BDF6F4C70F89); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C31FAA53_9A4F_4E95_418C_2B88176C1BC5",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.6,
   "yaw": 88.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.81,
   "image": "this.AnimatedImageResource_9058D798_87F0_A252_41C1_0669A3DB4C8C",
   "pitch": -4,
   "yaw": -14.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E, this.camera_8F880A70_98B7_0EF1_41D7_06D591237A28); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C385BB78_9A4C_CE93_41D2_8DA7750FD7DC",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.81,
   "yaw": -14.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.64,
   "image": "this.AnimatedImageResource_90598795_87F0_A252_41C6_8297823AB5DC",
   "pitch": -0.52,
   "yaw": 105.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93, this.camera_8FD46A9A_98B7_0E36_41B6_F1A5183A59F1); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B9013F78_9A7B_4692_41B6_58DB5A62FD8E",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.64,
   "yaw": 105.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.04,
   "image": "this.AnimatedImageResource_9059D796_87F0_A25E_41C1_45DB441DEFB8",
   "pitch": -2.51,
   "yaw": -71.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0065817_9E37_4A9E_41B4_70709824BE77, this.camera_8FE43A93_98B7_0E37_41DF_C30BB8A98040); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B9FD6E5C_9A75_C692_41D7_56C001D7D6EE",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.04,
   "yaw": -71.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.59,
   "image": "this.AnimatedImageResource_8CCD6F10_98B3_0631_41B4_660886546114",
   "pitch": -43.99,
   "yaw": -3.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2, this.camera_8E4FFA43_98B7_0E17_41D4_008EA8024285); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_88A2544E_98B3_3A11_41CE_80798AAD509F",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.59,
   "yaw": -3.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.82,
   "image": "this.AnimatedImageResource_905AA78F_87F0_A24E_41D6_85D44639AC53",
   "pitch": 1.52,
   "yaw": -164.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B, this.camera_8FEA7A87_98B7_0E1E_41CF_548EF367CA38); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4B5007F2_66CC_C596_41C7_806A964C81B9",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.82,
   "yaw": -164.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.59,
   "image": "this.AnimatedImageResource_905AF78F_87F0_A24E_4193_4B2ABB264D77",
   "pitch": -1.55,
   "yaw": 25.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73, this.camera_8FFBFA7C_98B7_0EF1_41C3_1B2189EB6365); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4B091EB1_66CD_4792_41D3_733E79F19F4F",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.59,
   "yaw": 25.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.91,
   "image": "this.AnimatedImageResource_90586797_87F0_A25E_41E0_859EE7B85230",
   "pitch": -1.91,
   "yaw": -17.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2, this.camera_809EBB6C_98B7_0E12_41B8_680D6E265470); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C23B84D0_9A54_FB92_41A0_F5678B0D625F",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.91,
   "yaw": -17.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.39,
   "image": "this.AnimatedImageResource_90584797_87F0_A25E_41D8_DD75FAA12044",
   "pitch": 1.57,
   "yaw": 162.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7, this.camera_80881B87_98B7_0E1F_41D1_BF35EDCB2458); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C2100BDD_9A4C_CD92_41A3_89DCD7750CED",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.39,
   "yaw": 162.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.12,
   "image": "this.AnimatedImageResource_9058A797_87F0_A25E_41DA_4AD84EE32774",
   "pitch": 0.72,
   "yaw": 143.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182, this.camera_80AEBB61_98B7_0E13_41D5_AE9C32658A6D); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C2E904F8_9A4D_5B92_4153_643290E79A20",
 "data": {
  "label": "Circle Arrow 01 Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.12,
   "yaw": 143.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.36,
   "image": "this.AnimatedImageResource_905AC792_87F0_A256_41DF_8A597DC7F37B",
   "pitch": -6.05,
   "yaw": 135.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EA0722C_65CB_FEB2_41C4_312488105662, this.camera_8D813866_98B7_0A1E_41B5_B0C4936C546C); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4430E99B_6655_4D95_41D3_B78691F0DCA1",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.36,
   "yaw": 135.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.02,
   "image": "this.AnimatedImageResource_90592792_87F0_A256_41DB_62B467F2EB50",
   "pitch": -4,
   "yaw": 84.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E, this.camera_8DFB5873_98B7_0AF7_4186_EC8FC7BB67EB); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4440D61A_665B_C696_41D9_BBE3E4B4564D",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.02,
   "yaw": 84.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.63,
   "image": "this.AnimatedImageResource_90590792_87F0_A256_41C2_D019628D3245",
   "pitch": -1.95,
   "yaw": 0.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_69F6871F_65CB_C68E_41D8_779F53B557AA, this.camera_8DFCF874_98B7_0AF1_41C8_9BB1FF95F347); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_501189EC_665B_4DB3_41C9_A65637A712E1",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.63,
   "yaw": 0.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.18,
   "image": "this.AnimatedImageResource_9056D79B_87F0_A256_41CC_BC3DB1596959",
   "pitch": -4.16,
   "yaw": 23.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2, this.camera_8FC46AAB_98B7_0E17_41DE_F1B4C2A22852); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_CC766416_9A4B_7A9E_41D3_D7CF1E89542D",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.18,
   "yaw": 23.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.55,
   "image": "this.AnimatedImageResource_9055279D_87F0_A253_41BC_713BAD3EA6B8",
   "pitch": 1.4,
   "yaw": -122.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62, this.camera_8F361AB2_98B7_0E71_41C6_F1C9B015D6FB); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_CCA8DEF9_9A35_C792_41CE_E3EE1B9663A8",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.55,
   "yaw": -122.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.23,
   "image": "this.AnimatedImageResource_90581793_87F0_A256_41DA_EADF5A3FEF6D",
   "pitch": -0.32,
   "yaw": 50.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_69F6871F_65CB_C68E_41D8_779F53B557AA, this.camera_8E6DEA2B_98B7_0E17_41E2_FFF4D71FD40D); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_43BDD453_665D_FA95_41D1_DB0E0B4A1B6E",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.23,
   "yaw": 50.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "data": {
  "name": "IconButton GYRO"
 },
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 58,
 "paddingRight": 0,
 "mode": "toggle",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "maxWidth": 58,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "data": {
  "name": "IconButton VR"
 },
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 58,
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "maxWidth": 58,
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.38,
   "image": "this.AnimatedImageResource_905C478D_87F0_A232_41C0_919A4E565F77",
   "pitch": 4.8,
   "yaw": -3.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4E1ADB14_663D_4E93_41C2_5602B0640FA0",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.38,
   "yaw": -3.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Poligono"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0_HS_1_0.png",
      "width": 181,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ]
   },
   "hfov": 11.29,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.41,
   "roll": 0,
   "yaw": -65.77
  }
 ],
 "id": "overlay_AF05E2C2_8870_A231_41CA_5520A470FA27",
 "maps": [
  {
   "hfov": 11.29,
   "yaw": -65.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0_HS_1_1_0_map.gif",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 45
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.34,
   "image": "this.AnimatedImageResource_8CD74F02_98B3_0611_41D2_2669AACBB87D",
   "pitch": 10.64,
   "yaw": -176.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9634F458_98AD_1A31_41BB_C4CE98F22480, this.camera_8E3759F1_98B7_0DF2_41C3_E326E049AB61); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_887E61BD_98B5_3A73_41C5_2CC339FD7D86",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.34,
   "yaw": -176.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.21,
   "image": "this.AnimatedImageResource_905A678F_87F0_A24E_41AB_4E8C50D9A20E",
   "pitch": 3.77,
   "yaw": -4.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73, this.camera_8F000AE9_98B7_0E12_41D3_A69EC5BF16B5); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4F49AC7D_6634_CA92_41CC_BAFA00C63117",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.21,
   "yaw": -4.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.41,
   "image": "this.AnimatedImageResource_905A478F_87F0_A24E_41E0_F1D7CBC6A38B",
   "pitch": -0.41,
   "yaw": 175.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6, this.camera_8F73CAFC_98B7_0FF1_41D4_C57F4F700529); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4F6D0EDB_6637_4795_41C3_FD5C709FD3AF",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.41,
   "yaw": 175.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.13,
   "image": "this.AnimatedImageResource_90574799_87F0_A252_41CE_5B8A928C2DA4",
   "pitch": -0.28,
   "yaw": 89.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1, this.camera_8E3AD9E4_98B7_0A11_41DF_1EC2136C7BB7); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BB5C2473_9A4B_7A96_41CF_4AE0DC3AC134",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.13,
   "yaw": 89.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.96,
   "image": "this.AnimatedImageResource_9057A799_87F0_A252_41D7_103FE460B080",
   "pitch": 0.76,
   "yaw": -96.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8, this.camera_8ECBD9D9_98B7_0A33_41A8_F4B1A435E6BA); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BBF861E7_9A4D_7DBE_41DD_888E96A121DB",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.96,
   "yaw": -96.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.47,
   "image": "this.AnimatedImageResource_9057F799_87F0_A252_41DF_4206BA298753",
   "pitch": 2.75,
   "yaw": -115.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941, this.camera_8ED949CA_98B7_0A16_41E2_3F2101D65C83); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C602BA61_9A55_4EB2_419D_6F8C533D0FF3",
 "data": {
  "label": "Circle Arrow 01 Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.47,
   "yaw": -115.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.61,
   "image": "this.AnimatedImageResource_90563799_87F0_A252_41D6_7BECA7BBE80B",
   "pitch": -2.36,
   "yaw": 2.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941, this.camera_8EB5597F_98B7_0AEE_41D4_163C769F5E65); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C7E8DDF4_9A5D_4592_41CA_2CC405B5F798",
 "data": {
  "label": "Circle Arrow 01 Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.61,
   "yaw": 2.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 4.88,
   "image": "this.AnimatedImageResource_9056079A_87F0_A256_41DC_4BA5BB90E646",
   "pitch": -2.53,
   "yaw": 13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B006D397_9E37_DD9E_41DB_FF4252741762, this.camera_8EA6B992_98B7_0A31_41A0_772DAE13BDC2); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C0698AA2_9A5C_CFB6_41C8_6FA707DDFF07",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.88,
   "yaw": 13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.79,
   "image": "this.AnimatedImageResource_9056679A_87F0_A256_41DE_8AAA35A53ADC",
   "pitch": 0.93,
   "yaw": -166.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B006607D_9E34_BA92_41AF_29C566DBE694, this.camera_8EBF596F_98B7_0AEF_41DA_632578408262); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C0555CD9_9A54_CB92_41C5_FDCBB38553F8",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.79,
   "yaw": -166.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.42,
   "image": "this.AnimatedImageResource_9059A795_87F0_A252_41DC_2B2ACD349218",
   "pitch": 4.15,
   "yaw": 171.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207, this.camera_8E5DFA36_98B7_0E71_41DF_2392A76264D5); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C5AC4C21_9A55_4AB5_41D6_0B09594E8049",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.42,
   "yaw": 171.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.63,
   "image": "this.AnimatedImageResource_9055179F_87F0_A24E_41E0_1926EBB56924",
   "pitch": -2.77,
   "yaw": 69.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053, this.camera_8DCBB8CB_98B7_0A28_41E0_3A4E84800EBA); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BCCFF3FD_9A4C_BD92_41E0_3B948B786D9B",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.63,
   "yaw": 69.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.36,
   "image": "this.AnimatedImageResource_90587794_87F0_A252_41CC_79E5AECCC4D4",
   "pitch": -1.79,
   "yaw": -109.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EAE320E_65CB_5E8E_4139_A941AE524054, this.camera_8D2178F8_98B7_0BF2_41C6_3E08E72A3767); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_49EDFC7F_663C_CA8E_41CF_8FC1836E3747",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.36,
   "yaw": -109.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 20.99,
   "image": "this.AnimatedImageResource_90584795_87F0_A253_41D2_F6E7E9DB6B57",
   "pitch": -14.52,
   "yaw": 155.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73, this.camera_8D1FE90B_98B7_0A17_41D4_6A6294377F1B); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B35F2AA2_9A57_CFB6_41B5_82F1907CD2CD",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.99,
   "yaw": 155.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.41,
   "image": "this.AnimatedImageResource_905A378E_87F0_A24E_41AF_254D613D0F97",
   "pitch": -0.93,
   "yaw": 4.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435, this.camera_8DD318BE_98B7_0A71_41DB_4675069E47B5); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4E25D78A_663C_C677_41D5_B038D78CA5DD",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.41,
   "yaw": 4.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.85,
   "image": "this.AnimatedImageResource_905A178F_87F0_A24E_41D6_4F8A0D56D8FF",
   "pitch": 3.07,
   "yaw": 172.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4EC8166B_663B_C6B5_41BB_53F07649AB03",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.85,
   "yaw": 172.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.65,
   "image": "this.AnimatedImageResource_9056879E_87F0_A24E_41D9_0E07894E8303",
   "pitch": -4.41,
   "yaw": 155.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC, this.camera_8E26A9F7_98B7_0DFF_41E1_C9E83D83E1D0); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B3DBCCD9_9A4B_4B92_41C9_C0C2A8D19C19",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.65,
   "yaw": 155.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.64,
   "image": "this.AnimatedImageResource_9056E79E_87F0_A24E_41AF_5A707AB08E4F",
   "pitch": 0.7,
   "yaw": 18.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73, this.camera_8E038A14_98B7_0E32_41D9_499E8F4635F5); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B38DF03A_9A4B_7A96_41D6_C17B00DAC6AE",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.64,
   "yaw": 18.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.41,
   "image": "this.AnimatedImageResource_9055379F_87F0_A24E_41C5_6F8650A2C096",
   "pitch": -5.02,
   "yaw": -163.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182, this.camera_8E10EA05_98B7_0E13_41CC_843C5A18EA15); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BCAB4769_9A4F_46B2_418E_9FFA553D62A7",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.41,
   "yaw": -163.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.64,
   "image": "this.AnimatedImageResource_9059B793_87F0_A256_41DF_7448B11EBBEE",
   "pitch": 0.5,
   "yaw": 29.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F, this.camera_8D3D98EE_98B7_0BEE_41D8_3F8BD53565EC); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4674A715_664D_C692_41D1_6AF2222C02F8",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.64,
   "yaw": 29.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8,
   "image": "this.AnimatedImageResource_90599793_87F0_A256_41C5_C3837B2B4B29",
   "pitch": 0.91,
   "yaw": -9.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_69F6871F_65CB_C68E_41D8_779F53B557AA, this.camera_8D2A68F8_98B7_0BF2_41E2_E4BF102AA5BC); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_45E7FEA2_664B_47B6_41D7_84BA60B12EC6",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8,
   "yaw": -9.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.81,
   "image": "this.AnimatedImageResource_9059E793_87F0_A256_41CE_5735BE7B485A",
   "pitch": -2.57,
   "yaw": -54.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F, this.camera_8DC698E0_98B7_0A12_41C5_8778F0207A76); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4340A95D_665D_4A92_41CF_3E53AFCB8EE1",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.81,
   "yaw": -54.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.15,
   "image": "this.AnimatedImageResource_905BB791_87F0_A253_41DA_89142429E570",
   "pitch": -5.43,
   "yaw": 12.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B, this.camera_8D54F95E_98B7_0A31_41D0_D916542BCC22); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4AE18D46_6637_CAFE_41D6_7F629C48DCB3",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.15,
   "yaw": 12.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.06,
   "image": "this.AnimatedImageResource_905B9791_87F0_A253_41DD_EF44C7996C1E",
   "pitch": -3.48,
   "yaw": 113.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73, this.camera_8D43796F_98B7_0AEF_41D4_FFCE3A99F2B7); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_49AF96E7_6635_C7BE_41D1_868C98A4023B",
 "data": {
  "label": "Arrow 04b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.06,
   "yaw": 113.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.82,
   "image": "this.AnimatedImageResource_905A5792_87F0_A251_41DB_3303DA222CC4",
   "pitch": -0.93,
   "yaw": 11.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F, this.camera_8EFF79B3_98B7_0A77_41D1_24E89A655A7C); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_46557FF5_664F_C592_41B7_EF321619450B",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.82,
   "yaw": 11.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.24,
   "image": "this.AnimatedImageResource_905AB792_87F0_A251_41C8_CC9553A4231F",
   "pitch": 4.59,
   "yaw": -65.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EAE320E_65CB_5E8E_4139_A941AE524054, this.camera_8EEE79C1_98B7_0A13_41E1_65F083473A18); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4554E956_6655_4A9E_41DA_B84680F59817",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.24,
   "yaw": -65.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.92,
   "image": "this.AnimatedImageResource_905A9792_87F0_A251_41A1_4B76C008F12A",
   "pitch": -7.77,
   "yaw": 171,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F, this.camera_8E938997_98B7_0A3F_4171_63993B974B0A); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_44B834A5_6654_DBB2_41D2_672E27089032",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.92,
   "yaw": 171,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.8,
   "image": "this.AnimatedImageResource_905AE792_87F0_A256_41D3_CA7D6487EDD0",
   "pitch": -4,
   "yaw": 101.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E, this.camera_8E82E9A0_98B7_0A11_41DA_6023D6576E13); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_44E1FF83_6654_C676_41AB_462D51739CD9",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.8,
   "yaw": 101.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.63,
   "image": "this.AnimatedImageResource_90583796_87F0_A25E_41DB_91501F9D4D31",
   "pitch": -2.57,
   "yaw": -32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93, this.camera_8D63494D_98B7_0A12_41D7_1C78449D3674); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BFAB2F8D_9A7D_458D_41D3_1103F4E8F570",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.63,
   "yaw": -32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.63,
   "image": "this.AnimatedImageResource_90581796_87F0_A25E_41D6_352EF850DD34",
   "pitch": 1.32,
   "yaw": 146.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182, this.camera_8D75293E_98B7_0A71_41C0_B113F2FCDC20); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B86C73A0_9A7F_FDB2_41B8_91FF0D38F7FB",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.63,
   "yaw": 146.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.48,
   "image": "this.AnimatedImageResource_90571798_87F0_A252_41A7_8A346AC30519",
   "pitch": -1.69,
   "yaw": 95.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0066809_9E34_CA72_41D2_582B13B44B5A, this.camera_80F85B95_98B7_0E33_41E2_FF4DE37F616B); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C58E0E7A_9A4D_4696_41D0_3710140821FC",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.48,
   "yaw": 95.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 4.72,
   "image": "this.AnimatedImageResource_90576798_87F0_A252_41B2_0E8F66DEEAD1",
   "pitch": 1.15,
   "yaw": 133.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1, this.camera_80E88BAF_98B7_0E6E_41D4_AF020118B263); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C4DC1C53_9A4C_CA95_41B2_BC124EAB6E0E",
 "data": {
  "label": "Circle Arrow 02 Right"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.72,
   "yaw": 133.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.9,
   "image": "this.AnimatedImageResource_9056279D_87F0_A252_41BE_8542E70B1AA1",
   "pitch": 12.68,
   "yaw": 149.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0, this.camera_8DE88893_98B7_0A36_41B3_C16B16360424); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B612BE5D_9DD5_C692_41D9_EE28670DBDC9",
 "data": {
  "label": "Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.9,
   "yaw": 149.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0_HS_0_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.31,
   "image": "this.AnimatedImageResource_9056779D_87F0_A252_41B2_C81D73C44A70",
   "pitch": -39.48,
   "yaw": 147.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E, this.camera_8DF69884_98B7_0A11_41D6_A32E73D1AF4C); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B5C41187_9DCB_BA7E_41DD_BB23126252B5",
 "data": {
  "label": "Arrow 08c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.31,
   "yaw": 147.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.64,
   "image": "this.AnimatedImageResource_9056579D_87F0_A24D_41DC_B0A6698A7F0A",
   "pitch": 0.5,
   "yaw": 51.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941, this.camera_8DEDC89D_98B7_0A33_41C2_41D5261876A3); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B20AE284_9A5C_DE72_41E0_2F1198714EB0",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.64,
   "yaw": 51.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.04,
   "image": "this.AnimatedImageResource_9056A79E_87F0_A24E_41CE_05948B4AFD4E",
   "pitch": -1.75,
   "yaw": -122.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053, this.camera_8DE7F8A9_98B7_0A12_41D5_00E34D5115E7); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B203CBFA_9A5B_CD96_41E0_4040C5ACEA76",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.04,
   "yaw": -122.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.04,
   "image": "this.AnimatedImageResource_9056979B_87F0_A256_41D0_E48449033CDF",
   "pitch": -0.73,
   "yaw": 89.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326, this.camera_8F106ACE_98B7_0E11_41D3_3FEB6844F0CB); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B8A585B9_9A7D_4592_41B9_DAAB7BB601AD",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.04,
   "yaw": 89.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.77,
   "image": "this.AnimatedImageResource_9056F79B_87F0_A256_41D1_BAF0C5CADE07",
   "pitch": -5.84,
   "yaw": 1.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8, this.camera_8F266AC0_98B7_0E11_41CF_519A6886F93B); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B8DFCD8D_9A7C_CA72_41D3_BE8DB4CEDD65",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.77,
   "yaw": 1.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.58,
   "image": "this.AnimatedImageResource_9058D795_87F0_A253_41C7_A47B3E323D27",
   "pitch": -2.09,
   "yaw": 98.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207, this.camera_8FA98A58_98B7_0E32_4195_3348089B7C3C); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BA4D3386_9A77_7E7E_418C_59AE9B824278",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.58,
   "yaw": 98.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.44,
   "image": "this.AnimatedImageResource_90594795_87F0_A252_41D7_4B6263974AEA",
   "pitch": 2.75,
   "yaw": -153.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0065817_9E37_4A9E_41B4_70709824BE77, this.camera_8FBFEA49_98B7_0E12_41E2_2C3B597A585A); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BADB3936_9A75_4A9F_41D1_609E08AFE3C2",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.44,
   "yaw": -153.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.73,
   "image": "this.AnimatedImageResource_9055079D_87F0_A253_41E0_23258A9E2CF5",
   "pitch": -1.21,
   "yaw": -137,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7, this.camera_8D01E92B_98B7_0A17_41C9_D98CDA9F867D); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C6BE68EF_9A5C_CB8E_41A2_DA44DD18141D",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.73,
   "yaw": -137,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.9,
   "image": "this.AnimatedImageResource_9057F79D_87F0_A252_41C4_7ECF80D7EF2F",
   "pitch": 1.32,
   "yaw": 44.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0065817_9E37_4A9E_41B4_70709824BE77, this.camera_8D0A891C_98B7_0A31_41D9_3BB0769F69EF); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C6AEC5B8_9A5D_4592_41C3_DED697FD49F8",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.9,
   "yaw": 44.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.63,
   "image": "this.AnimatedImageResource_9057C79D_87F0_A252_41A7_AFFEE3926275",
   "pitch": -0.26,
   "yaw": -48.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73, this.camera_8D7E692C_98B7_0A11_41D3_1BF3CDAEE60C); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C6BBE593_9A5D_C596_41B5_8A1EC8C21064",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.63,
   "yaw": -48.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "layout": "absolute",
 "width": 66,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "left": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "layout": "absolute",
 "width": 330,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "left": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "layout": "horizontal",
 "width": 110,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "height": 110,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "width": "91.304%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "bottom": "0%",
 "contentOpaque": false,
 "height": "85.959%",
 "paddingRight": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 3,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_6ECE7198_4F7D_CE0F_41B4_ED3C974BE2A1",
  "this.Container_6ECE5198_4F7D_CE0F_416D_84774E7F2542"
 ],
 "id": "Container_6ECE8198_4F7D_CE0F_41B6_C7C8D7E8FF58",
 "left": "15%",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "class": "Container",
 "right": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 25,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C"
 ],
 "id": "Container_6EC9F199_4F7D_CE01_41C8_1A8AEA0A382B",
 "left": "15%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "right": "15%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
  "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9"
 ],
 "id": "Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB",
 "left": "15%",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "class": "Container",
 "right": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "verticalAlign": "top",
 "horizontalAlign": "center",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 25,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70"
 ],
 "id": "Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
 "left": "15%",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "class": "Container",
 "right": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 25,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848"
 ],
 "id": "Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F",
 "left": "15%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "right": "15%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1"
 ],
 "id": "Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73",
 "left": "15%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "class": "Container",
 "right": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "verticalAlign": "top",
 "horizontalAlign": "center",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 25,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.MapViewer",
  "this.Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA"
 ],
 "id": "Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5",
 "left": "15%",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "class": "Container",
 "right": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "verticalAlign": "top",
 "horizontalAlign": "center",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 25,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_17521AC5_57D1_805F_41CD_E04DDA9C90DD",
  "this.Container_1752FAC5_57D1_805F_4193_13B2577B9D8A"
 ],
 "id": "Container_17522AC5_57D1_805F_41CA_96B265C364E4",
 "left": "15%",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "class": "Container",
 "right": "15%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "shadowBlurRadius": 25,
 "shadow": true,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0"
 ],
 "id": "Container_17516AC5_57D1_805F_41CA_8E754787B1A2",
 "left": "15%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "right": "15%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90583793_87F0_A256_41C3_AECEE61D350C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EBC6501_65CB_DA72_41C0_FECD986E318F_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90595792_87F0_A256_41D3_98CF31CB5245",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EA0722C_65CB_FEB2_41C4_312488105662_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9055779F_87F0_A24E_41CF_627E83167E03",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905557A0_87F0_A272_41C3_FC42FFBBDE50",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9055A7A0_87F0_A272_41E0_DB9F85644EC3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02DBDC2_9E35_C5F6_41C9_A33DD3D8D182_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9058A795_87F0_A253_419A_4E9E37BF02C5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90588795_87F0_A253_41B2_D026240C5E3C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EAE320E_65CB_5E8E_4139_A941AE524054_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90573798_87F0_A252_41DC_8AF33E437B7A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B0066C6B_9E37_4AB6_41D5_4F4B4DA72D62_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9056B79B_87F0_A256_41CC_C354A82CFAAA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B006D397_9E37_DD9E_41DB_FF4252741762_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905BE791_87F0_A253_41A3_89E6A8DE50A3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905BC791_87F0_A253_4164_C3BEAB109A5F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF75792_65CD_4596_41D2_7D4EF236DD73_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905A2791_87F0_A253_41BE_09DB01BB5248",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905A0792_87F0_A251_41B1_CB82EEF1CC6E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF75A9F_65CD_4F8D_41D4_268D52243A1B_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90588797_87F0_A25E_41DF_454A2B2A5EB6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9058D798_87F0_A252_41C1_0669A3DB4C8C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02AEE31_9E37_4692_41DC_F7F8B4F881A2_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90598795_87F0_A252_41C6_8297823AB5DC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9059D796_87F0_A25E_41C1_45DB441DEFB8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B0063496_9E34_FB9E_41C7_E318A4D76BC8_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_8CCD6F10_98B3_0631_41B4_660886546114",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9634F458_98AD_1A31_41BB_C4CE98F22480_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905AA78F_87F0_A24E_41D6_85D44639AC53",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905AF78F_87F0_A24E_4193_4B2ABB264D77",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7D98E_65CD_CD8E_41A0_593FB1398D00_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90586797_87F0_A25E_41E0_859EE7B85230",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90584797_87F0_A25E_41D8_DD75FAA12044",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9058A797_87F0_A25E_41DA_4AD84EE32774",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B006607D_9E34_BA92_41AF_29C566DBE694_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905AC792_87F0_A256_41DF_8A597DC7F37B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90592792_87F0_A256_41DB_62B467F2EB50",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90590792_87F0_A256_41C2_D019628D3245",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EACB8F2_65CB_CB96_41D8_6FDEF418FE4F_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9056D79B_87F0_A256_41CC_BC3DB1596959",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9055279D_87F0_A253_41BC_713BAD3EA6B8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B006EFC7_9E37_C5FE_41DC_CFE1D1E19A3E_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90581793_87F0_A256_41DA_EADF5A3FEF6D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EAF7EF8_65CB_C792_41CC_3E062FBF592F_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905C478D_87F0_A232_41C0_919A4E565F77",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_8CD74F02_98B3_0611_41D2_2669AACBB87D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6E8740C6_65CD_5BFE_41D3_713A7AB9AAE2_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905A678F_87F0_A24E_41AB_4E8C50D9A20E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905A478F_87F0_A24E_41E0_F1D7CBC6A38B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF1DEB3_65CD_C796_41B9_77FA6B8C6435_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90574799_87F0_A252_41CE_5B8A928C2DA4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9057A799_87F0_A252_41D7_103FE460B080",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9057F799_87F0_A252_41DF_4206BA298753",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B0065817_9E37_4A9E_41B4_70709824BE77_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90563799_87F0_A252_41D6_7BECA7BBE80B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9056079A_87F0_A256_41DC_4BA5BB90E646",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9056679A_87F0_A256_41DE_8AAA35A53ADC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02D65BB_9E37_C596_41DD_73BAB2FF33D7_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9059A795_87F0_A252_41DC_2B2ACD349218",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B0066809_9E34_CA72_41D2_582B13B44B5A_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9055179F_87F0_A24E_41E0_1926EBB56924",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B01D3E9C_9E35_C792_41A1_8845C9563CEC_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90587794_87F0_A252_41CC_79E5AECCC4D4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90584795_87F0_A253_41D2_F6E7E9DB6B57",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EA2B84B_65CB_4AF6_41D3_4F508A2481F0_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905A378E_87F0_A24E_41AF_254D613D0F97",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905A178F_87F0_A24E_41D6_4F8A0D56D8FF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_69CD4189_65CC_BA72_41C0_99BADC7310B6_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9056879E_87F0_A24E_41D9_0E07894E8303",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9056E79E_87F0_A24E_41AF_5A707AB08E4F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9055379F_87F0_A24E_41C5_6F8650A2C096",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B0228022_9E35_DAB6_41DB_CF0AE85C5053_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9059B793_87F0_A256_41DF_7448B11EBBEE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90599793_87F0_A256_41C5_C3837B2B4B29",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9059E793_87F0_A256_41CE_5735BE7B485A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EAF2BAF_65CB_CD8E_41D4_322FCF7BE02E_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905BB791_87F0_A253_41DA_89142429E570",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905B9791_87F0_A253_41DD_EF44C7996C1E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF73D77_65CD_CA9E_41CE_D3BC5FA8E43E_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905A5792_87F0_A251_41DB_3303DA222CC4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905AB792_87F0_A251_41C8_CC9553A4231F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905A9792_87F0_A251_41A1_4B76C008F12A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_905AE792_87F0_A256_41D3_CA7D6487EDD0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_69F6871F_65CB_C68E_41D8_779F53B557AA_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90583796_87F0_A25E_41DB_91501F9D4D31",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90581796_87F0_A25E_41D6_352EF850DD34",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02D12BE_9E34_DF8E_41D2_0AA227EF7326_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90571798_87F0_A252_41A7_8A346AC30519",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90576798_87F0_A252_41B2_0E8F66DEEAD1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02F0A4A_9E37_4EF6_41C6_00056AF9C207_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9056279D_87F0_A252_41BE_8542E70B1AA1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 510
  }
 ]
},
{
 "rowCount": 7,
 "frameCount": 32,
 "class": "AnimatedImageResource",
 "colCount": 5,
 "id": "AnimatedImageResource_9056779D_87F0_A252_41B2_C81D73C44A70",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0_HS_1_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9056579D_87F0_A24D_41DC_B0A6698A7F0A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9056A79E_87F0_A24E_41CE_05948B4AFD4E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B01D2084_9E35_BA72_41D5_86CD3256DE73_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9056979B_87F0_A256_41D0_E48449033CDF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9056F79B_87F0_A256_41D1_BAF0C5CADE07",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B02C11C1_9E37_FDF2_41D0_F28144B8EE93_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9058D795_87F0_A253_41C7_A47B3E323D27",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_90594795_87F0_A252_41D7_4B6263974AEA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B7526FCD_9E3B_C5F2_41D9_73C8695F0DA1_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9055079D_87F0_A253_41E0_23258A9E2CF5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9057F79D_87F0_A252_41C4_7ECF80D7EF2F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9057C79D_87F0_A252_41A7_AFFEE3926275",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B51568D2_9E35_4B96_41DD_5D7A0BB86941_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container blue"
 },
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "layout": "absolute",
 "width": 25,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "left": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#333333"
 ],
 "shadow": false,
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.32,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 4,
 "width": 50,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "bottom": "41.54%",
 "top": "38.46%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingBottom": 0,
 "maxWidth": 40,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- Buttons set"
 },
 "children": [
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Image_9F5EA5A6_87D0_A67E_41DE_39F2664F4725",
  "this.Label_9C453D13_87D0_6656_41AA_875891D292A9"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "layout": "absolute",
 "width": 226,
 "scrollBarColor": "#000000",
 "paddingLeft": 40,
 "left": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "paddingRight": 40,
 "backgroundColor": [
  "#000000",
  "#333333"
 ],
 "shadow": false,
 "height": "100%",
 "paddingTop": 40,
 "minHeight": 1,
 "backgroundOpacity": 0.32,
 "paddingBottom": 40,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "width": 50,
 "paddingLeft": 0,
 "class": "IconButton",
 "right": 86,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "top": "45.57%",
 "bottom": "48.61%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingBottom": 0,
 "maxWidth": 40,
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "data": {
  "name": "image button menu"
 },
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 60,
 "paddingRight": 0,
 "mode": "toggle",
 "shadow": false,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "borderRadius": 0,
 "maxWidth": 60,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2"
 ],
 "id": "Container_6ECE7198_4F7D_CE0F_41B4_ED3C974BE2A1",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "85%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_6ECE4198_4F7D_CE0F_41A0_688A405FA9A1",
  "this.Container_6ECE3198_4F7D_CE0F_41B9_971123164DFE",
  "this.Container_6ECE0198_4F7D_CE0F_41C2_173DE9AC91EC"
 ],
 "id": "Container_6ECE5198_4F7D_CE0F_416D_84774E7F2542",
 "layout": "vertical",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "paddingLeft": 50,
 "class": "Container",
 "width": "50%",
 "minWidth": 460,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 50,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "minHeight": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "gap": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "X"
 },
 "id": "IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C",
 "iconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C.jpg",
 "paddingLeft": 0,
 "class": "IconButton",
 "width": "25%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": "75%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_rollover.jpg",
 "maxWidth": 50,
 "pressedIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_pressed.jpg",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633"
 ],
 "id": "Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 140,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "left": 0,
 "class": "ThumbnailGrid",
 "itemLabelHorizontalAlign": "center",
 "minWidth": 1,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "itemLabelFontFamily": "Oswald",
 "itemThumbnailOpacity": 1,
 "itemLabelFontStyle": "italic",
 "verticalAlign": "middle",
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemMode": "normal",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "paddingRight": 70,
 "height": "92%",
 "itemPaddingLeft": 3,
 "shadow": false,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "paddingLeft": 70,
 "itemMinHeight": 50,
 "selectedItemThumbnailShadow": true,
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "minHeight": 1,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 70,
 "borderRadius": 5,
 "gap": 26,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailShadow": false,
 "itemPaddingBottom": 3,
 "itemThumbnailWidth": 220,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70",
 "width": "100%",
 "paddingLeft": 0,
 "class": "WebFrame",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "borderSize": 0,
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "insetBorder": false,
 "shadow": false,
 "height": "100%",
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "data": {
  "name": "WebFrame"
 }
},
{
 "data": {
  "name": "X"
 },
 "id": "IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848",
 "iconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848.jpg",
 "paddingLeft": 0,
 "class": "IconButton",
 "width": "25%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": "75%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_rollover.jpg",
 "maxWidth": 50,
 "pressedIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_pressed.jpg",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
  "this.IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
  "this.IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
  "this.IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F"
 ],
 "id": "Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "left": "0%",
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "minWidth": 1,
 "toolTipFontSize": 12,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "minHeight": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54"
 ],
 "id": "Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "paddingRight": 0,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_17520AC5_57D1_805F_41CD_E7281C08A967"
 ],
 "id": "Container_17521AC5_57D1_805F_41CD_E04DDA9C90DD",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "55%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_1752EAC5_57D1_805F_41D2_28E2DB3AFCF5",
  "this.Container_1752DAC5_57D1_805F_41D3_AAEEE721B441",
  "this.Container_17517AC5_57D1_805F_41B5_79DEF98B730F"
 ],
 "id": "Container_1752FAC5_57D1_805F_4193_13B2577B9D8A",
 "layout": "vertical",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "paddingLeft": 60,
 "class": "Container",
 "width": "45%",
 "minWidth": 460,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 60,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "minHeight": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "gap": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "X"
 },
 "id": "IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0",
 "iconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0.jpg",
 "paddingLeft": 0,
 "class": "IconButton",
 "width": "25%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": "75%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, false, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0_rollover.jpg",
 "maxWidth": 60,
 "pressedIconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0_pressed.jpg",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": false
},
{
 "data": {
  "name": "-Level 1"
 },
 "children": [
  "this.Container_8ADB14EE_98B5_3A11_41C3_520CD29FC1DE",
  "this.Button_89303178_98B7_1AF2_41DD_644C3AEE4206",
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_5B1F16A9_4F08_3101_41C0_148FE9D83410",
  "this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
  "this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062",
  "this.Button_76406192_664C_DD96_41DA_2AD99350FF47",
  "this.Container_7719F456_6674_DA9E_41CB_8A118F7B6AA1",
  "this.Button_77704C27_6675_4ABE_419D_4ACFF4FDAE82",
  "this.Container_8874AF25_87CF_E272_41C3_22A8B2C10EC3",
  "this.Button_89E85B1D_87D0_E252_41C6_EECA75C8107C",
  "this.Container_908C6EB5_87F0_E253_41D8_7613BC0E9149",
  "this.Button_977CD46C_87F0_66F1_41D2_B71A66DA64BA",
  "this.Container_97803F2D_87F0_6273_419D_552C1A094198",
  "this.Button_897F1707_87F0_A23E_41BE_C57AEB9C06F4",
  "this.Container_976AC8CD_87F0_AE33_41D9_193006853921",
  "this.Button_88A3C85D_87F0_AED3_41A6_5FECA996BBD6",
  "this.Container_88016544_87F0_A632_41D4_FA39F3C31586",
  "this.Button_88C754B4_87F0_A651_41DC_0E0A95BFD0AB",
  "this.Container_8880DF69_87F0_E2F3_41D9_ACB1F1C8E413",
  "this.Button_889E0B89_87F0_A232_41D6_941FC2125ACD",
  "this.Container_9715F9E5_87F0_61F3_41D2_66DBA703A286",
  "this.Button_97989F09_87F0_A233_41B1_0020FA0BF167",
  "this.Container_96F481AA_87F0_5E76_41D1_ACAD4B5F6EA9",
  "this.Button_881A0C30_87F3_A652_41D5_ECAD229F868A",
  "this.Container_976AB196_87F1_DE5E_41DC_74C17AC44B67"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "layout": "vertical",
 "scrollBarOpacity": 0.3,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0.01%",
 "width": "99.306%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "horizontalAlign": "left",
 "top": "27.41%",
 "bottom": "19.22%",
 "contentOpaque": false,
 "paddingRight": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "scrollBarWidth": 6,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "99.315%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "bottom",
 "bottom": "0%",
 "contentOpaque": false,
 "height": 94,
 "paddingRight": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "Image_9F5EA5A6_87D0_A67E_41DE_39F2664F4725",
 "width": "81.25%",
 "paddingLeft": 0,
 "class": "Image",
 "right": "9.13%",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_9F5EA5A6_87D0_A67E_41DE_39F2664F4725.png",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "top": "0.08%",
 "paddingRight": 0,
 "height": "16.687%",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 500,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 500,
 "propagateClick": false,
 "data": {
  "name": "Image16446"
 }
},
{
 "fontFamily": "Bahnschrift SemiBold SemiConden",
 "data": {
  "name": "Label17497"
 },
 "id": "Label_9C453D13_87D0_6656_41AA_875891D292A9",
 "width": 125,
 "paddingLeft": 0,
 "left": "7.88%",
 "class": "Label",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "text": "Visita Virtual 360º",
 "fontColor": "#CCCCCC",
 "verticalAlign": "middle",
 "top": "17.33%",
 "paddingRight": 0,
 "height": "5.2%",
 "fontSize": "1.48vmin",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "propagateClick": false,
 "fontWeight": "bold"
},
{
 "id": "Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2",
 "width": "100%",
 "paddingLeft": 0,
 "left": "0%",
 "class": "Image",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2.jpg",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 1000,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 2000,
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_6ECE4198_4F7D_CE0F_41A0_688A405FA9A1",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 60,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "minHeight": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_6ECE2198_4F7D_CE0F_41C1_6D512C0D0B76",
  "this.Button_6ECE1198_4F7D_CE0F_41D1_D607B97BA20A"
 ],
 "id": "Container_6ECE3198_4F7D_CE0F_41B9_971123164DFE",
 "layout": "vertical",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 100,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 520,
 "paddingBottom": 30,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_6ECE0198_4F7D_CE0F_41C2_173DE9AC91EC",
 "layout": "horizontal",
 "width": 370,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 40,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633",
 "iconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633.jpg",
 "paddingLeft": 0,
 "class": "IconButton",
 "right": 20,
 "width": "100%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "mode": "push",
 "height": "36.14%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_rollover.jpg",
 "paddingBottom": 0,
 "maxWidth": 50,
 "pressedIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "left": "0%",
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "minWidth": 1,
 "toolTipFontSize": 12,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingLeft": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "minHeight": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
 "left": 10,
 "iconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "width": "14.22%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_rollover.png",
 "paddingBottom": 0,
 "maxWidth": 60,
 "pressedIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
 "iconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2.png",
 "paddingLeft": 0,
 "class": "IconButton",
 "right": 10,
 "width": "14.22%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_rollover.png",
 "paddingBottom": 0,
 "maxWidth": 60,
 "pressedIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "id": "IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F",
 "iconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F.jpg",
 "paddingLeft": 0,
 "class": "IconButton",
 "right": 20,
 "width": "10%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "mode": "push",
 "height": "10%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_rollover.jpg",
 "paddingBottom": 0,
 "maxWidth": 50,
 "pressedIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54",
 "iconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54.jpg",
 "paddingLeft": 0,
 "class": "IconButton",
 "right": 20,
 "width": "100%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "mode": "push",
 "height": "36.14%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_rollover.jpg",
 "paddingBottom": 0,
 "maxWidth": 50,
 "pressedIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "Image_17520AC5_57D1_805F_41CD_E7281C08A967",
 "width": "100%",
 "paddingLeft": 0,
 "left": "0%",
 "class": "Image",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_17520AC5_57D1_805F_41CD_E7281C08A967.jpg",
 "horizontalAlign": "center",
 "verticalAlign": "bottom",
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 1000,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 2000,
 "propagateClick": false,
 "data": {
  "name": "Image40635"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_1752EAC5_57D1_805F_41D2_28E2DB3AFCF5",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": "5%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "minHeight": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_1752BAC5_57D1_805F_41C3_4D3FE0C946A5",
  "this.Container_1752AAC5_57D1_805F_41C3_F3A70F1424E8"
 ],
 "id": "Container_1752DAC5_57D1_805F_41D3_AAEEE721B441",
 "layout": "vertical",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 100,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 520,
 "paddingBottom": 30,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_17517AC5_57D1_805F_41B5_79DEF98B730F",
 "layout": "horizontal",
 "width": 370,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 40,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_8ADB14EE_98B5_3A11_41C3_520CD29FC1DE",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_89303178_98B7_1AF2_41DD_644C3AEE4206",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 1 - Reception"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "IMAGEM A\u00c9REA",
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 1 - Reception"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "FACHADA",
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-Level 1-1"
 },
 "children": [
  "this.Container_5AB80F7A_40D3_00DE_41A8_8792700781B8",
  "this.Container_5AB81F7A_40D3_00DE_4193_93E255B8DA1C",
  "this.Button_5AB86F7A_40D3_00DE_41BD_D1B9EFCA70D1",
  "this.Button_5AB87F7A_40D3_00DE_41AA_215C597649E9",
  "this.Button_5AB84F7B_40D3_00DE_4195_429283488EB1",
  "this.Button_5AB85F7B_40D3_00DE_41A0_52785BEFA815",
  "this.Button_5AB8AF7B_40D3_00DE_41CD_E4BAA6CA3ED1",
  "this.Button_5AB8BF7B_40D3_00DE_41C1_48C8A4A660AA",
  "this.Button_5AB88F7B_40D3_00DE_41BD_3AF4ED80C40D",
  "this.Button_5AB89F7B_40D3_00DE_41CB_5B6BD4AD03BA"
 ],
 "id": "Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F",
 "layout": "vertical",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "height": 200,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "visible": false,
 "scrollBarWidth": 7,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5B1F16A9_4F08_3101_41C0_148FE9D83410",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 2 - Rooms"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "HALL DE ENTRADA",
 "click": "this.mainPlayList.set('selectedIndex', 8)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-Level 2-1"
 },
 "children": [
  "this.Container_5C1E1373_4F3B_D701_4161_AB709172EB1F",
  "this.Container_5C1E7373_4F3B_D701_41C1_E84E9BE9E240",
  "this.Button_5C1EA374_4F3B_D707_41BE_00FEEB6D514B",
  "this.Button_5C1E8374_4F3B_D707_41C8_C8242B461C37",
  "this.Button_5C1EE375_4F3B_D701_41C9_0ED79D773CB5",
  "this.Button_5C1ED376_4F3B_D703_41C6_ED2C0CFAEEDA",
  "this.Button_5C1F3376_4F3B_D703_41D1_B5D8230D600A",
  "this.Button_5C1F6376_4F3B_D703_41CC_A886AFB8DA74",
  "this.Button_5C1F4377_4F3B_D701_41C6_00BBE5EF20C9",
  "this.Button_5C1FB377_4F3B_D701_41B8_31B63BB846ED"
 ],
 "id": "Container_5C6A33C4_4F3B_D700_41A4_C665386EA359",
 "layout": "vertical",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "height": 200,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "visible": false,
 "scrollBarWidth": 7,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 3 - Amenities"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "ELEVADORES",
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-Level 3-1"
 },
 "children": [
  "this.Container_5C7DCB10_4F38_571F_41B6_A2C80BEB0DB6",
  "this.Container_5C7DEB11_4F38_5701_41D1_BD9BEF92F61B",
  "this.Button_5C467B11_4F38_5701_41BD_6ADABBF10640",
  "this.Button_5C461B12_4F38_5703_41A5_2B58A57259CB",
  "this.Button_5C463B13_4F38_5701_41D3_7F808639BD58",
  "this.Button_5C47EB13_4F38_5701_41D0_849C58570FD5",
  "this.Button_5C478B14_4F38_5707_41B7_E567FC5BFF03",
  "this.Button_5C47BB14_4F38_5707_41C5_004237DF4BC7",
  "this.Button_5C475B14_4F38_5707_41B5_45CB509F3FEC",
  "this.Button_5C470B15_4F38_5701_41C8_8315EAA43F47"
 ],
 "id": "Container_5C522B60_4F38_573F_41CA_3223B2D946A3",
 "layout": "vertical",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "height": 200,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "visible": false,
 "scrollBarWidth": 7,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 4 - Sports area"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "SALA",
 "click": "this.mainPlayList.set('selectedIndex', 12)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-Level 4-1"
 },
 "children": [
  "this.Container_5CB12513_4F38_7300_41C1_CF46A5DB681C",
  "this.Container_5CBEF513_4F38_7300_41CD_FE4054DD71DB",
  "this.Button_5CBE8514_4F38_7300_41C7_4C2B003C16FE",
  "this.Button_5CBEA514_4F38_7300_41C4_E7D746E7D487",
  "this.Button_5CBE4515_4F38_7300_41D1_1CA43C43E7F8",
  "this.Button_5CBE1515_4F38_7300_41B8_0BE61EE2A2AC",
  "this.Button_5CBE2516_4F38_7300_41B3_266EC752AC75",
  "this.Button_5CBFF516_4F38_7300_41C0_01CB82BCD11E",
  "this.Button_5CBF9517_4F38_7300_41BB_8710868B4E0A",
  "this.Button_5CBFA517_4F38_7300_41CC_D4157FF5A756"
 ],
 "id": "Container_5C937563_4F38_7301_41CE_2342D0CB6B4F",
 "layout": "vertical",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "height": 200,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "visible": false,
 "scrollBarWidth": 7,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 5 - Swimming"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "QUARTO",
 "click": "this.mainPlayList.set('selectedIndex', 13)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "BANHEIRO",
 "click": "this.mainPlayList.set('selectedIndex', 14)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-Level 6-1"
 },
 "children": [
  "this.Container_5CDED17E_4F38_5303_41CD_E7D6CF4384E1",
  "this.Container_5CDE817F_4F38_5301_41CB_1573369D710F",
  "this.Button_5CDE217F_4F38_5301_41C6_96F7478E4BCD",
  "this.Button_5CDFE180_4F38_53FF_41BA_C2AE8CF20676",
  "this.Button_5CDFA180_4F38_53FF_41B1_A82E7A427261",
  "this.Button_5CDF7181_4F38_5301_41D0_9F8175F5BACF",
  "this.Button_5CDF2181_4F38_5301_419E_50D4A975C358",
  "this.Button_5CDCF182_4F38_5303_41BA_3B4FB28D5CC6",
  "this.Button_5CDCD187_4F38_5301_41D2_1D9369EA7682",
  "this.Button_5CDC6188_4F38_530F_416D_D8C2C6CAD624"
 ],
 "id": "Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062",
 "layout": "vertical",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "height": 200,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "visible": false,
 "scrollBarWidth": 7,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_76406192_664C_DD96_41DA_2AD99350FF47",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 1 - Reception"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "COZINHA",
 "click": "this.mainPlayList.set('selectedIndex', 10)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_7719F456_6674_DA9E_41CB_8A118F7B6AA1",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_77704C27_6675_4ABE_419D_4ACFF4FDAE82",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "\u00c1REA DE SERVI\u00c7O",
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_8874AF25_87CF_E272_41C3_22A8B2C10EC3",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_89E85B1D_87D0_E252_41C6_EECA75C8107C",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "PISCINA",
 "click": "this.mainPlayList.set('selectedIndex', 29)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_908C6EB5_87F0_E253_41D8_7613BC0E9149",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_977CD46C_87F0_66F1_41D2_B71A66DA64BA",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "SAL\u00c3O FESTAS",
 "click": "this.mainPlayList.set('selectedIndex', 30)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_97803F2D_87F0_6273_419D_552C1A094198",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_897F1707_87F0_A23E_41BE_C57AEB9C06F4",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "ACADEMIA",
 "click": "this.mainPlayList.set('selectedIndex', 25)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_976AC8CD_87F0_AE33_41D9_193006853921",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_88A3C85D_87F0_AED3_41A6_5FECA996BBD6",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "BIKES",
 "click": "this.mainPlayList.set('selectedIndex', 26)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_88016544_87F0_A632_41D4_FA39F3C31586",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_88C754B4_87F0_A651_41DC_0E0A95BFD0AB",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "CAF\u00c9",
 "click": "this.mainPlayList.set('selectedIndex', 35)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_8880DF69_87F0_E2F3_41D9_ACB1F1C8E413",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_889E0B89_87F0_A232_41D6_941FC2125ACD",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "SALA REUNI\u00d5ES",
 "click": "this.mainPlayList.set('selectedIndex', 34)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_9715F9E5_87F0_61F3_41D2_66DBA703A286",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_97989F09_87F0_A233_41B1_0020FA0BF167",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "ESPA\u00c7O KIDS",
 "click": "this.mainPlayList.set('selectedIndex', 27)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_96F481AA_87F0_5E76_41D1_ACAD4B5F6EA9",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_881A0C30_87F3_A652_41D5_ECAD229F868A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 10,
 "fontSize": 18,
 "class": "Button",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderSize": 0,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "mode": "toggle",
 "height": 50,
 "shadow": false,
 "label": "LAZER",
 "click": "this.mainPlayList.set('selectedIndex', 28)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_976AB196_87F1_DE5E_41DC_74C17AC44B67",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "HTMLText",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": 78,
 "paddingRight": 0,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "data": {
  "name": "-Container Icons 1"
 },
 "children": [
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 44,
 "paddingRight": 0,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 10)",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 7,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "-Container Icons 2"
 },
 "children": [
  "this.IconButton_75C712EF_664C_FF8E_41D0_16348A6DE2E0",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
  "this.IconButton_A8186BB4_8850_A252_41DD_A84BB22D7F76"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "77.241%",
 "minWidth": 2,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 41,
 "paddingRight": 0,
 "shadow": false,
 "paddingTop": 3,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 7,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "id": "HTMLText_6ECE2198_4F7D_CE0F_41C1_6D512C0D0B76",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 10,
 "class": "HTMLText",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingRight": 10,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 20,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.24vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.71vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.71vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.02vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin. </SPAN></DIV><p STYLE=\"margin:0; line-height:2.02vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.02vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.69vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_6ECE1198_4F7D_CE0F_41D1_D607B97BA20A",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": 180,
 "paddingLeft": 0,
 "fontSize": "2.39vh",
 "class": "Button",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#04A3E1"
 ],
 "paddingRight": 0,
 "mode": "push",
 "height": 50,
 "shadow": false,
 "label": "LOREM IPSUM",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0.7,
 "paddingBottom": 0,
 "borderRadius": 50,
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "id": "HTMLText_1752BAC5_57D1_805F_41C3_4D3FE0C946A5",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 0,
 "class": "HTMLText",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "20%",
 "paddingRight": 0,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.71vh;font-family:'Oswald';\"><B><I>ANFITRI\u00c3O</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_74F2816C_665C_FAB2_41CC_7CEA55B657CA",
  "this.HTMLText_17528AC5_57D1_805F_41CC_502F9EE91657"
 ],
 "id": "Container_1752AAC5_57D1_805F_41C3_F3A70F1424E8",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": "75%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_5AB80F7A_40D3_00DE_41A8_8792700781B8",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_5AB81F7A_40D3_00DE_4193_93E255B8DA1C",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "paddingRight": 0,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5AB86F7A_40D3_00DE_41BD_D1B9EFCA70D1",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Main Entrance",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5AB87F7A_40D3_00DE_41AA_215C597649E9",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lobby",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5AB84F7B_40D3_00DE_4195_429283488EB1",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "pressedLabel": "Reception",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Reception",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5AB85F7B_40D3_00DE_41A0_52785BEFA815",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Meeting Area 1",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5AB8AF7B_40D3_00DE_41CD_E4BAA6CA3ED1",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Meeting Area 2",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5AB8BF7B_40D3_00DE_41C1_48C8A4A660AA",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Bar",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5AB88F7B_40D3_00DE_41BD_3AF4ED80C40D",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Chill Out",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5AB89F7B_40D3_00DE_41CB_5B6BD4AD03BA",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Terrace",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_5C1E1373_4F3B_D701_4161_AB709172EB1F",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_5C1E7373_4F3B_D701_41C1_E84E9BE9E240",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "paddingRight": 0,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C1EA374_4F3B_D707_41BE_00FEEB6D514B",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C1E8374_4F3B_D707_41C8_C8242B461C37",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C1EE375_4F3B_D701_41C9_0ED79D773CB5",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C1ED376_4F3B_D703_41C6_ED2C0CFAEEDA",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C1F3376_4F3B_D703_41D1_B5D8230D600A",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C1F6376_4F3B_D703_41CC_A886AFB8DA74",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C1F4377_4F3B_D701_41C6_00BBE5EF20C9",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C1FB377_4F3B_D701_41B8_31B63BB846ED",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_5C7DCB10_4F38_571F_41B6_A2C80BEB0DB6",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_5C7DEB11_4F38_5701_41D1_BD9BEF92F61B",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "paddingRight": 0,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C467B11_4F38_5701_41BD_6ADABBF10640",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C461B12_4F38_5703_41A5_2B58A57259CB",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C463B13_4F38_5701_41D3_7F808639BD58",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C47EB13_4F38_5701_41D0_849C58570FD5",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C478B14_4F38_5707_41B7_E567FC5BFF03",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C47BB14_4F38_5707_41C5_004237DF4BC7",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C475B14_4F38_5707_41B5_45CB509F3FEC",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5C470B15_4F38_5701_41C8_8315EAA43F47",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_5CB12513_4F38_7300_41C1_CF46A5DB681C",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_5CBEF513_4F38_7300_41CD_FE4054DD71DB",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "paddingRight": 0,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CBE8514_4F38_7300_41C7_4C2B003C16FE",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CBEA514_4F38_7300_41C4_E7D746E7D487",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CBE4515_4F38_7300_41D1_1CA43C43E7F8",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CBE1515_4F38_7300_41B8_0BE61EE2A2AC",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CBE2516_4F38_7300_41B3_266EC752AC75",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CBFF516_4F38_7300_41C0_01CB82BCD11E",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CBF9517_4F38_7300_41BB_8710868B4E0A",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CBFA517_4F38_7300_41CC_D4157FF5A756",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_5CDED17E_4F38_5303_41CD_E7D6CF4384E1",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "id": "Container_5CDE817F_4F38_5301_41CB_1573369D710F",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "class": "Container",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "paddingRight": 0,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CDE217F_4F38_5301_41C6_96F7478E4BCD",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CDFE180_4F38_53FF_41BA_C2AE8CF20676",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CDFA180_4F38_53FF_41B1_A82E7A427261",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CDF7181_4F38_5301_41D0_9F8175F5BACF",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CDF2181_4F38_5301_419E_50D4A975C358",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CDCF182_4F38_5303_41BA_3B4FB28D5CC6",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CDCD187_4F38_5301_41D2_1D9369EA7682",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_5CDC6188_4F38_530F_416D_D8C2C6CAD624",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "width": "100%",
 "paddingLeft": 20,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "borderSize": 0,
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "label": "Lorem Ipsum",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.3,
 "textDecoration": "none",
 "fontStyle": "italic",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "data": {
  "name": "IconButton Thumblist"
 },
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "width": 44,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 44,
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, true, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 101,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "maxWidth": 101,
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": false
},
{
 "data": {
  "name": "IconButton Location"
 },
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "width": 44,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 44,
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "click": "this.openLink('https://www.google.com/maps/place/R.+Quintino+Bocai%C3%BAva,+139+-+Centro,+Chapec%C3%B3+-+SC,+89802-250/@-27.0983615,-52.6216897,17z/data=!3m1!4b1!4m5!3m4!1s0x94e4b42756628bd5:0xbea382cafd4c0eb7!8m2!3d-27.0983663!4d-52.6174625', '_blank')",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 101,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "maxWidth": 101,
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": false
},
{
 "data": {
  "name": "IconButton Realtor"
 },
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "width": 44,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 44,
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, true, 0, null, null, false)",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 101,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "maxWidth": 101,
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": false
},
{
 "data": {
  "name": "IconButton29805"
 },
 "id": "IconButton_75C712EF_664C_FF8E_41D0_16348A6DE2E0",
 "width": 41,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_75C712EF_664C_FF8E_41D0_16348A6DE2E0.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "click": "this.openLink('https://www.instagram.com/desbrava_oeste/?utm_medium=copy_link', '_blank')",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "borderRadius": 0,
 "maxWidth": 50,
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": false
},
{
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "width": 50,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 50,
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 101,
 "borderRadius": 0,
 "paddingBottom": 0,
 "maxWidth": 101,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "visible": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton --"
 }
},
{
 "data": {
  "name": "IconButton23437"
 },
 "id": "IconButton_A8186BB4_8850_A252_41DD_A84BB22D7F76",
 "width": 50,
 "paddingLeft": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_A8186BB4_8850_A252_41DD_A84BB22D7F76.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 36,
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "click": "this.openLink('https://www.airbnb.com.br/rooms/48135579?check_in=2022-08-24&check_out=2022-08-26&federated_search_id=449b2e10-9701-461f-a73f-1b1466caacab&source_impression_id=p3_1660140677_fhorx0Pkahxicnkv', '_blank')",
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "borderRadius": 0,
 "maxWidth": 50,
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": false
},
{
 "id": "Image_74F2816C_665C_FAB2_41CC_7CEA55B657CA",
 "width": "23.824%",
 "paddingLeft": 0,
 "class": "Image",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_74F2816C_665C_FAB2_41CC_7CEA55B657CA.jpg",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": "23.978%",
 "paddingRight": 0,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "maxHeight": 960,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 951,
 "propagateClick": false,
 "data": {
  "name": "Image27443"
 }
},
{
 "id": "HTMLText_17528AC5_57D1_805F_41CC_502F9EE91657",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 10,
 "class": "HTMLText",
 "width": "75%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingRight": 10,
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.02vh;font-family:'Oswald';\"><B><I>WELLINGTON PUPO</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;font-family:'Oswald';\"><I>Membro desde 2017</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.02vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.02vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:2.02vh;font-family:'Oswald';\"><I>Tlf.: (49) 9 9944-9786</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.02vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:2.02vh;font-family:'Oswald';\"><I>@desbrava_oeste</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.02vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.02vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.02vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;\">Sobre</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;\">Vive em Chapec\u00f3, Brasil</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;\">Idiomas: English, Espa\u00f1ol, Portugu\u00eas</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.playAudioList([this.audio_A1A50446_8850_E63E_41BC_6A9F2D887FC8]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_691B6C80_7506_9D4B_41B4_89FD1E7BCC23",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821",
  "this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
  "this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
  "this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
  "this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
  "this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8",
  "this.IconButton_A07FEC55_8850_66D2_41CA_BFE49D4B6528",
  "this.IconButton_A126AD2E_8850_664E_4195_936F10ED41D1"
 ],
 "id": "rootPlayer",
 "vrPolyfillScale": 0.97,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "class": "Player",
 "layout": "absolute",
 "width": "100%",
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "existsKey": function(key){  return key in window; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "downloadEnabled": false,
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "minHeight": 20,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
