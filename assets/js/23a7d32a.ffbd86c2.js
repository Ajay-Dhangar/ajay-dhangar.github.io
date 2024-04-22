"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[37836],{15560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});var o=n(17624),a=n(4552),s=n(11504);const i=function(){const[e,t]=(0,s.useState)({name:"Ajay",age:24});return(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Complex State Example"}),(0,o.jsxs)("p",{children:["Name: ",e.name]}),(0,o.jsxs)("p",{children:["Age: ",e.age]}),(0,o.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,o.jsx)("button",{onClick:()=>{t({...e,name:"Pawan"})},children:"Update Name"}),(0,o.jsx)("button",{onClick:()=>{t({...e,age:23})},children:"Update Age"})]})]})},c={id:"lesson-2",title:"Managing dynamic data within components using the useState hook",sidebar_label:"Lesson - 2",sidebar_position:2,description:"learn how to manage dynamic data within components using the useState hook in React. The useState hook allows you to add stateful logic to functional components and handle dynamic data updates.",tags:["courses"]},d=void 0,r={id:"react-js/begginer-level/working-with-components-and-data/lesson-2",title:"Managing dynamic data within components using the useState hook",description:"learn how to manage dynamic data within components using the useState hook in React. The useState hook allows you to add stateful logic to functional components and handle dynamic data updates.",source:"@site/courses/react-js/begginer-level/working-with-components-and-data/lesson_2.md",sourceDirName:"react-js/begginer-level/working-with-components-and-data",slug:"/react-js/begginer-level/working-with-components-and-data/lesson-2",permalink:"/courses/react-js/begginer-level/working-with-components-and-data/lesson-2",draft:!1,unlisted:!1,tags:[{label:"courses",permalink:"/courses/tags/courses"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1712489671e3,sidebarPosition:2,frontMatter:{id:"lesson-2",title:"Managing dynamic data within components using the useState hook",sidebar_label:"Lesson - 2",sidebar_position:2,description:"learn how to manage dynamic data within components using the useState hook in React. The useState hook allows you to add stateful logic to functional components and handle dynamic data updates.",tags:["courses"]},sidebar:"codeharborhub",previous:{title:"Lesson - 1",permalink:"/courses/react-js/begginer-level/working-with-components-and-data/lesson-1"},next:{title:"Lesson - 3",permalink:"/courses/react-js/begginer-level/working-with-components-and-data/lesson-3"}},l={},u=[{value:"What is the useState hook?",id:"what-is-the-usestate-hook",level:2},{value:"Updating state with the useState hook",id:"updating-state-with-the-usestate-hook",level:2},{value:"Managing complex state with the useState hook",id:"managing-complex-state-with-the-usestate-hook",level:2},{value:"Live Example (Code Editor try on your own)",id:"live-example-code-editor-try-on-your-own",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components},{BrowserWindow:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["In this lesson, we will explore how to manage dynamic data within components using the ",(0,o.jsx)(t.code,{children:"useState"})," hook in React. The ",(0,o.jsx)(t.code,{children:"useState"})," hook is a built-in React hook that allows you to add stateful logic to functional components. It enables you to handle dynamic data updates and re-renders in response to user interactions or external events."]}),"\n",(0,o.jsx)(t.h2,{id:"what-is-the-usestate-hook",children:"What is the useState hook?"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"useState"})," hook is a built-in React hook that allows you to add state to functional components. State is used to store and manage dynamic data within a component, such as user input, API responses, or component state. The ",(0,o.jsx)(t.code,{children:"useState"})," hook returns a stateful value and a function to update that value, allowing you to manage state in functional components."]}),"\n",(0,o.jsxs)(t.p,{children:["Here's an example of using the ",(0,o.jsx)(t.code,{children:"useState"})," hook to manage a counter value:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="CounterExample.js"',children:'import React, { useState } from "react";\n\nfunction CounterExample() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount(count + 1);\n  };\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>Increment</button>\n    </div>\n  );\n}\n\nexport default CounterExample;\n'})}),"\n",(0,o.jsxs)(t.p,{children:["In this example, we define a functional component called ",(0,o.jsx)(t.code,{children:"CounterExample"})," that uses the ",(0,o.jsx)(t.code,{children:"useState"})," hook to manage a counter value. The ",(0,o.jsx)(t.code,{children:"useState"})," hook initializes the ",(0,o.jsx)(t.code,{children:"count"})," state to ",(0,o.jsx)(t.code,{children:"0"})," and provides a ",(0,o.jsx)(t.code,{children:"setCount"}),' function to update the state value. When the "Increment" button is clicked, the ',(0,o.jsx)(t.code,{children:"increment"})," function is called to update the ",(0,o.jsx)(t.code,{children:"count"})," state."]}),"\n",(0,o.jsx)(t.h2,{id:"updating-state-with-the-usestate-hook",children:"Updating state with the useState hook"}),"\n",(0,o.jsxs)(t.p,{children:["You can update state values using the ",(0,o.jsx)(t.code,{children:"setCount"})," function returned by the ",(0,o.jsx)(t.code,{children:"useState"})," hook. When you call the ",(0,o.jsx)(t.code,{children:"setCount"})," function with a new value, React will re-render the component with the updated state value. This allows you to handle dynamic data updates and trigger re-renders based on user interactions or external events."]}),"\n",(0,o.jsxs)(t.p,{children:["Here's an example of updating state with the ",(0,o.jsx)(t.code,{children:"useState"})," hook:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="CounterExample.js"',children:'import React, { useState } from "react";\n\nfunction CounterExample() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount(count + 1);\n  };\n\n  const decrement = () => {\n    setCount(count - 1);\n  };\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>Increment</button>\n      <button onClick={decrement}>Decrement</button>\n    </div>\n  );\n}\n\nexport default CounterExample;\n'})}),"\n",(0,o.jsxs)(t.p,{children:["In this updated example, we add a ",(0,o.jsx)(t.code,{children:"decrement"})," function that calls ",(0,o.jsx)(t.code,{children:"setCount"})," with ",(0,o.jsx)(t.code,{children:"count - 1"}),' to decrement the counter value. When the "Decrement" button is clicked, the ',(0,o.jsx)(t.code,{children:"decrement"})," function is called to update the ",(0,o.jsx)(t.code,{children:"count"})," state and trigger a re-render of the component."]}),"\n",(0,o.jsx)(t.h2,{id:"managing-complex-state-with-the-usestate-hook",children:"Managing complex state with the useState hook"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"useState"})," hook can manage complex state values, such as objects or arrays, by storing them in the component state. You can update specific properties of an object or elements of an array by creating a new state object or array and passing it to the ",(0,o.jsx)(t.code,{children:"setCount"})," function."]}),"\n",(0,o.jsxs)(t.p,{children:["Here's an example of managing complex state with the ",(0,o.jsx)(t.code,{children:"useState"})," hook:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:'title="ComplexStateExample.js"',children:'import React, { useState } from "react";\n\nfunction ComplexStateExample() {\n  const [user, setUser] = useState({ name: "Ajay", age: 24 });\n\n  const updateName = () => {\n    setUser({ ...user, name: "Pawan" });\n  };\n\n  const updateAge = () => {\n    setUser({ ...user, age: 23 });\n  };\n\n  return (\n    <div>\n        <h2>Complex State Example</h2>\n        <p>Name: {user.name}</p>\n        <p>Age: {user.age}</p>\n        <div style={{ display: "flex", gap: "8px" }}>\n            <button onClick={updateName}>Update Name</button>\n            <button onClick={updateAge}>Update Age</button>\n        </div>      \n    </div>\n  );\n}\n\nexport default ComplexStateExample;\n'})}),"\n",(0,o.jsx)(n,{children:(0,o.jsx)(i,{})}),"\n",(0,o.jsxs)(t.p,{children:["In this example, we define a functional component called ",(0,o.jsx)(t.code,{children:"ComplexStateExample"})," that uses the ",(0,o.jsx)(t.code,{children:"useState"})," hook to manage a complex state object ",(0,o.jsx)(t.code,{children:"user"}),". The ",(0,o.jsx)(t.code,{children:"updateName"})," and ",(0,o.jsx)(t.code,{children:"updateAge"})," functions update the ",(0,o.jsx)(t.code,{children:"name"})," and ",(0,o.jsx)(t.code,{children:"age"})," properties of the ",(0,o.jsx)(t.code,{children:"user"})," object by creating a new state object with the updated values."]}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.p,{children:"When updating complex state values like objects or arrays, it's important to create a new state object or array to trigger a re-render of the component. This ensures that React detects the state change and updates the component UI accordingly."}),(0,o.jsxs)(t.p,{children:["In the example above, we use the spread operator ",(0,o.jsx)(t.code,{children:"{ ...user }"})," to create a new object with the existing properties of the ",(0,o.jsx)(t.code,{children:"user"})," object and then update the specific property (",(0,o.jsx)(t.code,{children:"name"})," or ",(0,o.jsx)(t.code,{children:"age"}),") with the new value."]})]}),"\n",(0,o.jsx)(t.h2,{id:"live-example-code-editor-try-on-your-own",children:"Live Example (Code Editor try on your own)"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:'function CounterExample() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount(count + 1);\n  };\n\n  const decrement = () => {\n    setCount(count - 1);\n  };\n\n  return (\n    <div>\n      <p style={{ fontSize: "1.5rem" }}>Count: {count}</p>\n      <div style={{ display: "flex", gap: "10px" }}>\n        <button onClick={increment} style={{ padding: "5px 10px", fontSize: "1rem" }}>Increment</button>\n        <button onClick={decrement} style={{ padding: "5px 10px", fontSize: "1rem" }}>Decrement</button>\n      </div>\n    </div>\n  );\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(t.p,{children:["In this lesson, we learned how to manage dynamic data within components using the ",(0,o.jsx)(t.code,{children:"useState"})," hook in React. The ",(0,o.jsx)(t.code,{children:"useState"})," hook allows you to add stateful logic to functional components and handle dynamic data updates. By using the ",(0,o.jsx)(t.code,{children:"useState"})," hook, you can create interactive and dynamic user interfaces in React applications."]})]})}function p(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>i});var o=n(11504);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);