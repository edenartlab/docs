"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},i="JavaScript SDK",s={unversionedId:"guides/sdk",id:"guides/sdk",title:"JavaScript SDK",description:"API keys are currently in beta. If you'd like to use the SDK, please reach out to the devs on Discord.",source:"@site/docs/guides/sdk.md",sourceDirName:"guides",slug:"/guides/sdk",permalink:"/docs/guides/sdk",draft:!1,tags:[],version:"current",lastUpdatedAt:1704255757,formattedLastUpdatedAt:"Jan 3, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Creative AI Agents",permalink:"/docs/guides/agents"},next:{title:"Python SDK",permalink:"/docs/guides/python-sdk"}},l={},c=[{value:"Get API credentials",id:"get-api-credentials",level:2},{value:"Installation",id:"installation",level:2},{value:"Make a creation",id:"make-a-creation",level:2},{value:"Hello Eden",id:"hello-eden",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascript-sdk"},"JavaScript SDK"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"API keys are currently in beta. If you'd like to use the SDK, please reach out to the devs on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/4dSYwDT"},"Discord"),".")),(0,r.kt)("p",null,"The Eden SDK is a JavaScript library for interacting with the Eden API. The SDK allows you to make creation requests programatically and integrate Eden-facing widgets into your own applications. It is available as an npm package, with a commonjs version and Python SDK also planned for the near future."),(0,r.kt)("p",null,"Full API documentation is available at ",(0,r.kt)("a",{parentName:"p",href:"https://api.eden.art/documentation/"},"https://api.eden.art/documentation"),". Some browsers have issues opening the documentation, so if you have trouble, try using a different browser or use incognito mode."),(0,r.kt)("h2",{id:"get-api-credentials"},"Get API credentials"),(0,r.kt)("p",null,"To get an API key, please message one of the devs in ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/4dSYwDT"},"the Discord")," and ask for one."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You can install the SDK with npm, yarn, or pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @edenlabs/eden-sdk\n")),(0,r.kt)("h2",{id:"make-a-creation"},"Make a creation"),(0,r.kt)("p",null,"A full list of generators and their config parameters can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://app.eden.art/create"},"creation tool"),"."),(0,r.kt)("p",null,"All requests to Eden go through the ",(0,r.kt)("inlineCode",{parentName:"p"},"EdenClient"),' class. To make a task request, target a specific generator (e.g. "create") with a configuration object. For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import {EdenClient} from "@edenlabs/eden-sdk";\n\nconst eden = new EdenClient({\n  apiKey: "YOUR_EDEN_API_KEY",\n  apiSecret: "YOUR_EDEN_API_SECRET",\n});\n\nconst config = {\n  text_input: "An apple tree in a field",\n};\n\nconst urls = await eden.create({\n  generatorName: "create",\n  config: config\n});\nconsole.log(urls[0])\n')),(0,r.kt)("p",null,"Alternatively, you can create a task and poll for the result manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const taskResult = await eden.tasks.create({\n  generatorName: "create", \n  config: config\n});\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tasks.create")," method is asynchronous and will immediately return a ",(0,r.kt)("inlineCode",{parentName:"p"},"taskResult")," object with an ID for that task (or an error message). If you want to wait for the task to complete, you can poll the task until it is done, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const pollForTask = async function(pollingInterval, taskId) {\n  let finished = false;\n  while (!finished) {\n    const taskResult = await eden.tasks.get({taskId: taskId});\n    if (taskResult.task.status == "faled") {\n      throw new Error(\'Failed\')\n    }\n    else if (taskResult.task.status == "completed") {\n      finished = true;\n      const url = taskResult.task.creation.uri;\n      return url;\n    }\n    await new Promise(resolve => setTimeout(resolve, pollingInterval))\n  }\n}\n\nconst result = await pollForTask(5000, taskResult.taskId);\n')),(0,r.kt)("h2",{id:"hello-eden"},"Hello Eden"),(0,r.kt)("p",null,"An example React app which shows how to authenticate with the Eden SDK and make creations in a boilerplate NextJS web application is available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/edenartlab/hello-eden"},"here"),"."))}u.isMDXComponent=!0}}]);