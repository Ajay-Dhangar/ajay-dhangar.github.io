"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[46544],{23998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(74848),i=n(28453);const a={id:"adding-typescript",title:"Adding TypeScript",sidebar_position:6,tags:["react","adding-typescript","typescript"],description:"Learn how to add TypeScript to your Create React App project. Enhance your code with type safety and unleash the power of TypeScript in your React applications."},o=void 0,s={id:"react/building-your-app/adding-typescript",title:"Adding TypeScript",description:"Learn how to add TypeScript to your Create React App project. Enhance your code with type safety and unleash the power of TypeScript in your React applications.",source:"@site/docs/react/building-your-app/adding-typescript.md",sourceDirName:"react/building-your-app",slug:"/react/building-your-app/adding-typescript",permalink:"/docs/react/building-your-app/adding-typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/building-your-app/adding-typescript.md",tags:[{inline:!0,label:"react",permalink:"/docs/tags/react"},{inline:!0,label:"adding-typescript",permalink:"/docs/tags/adding-typescript"},{inline:!0,label:"typescript",permalink:"/docs/tags/typescript"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710610499e3,sidebarPosition:6,frontMatter:{id:"adding-typescript",title:"Adding TypeScript",sidebar_position:6,tags:["react","adding-typescript","typescript"],description:"Learn how to add TypeScript to your Create React App project. Enhance your code with type safety and unleash the power of TypeScript in your React applications."},sidebar:"tutorialSidebar",previous:{title:"Adding Flow",permalink:"/docs/react/building-your-app/adding-flow"},next:{title:"Adding Relay",permalink:"/docs/react/building-your-app/adding-relay"}},c={},p=[{value:"Introduction:",id:"introduction",level:2},{value:"1: Embrace the TypeScript Magic",id:"1-embrace-the-typescript-magic",level:3},{value:"2: Enchanting Existing Projects",id:"2-enchanting-existing-projects",level:3},{value:"3: Venturing into TypeScript and React",id:"3-venturing-into-typescript-and-react",level:3},{value:"4: Overcoming Challenges and Sorcery",id:"4-overcoming-challenges-and-sorcery",level:3},{value:"Conclusion:",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Attention, aspiring wizards of code!"}),"\nWelcome to a magical journey where we shall unleash the power of TypeScript upon our Create React App. Fear not, for this enchanting endeavor shall aid you in writing more robust and delightful spells in the realm of React!"]}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction:"}),"\n",(0,r.jsx)(t.p,{children:"Welcome, brave Code Apprentices, to the realm of TypeScript\u2014a powerful sorcery that brings type safety and enchanting possibilities to your JavaScript spells. In this guide, we shall embark on an epic quest to integrate TypeScript into your Create React App, paving the way for a magical journey of robust and error-free coding!"}),"\n",(0,r.jsx)(t.h3,{id:"1-embrace-the-typescript-magic",children:"1: Embrace the TypeScript Magic"}),"\n",(0,r.jsxs)(t.p,{children:["TypeScript, a captivating typed superset of JavaScript, compiles to pure JavaScript, bringing clarity and precision to your code incantations. But fear not, for its integration is swift and graceful. To commence your journey, ensure your ",(0,r.jsx)(t.code,{children:"react-scripts"})," version is 2.1.0 or higher, and invoke the sacred command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"npx create-react-app my-app --template typescript\n"})}),"\n",(0,r.jsx)(t.p,{children:"Or, if you are a follower of the yarn tradition:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"yarn create react-app my-app --template typescript\n"})}),"\n",(0,r.jsx)(t.p,{children:"Fear not, for a seamless TypeScript setup awaits you!"}),"\n",(0,r.jsx)(t.h3,{id:"2-enchanting-existing-projects",children:"2: Enchanting Existing Projects"}),"\n",(0,r.jsx)(t.p,{children:"For seasoned adventurers with existing Create React App projects, the path to TypeScript enlightenment is equally accessible. Embark on this path by installing the following mystical packages:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"npm install --save typescript @types/node @types/react @types/react-dom @types/jest\n"})}),"\n",(0,r.jsx)(t.p,{children:"Or let yarn's magic weave its wonders:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"yarn add typescript @types/node @types/react @types/react-dom @types/jest\n"})}),"\n",(0,r.jsxs)(t.p,{children:["But be mindful, to unlock the true essence of TypeScript, bestow upon your files the illustrious ",(0,r.jsx)(t.code,{children:".tsx"})," extension (e.g., ",(0,r.jsx)(t.code,{children:"src/index.js"})," to ",(0,r.jsx)(t.code,{children:"src/index.tsx"}),"). And lo, as you cast your eyes upon your code, a ",(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",children:(0,r.jsx)(t.code,{children:"tsconfig.json"})})," shall emerge, guiding your TypeScript endeavors."]}),"\n",(0,r.jsxs)(t.p,{children:["Finally, to invoke the full powers of TypeScript, perform the sacred rite: ",(0,r.jsx)(t.strong,{children:"restart your development server!"})," Your creation shall now be shielded by the embrace of type safety."]}),"\n",(0,r.jsxs)(t.p,{children:["Behold, as the veil of type errors reveals itself in the console! Fear not, for by resolving these, you shall wield the mighty powers of TypeScript and take your React project to new heights. For the intrepid explorers, ",(0,r.jsx)(t.a,{href:"/docs/react/advanced-usage/advanced-configuration",children:"advanced configuration"})," awaits!"]}),"\n",(0,r.jsx)(t.h3,{id:"3-venturing-into-typescript-and-react",children:"3: Venturing into TypeScript and React"}),"\n",(0,r.jsx)(t.p,{children:"Dear adventurers, rejoice, for the journey has only begun! As you dive deeper into the depths of TypeScript, treasure troves of knowledge await:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"The TypeScript Handbook"}),": An exquisite tome that unveils the secrets of TypeScript's arcane syntax and features."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/play/index.html?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react",children:"TypeScript Example on React"}),": A magical sandbox where you can experiment with TypeScript in the realm of React."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets",children:"React + TypeScript Cheatsheets"}),": A sacred manuscript offering invaluable insights into the fusion of React and TypeScript."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"4-overcoming-challenges-and-sorcery",children:"4: Overcoming Challenges and Sorcery"}),"\n",(0,r.jsxs)(t.p,{children:["In every adventurer's journey, challenges arise, and even TypeScript is not immune. Should you encounter the absence of TypeScript in your creation, heed this advice: cast away the lingering shadows of cached versions by uninstalling ",(0,r.jsx)(t.code,{children:"create-react-app"})," globally. Allow ",(0,r.jsx)(t.code,{children:"npx"})," to guide you to the latest version, ever fresh and powerful!"]}),"\n",(0,r.jsxs)(t.p,{children:["As you grow in wisdom, be mindful of the limitations of TypeScript and Babel. Constant enums and namespaces may elude you in this union, but fret not! ",(0,r.jsx)(t.a,{href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats",children:"Understanding the constraints"})," shall aid your path to enlightenment."]}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion:"}),"\n",(0,r.jsx)(t.p,{children:"Congratulations, esteemed Code Apprentices! You have harnessed the power of TypeScript within your React projects, ushering in an era of type safety and spellbinding possibilities. Let your code flourish in the embrace of TypeScript, safeguarded from the clutches of runtime errors!"}),"\n",(0,r.jsx)(t.p,{children:"Remember, the journey of a Code Apprentice is never-ending, filled with knowledge and growth. Embrace TypeScript's magic and let your code inspire and dazzle fellow adventurers. May your journey be filled with wonder and enchantment!"})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(96540);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);