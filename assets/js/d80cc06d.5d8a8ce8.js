"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8476:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={aliases:"Keyframe Interpolation, Frame Interpolation, Video Interpolation, Image Sequence Animation"},l="Keyframe Interpolation",i={unversionedId:"tools/frame_interpolation",id:"tools/frame_interpolation",title:"Keyframe Interpolation",description:"Create smooth video animations by interpolating between a sequence of keyframe images. This tool generates fluid transitions between images using advanced frame interpolation technology, perfect for creating morphing effects, seamless loops, and dynamic visual sequences.",source:"@site/docs/tools/frame_interpolation.md",sourceDirName:"tools",slug:"/tools/frame_interpolation",permalink:"/docs/tools/frame_interpolation",draft:!1,tags:[],version:"current",lastUpdatedAt:1738341056,formattedLastUpdatedAt:"Jan 31, 2025",frontMatter:{aliases:"Keyframe Interpolation, Frame Interpolation, Video Interpolation, Image Sequence Animation"},sidebar:"tutorialSidebar",previous:{title:"Replace part of an image (Inpaint)",permalink:"/docs/tools/flux_inpainting"},next:{title:"Create an image with transparency",permalink:"/docs/tools/layer_diffusion"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Technical Guidelines",id:"technical-guidelines",level:2},{value:"Frame Settings",id:"frame-settings",level:3},{value:"Best Practices for Inputs",id:"best-practices-for-inputs",level:2},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Loop Options",id:"loop-options",level:3},{value:"Sort Methods",id:"sort-methods",level:3},{value:"Interpolation Models",id:"interpolation-models",level:3},{value:"Technical Details",id:"technical-details",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Response Format",id:"response-format",level:3},{value:"Common Issues and Solutions",id:"common-issues-and-solutions",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keyframe-interpolation"},"Keyframe Interpolation"),(0,r.kt)("div",{align:"center"},(0,r.kt)("video",{width:"50%",controls:!0},(0,r.kt)("source",{src:"https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/frame_interpolation_opt.mp4",type:"video/mp4"}))),(0,r.kt)("p",null,"Create smooth video animations by interpolating between a sequence of keyframe images. This tool generates fluid transitions between images using advanced frame interpolation technology, perfect for creating morphing effects, seamless loops, and dynamic visual sequences."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate smooth transitions between multiple images"),(0,r.kt)("li",{parentName:"ul"},"Support for up to 20 keyframe images"),(0,r.kt)("li",{parentName:"ul"},"Adjustable interpolation frames for transition control"),(0,r.kt)("li",{parentName:"ul"},"Multiple loop options (seamless loop and ping-pong)"),(0,r.kt)("li",{parentName:"ul"},"Visual path optimization for best frame ordering")),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Visit Eden Create: ",(0,r.kt)("a",{parentName:"li",href:"https://beta.eden.art/create/frame_interpolation"},"Keyframe Interpolation")," tool"),(0,r.kt)("li",{parentName:"ol"},"Upload 2-20 keyframe images"),(0,r.kt)("li",{parentName:"ol"},"Set interpolation frames (2-60)"),(0,r.kt)("li",{parentName:"ol"},'Click "Create"')),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#api-reference"},"API Reference")," section below for API usage examples."),(0,r.kt)("p",null,'Ask an Eden agent to "Keyframe Interpolation".'),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"Required inputs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1-20 keyframe images"),(0,r.kt)("li",{parentName:"ul"},"Interpolation frames (2-60)")),(0,r.kt)("p",null,"Optional settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FPS (1-60, default: 24)"),(0,r.kt)("li",{parentName:"ul"},"Loop options"),(0,r.kt)("li",{parentName:"ul"},"Sort method"),(0,r.kt)("li",{parentName:"ul"},"Interpolation model")),(0,r.kt)("h2",{id:"technical-guidelines"},"Technical Guidelines"),(0,r.kt)("h3",{id:"frame-settings"},"Frame Settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FPS: 1-60 (default: 24)"),(0,r.kt)("li",{parentName:"ul"},"Interpolation frames: 2-60 frames per transition"),(0,r.kt)("li",{parentName:"ul"},"Maximum keyframes: 20 images"),(0,r.kt)("li",{parentName:"ul"},"Supported models: RIFE 4.7, RIFE 4.9, FILM")),(0,r.kt)("h2",{id:"best-practices-for-inputs"},"Best Practices for Inputs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use consistent image resolutions across keyframes"),(0,r.kt)("li",{parentName:"ul"},"Ensure visual similarity between consecutive frames for smoother transitions"),(0,r.kt)("li",{parentName:"ul"},"Consider using visual_path sorting for optimal frame ordering"),(0,r.kt)("li",{parentName:"ul"},"Keep total frame count reasonable for better processing time")),(0,r.kt)("h2",{id:"advanced-features"},"Advanced Features"),(0,r.kt)("h3",{id:"loop-options"},"Loop Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard loop: Interpolates back to first frame"),(0,r.kt)("li",{parentName:"ul"},"Ping-pong: Creates forward-reverse animation"),(0,r.kt)("li",{parentName:"ul"},"Configuration tips:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use loop for seamless circular transitions"),(0,r.kt)("li",{parentName:"ul"},"Use ping-pong for bouncing effects")))),(0,r.kt)("h3",{id:"sort-methods"},"Sort Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None: Maintains original order"),(0,r.kt)("li",{parentName:"ul"},"visual_path: Optimizes frame order for smoothest transitions"),(0,r.kt)("li",{parentName:"ul"},"random: Randomizes frame order")),(0,r.kt)("h3",{id:"interpolation-models"},"Interpolation Models"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RIFE 4.9 (default): Fast, efficient for most cases"),(0,r.kt)("li",{parentName:"ul"},"RIFE 4.7: Alternative RIFE version"),(0,r.kt)("li",{parentName:"ul"},"FILM: Higher quality but slower processing")),(0,r.kt)("h2",{id:"technical-details"},"Technical Details"),(0,r.kt)("p",null,"Base technology:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RIFE frame interpolation"),(0,r.kt)("li",{parentName:"ul"},"FILM frame interpolation")),(0,r.kt)("p",null,"Supported formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Input: Common image formats"),(0,r.kt)("li",{parentName:"ul"},"Output: Video file")),(0,r.kt)("p",null,"Limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maximum 20 keyframe images"),(0,r.kt)("li",{parentName:"ul"},"Maximum 60 interpolation frames"),(0,r.kt)("li",{parentName:"ul"},"Processing time increases with frame count")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"endpoint"},"Endpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://api.eden.art/v2/tasks/create" \\\n  -H "Content-Type: application/json" \\\n  -H "X-Api-Key: YOUR_API_KEY" \\\n  -d \'{\n    "tool": "frame_interpolation",\n    "args": {\n      "images": [\n        "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/xander.png",\n        "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/xander_baby.png",\n        "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/xander_joker.png"\n      ],\n      "loop": true,\n      "interpolation_frames": 23,\n      "model": "rife49.pth"\n    }\n  }\'\n')),(0,r.kt)("h3",{id:"response-format"},"Response Format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "task": {\n    "_id": "task_12345",\n    "createdAt": "2024-01-29T21:52:07.171578+00:00",\n    "updatedAt": "2024-01-29T21:52:07.171608+00:00",\n    "user": "user_id",\n    "requester": "requester_id",\n    "tool": "frame_interpolation",\n    "parent_tool": null,\n    "output_type": "video",\n    "args": {\n      "images": [\n        "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/xander.png",\n        "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/xander_baby.png",\n        "https://edenartlab-lfs.s3.amazonaws.com/comfyui/models2/assets/xander_joker.png"\n      ],\n      "loop": true,\n      "interpolation_frames": 23,\n      "model": "rife49.pth"\n    },\n    "mock": false,\n    "cost": 48,\n    "handler_id": "fc-xxxxx",\n    "status": "pending",\n    "error": null,\n    "result": null,\n    "performance": null\n  }\n}\n')),(0,r.kt)("h2",{id:"common-issues-and-solutions"},"Common Issues and Solutions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Long processing times",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Reduce number of interpolation frames"),(0,r.kt)("li",{parentName:"ul"},"Use RIFE model instead of FILM"))),(0,r.kt)("li",{parentName:"ul"},"Choppy transitions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Increase interpolation frames"),(0,r.kt)("li",{parentName:"ul"},"Ensure keyframes are visually similar"))),(0,r.kt)("li",{parentName:"ul"},"Poor frame ordering",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Try visual_path sorting method"),(0,r.kt)("li",{parentName:"ul"},"Manually arrange keyframes if needed")))))}c.isMDXComponent=!0}}]);