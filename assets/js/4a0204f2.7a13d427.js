"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[1314],{84140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(17624),o=t(4552);const r={id:"lesson-1",title:"Creating controlled components to manage form data with state",sidebar_label:"Lesson - 1",sidebar_position:1,description:"learn how to create controlled components in React to manage form data using state. Controlled components allow you to handle form inputs and manage their state, enabling you to control and validate user input in React applications.",tags:["courses","react-js","beginner-level","introduction-to-forms","controlled-components","form-data","state-management"]},l=void 0,s={id:"react-js/begginer-level/introduction-to-forms/lesson-1",title:"Creating controlled components to manage form data with state",description:"learn how to create controlled components in React to manage form data using state. Controlled components allow you to handle form inputs and manage their state, enabling you to control and validate user input in React applications.",source:"@site/courses/react-js/begginer-level/introduction-to-forms/lesson_1.md",sourceDirName:"react-js/begginer-level/introduction-to-forms",slug:"/react-js/begginer-level/introduction-to-forms/lesson-1",permalink:"/courses/react-js/begginer-level/introduction-to-forms/lesson-1",draft:!1,unlisted:!1,tags:[{label:"courses",permalink:"/courses/tags/courses"},{label:"react-js",permalink:"/courses/tags/react-js"},{label:"beginner-level",permalink:"/courses/tags/beginner-level"},{label:"introduction-to-forms",permalink:"/courses/tags/introduction-to-forms"},{label:"controlled-components",permalink:"/courses/tags/controlled-components"},{label:"form-data",permalink:"/courses/tags/form-data"},{label:"state-management",permalink:"/courses/tags/state-management"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1712576295e3,sidebarPosition:1,frontMatter:{id:"lesson-1",title:"Creating controlled components to manage form data with state",sidebar_label:"Lesson - 1",sidebar_position:1,description:"learn how to create controlled components in React to manage form data using state. Controlled components allow you to handle form inputs and manage their state, enabling you to control and validate user input in React applications.",tags:["courses","react-js","beginner-level","introduction-to-forms","controlled-components","form-data","state-management"]},sidebar:"codeharborhub",previous:{title:"Module 5: Introduction to Forms in React",permalink:"/courses/category/module-5-introduction-to-forms-in-react"},next:{title:"Lesson - 2",permalink:"/courses/react-js/begginer-level/introduction-to-forms/lesson-2"}},i={},c=[{value:"What are controlled components in React?",id:"what-are-controlled-components-in-react",level:2},{value:"Handling form data with controlled components",id:"handling-form-data-with-controlled-components",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components},{BrowserWindow:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In React, controlled components are a way to manage form data using state. Controlled components allow you to handle form inputs and manage their state, enabling you to control and validate user input in React applications. In this lesson, we will explore how to create controlled components to manage form data with state in React."}),"\n",(0,a.jsx)(n.h2,{id:"what-are-controlled-components-in-react",children:"What are controlled components in React?"}),"\n",(0,a.jsx)(n.p,{children:"Controlled components are form elements whose value is controlled by React state. Instead of letting the DOM handle the form data, you manage it using React state and update it based on user input. This approach allows you to control and validate user input, making it easier to manage form data in React applications."}),"\n",(0,a.jsx)(n.p,{children:"Here's an example of creating a controlled input component in React:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="ControlledInput.js"',children:'import React, { useState } from "react";\n\nfunction ControlledInput() {\n  const [value, setValue] = useState("");\n\n  const handleChange = (event) => {\n    setValue(event.target.value);\n  };\n\n  return (\n    <input\n      type="text"\n      value={value}\n      onChange={handleChange}\n      placeholder="Enter your name"\n    />\n  );\n}\n\nexport default ControlledInput;\n'})}),"\n",(0,a.jsx)(t,{children:(0,a.jsx)("input",{type:"text",placeholder:"Enter your name"})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, we create a controlled input component ",(0,a.jsx)(n.code,{children:"ControlledInput"})," that manages its value using React state. The ",(0,a.jsx)(n.code,{children:"value"})," state variable holds the current value of the input, and the ",(0,a.jsx)(n.code,{children:"handleChange"})," function updates the state based on user input. The input element's value is set to the ",(0,a.jsx)(n.code,{children:"value"})," state variable, making it a controlled component."]}),"\n",(0,a.jsx)(n.h2,{id:"handling-form-data-with-controlled-components",children:"Handling form data with controlled components"}),"\n",(0,a.jsx)(n.p,{children:"Controlled components allow you to handle form data in React applications by managing the state of form inputs. You can update the state based on user input and use the state to control the value of form elements. This approach enables you to validate user input, perform calculations, and trigger actions based on form data changes."}),"\n",(0,a.jsx)(n.p,{children:"Here's how you can handle form data with controlled components:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function FormComponent() {\n  const [name, setName] = useState("");\n  const [email, setEmail] = useState("");\n\n  const handleNameChange = (event) => {\n    setName(event.target.value);\n  };\n\n  const handleEmailChange = (event) => {\n    setEmail(event.target.value);\n  };\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    alert(`Name: ${name}, Email: ${email}`);\n  };\n\n  return (\n    <form\n      onSubmit={handleSubmit}\n      style={{\n        display: "flex",\n        flexDirection: "column",\n        maxWidth: "300px",\n        border: "1px solid #ccc",\n        padding: "10px",\n        boxShadow: "2px 2px 4px #666",\n        borderRadius: "5px",\n      }}\n    >\n      <input\n        type="text"\n        value={name}\n        onChange={handleNameChange}\n        placeholder="Enter your name"\n        style={{ marginBottom: "10px", padding: "5px" }}\n      />\n      <input\n        type="email"\n        value={email}\n        onChange={handleEmailChange}\n        placeholder="Enter your email"\n        style={{ marginBottom: "10px", padding: "5px" }}\n      />\n      <button\n        type="submit"\n        style={{\n          padding: "5px",\n          backgroundColor: "blue",\n          color: "white",\n          border: "none",\n          borderRadius: "5px",\n        }}\n      >\n        Submit\n      </button>\n    </form>\n  );\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, we create a form component ",(0,a.jsx)(n.code,{children:"FormComponent"})," that manages the state of two input fields: ",(0,a.jsx)(n.code,{children:"name"})," and ",(0,a.jsx)(n.code,{children:"email"}),". The ",(0,a.jsx)(n.code,{children:"handleNameChange"})," and ",(0,a.jsx)(n.code,{children:"handleEmailChange"})," functions update the state based on user input, and the ",(0,a.jsx)(n.code,{children:"handleSubmit"})," function logs the form data when the form is submitted. The input elements are controlled components that display the current state values and update them as the user types."]}),"\n",(0,a.jsx)(n.p,{children:"By using controlled components to manage form data, you can create interactive and dynamic forms in React applications. Controlled components allow you to control the form data flow, validate user input, and handle form submissions with ease."}),"\n",(0,a.jsx)(n.admonition,{title:"Note \ud83d\udcdd",type:"note",children:(0,a.jsx)(n.p,{children:"Controlled components provide a powerful way to manage form data in React applications. By controlling the value of form elements using React state, you can handle user input, validate data, and trigger actions based on form data changes. This approach provides a flexible and robust way to manage form data and create interactive forms in React."})}),"\n",(0,a.jsx)(n.admonition,{title:"Recap \ud83d\udccc",type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Controlled components are form elements whose value is controlled by React state."}),"\n",(0,a.jsx)(n.li,{children:"You can manage form data using controlled components to handle user input, validate data, and trigger actions based on form data changes."}),"\n",(0,a.jsx)(n.li,{children:"By controlling the value of form elements using React state, you can create interactive and dynamic forms in React applications."}),"\n",(0,a.jsx)(n.li,{children:"Controlled components provide a flexible and robust way to manage form data and create interactive forms in React."}),"\n",(0,a.jsx)(n.li,{children:"Using controlled components allows you to control the form data flow, validate user input, and handle form submissions with ease."}),"\n",(0,a.jsx)(n.li,{children:"Controlled components are a powerful way to manage form data in React applications."}),"\n",(0,a.jsx)(n.li,{children:"By controlling the value of form elements using React state, you can handle user input, validate data, and trigger actions based on form data changes."}),"\n",(0,a.jsx)(n.li,{children:"This approach provides a flexible and robust way to manage form data and create interactive forms in React."}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(n.p,{children:"Controlled components are a powerful way to manage form data in React applications. By controlling the value of form elements using React state, you can handle user input, validate data, and trigger actions based on form data changes. This approach provides a flexible and robust way to manage form data and create interactive forms in React."})]})}function m(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>l});var a=t(11504);const o={},r=a.createContext(o);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);