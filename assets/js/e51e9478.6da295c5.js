"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={aliases:"Create an image (Advanced), Advanced Image Generation, Flux Image Creation"},i="Create an image (Advanced)",o={unversionedId:"tools/flux_dev",id:"tools/flux_dev",title:"Create an image (Advanced)",description:"Generate high-quality images using the advanced Flux model. This tool offers enhanced prompt coherence, superior aesthetics, and excellent text rendering capabilities with support for style transfer, shape guidance, and custom models.",source:"@site/docs/tools/flux_dev.md",sourceDirName:"tools",slug:"/tools/flux_dev",permalink:"/docs/tools/flux_dev",draft:!1,tags:[],version:"current",lastUpdatedAt:1738341056,formattedLastUpdatedAt:"Jan 31, 2025",frontMatter:{aliases:"Create an image (Advanced), Advanced Image Generation, Flux Image Creation"},sidebar:"tutorialSidebar",previous:{title:"Create a stylized selfie",permalink:"/docs/tools/face_styler"},next:{title:"Replace part of an image (Inpaint)",permalink:"/docs/tools/flux_inpainting"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Technical Guidelines",id:"technical-guidelines",level:2},{value:"Resolution Options",id:"resolution-options",level:3},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Style Transfer",id:"style-transfer",level:3},{value:"Shape Guidance",id:"shape-guidance",level:3},{value:"Custom Models",id:"custom-models",level:3},{value:"Technical Details",id:"technical-details",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Response Format",id:"response-format",level:3},{value:"Common Issues and Solutions",id:"common-issues-and-solutions",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-image-advanced"},"Create an image (Advanced)"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://edenartlab-prod-data.s3.us-east-1.amazonaws.com/app/flux.png",width:"50%",alt:"thumbnail"})),(0,r.kt)("p",null,"Generate high-quality images using the advanced Flux model. This tool offers enhanced prompt coherence, superior aesthetics, and excellent text rendering capabilities with support for style transfer, shape guidance, and custom models."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Advanced text-to-image generation"),(0,r.kt)("li",{parentName:"ul"},"ControlNet shape guidance "),(0,r.kt)("li",{parentName:"ul"},"Style image transfer"),(0,r.kt)("li",{parentName:"ul"},"Custom model (LoRA) support"),(0,r.kt)("li",{parentName:"ul"},"Text rendering optimization")),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Visit Eden Create: ",(0,r.kt)("a",{parentName:"li",href:"https://beta.eden.art/create/flux_dev"},"Create an image (Advanced)")," tool"),(0,r.kt)("li",{parentName:"ol"},"Enter your descriptive prompt"),(0,r.kt)("li",{parentName:"ol"},"Adjust width and height settings"),(0,r.kt)("li",{parentName:"ol"},'Click "Create"')),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#api-reference"},"API Reference")," section for API usage examples."),(0,r.kt)("p",null,'Ask an Eden agent to "Create an image (Advanced)".'),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"Required parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prompt"),(0,r.kt)("li",{parentName:"ul"},"Width (256-2048px)"),(0,r.kt)("li",{parentName:"ul"},"Height (256-2048px)")),(0,r.kt)("p",null,"Optional features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Style image transfer"),(0,r.kt)("li",{parentName:"ul"},"Shape guidance via ControlNet"),(0,r.kt)("li",{parentName:"ul"},"Custom LoRA models"),(0,r.kt)("li",{parentName:"ul"},"Starting image")),(0,r.kt)("h2",{id:"technical-guidelines"},"Technical Guidelines"),(0,r.kt)("h3",{id:"resolution-options"},"Resolution Options"),(0,r.kt)("p",null,"Best practice resolutions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1536x640 (21:9)"),(0,r.kt)("li",{parentName:"ul"},"1344x768 (16:9)"),(0,r.kt)("li",{parentName:"ul"},"1216x832 (3:2)"),(0,r.kt)("li",{parentName:"ul"},"1152x896 (4:3)"),(0,r.kt)("li",{parentName:"ul"},"1024x1024 (1:1)"),(0,r.kt)("li",{parentName:"ul"},"768x1344 (9:16)"),(0,r.kt)("li",{parentName:"ul"},"640x1536 (9:21)")),(0,r.kt)("p",null,"Higher resolutions possible in 64-pixel increments (e.g., 1920x1088, 1408x1408)"),(0,r.kt)("h2",{id:"advanced-features"},"Advanced Features"),(0,r.kt)("h3",{id:"style-transfer"},"Style Transfer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enable with ",(0,r.kt)("inlineCode",{parentName:"li"},"use_style_image")),(0,r.kt)("li",{parentName:"ul"},"Control influence with ",(0,r.kt)("inlineCode",{parentName:"li"},"style_strength")," (0.5-0.9)"),(0,r.kt)("li",{parentName:"ul"},"Optimal default: 0.75")),(0,r.kt)("h3",{id:"shape-guidance"},"Shape Guidance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uses ControlNet preprocessors"),(0,r.kt)("li",{parentName:"ul"},"Options: edges, depth, lines, soft lines, human pose, scribble"),(0,r.kt)("li",{parentName:"ul"},"Strength adjustable via ",(0,r.kt)("inlineCode",{parentName:"li"},"controlnet_strength"))),(0,r.kt)("h3",{id:"custom-models"},"Custom Models"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support for up to 2 LoRA models"),(0,r.kt)("li",{parentName:"ul"},"Independent strength controls"),(0,r.kt)("li",{parentName:"ul"},"Best for specific styles or subjects")),(0,r.kt)("h2",{id:"technical-details"},"Technical Details"),(0,r.kt)("p",null,"Base Model: Flux-dev (Black Forest Labs)"),(0,r.kt)("p",null,"Default Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Steps: 25"),(0,r.kt)("li",{parentName:"ul"},"Prompt Conditioning: 2.5"),(0,r.kt)("li",{parentName:"ul"},"Style Strength: 0.75"),(0,r.kt)("li",{parentName:"ul"},"ControlNet Strength: 0.6")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"endpoint"},"Endpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://api.eden.art/v2/tasks/create" \\\n  -H "Content-Type: application/json" \\\n  -H "X-Api-Key: YOUR_API_KEY" \\\n  -d \'{\n    "tool": "flux_dev",\n    "args": {\n      "prompt": "a man on the moon, planting an american flag on the surface, rocketship in the background",\n      "width": 1024,\n      "height": 1024,\n      "n_samples": 1,\n      "seed": 111\n    }\n  }\'\n')),(0,r.kt)("h3",{id:"response-format"},"Response Format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "task": {\n    "_id": "task_12345",\n    "createdAt": "2024-01-29T21:52:07.171578+00:00",\n    "updatedAt": "2024-01-29T21:52:07.171608+00:00",\n    "user": "user_id",\n    "requester": "requester_id", \n    "tool": "flux_dev",\n    "parent_tool": null,\n    "output_type": "image",\n    "args": {\n      "prompt": "a man on the moon, planting an american flag on the surface, rocketship in the background",\n      "width": 1024,\n      "height": 1024,\n      "n_samples": 1,\n      "seed": 111\n    },\n    "mock": false,\n    "cost": 2,\n    "handler_id": "fc-xxxxx",\n    "status": "pending",\n    "error": null,\n    "result": null,\n    "performance": null\n  }\n}\n')),(0,r.kt)("h2",{id:"common-issues-and-solutions"},"Common Issues and Solutions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Low Prompt Adherence"),": Increase prompt conditioning value (2.5-3.0)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Style Transfer Too Strong"),": Reduce style_strength below 0.75"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LoRA Dominance"),": Lower lora_strength for better prompt balance"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Poor Shape Guidance"),": Try different preprocessor or increase controlnet_strength")))}c.isMDXComponent=!0}}]);