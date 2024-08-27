"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[73659],{2753:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(74848),r=t(28453),l=t(49489),s=t(7227);const i={id:"getting-started",title:"Getting Started with React",sidebar_label:"Getting Started",sidebar_position:1,description:"Learn how to get started with React by creating a new app using Create React App. Follow the steps to set up your development environment and build your first React application.",tags:["React","JavaScript","User interfaces","Library","Virtual DOM","Declarative syntax","Components","Rendering","Web applications","Node.js","Create React App","Development server","React fundamentals","State management","Props","React documentation","React hooks","React Router","React Context API","Awesome React"]},c=void 0,o={id:"react/getting-started/getting-started",title:"Getting Started with React",description:"Learn how to get started with React by creating a new app using Create React App. Follow the steps to set up your development environment and build your first React application.",source:"@site/docs/react/getting-started/getting-started.md",sourceDirName:"react/getting-started",slug:"/react/getting-started/",permalink:"/docs/react/getting-started/",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/getting-started/getting-started.md",tags:[{inline:!0,label:"React",permalink:"/docs/tags/react"},{inline:!0,label:"JavaScript",permalink:"/docs/tags/java-script"},{inline:!0,label:"User interfaces",permalink:"/docs/tags/user-interfaces"},{inline:!0,label:"Library",permalink:"/docs/tags/library"},{inline:!0,label:"Virtual DOM",permalink:"/docs/tags/virtual-dom"},{inline:!0,label:"Declarative syntax",permalink:"/docs/tags/declarative-syntax"},{inline:!0,label:"Components",permalink:"/docs/tags/components"},{inline:!0,label:"Rendering",permalink:"/docs/tags/rendering"},{inline:!0,label:"Web applications",permalink:"/docs/tags/web-applications"},{inline:!0,label:"Node.js",permalink:"/docs/tags/node-js"},{inline:!0,label:"Create React App",permalink:"/docs/tags/create-react-app"},{inline:!0,label:"Development server",permalink:"/docs/tags/development-server"},{inline:!0,label:"React fundamentals",permalink:"/docs/tags/react-fundamentals"},{inline:!0,label:"State management",permalink:"/docs/tags/state-management"},{inline:!0,label:"Props",permalink:"/docs/tags/props"},{inline:!0,label:"React documentation",permalink:"/docs/tags/react-documentation"},{inline:!0,label:"React hooks",permalink:"/docs/tags/react-hooks"},{inline:!0,label:"React Router",permalink:"/docs/tags/react-router"},{inline:!0,label:"React Context API",permalink:"/docs/tags/react-context-api"},{inline:!0,label:"Awesome React",permalink:"/docs/tags/awesome-react"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710658508e3,sidebarPosition:1,frontMatter:{id:"getting-started",title:"Getting Started with React",sidebar_label:"Getting Started",sidebar_position:1,description:"Learn how to get started with React by creating a new app using Create React App. Follow the steps to set up your development environment and build your first React application.",tags:["React","JavaScript","User interfaces","Library","Virtual DOM","Declarative syntax","Components","Rendering","Web applications","Node.js","Create React App","Development server","React fundamentals","State management","Props","React documentation","React hooks","React Router","React Context API","Awesome React"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Folder Structure",permalink:"/docs/react/getting-started/folder-structure"}},p={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Get Started Immediately",id:"get-started-immediately",level:2},{value:"Creating a New App",id:"creating-a-new-app",level:2},{value:"Using npx",id:"using-npx",level:3},{value:"Using npm",id:"using-npm",level:3},{value:"Using Yarn",id:"using-yarn",level:3},{value:"Selecting a Template",id:"selecting-a-template",level:2},{value:"Creating a TypeScript App",id:"creating-a-typescript-app",level:3},{value:"Selecting a Package Manager",id:"selecting-a-package-manager",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Available Scripts",id:"available-scripts",level:2},{value:"Start the Development Server",id:"start-the-development-server",level:3},{value:"Test the App",id:"test-the-app",level:3},{value:"Build the App for Production",id:"build-the-app-for-production",level:3},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components},{BrowserWindow:i}=a;return i||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Create React App is an officially supported way to create single-page React applications. It provides a modern build setup with zero configuration required."}),"\n",(0,n.jsx)(a.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsx)(a.p,{children:"To quickly get started with Create React App, follow these steps:"}),"\n",(0,n.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,n.jsx)(s.A,{value:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:"npx create-react-app my-app\ncd my-app\nnpm start\n"})})}),(0,n.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:"npx create-react-app my-app\ncd my-app\nyarn start\n"})})}),(0,n.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:"npx create-react-app my-app\ncd my-app\npnpm start\n"})})})]}),"\n",(0,n.jsxs)(a.p,{children:["If you have previously installed ",(0,n.jsx)(a.code,{children:"create-react-app"})," globally using ",(0,n.jsx)(a.code,{children:"npm install -g create-react-app"}),", we recommend uninstalling it using ",(0,n.jsx)(a.code,{children:"npm uninstall -g create-react-app"})," or ",(0,n.jsx)(a.code,{children:"yarn global remove create-react-app"})," to ensure that the latest version is always used."]}),"\n",(0,n.jsxs)(a.p,{children:["Once the above commands have executed successfully, open ",(0,n.jsx)(a.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"})," in your browser to see your app."]}),"\n",(0,n.jsxs)(a.p,{children:["When you are ready to deploy your app to production, create a minified bundle using ",(0,n.jsx)(a.code,{children:"npm run build"}),"."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"npm start",src:t(77101).A+"",width:"825",height:"595"})}),"\n",(0,n.jsx)(a.h2,{id:"get-started-immediately",children:"Get Started Immediately"}),"\n",(0,n.jsx)(a.p,{children:"With Create React App, you don't need to install or configure tools like webpack or Babel. They are already preconfigured and hidden, allowing you to focus solely on writing code."}),"\n",(0,n.jsx)(a.p,{children:"Just create a project, and you're good to go!"}),"\n",(0,n.jsx)(a.h2,{id:"creating-a-new-app",children:"Creating a New App"}),"\n",(0,n.jsx)(a.p,{children:"To create a new React app, you can choose one of the following methods based on your preferred package manager:"}),"\n",(0,n.jsx)(a.h3,{id:"using-npx",children:"Using npx"}),"\n",(0,n.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,n.jsx)(s.A,{value:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npx create-react-app@latest my-app\n"})})}),(0,n.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npx create-react-app@latest my-app\n"})})}),(0,n.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npx create-react-app@latest my-app\n"})})})]}),"\n",(0,n.jsx)(a.h3,{id:"using-npm",children:"Using npm"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npm init react-app my-app\n"})}),"\n",(0,n.jsx)(a.p,{children:"Make sure you have npm 6+ installed on your machine."}),"\n",(0,n.jsx)(a.h3,{id:"using-yarn",children:"Using Yarn"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"yarn create react-app my-app\n"})}),"\n",(0,n.jsx)(a.p,{children:"Make sure you have Yarn 0.25+ installed."}),"\n",(0,n.jsx)(a.h2,{id:"selecting-a-template",children:"Selecting a Template"}),"\n",(0,n.jsxs)(a.p,{children:["You can optionally start a new app from a template by appending ",(0,n.jsx)(a.code,{children:"--template [template-name]"})," to the creation command. If no template is selected, your project will be created with the base template."]}),"\n",(0,n.jsxs)(a.p,{children:["Templates are named in the format ",(0,n.jsx)(a.code,{children:"cra-template-[template-name]"}),". You only need to provide the ",(0,n.jsx)(a.code,{children:"[template-name]"})," to the creation command."]}),"\n",(0,n.jsx)(a.p,{children:"For example:"}),"\n",(0,n.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,n.jsx)(s.A,{value:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npx create-react-app my-app --template [template-name]\n"})})}),(0,n.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npx create-react-app my-app --template [template-name]\n"})})}),(0,n.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npx create-react-app my-app --template [template-name]\n"})})})]}),"\n",(0,n.jsxs)(a.p,{children:["You can find a list of available templates by searching for ",(0,n.jsx)(a.a,{href:"https://www.npmjs.com/search?q=cra-template-*",children:'"cra-template-*"'})," on npm."]}),"\n",(0,n.jsxs)(a.p,{children:["To build your own template, refer to our ",(0,n.jsx)(a.code,{children:"Custom Templates"})," documentation."]}),"\n",(0,n.jsx)(a.h3,{id:"creating-a-typescript-app",children:"Creating a TypeScript App"}),"\n",(0,n.jsxs)(a.p,{children:["To start a new TypeScript app, append ",(0,n.jsx)(a.code,{children:"--template typescript"})," to the creation command:"]}),"\n",(0,n.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,n.jsx)(s.A,{value:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npx create-react-app my-app --template typescript\n"})})}),(0,n.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npx create-react-app my-app --template typescript\n"})})}),(0,n.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npx create-react-app my-app --template typescript\n"})})})]}),"\n",(0,n.jsxs)(a.p,{children:["If you already have a project and want to add TypeScript, check out our ",(0,n.jsx)("u",{children:"Adding TypeScript"})," documentation."]}),"\n",(0,n.jsx)(a.h2,{id:"selecting-a-package-manager",children:"Selecting a Package Manager"}),"\n",(0,n.jsxs)(a.p,{children:["When creating a new app, the CLI will use either npm or Yarn to install dependencies, depending on the tool you use to run ",(0,n.jsx)(a.code,{children:"create-react-app"}),"."]}),"\n",(0,n.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,n.jsx)(s.A,{value:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npx create-react-app my-app\n"})})}),(0,n.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npx create-react-app my-app\n"})})}),(0,n.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npx create-react-app my-app\n"})})})]}),"\n",(0,n.jsx)(a.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,n.jsxs)(a.p,{children:["Running the above commands will create a directory named ",(0,n.jsx)(a.code,{children:"my-app"})," in the current folder. Inside this directory, the initial project structure and necessary dependencies will be generated:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"my-app\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon.ico\n\u2502   \u251c\u2500\u2500 index.html\n\u2502   \u251c\u2500\u2500 logo192.png\n\u2502   \u251c\u2500\u2500 logo512.png\n\u2502   \u251c\u2500\u2500 manifest.json\n\u2502   \u2514\u2500\u2500 robots.txt\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 App.css\n    \u251c\u2500\u2500 App.js\n    \u251c\u2500\u2500 App.test.js\n    \u251c\u2500\u2500 index.css\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 logo.svg\n    \u251c\u2500\u2500 serviceWorker.js\n    \u2514\u2500\u2500 setupTests.js\n"})}),"\n",(0,n.jsx)(a.p,{children:"No configuration or complex folder structures are required. You will find only the files necessary to build your app. Once the installation is complete, navigate to your project folder:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"cd my-app\n"})}),"\n",(0,n.jsx)(a.h2,{id:"available-scripts",children:"Available Scripts"}),"\n",(0,n.jsx)(a.p,{children:"Inside the project folder, you can run the following built-in commands:"}),"\n",(0,n.jsx)(a.h3,{id:"start-the-development-server",children:"Start the Development Server"}),"\n",(0,n.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,n.jsx)(s.A,{value:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npm start\n"})})}),(0,n.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"yarn start\n"})})}),(0,n.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"pnpm start\n"})})})]}),"\n",(0,n.jsxs)(a.p,{children:["Runs the app in development mode. Open ",(0,n.jsx)(a.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," in your browser to view it."]}),"\n",(0,n.jsx)(i,{children:(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsxs)("header",{style:{minHeight:"80vh",display:" flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)"},children:[(0,n.jsx)("img",{src:"/code-harbor-hub/img/docs/react/logo.svg",className:"App-logo",alt:"logo"}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:(0,n.jsx)(a.p,{children:"Edit src/App.js and save to reload."})}),(0,n.jsx)("a",{style:{color:"#61dafb"},href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(a.p,{children:"Learn React"})})]})})}),"\n",(0,n.jsx)(a.p,{children:"The page will automatically reload if you make changes to the code. Any build errors or lint warnings will be displayed in the console."}),"\n",(0,n.jsx)(a.h3,{id:"test-the-app",children:"Test the App"}),"\n",(0,n.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,n.jsx)(s.A,{value:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npm test\n"})})}),(0,n.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"yarn test\n"})})}),(0,n.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"pnpm test\n"})})})]}),"\n",(0,n.jsx)(a.p,{children:"Runs the test watcher in interactive mode. By default, it runs tests related to files changed since the last commit. Refer to our `Running Tests`` documentation for more details."}),"\n",(0,n.jsx)(a.h3,{id:"build-the-app-for-production",children:"Build the App for Production"}),"\n",(0,n.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,n.jsx)(s.A,{value:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"npm run build\n"})})}),(0,n.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"yarn build\n"})})}),(0,n.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-pwsh",children:"pnpm run build\n"})})})]}),"\n",(0,n.jsxs)(a.p,{children:["Builds the app for production in the ",(0,n.jsx)(a.code,{children:"build"})," folder. It bundles React in production mode and optimizes the build for better performance."]}),"\n",(0,n.jsx)(a.p,{children:"The build output is minified, and the filenames include hashes for caching."}),"\n",(0,n.jsxs)(a.p,{children:["Your app is now ready to be deployed! Check out our ",(0,n.jsx)(a.code,{children:"Deployment"})," documentation to learn how to deploy your app to popular hosting providers."]}),"\n",(0,n.jsx)(a.admonition,{title:"Vite for React Development",type:"tip",children:(0,n.jsxs)(a.p,{children:["For an alternative and more modern approach to setting up your React projects, consider using Vite, a blazing-fast build tool. Learn more about getting started with React and Vite in our dedicated guide: ",(0,n.jsx)(a.a,{href:"/blog/getting-started-with-vite",children:"Getting Started with React and Vite"}),"."]})}),"\n",(0,n.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(a.p,{children:"In this guide, we learned how to get started with React by creating a new app using Create React App. We followed the steps to set up our development environment and build our first React application. We also explored the project structure and available scripts for managing our React app."})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},7227:(e,a,t)=>{t.d(a,{A:()=>s});t(96540);var n=t(34164);const r={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:a,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:t,children:a})}},49489:(e,a,t)=>{t.d(a,{A:()=>w});var n=t(96540),r=t(34164),l=t(24245),s=t(56347),i=t(36494),c=t(62814),o=t(45167),p=t(69900);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,o.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const r=(0,s.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,c.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function g(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,l=u(e),[s,c]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[o,d]=m({queryString:t,groupId:r}),[g,x]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,p.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),j=(()=>{const e=o??g;return h({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=t(11062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function y(e){let{className:a,block:t,selectedValue:n,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),p=e=>{const a=e.currentTarget,t=c.indexOf(a),r=i[t].value;r!==n&&(o(a),s(r))},d=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a),children:i.map((e=>{let{value:a,label:t,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>c.push(e),onKeyDown:d,onClick:p,...l,className:(0,r.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function v(e){let{lazy:a,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function f(e){const a=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(y,{...a,...e}),(0,b.jsx)(v,{...a,...e})]})}function w(e){const a=(0,x.A)();return(0,b.jsx)(f,{...e,children:d(e.children)},String(a))}},77101:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/getting-started-react-13a4ad1130b6bf8f68b967089863f10d.svg"},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>i});var n=t(96540);const r={},l=n.createContext(r);function s(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);