"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[95948],{79118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(74848),o=n(28453);const r={id:"adding-a-router",title:"Adding a Router",sidebar_position:8,tags:["react","react router","routing","react app","single-page application","spa","create react app","navigation","links","components"],keywords:["react","react router","routing","react app","single-page application","spa","create react app","navigation","links","components"],description:"Learn how to add routing capabilities to your React app using React Router, enabling dynamic, multi-page applications without full-page refreshes."},i=void 0,s={id:"react/building-your-app/adding-a-router",title:"Adding a Router",description:"Learn how to add routing capabilities to your React app using React Router, enabling dynamic, multi-page applications without full-page refreshes.",source:"@site/docs/react/building-your-app/adding-a-router.md",sourceDirName:"react/building-your-app",slug:"/react/building-your-app/adding-a-router",permalink:"/docs/react/building-your-app/adding-a-router",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/building-your-app/adding-a-router.md",tags:[{inline:!0,label:"react",permalink:"/docs/tags/react"},{inline:!0,label:"react router",permalink:"/docs/tags/react-router"},{inline:!0,label:"routing",permalink:"/docs/tags/routing"},{inline:!0,label:"react app",permalink:"/docs/tags/react-app"},{inline:!0,label:"single-page application",permalink:"/docs/tags/single-page-application"},{inline:!0,label:"spa",permalink:"/docs/tags/spa"},{inline:!0,label:"create react app",permalink:"/docs/tags/create-react-app"},{inline:!0,label:"navigation",permalink:"/docs/tags/navigation"},{inline:!0,label:"links",permalink:"/docs/tags/links"},{inline:!0,label:"components",permalink:"/docs/tags/components"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710610499e3,sidebarPosition:8,frontMatter:{id:"adding-a-router",title:"Adding a Router",sidebar_position:8,tags:["react","react router","routing","react app","single-page application","spa","create react app","navigation","links","components"],keywords:["react","react router","routing","react app","single-page application","spa","create react app","navigation","links","components"],description:"Learn how to add routing capabilities to your React app using React Router, enabling dynamic, multi-page applications without full-page refreshes."},sidebar:"tutorialSidebar",previous:{title:"Adding Relay",permalink:"/docs/react/building-your-app/adding-relay"},next:{title:"Environment Variables",permalink:"/docs/react/building-your-app/adding-custom-environment-variables"}},l={},c=[{value:"Introduction:",id:"introduction",level:2},{value:"1: What is React Router?",id:"1-what-is-react-router",level:3},{value:"2: Getting Started",id:"2-getting-started",level:3},{value:"3: Creating Our Routes",id:"3-creating-our-routes",level:3},{value:"4: Setting Up the Router",id:"4-setting-up-the-router",level:3},{value:"5: Creating Our Components",id:"5-creating-our-components",level:3},{value:"6: Linking It All Together",id:"6-linking-it-all-together",level:3},{value:"7: Celebrate Your Success!",id:"7-celebrate-your-success",level:3},{value:"Apply your Idea&#39;s",id:"apply-your-ideas",level:3},{value:"Conclusion:",id:"conclusion",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction:"}),"\n",(0,a.jsx)(t.p,{children:"Welcome, fellow Coders! Today, we embark on an exciting journey to enhance our React app by adding routing capabilities. Routing allows us to create dynamic, multi-page applications without the need for full-page refreshes. Buckle up, and let's dive into the world of React Router!"}),"\n",(0,a.jsx)(t.h3,{id:"1-what-is-react-router",children:"1: What is React Router?"}),"\n",(0,a.jsx)(t.p,{children:"React Router is a popular library that enables navigation and routing within a React application. It provides a seamless way to create multiple pages while maintaining a single-page app feel. Think of it as a virtual GPS system for your app, guiding users to different views without reloading the entire page."}),"\n",(0,a.jsx)(t.h3,{id:"2-getting-started",children:"2: Getting Started"}),"\n",(0,a.jsx)(t.p,{children:"Before we hit the road, let's set up our project! Make sure you have Node.js and npm installed. If not, visit Node.js' official website and follow their easy installation guide."}),"\n",(0,a.jsx)(t.p,{children:"Once you have everything set up, create your React app using Create React App (CRA). In your terminal, type:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx create-react-app my-awesome-app\ncd my-awesome-app\n"})}),"\n",(0,a.jsx)(t.p,{children:"Now, we're ready to install React Router. Execute the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install react-router-dom\n"})}),"\n",(0,a.jsx)(t.h3,{id:"3-creating-our-routes",children:"3: Creating Our Routes"}),"\n",(0,a.jsx)(t.p,{children:"Imagine your app is a fantastic theme park, and each attraction represents a different page. Let's map out our routes accordingly:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Home:"})," The main entrance to our park, where visitors start their journey."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"About:"})," An information booth to learn more about our park's history."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Contact:"})," A helpline where visitors can reach out for any queries."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"NotFound:"})," A secret portal to another dimension for lost URLs (404 page)."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"4-setting-up-the-router",children:"4: Setting Up the Router"}),"\n",(0,a.jsxs)(t.p,{children:["Now that we have our routes planned out, let's integrate React Router into our app. Open the ",(0,a.jsx)(t.code,{children:"src/App.js"})," file, and let the routing magic begin:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="src/App.js"',children:"import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';\nimport Home from './components/Home';\nimport About from './components/About';\nimport Contact from './components/Contact';\nimport NotFound from './components/NotFound';\n\nfunction App() {\n  return (\n    <Router>\n      <Routes>\n        <Route exact path=\"/\" component={Home} />\n        <Route path=\"/about\" component={About} />\n        <Route path=\"/contact\" component={Contact} />\n        <Route component={NotFound} />\n      </Routes>\n    </Router>\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"5-creating-our-components",children:"5: Creating Our Components"}),"\n",(0,a.jsxs)(t.p,{children:["To keep our code organized, let's create separate components for each route we defined earlier. For instance, create ",(0,a.jsx)(t.code,{children:"Home.js"}),", ",(0,a.jsx)(t.code,{children:"About.js"}),", ",(0,a.jsx)(t.code,{children:"Contact.js"}),", and ",(0,a.jsx)(t.code,{children:"NotFound.js"})," in the ",(0,a.jsx)(t.code,{children:"src/components"})," folder. Don't forget to sprinkle some code wizardry into each component to make them shine!"]}),"\n",(0,a.jsx)(t.h3,{id:"6-linking-it-all-together",children:"6: Linking It All Together"}),"\n",(0,a.jsxs)(t.p,{children:["Now that we have our routes and components set up, we need navigation links for our visitors to explore the park. Update your ",(0,a.jsx)(t.code,{children:"src/components/Home.js"})," with the following code:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="src/components/Home.js"',children:'import { Link } from \'react-router-dom\';\n\nfunction Home() {\n  return (\n    <div>\n      <h1>Welcome to Code Mastermind Theme Park!</h1>\n      <nav>\n        <ul>\n          <li>\n            <Link to="/">Home</Link>\n          </li>\n          <li>\n            <Link to="/about">About</Link>\n          </li>\n          <li>\n            <Link to="/contact">Contact</Link>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  );\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"7-celebrate-your-success",children:"7: Celebrate Your Success!"}),"\n",(0,a.jsx)(t.p,{children:"Congratulations, Code Mastermind! You've successfully added React Router to your app, making it dynamic and user-friendly. Now, users can roam freely through your theme park without ever getting lost."}),"\n",(0,a.jsx)(t.h3,{id:"apply-your-ideas",children:"Apply your Idea's"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/Ajay-Dhangar/react-blog-app/tree/main/",children:"Contribution Now"})}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion:"}),"\n",(0,a.jsx)(t.p,{children:"Routing in React is like a thrilling roller coaster ride for developers. We've just scratched the surface of what React Router can do. So keep exploring, experimenting, and creating breathtaking experiences for your users. Until next time, happy coding, Code Masterminds! \ud83c\udfa2"})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(96540);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);