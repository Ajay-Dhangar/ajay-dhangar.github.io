"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[38151],{67278:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=o(74848),r=o(28453);const s={id:"lesson-2",title:"Higher-Order Components (HOCs) for reusable component patterns",sidebar_label:"Lesson - 2",sidebar_position:2,description:"In this lesson, you will learn about Higher-Order Components (HOCs) in React and how they can be used to create reusable component patterns. We will cover what HOCs are, how to create HOCs, and best practices for using HOCs in your React applications.",tags:["courses","react-js","advanced-level","higher-order-components","reusable-components","patterns"]},a=void 0,i={id:"react-js/advanced-level/advanced-react-concepts/lesson-2",title:"Higher-Order Components (HOCs) for reusable component patterns",description:"In this lesson, you will learn about Higher-Order Components (HOCs) in React and how they can be used to create reusable component patterns. We will cover what HOCs are, how to create HOCs, and best practices for using HOCs in your React applications.",source:"@site/courses/react-js/advanced-level/advanced-react-concepts/lesson_2.md",sourceDirName:"react-js/advanced-level/advanced-react-concepts",slug:"/react-js/advanced-level/advanced-react-concepts/lesson-2",permalink:"/courses/react-js/advanced-level/advanced-react-concepts/lesson-2",draft:!1,unlisted:!1,tags:[{inline:!0,label:"courses",permalink:"/courses/tags/courses"},{inline:!0,label:"react-js",permalink:"/courses/tags/react-js"},{inline:!0,label:"advanced-level",permalink:"/courses/tags/advanced-level"},{inline:!0,label:"higher-order-components",permalink:"/courses/tags/higher-order-components"},{inline:!0,label:"reusable-components",permalink:"/courses/tags/reusable-components"},{inline:!0,label:"patterns",permalink:"/courses/tags/patterns"}],version:"current",lastUpdatedBy:"Restyled.io",lastUpdatedAt:171319582e4,sidebarPosition:2,frontMatter:{id:"lesson-2",title:"Higher-Order Components (HOCs) for reusable component patterns",sidebar_label:"Lesson - 2",sidebar_position:2,description:"In this lesson, you will learn about Higher-Order Components (HOCs) in React and how they can be used to create reusable component patterns. We will cover what HOCs are, how to create HOCs, and best practices for using HOCs in your React applications.",tags:["courses","react-js","advanced-level","higher-order-components","reusable-components","patterns"]},sidebar:"tutorialSidebar",previous:{title:"Lesson - 1",permalink:"/courses/react-js/advanced-level/advanced-react-concepts/lesson-1"},next:{title:"Module 13: React Testing",permalink:"/courses/category/module-13-react-testing"}},c={},l=[{value:"What are Higher-Order Components (HOCs)?",id:"what-are-higher-order-components-hocs",level:2},{value:"Creating Higher-Order Components",id:"creating-higher-order-components",level:2},{value:"Best Practices for Using Higher-Order Components",id:"best-practices-for-using-higher-order-components",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{BrowserWindow:s,TabItem:a,Tabs:i}=n;return s||h("BrowserWindow",!0),a||h("TabItem",!0),i||h("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In React applications, reusability is a key factor in building maintainable and scalable components. Higher-Order Components (HOCs) are a design pattern that allows you to reuse component logic across multiple components. In this lesson, we will cover Higher-Order Components and how they can be used to create reusable component patterns."}),"\n",(0,t.jsx)(n.h2,{id:"what-are-higher-order-components-hocs",children:"What are Higher-Order Components (HOCs)?"}),"\n",(0,t.jsx)(n.p,{children:"Higher-Order Components (HOCs) are functions that take a component and return a new component with additional props or functionality. They are a powerful pattern in React that enables you to share logic between components without repeating code. HOCs are a form of composition that allows you to enhance the capabilities of your components in a flexible and reusable way."}),"\n",(0,t.jsx)(n.p,{children:"Here's an example of a Higher-Order Components:"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)(a,{value:"App.js",label:"App.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\nimport Component from "./Component";\n\nconst App = () => {\n  return <Component message="Hello, World!" />;\n};\n\nexport default App;\n'})})}),(0,t.jsx)(a,{value:"withLogger.js",label:"withLogger.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\n\nconst withLogger = (WrappedComponent) => {\n  return (props) => {\n    console.log(`Rendering ${WrappedComponent.name} with props:`, props);\n    return <WrappedComponent {...props} />;\n  };\n};\n\nexport default withLogger;\n'})})}),(0,t.jsx)(a,{value:"Component.js",label:"Component.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\nimport withLogger from "./withLogger";\n\nconst Component = ({ message }) => {\n  return <div>{message}</div>;\n};\n\nexport default withLogger(Component);\n'})})}),(0,t.jsx)(a,{value:"BrowserWindow",label:"BrowserWindow",children:(0,t.jsx)(s,{minHeight:300,children:(0,t.jsx)("div",{children:"Hello, World!"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"withLogger"})," function is a Higher-Order Component that takes a component as an argument and returns a new component that logs the props before rendering the original component. The ",(0,t.jsx)(n.code,{children:"Component"})," component is enhanced with the logging functionality by wrapping it with the ",(0,t.jsx)(n.code,{children:"withLogger"})," HOC. When the ",(0,t.jsx)(n.code,{children:"Component"})," is rendered, the ",(0,t.jsx)(n.code,{children:"withLogger"})," HOC logs the props to the console. This pattern allows you to add cross-cutting concerns like logging, authentication, or data fetching to your components without modifying their implementation."]}),"\n",(0,t.jsx)(n.h2,{id:"creating-higher-order-components",children:"Creating Higher-Order Components"}),"\n",(0,t.jsx)(n.p,{children:"To create a Higher-Order Component in React, you can follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"First create react app using following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx create-react-app higher-order-components\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a new file for your HOC, for example, ",(0,t.jsx)(n.code,{children:"withLogger.js"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Define a function that takes a component as an argument and returns a new component with additional props or functionality."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="withLogger.js"',children:'import React from "react";\n\nconst withLogger = (WrappedComponent) => {\n  return (props) => {\n    console.log(`Rendering ${WrappedComponent.name} with props:`, props);\n    return <WrappedComponent {...props} />;\n  };\n};\n\nexport default withLogger;\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Import the HOC in the component file where you want to enhance the component."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="Component.js"',children:'import React from "react";\nimport withLogger from "./withLogger";\n\nconst Component = ({ message }) => {\n  return <div>{message}</div>;\n};\n\nexport default withLogger(Component);\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Wrap the component with the HOC to enhance its functionality. And update the ",(0,t.jsx)(n.code,{children:"App.js"})," file to render the enhanced component."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="App.js"',children:'import React from "react";\nimport Component from "./Component";\n\nconst App = () => {\n  return <Component message="Hello, World!" />;\n};\n\nexport default App;\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the application to see the enhanced component in action."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["open the browser on ",(0,t.jsx)(n.code,{children:"http://localhost:3000/"})," to see the output."]}),"\n",(0,t.jsx)(s,{minHeight:200,children:(0,t.jsx)("div",{children:"Hello, World!"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Now, inspect and navigate to the console to see the log message from the ",(0,t.jsx)(n.code,{children:"withLogger"})," HOC."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"withLogger",src:o(75357).A+"",width:"774",height:"249"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By following these steps, you can create Higher-Order Components in React to enhance the capabilities of your components with additional props or functionality."}),"\n",(0,t.jsx)(n.h2,{id:"best-practices-for-using-higher-order-components",children:"Best Practices for Using Higher-Order Components"}),"\n",(0,t.jsx)(n.p,{children:"When using Higher-Order Components in your React applications, consider the following best practices:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Keep HOCs Simple"}),": Higher-Order Components should be simple and focused on a single concern. Avoid creating complex HOCs that mix multiple concerns, as this can make them harder to understand and maintain."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Use Composition"}),": Use composition to combine multiple HOCs and create more complex behaviors. By composing HOCs, you can build reusable and composable logic that can be shared across different components."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Avoid Mutating the Original Component"}),": Higher-Order Components should not mutate the original component. Instead, they should enhance the component by wrapping it with additional functionality or props."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Use Descriptive Names"}),": Use descriptive names for your HOCs to make it clear what functionality they provide. This can help other developers understand the purpose of the HOC and how to use it effectively."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Test HOCs Separately"}),": Test your Higher-Order Components separately from your components to ensure they work as expected. By testing HOCs in isolation, you can verify their behavior and ensure they enhance the components correctly."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Consider Using Hooks"}),": In modern React applications, you can use hooks like ",(0,t.jsx)(n.code,{children:"useMemo"})," or ",(0,t.jsx)(n.code,{children:"useCallback"})," to achieve similar functionality as HOCs. Consider using hooks instead of HOCs for simpler cases where possible."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Use HOCs Sparingly"}),": While HOCs are a powerful pattern, they can introduce complexity and make your code harder to reason about. Use HOCs sparingly and consider other patterns like render props or hooks for simpler cases."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Follow React Guidelines"}),": Follow the React guidelines and best practices when using Higher-Order Components in your applications. By following the recommended patterns and conventions, you can build more maintainable and scalable React components."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By following these best practices, you can create reusable and composable Higher-Order Components that enhance the capabilities of your React components in a flexible and maintainable way."}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"In this lesson, you learned about Higher-Order Components (HOCs) in React and how they can be used to create reusable component patterns. You saw how HOCs work, how to create them, and best practices for using them in your React applications. By leveraging Higher-Order Components, you can share logic between components, enhance their capabilities, and build more maintainable and scalable React applications."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},75357:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/image-746eba98d79aab10c5b8d7303e20ff5c.png"},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>i});var t=o(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);