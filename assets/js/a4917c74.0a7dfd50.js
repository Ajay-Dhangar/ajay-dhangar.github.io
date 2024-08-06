"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[21193],{10019:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=a(74848),n=a(28453);const i={id:"alternatives-to-ejecting",title:"Alternatives to Ejecting",sidebar_label:"Alternatives to Ejecting",sidebar_position:5,tags:["React","Create React App","Advanced Usage"],keywords:["alternatives to ejecting","create react app","react-scripts","craco","custom scripts","package.json","ejectify","custom templates","boilerplates"],description:"Learn about alternatives to ejecting from Create React App and how to customize your project without ejecting."},s=void 0,r={id:"react/advanced-usage/alternatives-to-ejecting",title:"Alternatives to Ejecting",description:"Learn about alternatives to ejecting from Create React App and how to customize your project without ejecting.",source:"@site/docs/react/advanced-usage/alternatives-to-ejecting.md",sourceDirName:"react/advanced-usage",slug:"/react/advanced-usage/alternatives-to-ejecting",permalink:"/docs/react/advanced-usage/alternatives-to-ejecting",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/advanced-usage/alternatives-to-ejecting.md",tags:[{inline:!0,label:"React",permalink:"/docs/tags/react"},{inline:!0,label:"Create React App",permalink:"/docs/tags/create-react-app"},{inline:!0,label:"Advanced Usage",permalink:"/docs/tags/advanced-usage"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710610499e3,sidebarPosition:5,frontMatter:{id:"alternatives-to-ejecting",title:"Alternatives to Ejecting",sidebar_label:"Alternatives to Ejecting",sidebar_position:5,tags:["React","Create React App","Advanced Usage"],keywords:["alternatives to ejecting","create react app","react-scripts","craco","custom scripts","package.json","ejectify","custom templates","boilerplates"],description:"Learn about alternatives to ejecting from Create React App and how to customize your project without ejecting."},sidebar:"tutorialSidebar",previous:{title:"Advanced Configuration",permalink:"/docs/react/advanced-usage/advanced-configuration"},next:{title:"Troubleshooting",permalink:"/docs/react/support/troubleshooting"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"1. <strong>Customize with react-scripts</strong>",id:"1-customize-with-react-scripts",level:2},{value:"2. <strong>CRACO - Create React App Configuration Override</strong>",id:"2-craco---create-react-app-configuration-override",level:2},{value:"3. <strong>Custom Scripts in <code>package.json</code></strong>",id:"3-custom-scripts-in-packagejson",level:2},{value:"4. <strong>Ejectify - The Un-Ejecting Tool</strong>",id:"4-ejectify---the-un-ejecting-tool",level:2},{value:"5. <strong>Custom Templates and Boilerplates</strong>",id:"5-custom-templates-and-boilerplates",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"Create React App (CRA) is an awesome tool that provides a quick and easy way to set up a React project with no build configuration. However, sometimes you might find yourself needing more control over the build process or wanting to add custom configurations. The traditional way to achieve this is by ejecting from Create React App, but it can be a bit intimidating for beginners and can lead to maintenance headaches. Fear not, for there are some fantastic alternatives that will let you customize your project without the need to eject! \ud83d\ude80"}),"\n",(0,o.jsxs)(t.h2,{id:"1-customize-with-react-scripts",children:["1. ",(0,o.jsx)(t.strong,{children:"Customize with react-scripts"})]}),"\n",(0,o.jsxs)(t.p,{children:["Instead of ejecting, you can use the ",(0,o.jsx)(t.code,{children:"react-scripts"})," package that comes with Create React App under the hood. It offers hidden features that you can use to tweak your project's settings without ejecting. Create a file in the root of your project called ",(0,o.jsx)(t.code,{children:".env"}),", and you can add custom environment variables like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-plaintext",children:"REACT_APP_MY_VARIABLE=hello-coders\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Now you can access this variable in your code using ",(0,o.jsx)(t.code,{children:"process.env.REACT_APP_MY_VARIABLE"}),"."]}),"\n",(0,o.jsxs)(t.h2,{id:"2-craco---create-react-app-configuration-override",children:["2. ",(0,o.jsx)(t.strong,{children:"CRACO - Create React App Configuration Override"})]}),"\n",(0,o.jsx)(t.p,{children:"CRACO is like magic for your Create React App projects. It stands for Create React App Configuration Override and lets you easily modify CRA's configuration without ejecting. You can add custom webpack configurations, Babel plugins, and much more, all from a single configuration file. It's like wielding a powerful wand to control your project's build process! \ud83e\uddd9\u200d\u2642\ufe0f"}),"\n",(0,o.jsxs)(t.h2,{id:"3-custom-scripts-in-packagejson",children:["3. ",(0,o.jsxs)(t.strong,{children:["Custom Scripts in ",(0,o.jsx)(t.code,{children:"package.json"})]})]}),"\n",(0,o.jsxs)(t.p,{children:["For simpler customizations, you can add your own scripts directly to the ",(0,o.jsx)(t.code,{children:"package.json"})," file. For example, you can create a script to run a pre-build task or automate some setup steps. Just add something like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'"scripts": {\n  "custom-script": "node scripts/customScript.js"\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Then, you can run your custom script using ",(0,o.jsx)(t.code,{children:"npm run custom-script"}),"."]}),"\n",(0,o.jsxs)(t.h2,{id:"4-ejectify---the-un-ejecting-tool",children:["4. ",(0,o.jsx)(t.strong,{children:"Ejectify - The Un-Ejecting Tool"})]}),"\n",(0,o.jsx)(t.p,{children:'Ejectify is a fun and clever tool that reverses the eject process. Instead of ejecting, you can use Ejectify to "un-eject" your Create React App project. This means you can revert to a state similar to a pre-eject status while keeping all your customizations intact! It\'s like traveling back in time to undo a decision without any regrets! \u23f0'}),"\n",(0,o.jsxs)(t.h2,{id:"5-custom-templates-and-boilerplates",children:["5. ",(0,o.jsx)(t.strong,{children:"Custom Templates and Boilerplates"})]}),"\n",(0,o.jsxs)(t.p,{children:["If you have specific project requirements, you can create your own custom templates or boilerplates with all the necessary configurations pre-set. Tools like ",(0,o.jsx)(t.code,{children:"degit"})," allow you to easily scaffold a new project based on your custom template, saving you time and effort. It's like having your own personalized React project starter kit! \ud83c\udf81"]}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(t.p,{children:"As you can see, there's no need to fear the eject button anymore! With these amazing alternatives, you can confidently customize your Create React App projects without the complexity and drawbacks of ejecting. So go ahead, unleash your creativity, and build incredible React applications while keeping the magic of Create React App alive! Happy coding! \ud83d\ude04\ud83d\ude80"})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>r});var o=a(96540);const n={},i=o.createContext(n);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);