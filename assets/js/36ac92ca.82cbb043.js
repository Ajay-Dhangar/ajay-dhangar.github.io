"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[57797],{84214:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=t(74848),i=t(28453),o=t(96540);const a=function(){const[e,n]=(0,o.useState)({username:"",email:""}),t=t=>{const{name:s,value:i}=t.target;n({...e,[s]:i})};return(0,s.jsxs)("form",{onSubmit:n=>{n.preventDefault(),alert("Form submitted: "+JSON.stringify(e)),console.log("Form submitted:",e)},style:{display:"flex",flexDirection:"column",border:"1px solid black",padding:"10px",maxWidth:"300px",margin:"auto",boxShadow:"2px 2px 5px #666",borderRadius:"5px"},children:[(0,s.jsx)("label",{children:"Username:"}),(0,s.jsx)("input",{type:"text",name:"username",value:e.username,onChange:t,style:{marginBottom:"10px",padding:"5px"}}),(0,s.jsx)("label",{children:"Email:"}),(0,s.jsx)("input",{type:"email",name:"email",value:e.email,onChange:t,style:{marginBottom:"10px",padding:"5px"}}),(0,s.jsx)("button",{type:"submit",style:{padding:"5px",backgroundColor:"blue",color:"white",border:"none"},children:"Submit"})]})},r={id:"lesson-2",title:"Handling form submissions (sending data or local processing)",sidebar_label:"Lesson - 2",sidebar_position:2,description:"learn how to handle form submissions in React applications. Handling form submissions involves sending form data to a server or processing it locally within the application. In this lesson, we will explore how to handle form submissions in React using event handlers and state management.",tags:["courses","react-js","beginner-level","introduction-to-forms","form-submissions","event-handlers","state-management"]},l=void 0,d={id:"react-js/begginer-level/introduction-to-forms/lesson-2",title:"Handling form submissions (sending data or local processing)",description:"learn how to handle form submissions in React applications. Handling form submissions involves sending form data to a server or processing it locally within the application. In this lesson, we will explore how to handle form submissions in React using event handlers and state management.",source:"@site/courses/react-js/begginer-level/introduction-to-forms/lesson_2.md",sourceDirName:"react-js/begginer-level/introduction-to-forms",slug:"/react-js/begginer-level/introduction-to-forms/lesson-2",permalink:"/courses/react-js/begginer-level/introduction-to-forms/lesson-2",draft:!1,unlisted:!1,tags:[{inline:!0,label:"courses",permalink:"/courses/tags/courses"},{inline:!0,label:"react-js",permalink:"/courses/tags/react-js"},{inline:!0,label:"beginner-level",permalink:"/courses/tags/beginner-level"},{inline:!0,label:"introduction-to-forms",permalink:"/courses/tags/introduction-to-forms"},{inline:!0,label:"form-submissions",permalink:"/courses/tags/form-submissions"},{inline:!0,label:"event-handlers",permalink:"/courses/tags/event-handlers"},{inline:!0,label:"state-management",permalink:"/courses/tags/state-management"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1712576295e3,sidebarPosition:2,frontMatter:{id:"lesson-2",title:"Handling form submissions (sending data or local processing)",sidebar_label:"Lesson - 2",sidebar_position:2,description:"learn how to handle form submissions in React applications. Handling form submissions involves sending form data to a server or processing it locally within the application. In this lesson, we will explore how to handle form submissions in React using event handlers and state management.",tags:["courses","react-js","beginner-level","introduction-to-forms","form-submissions","event-handlers","state-management"]},sidebar:"tutorialSidebar",previous:{title:"Lesson - 1",permalink:"/courses/react-js/begginer-level/introduction-to-forms/lesson-1"},next:{title:"Intermediate Level",permalink:"/courses/category/intermediate-level"}},m={},c=[{value:"What is form submission in React?",id:"what-is-form-submission-in-react",level:2},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,i.R)(),...e.components},{BrowserWindow:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In React applications, handling form submissions is a common task that involves sending form data to a server or processing it locally within the application. Form submissions are triggered when a user interacts with a form element, such as clicking a submit button or pressing the Enter key. In this lesson, we will explore how to handle form submissions in React using event handlers and state management."}),"\n",(0,s.jsx)(n.h2,{id:"what-is-form-submission-in-react",children:"What is form submission in React?"}),"\n",(0,s.jsx)(n.p,{children:"Form submission in React refers to the process of sending form data to a server or processing it locally within the application. When a user interacts with a form element, such as entering text in an input field or selecting an option from a dropdown, the form data is collected and submitted to a server for processing. Form submissions can be triggered by various events, such as clicking a submit button, pressing the Enter key, or using a custom event handler."}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of handling form submissions in React using an event handler:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="FormComponent.js"',children:'import React, { useState } from "react";\n\nfunction FormComponent() {\n  const [formData, setFormData] = useState({\n    username: "",\n    email: "",\n  });\n\n  const handleChange = (event) => {\n    const { name, value } = event.target;\n    setFormData({\n      ...formData,\n      [name]: value,\n    });\n  };\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    alert("Form submitted: " + JSON.stringify(formData));\n    console.log("Form submitted:", formData);\n  };\n\n  return (\n    <form\n      onSubmit={handleSubmit}\n      style={{\n        display: "flex",\n        flexDirection: "column",\n        border: "1px solid black",\n        padding: "10px",\n        maxWidth: "300px",\n        margin: "auto",\n        boxShadow: "2px 2px 5px #666",\n        borderRadius: "5px",\n      }}\n    >\n      <label>Username:</label>\n\n      <input\n        type="text"\n        name="username"\n        value={formData.username}\n        onChange={handleChange}\n        style={{ marginBottom: "10px", padding: "5px" }}\n      />\n      <label>Email:</label>\n      <input\n        type="email"\n        name="email"\n        value={formData.email}\n        onChange={handleChange}\n        style={{ marginBottom: "10px", padding: "5px" }}\n      />\n      <button\n        type="submit"\n        style={{\n          padding: "5px",\n          backgroundColor: "blue",\n          color: "white",\n          border: "none",\n        }}\n      >\n        Submit\n      </button>\n    </form>\n  );\n}\n\nexport default FormComponent;\n'})}),"\n",(0,s.jsx)(t,{minHeight:"300px",children:(0,s.jsx)(a,{})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"FormComponent"})," component manages form data using the ",(0,s.jsx)(n.code,{children:"useState"})," hook. The form data is stored in the ",(0,s.jsx)(n.code,{children:"formData"})," state object, which contains the ",(0,s.jsx)(n.code,{children:"username"})," and ",(0,s.jsx)(n.code,{children:"email"})," fields. The ",(0,s.jsx)(n.code,{children:"handleChange"})," function updates the form data when the user enters text in the input fields, and the ",(0,s.jsx)(n.code,{children:"handleSubmit"})," function is triggered when the form is submitted."]}),"\n",(0,s.jsxs)(n.p,{children:["When the form is submitted, the ",(0,s.jsx)(n.code,{children:"handleSubmit"})," function prevents the default form submission behavior using ",(0,s.jsx)(n.code,{children:"event.preventDefault()"}),", displays an alert message with the form data, and logs the form data to the console. This example demonstrates how to handle form submissions in React by capturing form data and processing it using event handlers and state management."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"handleChange"})," function, we use object destructuring to extract the ",(0,s.jsx)(n.code,{children:"name"})," and ",(0,s.jsx)(n.code,{children:"value"})," properties from the event target. This allows us to update the form data dynamically based on the input field name."]}),(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"onSubmit"})," event handler is used to capture the form submission event and trigger the ",(0,s.jsx)(n.code,{children:"handleSubmit"})," function. By calling ",(0,s.jsx)(n.code,{children:"event.preventDefault()"})," in the ",(0,s.jsx)(n.code,{children:"handleSubmit"})," function, we prevent the default form submission behavior and handle the form data locally within the application."]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"When handling form submissions in React, you can perform additional validation, data processing, or API calls based on the form data. By managing form data in state and defining event handlers to update the form data, you can create interactive forms that respond to user input and trigger actions when the form is submitted."}),(0,s.jsx)(n.p,{children:"Form submissions can be used to send data to a server for processing or perform local operations within the application, depending on the requirements of the application."})]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"Handling form submissions in React involves capturing form data and processing it using event handlers and state management. By managing form data in state and defining event handlers to update the form data, you can create interactive forms that respond to user input and trigger actions when the form is submitted. Form submissions can be used to send data to a server for processing or perform local operations within the application, depending on the requirements of the application."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);