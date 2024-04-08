"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[88556],{24536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var o=t(17624),i=t(4552),a=t(11504);const s=function(){const[e,n]=(0,a.useState)("");return(0,o.jsx)("input",{type:"text",value:e,onChange:e=>{n(e.target.value)}})};const r=function(){const[e,n]=(0,a.useState)("");return(0,o.jsxs)("form",{onSubmit:n=>{n.preventDefault(),alert("Form submitted with value: "+e)},children:[(0,o.jsx)("input",{type:"text",value:e,onChange:e=>{n(e.target.value)},style:{marginRight:"10px"}}),(0,o.jsx)("button",{type:"submit",style:{padding:"5px 10px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"5px"},children:"Submit"})]})},l={id:"lesson-3",title:"Handling user interactions with events (onClick, onChange, etc.)",sidebar_label:"Lesson - 3",sidebar_position:3,description:"Learn how to handle user interactions in React using event handlers like onClick, onChange, and more. Understand how to respond to user actions and update the UI based on events.",tags:["courses","react-js","beginner-level","working-with-components-and-data","events","event-handlers","onClick","onChange","onSubmit"]},d=void 0,c={id:"react-js/begginer-level/working-with-components-and-data/lesson-3",title:"Handling user interactions with events (onClick, onChange, etc.)",description:"Learn how to handle user interactions in React using event handlers like onClick, onChange, and more. Understand how to respond to user actions and update the UI based on events.",source:"@site/courses/react-js/begginer-level/working-with-components-and-data/lesson_3.md",sourceDirName:"react-js/begginer-level/working-with-components-and-data",slug:"/react-js/begginer-level/working-with-components-and-data/lesson-3",permalink:"/code-harbor-hub/courses/react-js/begginer-level/working-with-components-and-data/lesson-3",draft:!1,unlisted:!1,tags:[{label:"courses",permalink:"/code-harbor-hub/courses/tags/courses"},{label:"react-js",permalink:"/code-harbor-hub/courses/tags/react-js"},{label:"beginner-level",permalink:"/code-harbor-hub/courses/tags/beginner-level"},{label:"working-with-components-and-data",permalink:"/code-harbor-hub/courses/tags/working-with-components-and-data"},{label:"events",permalink:"/code-harbor-hub/courses/tags/events"},{label:"event-handlers",permalink:"/code-harbor-hub/courses/tags/event-handlers"},{label:"onClick",permalink:"/code-harbor-hub/courses/tags/on-click"},{label:"onChange",permalink:"/code-harbor-hub/courses/tags/on-change"},{label:"onSubmit",permalink:"/code-harbor-hub/courses/tags/on-submit"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1712568385e3,sidebarPosition:3,frontMatter:{id:"lesson-3",title:"Handling user interactions with events (onClick, onChange, etc.)",sidebar_label:"Lesson - 3",sidebar_position:3,description:"Learn how to handle user interactions in React using event handlers like onClick, onChange, and more. Understand how to respond to user actions and update the UI based on events.",tags:["courses","react-js","beginner-level","working-with-components-and-data","events","event-handlers","onClick","onChange","onSubmit"]},sidebar:"codeharborhub",previous:{title:"Lesson - 2",permalink:"/code-harbor-hub/courses/react-js/begginer-level/working-with-components-and-data/lesson-2"},next:{title:"Module 4: Building User Interfaces with React",permalink:"/code-harbor-hub/courses/category/module-4-building-user-interfaces-with-react"}},h={},u=[{value:"Introduction to event handling in React",id:"introduction-to-event-handling-in-react",level:2},{value:"Handling user interactions with <code>onClick</code> event",id:"handling-user-interactions-with-onclick-event",level:2},{value:"Handling user interactions with <code>onChange</code> event",id:"handling-user-interactions-with-onchange-event",level:2},{value:"Handling user interactions with <code>onSubmit</code> event",id:"handling-user-interactions-with-onsubmit-event",level:2},{value:"Handling user interactions with other events",id:"handling-user-interactions-with-other-events",level:2},{value:"Live Example (Code Editor try on your own)",id:"live-example-code-editor-try-on-your-own",level:2},{value:"Conclusion",id:"conclusion",level:2}];function v(e){const n={admonition:"admonition",code:"code",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,i.M)(),...e.components},{BrowserWindow:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In this lesson, you will learn how to handle user interactions in React using event handlers. You will understand how to respond to user actions and update the UI based on events like ",(0,o.jsx)(n.code,{children:"onClick"}),", ",(0,o.jsx)(n.code,{children:"onChange"}),", and more."]}),"\n",(0,o.jsx)(n.h2,{id:"introduction-to-event-handling-in-react",children:"Introduction to event handling in React"}),"\n",(0,o.jsxs)(n.p,{children:["Event handling is an essential part of building interactive web applications. In React, you can handle user interactions using event handlers like ",(0,o.jsx)(n.code,{children:"onClick"}),", ",(0,o.jsx)(n.code,{children:"onChange"}),", ",(0,o.jsx)(n.code,{children:"onSubmit"}),", etc. These event handlers allow you to respond to user actions and update the UI based on events."]}),"\n",(0,o.jsxs)(n.h2,{id:"handling-user-interactions-with-onclick-event",children:["Handling user interactions with ",(0,o.jsx)(n.code,{children:"onClick"})," event"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"onClick"})," event handler is used to handle click events on elements like buttons, links, etc. You can define a function that gets called when the element is clicked. Let's see an example of handling a click event in React:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="ClickEventExample.js"',children:'import React from "react";\n\nfunction ClickEventExample() {\n  const handleClick = () => {\n    alert("Button clicked!");\n  };\n\n  return <button onClick={handleClick}>Click me</button>;\n}\n\nexport default ClickEventExample;\n'})}),"\n",(0,o.jsx)(t,{minHeight:"300px",children:(0,o.jsx)("button",{onClick:()=>{alert("Button clicked!")},children:"Click me"})}),"\n",(0,o.jsxs)(n.p,{children:["In the above example, we have defined a ",(0,o.jsx)(n.code,{children:"handleClick"})," function that shows an alert when the button is clicked. We have attached this function to the ",(0,o.jsx)(n.code,{children:"onClick"})," event of the button element."]}),"\n",(0,o.jsxs)(n.h2,{id:"handling-user-interactions-with-onchange-event",children:["Handling user interactions with ",(0,o.jsx)(n.code,{children:"onChange"})," event"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"onChange"})," event handler is used to handle changes in form elements like input fields, checkboxes, radio buttons, etc. You can define a function that gets called when the value of the element changes. Let's see an example of handling a change event in React:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="ChangeEventExample.js"',children:'import React, { useState } from "react";\n\nfunction ChangeEventExample() {\n  const [value, setValue] = useState("");\n\n  const handleChange = (event) => {\n    setValue(event.target.value);\n  };\n\n  return <input type="text" value={value} onChange={handleChange} />;\n}\n\nexport default ChangeEventExample;\n'})}),"\n",(0,o.jsx)(t,{minHeight:"300px",children:(0,o.jsx)(s,{})}),"\n",(0,o.jsxs)(n.p,{children:["In the above example, we have defined a ",(0,o.jsx)(n.code,{children:"handleChange"})," function that updates the state value when the input field value changes. We have attached this function to the ",(0,o.jsx)(n.code,{children:"onChange"})," event of the input element."]}),"\n",(0,o.jsxs)(n.h2,{id:"handling-user-interactions-with-onsubmit-event",children:["Handling user interactions with ",(0,o.jsx)(n.code,{children:"onSubmit"})," event"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"onSubmit"})," event handler is used to handle form submission events. You can define a function that gets called when the form is submitted. Let's see an example of handling a form submission event in React:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="SubmitEventExample.js"',children:'import React, { useState } from "react";\n\nfunction SubmitEventExample() {\n  const [value, setValue] = useState("");\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    alert("Form submitted with value: " + value);\n  };\n\n  const handleChange = (event) => {\n    setValue(event.target.value);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="text"\n        value={value}\n        onChange={handleChange}\n        style={{ marginRight: "10px" }}\n      />\n      <button\n        type="submit"\n        style={{\n          padding: "5px 10px",\n          backgroundColor: "#007bff",\n          color: "white",\n          border: "none",\n          borderRadius: "5px",\n        }}\n      >\n        Submit\n      </button>\n    </form>\n  );\n}\n\nexport default SubmitEventExample;\n'})}),"\n",(0,o.jsx)(t,{minHeight:"300px",children:(0,o.jsx)(r,{})}),"\n",(0,o.jsxs)(n.p,{children:["In the above example, we have defined a ",(0,o.jsx)(n.code,{children:"handleSubmit"})," function that prevents the default form submission behavior and shows an alert with the form value. We have attached this function to the ",(0,o.jsx)(n.code,{children:"onSubmit"})," event of the form element."]}),"\n",(0,o.jsx)(n.h2,{id:"handling-user-interactions-with-other-events",children:"Handling user interactions with other events"}),"\n",(0,o.jsxs)(n.p,{children:["Apart from ",(0,o.jsx)(n.code,{children:"onClick"}),", ",(0,o.jsx)(n.code,{children:"onChange"}),", and ",(0,o.jsx)(n.code,{children:"onSubmit"}),", React provides event handlers for various other events like ",(0,o.jsx)(n.code,{children:"onMouseOver"}),", ",(0,o.jsx)(n.code,{children:"onMouseOut"}),", ",(0,o.jsx)(n.code,{children:"onFocus"}),", ",(0,o.jsx)(n.code,{children:"onBlur"}),", etc. You can use these event handlers to handle user interactions and update the UI based on different events."]}),"\n",(0,o.jsx)(n.h2,{id:"live-example-code-editor-try-on-your-own",children:"Live Example (Code Editor try on your own)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function AllEventsExample() {\n  const [value, setValue] = useState("");\n\n  const handleChange = (event) => {\n    setValue(event.target.value);\n  };\n\n  const handleMouseOver = () => {\n    setValue("Mouse over event triggered");\n  };\n\n  const handleFocus = () => {\n    setValue("Input field focused");\n  };\n\n  return (\n    <div>\n      <h2>All Events Example</h2>\n      <div style={{ marginBottom: "10px" }}>\n        <p style={{ marginBottom: "10px" }}>Value: {value}</p>\n        <input\n          type="text"\n          value={value}\n          onChange={handleChange}\n          onMouseOver={handleMouseOver}\n          onFocus={handleFocus}\n        />\n      </div>\n    </div>\n  );\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In the example above, we have defined a functional component ",(0,o.jsx)(n.code,{children:"AllEventsExample"})," that demonstrates handling different events like ",(0,o.jsx)(n.code,{children:"onChange"}),", ",(0,o.jsx)(n.code,{children:"onMouseOver"}),", and ",(0,o.jsx)(n.code,{children:"onFocus"}),". The ",(0,o.jsx)(n.code,{children:"handleChange"}),", ",(0,o.jsx)(n.code,{children:"handleMouseOver"}),", and ",(0,o.jsx)(n.code,{children:"handleFocus"})," functions update the state value based on the respective events."]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{}),(0,o.jsxs)(n.p,{children:["You can experiment with different event handlers and their behavior by modifying the example above. Try adding new event handlers like ",(0,o.jsx)(n.code,{children:"onMouseOut"}),", ",(0,o.jsx)(n.code,{children:"onBlur"}),", etc., and observe how the component responds to user interactions."]})]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(n.p,{children:["In this lesson, you learned how to handle user interactions in React using event handlers like ",(0,o.jsx)(n.code,{children:"onClick"}),", ",(0,o.jsx)(n.code,{children:"onChange"}),", etc. You can use these event handlers to respond to user actions and update the UI based on events. Practice using event handlers in your React applications to build interactive and responsive user interfaces."]})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(v,{...e})}):v(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>s});var o=t(11504);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);