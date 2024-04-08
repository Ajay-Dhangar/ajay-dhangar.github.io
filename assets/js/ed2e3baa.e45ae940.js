"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[64420],{53364:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(17624),s=t(4552);const r={id:"lesson-1",title:"Passing data between components with props (required and optional)",sidebar_label:"Lesson - 1",sidebar_position:1,description:"learn how to pass data between components in React using props. Props are used to pass data from a parent component to a child component, enabling the sharing of information and functionality between different parts of the application.",tags:["courses","react-js","beginner-level","working-with-components-and-data","props","data-sharing"]},a=void 0,i={id:"react-js/begginer-level/working-with-components-and-data/lesson-1",title:"Passing data between components with props (required and optional)",description:"learn how to pass data between components in React using props. Props are used to pass data from a parent component to a child component, enabling the sharing of information and functionality between different parts of the application.",source:"@site/courses/react-js/begginer-level/working-with-components-and-data/lesson_1.md",sourceDirName:"react-js/begginer-level/working-with-components-and-data",slug:"/react-js/begginer-level/working-with-components-and-data/lesson-1",permalink:"/code-harbor-hub/courses/react-js/begginer-level/working-with-components-and-data/lesson-1",draft:!1,unlisted:!1,tags:[{label:"courses",permalink:"/code-harbor-hub/courses/tags/courses"},{label:"react-js",permalink:"/code-harbor-hub/courses/tags/react-js"},{label:"beginner-level",permalink:"/code-harbor-hub/courses/tags/beginner-level"},{label:"working-with-components-and-data",permalink:"/code-harbor-hub/courses/tags/working-with-components-and-data"},{label:"props",permalink:"/code-harbor-hub/courses/tags/props"},{label:"data-sharing",permalink:"/code-harbor-hub/courses/tags/data-sharing"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1712489671e3,sidebarPosition:1,frontMatter:{id:"lesson-1",title:"Passing data between components with props (required and optional)",sidebar_label:"Lesson - 1",sidebar_position:1,description:"learn how to pass data between components in React using props. Props are used to pass data from a parent component to a child component, enabling the sharing of information and functionality between different parts of the application.",tags:["courses","react-js","beginner-level","working-with-components-and-data","props","data-sharing"]},sidebar:"codeharborhub",previous:{title:"Module 3: Working with Components and Data in React",permalink:"/code-harbor-hub/courses/category/module-3-working-with-components-and-data-in-react"},next:{title:"Lesson - 2",permalink:"/code-harbor-hub/courses/react-js/begginer-level/working-with-components-and-data/lesson-2"}},p={},d=[{value:"What are props in React?",id:"what-are-props-in-react",level:2},{value:"Accessing props in a child component",id:"accessing-props-in-a-child-component",level:2},{value:"Passing required and optional props",id:"passing-required-and-optional-props",level:2},{value:"Required props",id:"required-props",level:3},{value:"Optional props",id:"optional-props",level:3},{value:"Differences between required and optional props",id:"differences-between-required-and-optional-props",level:3},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components},{BrowserWindow:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In React, components can communicate with each other by passing data through props. Props (short for properties) are a way to pass information from a parent component to a child component. They allow you to share data and functionality between different parts of your application. In this lesson, we will explore how to pass data between components using props in React."}),"\n",(0,o.jsx)(n.h2,{id:"what-are-props-in-react",children:"What are props in React?"}),"\n",(0,o.jsxs)(n.p,{children:["Props are a mechanism for passing data from a parent component to a child component in React. They are read-only and help you create reusable and modular components by sharing data and functionality between them. Props are passed as attributes to child components and can be accessed within the child component as properties of the ",(0,o.jsx)(n.code,{children:"props"})," object."]}),"\n",(0,o.jsx)(n.p,{children:"Here's an example of passing data between components using props:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="ParentComponent.js"',children:'import React from "react";\nimport ChildComponent from "./ChildComponent";\n\nfunction ParentComponent() {\n  const message = "Hello, I am a prop!";\n  \n  return <ChildComponent message={message} />;\n}\n\nexport default ParentComponent;\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, the ",(0,o.jsx)(n.code,{children:"ParentComponent"})," passes a ",(0,o.jsx)(n.code,{children:"message"})," prop to the ",(0,o.jsx)(n.code,{children:"ChildComponent"})," by setting it as an attribute on the ",(0,o.jsx)(n.code,{children:"ChildComponent"})," element. The ",(0,o.jsx)(n.code,{children:"message"})," prop can then be accessed within the ",(0,o.jsx)(n.code,{children:"ChildComponent"})," as a property of the ",(0,o.jsx)(n.code,{children:"props"})," object."]}),"\n",(0,o.jsx)(n.h2,{id:"accessing-props-in-a-child-component",children:"Accessing props in a child component"}),"\n",(0,o.jsxs)(n.p,{children:["To access props in a child component, you can use the ",(0,o.jsx)(n.code,{children:"props"})," object passed as an argument to the component function. Props are accessed as properties of the ",(0,o.jsx)(n.code,{children:"props"})," object, allowing you to read the data passed from the parent component."]}),"\n",(0,o.jsx)(n.p,{children:"Here's how you can access props in a child component:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="ChildComponent.js"',children:'import React from "react";\n\nfunction ChildComponent(props) {\n  return <div>{props.message}</div>;\n}\n\nexport default ChildComponent;\n'})}),"\n",(0,o.jsx)(t,{children:(0,o.jsx)("div",{children:(0,o.jsx)(n.p,{children:"Hello, I am a prop!"})})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, the ",(0,o.jsx)(n.code,{children:"ChildComponent"})," receives the ",(0,o.jsx)(n.code,{children:"message"})," prop from the ",(0,o.jsx)(n.code,{children:"ParentComponent"})," and renders it within a ",(0,o.jsx)(n.code,{children:"div"})," element. The value of the ",(0,o.jsx)(n.code,{children:"message"})," prop is accessed using ",(0,o.jsx)(n.code,{children:"props.message"})," in the child component."]}),"\n",(0,o.jsx)(n.h2,{id:"passing-required-and-optional-props",children:"Passing required and optional props"}),"\n",(0,o.jsx)(n.p,{children:"In React, you can define required and optional props for a component to enforce data validation and provide default values. Required props are essential for the component to function correctly, while optional props provide flexibility and customization options."}),"\n",(0,o.jsx)(n.h3,{id:"required-props",children:"Required props"}),"\n",(0,o.jsx)(n.p,{children:"To define required props for a component, you can use PropTypes to specify the expected data types and ensure that the required props are passed from the parent component. PropTypes help you validate the data passed through props and provide warnings in development mode if the data does not match the expected types."}),"\n",(0,o.jsx)(n.p,{children:"Here's an example of defining required props using PropTypes:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="ChildComponent.js"',children:'import React from "react";\nimport PropTypes from "prop-types";\n\nfunction ChildComponent(props) {\n  return <div>{props.message}</div>;\n}\n\nChildComponent.propTypes = {\n  message: PropTypes.string.isRequired,\n};\n\nexport default ChildComponent;\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, the ",(0,o.jsx)(n.code,{children:"ChildComponent"})," specifies that the ",(0,o.jsx)(n.code,{children:"message"})," prop is required and must be of type ",(0,o.jsx)(n.code,{children:"string"}),". If the ",(0,o.jsx)(n.code,{children:"message"})," prop is not passed or is not a string, a warning will be displayed in the console during development."]}),"\n",(0,o.jsx)(n.h3,{id:"optional-props",children:"Optional props"}),"\n",(0,o.jsx)(n.p,{children:"Optional props provide additional customization options for a component and allow you to define default values if the prop is not passed from the parent component. Optional props are useful for providing fallback values or configuring the component based on user preferences."}),"\n",(0,o.jsx)(n.p,{children:"Here's an example of defining optional props with default values:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="ChildComponent.js"',children:'import React from "react";\n\nfunction ChildComponent(props) {\n  const { message = "Default message" } = props;\n\n  return <div>{message}</div>;\n}\n\n\nexport default ChildComponent;\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, the ",(0,o.jsx)(n.code,{children:"ChildComponent"})," sets a default value of ",(0,o.jsx)(n.code,{children:'"Default message"'})," for the ",(0,o.jsx)(n.code,{children:"message"})," prop if it is not passed from the parent component. This ensures that the component can render correctly even if the ",(0,o.jsx)(n.code,{children:"message"})," prop is not provided."]}),"\n",(0,o.jsxs)(n.admonition,{title:"Note \ud83d\udcdd",type:"note",children:[(0,o.jsx)(n.p,{children:"By defining required and optional props, you can create more robust and predictable components in React. Required props help enforce data validation and prevent errors, while optional props provide flexibility and customization options for your components."}),(0,o.jsx)(n.h3,{id:"differences-between-required-and-optional-props",children:"Differences between required and optional props"}),(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"No."}),(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Feature"}),(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Required Props"}),(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Optional Props"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"1."}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Definition"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Must be passed"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Optional"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"2."}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Validation"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Enforced"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Not enforced"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"3."}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Default values"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Not applicable"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Can have defaults"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"4."}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Usage"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Essential"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Customizable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"5."}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Error handling"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Warns if missing"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"No warnings"})]})]})]}),(0,o.jsx)(n.p,{children:"Understanding the differences between required and optional props will help you design more robust and maintainable components in React. By defining clear prop types and default values, you can create components that are easier to use and understand."})]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"Passing data between components using props is a fundamental concept in React that enables you to create modular and reusable components. Props allow you to share information and functionality between components, making your application more flexible and maintainable. By defining required and optional props, you can enforce data validation and provide default values for your components, ensuring a consistent user experience across your application."})]})}function c(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>a});var o=t(11504);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);