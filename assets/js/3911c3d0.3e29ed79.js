"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=i,m=c["".concat(o,".").concat(f)]||c[f]||p[f]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={aliases:"AI video effects, Video Effects Generator, Video Style Transfer"},l="AI Video Effects",s={unversionedId:"tools/video_FX",id:"tools/video_FX",title:"AI Video Effects",description:"Apply creative AI effects to specific regions of videos using style transfer. This tool enables targeted application of AI-generated effects based on depth, edges, and brightness, allowing you to enhance backgrounds, add animated textures, or stylize specific areas while preserving key details.",source:"@site/docs/tools/video_FX.md",sourceDirName:"tools",slug:"/tools/video_FX",permalink:"/docs/tools/video_FX",draft:!1,tags:[],version:"current",lastUpdatedAt:1738341056,formattedLastUpdatedAt:"Jan 31, 2025",frontMatter:{aliases:"AI video effects, Video Effects Generator, Video Style Transfer"},sidebar:"tutorialSidebar",previous:{title:"Stylize a video",permalink:"/docs/tools/vid2vid_sdxl"},next:{title:"Upscale a video",permalink:"/docs/tools/video_upscaler"}},o={},u=[{value:"Overview",id:"overview",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Technical Guidelines",id:"technical-guidelines",level:2},{value:"Resolution Options",id:"resolution-options",level:3},{value:"Frame Settings",id:"frame-settings",level:3},{value:"Best Practices for Inputs",id:"best-practices-for-inputs",level:2},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Region Targeting",id:"region-targeting",level:3},{value:"Depth-Based Effects",id:"depth-based-effects",level:4},{value:"Edge Detection",id:"edge-detection",level:4},{value:"Luminance Control",id:"luminance-control",level:4},{value:"Effect Strength Control",id:"effect-strength-control",level:3},{value:"Technical Details",id:"technical-details",level:2},{value:"Processing Specifications",id:"processing-specifications",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Common Issues and Solutions",id:"common-issues-and-solutions",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Response Format",id:"response-format",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ai-video-effects"},"AI Video Effects"),(0,i.kt)("div",{align:"center"},(0,i.kt)("video",{width:"50%",controls:!0},(0,i.kt)("source",{src:"https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/video_FX_thumbnail.mp4",type:"video/mp4"}))),(0,i.kt)("p",null,"Apply creative AI effects to specific regions of videos using style transfer. This tool enables targeted application of AI-generated effects based on depth, edges, and brightness, allowing you to enhance backgrounds, add animated textures, or stylize specific areas while preserving key details."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Region-specific video effects using depth, edge, and luminance masks"),(0,i.kt)("li",{parentName:"ul"},"Style transfer from reference images"),(0,i.kt)("li",{parentName:"ul"},"Customizable effect strength per region"),(0,i.kt)("li",{parentName:"ul"},"Frame-by-frame processing with temporal consistency")),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit Eden Create: ",(0,i.kt)("a",{parentName:"li",href:"https://beta.eden.art/create/video_FX"},"AI video effects")," tool"),(0,i.kt)("li",{parentName:"ol"},"Upload your source video"),(0,i.kt)("li",{parentName:"ol"},"Upload a style reference image"),(0,i.kt)("li",{parentName:"ol"},"Adjust effect strengths and regions"),(0,i.kt)("li",{parentName:"ol"},'Click "Create"')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#api-reference"},"API Reference")," section below for API usage examples."),(0,i.kt)("p",null,'Ask an Eden agent to "AI video effects".'),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("p",null,"Required inputs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Source video"),(0,i.kt)("li",{parentName:"ul"},"Style reference image"),(0,i.kt)("li",{parentName:"ul"},"Number of frames (default: 24)"),(0,i.kt)("li",{parentName:"ul"},"Processing resolution (default: 1024)")),(0,i.kt)("h2",{id:"technical-guidelines"},"Technical Guidelines"),(0,i.kt)("h3",{id:"resolution-options"},"Resolution Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Minimum: 768px"),(0,i.kt)("li",{parentName:"ul"},"Default: 1024px"),(0,i.kt)("li",{parentName:"ul"},"Maximum: 1280px"),(0,i.kt)("li",{parentName:"ul"},"Higher resolutions improve quality but increase processing time")),(0,i.kt)("h3",{id:"frame-settings"},"Frame Settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Minimum frames: 16"),(0,i.kt)("li",{parentName:"ul"},"Maximum frames: 512"),(0,i.kt)("li",{parentName:"ul"},"Output duration = frames/8 seconds"),(0,i.kt)("li",{parentName:"ul"},"Default: 24 frames (3 seconds)")),(0,i.kt)("h2",{id:"best-practices-for-inputs"},"Best Practices for Inputs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use high-quality source videos"),(0,i.kt)("li",{parentName:"ul"},"Choose style images that complement your video content"),(0,i.kt)("li",{parentName:"ul"},"Start with default settings before fine-tuning"),(0,i.kt)("li",{parentName:"ul"},"Test with lower resolutions first")),(0,i.kt)("h2",{id:"advanced-features"},"Advanced Features"),(0,i.kt)("h3",{id:"region-targeting"},"Region Targeting"),(0,i.kt)("h4",{id:"depth-based-effects"},"Depth-Based Effects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"close_strength"),": -1.0 to 1.0 (default: -0.1)"),(0,i.kt)("li",{parentName:"ul"},"Targets regions based on camera distance"),(0,i.kt)("li",{parentName:"ul"},"Negative values affect far objects, positive values affect close objects")),(0,i.kt)("h4",{id:"edge-detection"},"Edge Detection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"edge_strength"),": -1.0 to 1.0 (default: -0.2)"),(0,i.kt)("li",{parentName:"ul"},"Controls effect strength on textured areas"),(0,i.kt)("li",{parentName:"ul"},"Negative values target flat regions")),(0,i.kt)("h4",{id:"luminance-control"},"Luminance Control"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"luminance_strength"),": -1.0 to 1.0 (default: 0.0)"),(0,i.kt)("li",{parentName:"ul"},"Applies effects based on brightness"),(0,i.kt)("li",{parentName:"ul"},"Negative values target dark areas, positive values target bright areas")),(0,i.kt)("h3",{id:"effect-strength-control"},"Effect Strength Control"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_denoise"),": 0.0 to 1.0 (default: 0.55)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_denoise"),": 0.0 to 0.4 (default: 0.0)")),(0,i.kt)("h2",{id:"technical-details"},"Technical Details"),(0,i.kt)("h3",{id:"processing-specifications"},"Processing Specifications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Base resolution: 1024px"),(0,i.kt)("li",{parentName:"ul"},"Frame processing: Sequential"),(0,i.kt)("li",{parentName:"ul"},"Temporal consistency maintained"),(0,i.kt)("li",{parentName:"ul"},"Cost estimate: 0.75 ",(0,i.kt)("em",{parentName:"li"}," n_frames ")," resolution/1024")),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cannot replace objects"),(0,i.kt)("li",{parentName:"ul"},"Processing time increases with resolution"),(0,i.kt)("li",{parentName:"ul"},"Maximum 512 frames per video")),(0,i.kt)("h2",{id:"common-issues-and-solutions"},"Common Issues and Solutions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Artifacts in output",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Reduce max_denoise value"),(0,i.kt)("li",{parentName:"ul"},"Lower resolution for testing"))),(0,i.kt)("li",{parentName:"ol"},"Inconsistent effects",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Adjust region targeting parameters"),(0,i.kt)("li",{parentName:"ul"},"Ensure style image matches intended effect")))),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"endpoint"},"Endpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://api.eden.art/v2/tasks/create" \\\n  -H "Content-Type: application/json" \\\n  -H "X-Api-Key: YOUR_API_KEY" \\\n  -d \'{\n    "tool": "video_FX",\n    "args": {\n      "video": "https://edenartlab-stage-data.s3.amazonaws.com/b09ed23211a88017430bd687b1989dcd41f18222343fcd8f133f7cda489100b0.mp4",\n      "style_image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/bb88e857586a358ce3f02f92911588207fbddeabff62a3d6a479517a646f053c.jpg",\n      "n_frames": 24,\n      "resolution": 1024,\n      "close_strength": -0.1,\n      "edge_strength": -0.2,\n      "luminance_strength": 0.0,\n      "max_denoise": 0.55,\n      "min_denoise": 0.0\n    }\n  }\'\n')),(0,i.kt)("h3",{id:"response-format"},"Response Format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "task": {\n    "_id": "task_12345",\n    "createdAt": "2024-01-29T21:52:07.171578+00:00",\n    "updatedAt": "2024-01-29T21:52:07.171608+00:00",\n    "user": "user_id",\n    "requester": "requester_id",\n    "tool": "video_FX",\n    "parent_tool": null,\n    "output_type": "video",\n    "args": {\n      "video": "https://edenartlab-stage-data.s3.amazonaws.com/b09ed23211a88017430bd687b1989dcd41f18222343fcd8f133f7cda489100b0.mp4",\n      "style_image": "https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/bb88e857586a358ce3f02f92911588207fbddeabff62a3d6a479517a646f053c.jpg",\n      "n_frames": 24,\n      "resolution": 1024,\n      "close_strength": -0.1,\n      "edge_strength": -0.2,\n      "luminance_strength": 0.0,\n      "max_denoise": 0.55,\n      "min_denoise": 0.0\n    },\n    "mock": false,\n    "cost": 48,\n    "handler_id": "fc-xxxxx",\n    "status": "pending",\n    "error": null,\n    "result": null,\n    "performance": null\n  }\n}\n')))}p.isMDXComponent=!0}}]);