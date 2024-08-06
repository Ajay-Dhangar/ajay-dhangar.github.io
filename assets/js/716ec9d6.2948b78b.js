"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[73606],{79715:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var o=n(74848),s=n(28453);const t={id:"errors-in-javascript",title:"Errors in JavaScript",sidebar_label:"Errors",sidebar_position:31,tags:["JavaScript","Errors","Try Catch Finally","Error Object","Throw Error","Error Handling","DOMException","AggregateError","TypeError","RangeError","URIError","EvalError","InternalError","Error","AbortError","NotAllowedError","NotFoundError","SecurityError","try","catch","finally"],description:"In this tutorial, we will learn about errors in JavaScript. Errors are unexpected events that occur during the execution of a program. We will see the different types of errors in JavaScript and how to handle them using try...catch...finally blocks."},i=void 0,a={id:"javascript/errors-in-javascript",title:"Errors in JavaScript",description:"In this tutorial, we will learn about errors in JavaScript. Errors are unexpected events that occur during the execution of a program. We will see the different types of errors in JavaScript and how to handle them using try...catch...finally blocks.",source:"@site/docs/javascript/errors.md",sourceDirName:"javascript",slug:"/javascript/errors-in-javascript",permalink:"/docs/javascript/errors-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/errors.md",tags:[{inline:!0,label:"JavaScript",permalink:"/docs/tags/java-script"},{inline:!0,label:"Errors",permalink:"/docs/tags/errors"},{inline:!0,label:"Try Catch Finally",permalink:"/docs/tags/try-catch-finally"},{inline:!0,label:"Error Object",permalink:"/docs/tags/error-object"},{inline:!0,label:"Throw Error",permalink:"/docs/tags/throw-error"},{inline:!0,label:"Error Handling",permalink:"/docs/tags/error-handling"},{inline:!0,label:"DOMException",permalink:"/docs/tags/dom-exception"},{inline:!0,label:"AggregateError",permalink:"/docs/tags/aggregate-error"},{inline:!0,label:"TypeError",permalink:"/docs/tags/type-error"},{inline:!0,label:"RangeError",permalink:"/docs/tags/range-error"},{inline:!0,label:"URIError",permalink:"/docs/tags/uri-error"},{inline:!0,label:"EvalError",permalink:"/docs/tags/eval-error"},{inline:!0,label:"InternalError",permalink:"/docs/tags/internal-error"},{inline:!0,label:"Error",permalink:"/docs/tags/error"},{inline:!0,label:"AbortError",permalink:"/docs/tags/abort-error"},{inline:!0,label:"NotAllowedError",permalink:"/docs/tags/not-allowed-error"},{inline:!0,label:"NotFoundError",permalink:"/docs/tags/not-found-error"},{inline:!0,label:"SecurityError",permalink:"/docs/tags/security-error"},{inline:!0,label:"try",permalink:"/docs/tags/try"},{inline:!0,label:"catch",permalink:"/docs/tags/catch"},{inline:!0,label:"finally",permalink:"/docs/tags/finally"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710935162e3,sidebarPosition:31,frontMatter:{id:"errors-in-javascript",title:"Errors in JavaScript",sidebar_label:"Errors",sidebar_position:31,tags:["JavaScript","Errors","Try Catch Finally","Error Object","Throw Error","Error Handling","DOMException","AggregateError","TypeError","RangeError","URIError","EvalError","InternalError","Error","AbortError","NotAllowedError","NotFoundError","SecurityError","try","catch","finally"],description:"In this tutorial, we will learn about errors in JavaScript. Errors are unexpected events that occur during the execution of a program. We will see the different types of errors in JavaScript and how to handle them using try...catch...finally blocks."},sidebar:"tutorialSidebar",previous:{title:"Precedence and Associativity of Operators",permalink:"/docs/javascript/precedence-and-associativity-of-operators-in-javascript"},next:{title:"Scopes",permalink:"/docs/javascript/scopes-in-javascript"}},c={},l=[{value:"Handling Errors in JavaScript",id:"handling-errors-in-javascript",level:2},{value:"Summary",id:"summary",level:2}];function h(r){const e={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...r.components},{Details:n}=e;return n||function(r,e){throw new Error("Expected "+(e?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"In JavaScript, an error is an unexpected event that occurs during the execution of a program. Errors can occur due to various reasons such as incorrect syntax, logical errors, or runtime errors. When an error occurs, JavaScript stops the execution of the program and generates an error message."}),"\n",(0,o.jsxs)(e.p,{children:["JavaScript provides a built-in ",(0,o.jsx)(e.code,{children:"Error"})," object that represents an error. The ",(0,o.jsx)(e.code,{children:"Error"})," object contains information about the error such as the error message and the stack trace. The stack trace is a list of function calls that were in progress when the error occurred."]}),"\n",(0,o.jsx)(e.p,{children:"There are several types of errors in JavaScript. Some common types of errors are:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"SyntaxError"}),": This error occurs when there is a syntax error in the code. For example, missing parentheses, missing semicolons, or misspelled keywords."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"ReferenceError"}),": This error occurs when a variable or function is used without being declared."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"TypeError"}),": This error occurs when a value is not of the expected type. For example, trying to call a non-function value."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"RangeError"}),": This error occurs when a value is not within the expected range. For example, using an invalid index in an array."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"URIError"}),": This error occurs when a global URI handling function is used in a wrong way."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"EvalError"}),": This error occurs when an error occurs during the execution of ",(0,o.jsx)(e.code,{children:"eval()"})," function."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"InternalError"}),": This error occurs when an internal error in the JavaScript engine occurs."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Error"}),": This is the base class for all errors in JavaScript."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"AggregateError"}),": This error is a subclass of ",(0,o.jsx)(e.code,{children:"Error"})," that represents an error when multiple errors need to be wrapped in a single error."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"DOMException"}),": This error is a subclass of ",(0,o.jsx)(e.code,{children:"Error"})," that represents an error in the DOM."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"AbortError"}),": This error is a subclass of ",(0,o.jsx)(e.code,{children:"DOMException"})," that represents an error when an operation is aborted."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"NotAllowedError"}),": This error is a subclass of ",(0,o.jsx)(e.code,{children:"DOMException"})," that represents an error when an operation is not allowed."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"NotFoundError"}),": This error is a subclass of ",(0,o.jsx)(e.code,{children:"DOMException"})," that represents an error when a requested resource is not found."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"SecurityError"}),": This error is a subclass of ",(0,o.jsx)(e.code,{children:"DOMException"})," that represents a security error."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"TypeError"}),": This error is a subclass of ",(0,o.jsx)(e.code,{children:"Error"})," that represents a type error."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"RangeError"}),": This error is a subclass of ",(0,o.jsx)(e.code,{children:"Error"})," that represents a range error."]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"handling-errors-in-javascript",children:"Handling Errors in JavaScript"}),"\n",(0,o.jsxs)(e.p,{children:["To handle errors in JavaScript, you can use the ",(0,o.jsx)(e.code,{children:"try...catch...finally"})," statement. The ",(0,o.jsx)(e.code,{children:"try"})," block contains the code that may throw an error. The ",(0,o.jsx)(e.code,{children:"catch"})," block contains the code to handle the error. The ",(0,o.jsx)(e.code,{children:"finally"})," block contains the code that will be executed regardless of whether an error occurs or not."]}),"\n",(0,o.jsxs)(e.p,{children:["Here is the syntax of the ",(0,o.jsx)(e.code,{children:"try...catch...finally"})," statement:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",metastring:'title="app.js"',children:"try {\n    // Code that may throw an error\n} catch (error) {\n    // Code to handle the error\n} finally {\n    // Code that will be executed regardless of whether an error occurs or not\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Let's see an example of handling errors in JavaScript using the ",(0,o.jsx)(e.code,{children:"try...catch...finally"})," statement:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",metastring:'title="app.js"',children:'try {\n    let x = 10;\n    let y = 0;\n    let result = x / y; // Division by zero\n    console.log(result);\n} catch (error) {\n    console.log("An error occurred: " + error.message);\n} finally {\n    console.log("Finally block executed");\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["In this example, we are trying to divide a number by zero, which will throw a ",(0,o.jsx)(e.code,{children:"TypeError"})," (division by zero). We are handling this error using the ",(0,o.jsx)(e.code,{children:"try...catch...finally"})," statement."]}),"\n",(0,o.jsx)(e.p,{children:"When you run the above code, you will get the following output:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",metastring:'title="Output"',children:"An error occurred: Division by zero\nFinally block executed\n"})}),"\n",(0,o.jsxs)(e.p,{children:["In the ",(0,o.jsx)(e.code,{children:"catch"})," block, we are logging the error message using ",(0,o.jsx)(e.code,{children:"error.message"}),". In the ",(0,o.jsx)(e.code,{children:"finally"})," block, we are logging a message that will be executed regardless of whether an error occurs or not."]}),"\n",(0,o.jsxs)(e.p,{children:["That's all for handling errors in JavaScript. You can use the ",(0,o.jsx)(e.code,{children:"try...catch...finally"})," statement to handle errors and prevent your program from crashing when an error occurs."]}),"\n",(0,o.jsxs)(e.admonition,{title:"\ud83e\udde0 Knowledge Check",type:"tip",children:[(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Which of the following is not a type of error in JavaScript?"}),"\n",(0,o.jsxs)(e.p,{children:["A) SyntaxError ",(0,o.jsx)("br",{}),"\nB) ReferenceError ",(0,o.jsx)("br",{}),"\nC) TypeError ",(0,o.jsx)("br",{}),"\nD) NullError"]}),"\n"]}),"\n"]}),(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"Answer"})}),(0,o.jsxs)("p",{children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Answer:"})," D) NullError"]}),(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"NullError"})," is not a type of error in JavaScript. The correct type of error is ",(0,o.jsx)(e.code,{children:"TypeError"}),"."]})]})]}),(0,o.jsxs)(e.ol,{start:"2",children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Which block of code will be executed regardless of whether an error occurs or not?"}),"\n",(0,o.jsxs)(e.p,{children:["A) ",(0,o.jsx)(e.code,{children:"try"})," block ",(0,o.jsx)("br",{}),"\nB) ",(0,o.jsx)(e.code,{children:"catch"})," block ",(0,o.jsx)("br",{}),"\nC) ",(0,o.jsx)(e.code,{children:"finally"})," block ",(0,o.jsx)("br",{}),"\nD) None of the above"]}),"\n"]}),"\n"]}),(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"Answer"})}),(0,o.jsxs)("p",{children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Answer:"})," C) ",(0,o.jsx)(e.code,{children:"finally"})," block"]}),(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"finally"})," block will be executed regardless of whether an error occurs or not."]})]})]})]}),"\n",(0,o.jsxs)(e.admonition,{title:"\ud83d\udcda Learn More:",type:"info",children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Throwing Errors in JavaScript:"})}),(0,o.jsxs)(e.p,{children:["You can throw an error in JavaScript using the ",(0,o.jsx)(e.code,{children:"throw"})," statement. The ",(0,o.jsx)(e.code,{children:"throw"})," statement allows you to create a custom error and throw it. Here is an example of throwing an error in JavaScript:"]}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",metastring:'title="app.js"',children:'try {\n    let x = 10;\n    let y = 0;\n    if (y === 0) {\n        throw new Error("Division by zero");\n    }\n    let result = x / y;\n    console.log(result);\n} catch (error) {\n    console.log("An error occurred: " + error.message);\n} finally {\n    console.log("Finally block executed");\n}\n'})}),(0,o.jsxs)(e.p,{children:["In this example, we are throwing a custom error using the ",(0,o.jsx)(e.code,{children:"throw"})," statement when the value of ",(0,o.jsx)(e.code,{children:"y"}),' is zero. The error message is "Division by zero".']}),(0,o.jsx)(e.p,{children:"When you run the above code, you will get the following output:"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",metastring:'title="Output"',children:"An error occurred: Division by zero\nFinally block executed\n"})}),(0,o.jsxs)(e.p,{children:["In the ",(0,o.jsx)(e.code,{children:"catch"})," block, we are logging the error message using ",(0,o.jsx)(e.code,{children:"error.message"}),". In the ",(0,o.jsx)(e.code,{children:"finally"})," block, we are logging a message that will be executed regardless of whether an error occurs or not."]}),(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Error Object in JavaScript:"})}),(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"Error"})," object in JavaScript has two properties: ",(0,o.jsx)(e.code,{children:"name"})," and ",(0,o.jsx)(e.code,{children:"message"}),". The ",(0,o.jsx)(e.code,{children:"name"}),' property contains the name of the error (e.g., "SyntaxError", "ReferenceError", "TypeError"), and the ',(0,o.jsx)(e.code,{children:"message"})," property contains the error message."]}),(0,o.jsxs)(e.p,{children:["Here is an example of creating a custom error using the ",(0,o.jsx)(e.code,{children:"Error"})," object:"]}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",metastring:'title="app.js"',children:'try {\n    throw new Error("Custom Error");\n} catch (error) {\n    console.log("An error occurred: " + error.message);\n}\n'})}),(0,o.jsxs)(e.p,{children:["In this example, we are creating a custom error using the ",(0,o.jsx)(e.code,{children:"Error"}),' object with the message "Custom Error".']}),(0,o.jsx)(e.p,{children:"When you run the above code, you will get the following output:"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",metastring:'title="Output"',children:"An error occurred: Custom Error\n"})}),(0,o.jsxs)(e.p,{children:["That's all for throwing errors in JavaScript. You can use the ",(0,o.jsx)(e.code,{children:"throw"})," statement to throw custom errors and handle them using the ",(0,o.jsx)(e.code,{children:"try...catch...finally"})," statement."]})]}),"\n",(0,o.jsx)(e.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(e.p,{children:["In this tutorial, we learned about errors in JavaScript. Errors are unexpected events that occur during the execution of a program. We saw the different types of errors in JavaScript and how to handle them using the ",(0,o.jsx)(e.code,{children:"try...catch...finally"})," statement. We also saw an example of handling errors in JavaScript."]})]})}function d(r={}){const{wrapper:e}={...(0,s.R)(),...r.components};return e?(0,o.jsx)(e,{...r,children:(0,o.jsx)(h,{...r})}):h(r)}},28453:(r,e,n)=>{n.d(e,{R:()=>i,x:()=>a});var o=n(96540);const s={},t=o.createContext(s);function i(r){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function a(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(s):r.components||s:i(r.components),o.createElement(t.Provider,{value:e},r.children)}}}]);