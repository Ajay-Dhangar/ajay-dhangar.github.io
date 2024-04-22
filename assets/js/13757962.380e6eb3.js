"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[73724],{2976:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=n(17624),s=n(4552);const o={id:"mistakes-in-js",title:"Mistakes in JavaScript",sidebar_label:"Mistakes",sidebar_position:42,tags:["JavaScript","Mistakes","Common Mistakes in JavaScript","JavaScript Mistakes","JavaScript Mistakes Tutorial","JavaScript Mistakes Example","JavaScript Mistakes to Avoid","JavaScript Common Mistakes","JavaScript Common Mistakes Tutorial","JavaScript Common Mistakes Example"],description:"In this tutorial, we will learn about the common mistakes in JavaScript that developers make and how to avoid them. We will learn about the common pitfalls, bugs, and errors in JavaScript code and how to fix them."},i=void 0,r={id:"javascript/mistakes-in-js",title:"Mistakes in JavaScript",description:"In this tutorial, we will learn about the common mistakes in JavaScript that developers make and how to avoid them. We will learn about the common pitfalls, bugs, and errors in JavaScript code and how to fix them.",source:"@site/docs/javascript/mistakes-js.md",sourceDirName:"javascript",slug:"/javascript/mistakes-in-js",permalink:"/docs/javascript/mistakes-in-js",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/mistakes-js.md",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"},{label:"Mistakes",permalink:"/docs/tags/mistakes"},{label:"Common Mistakes in JavaScript",permalink:"/docs/tags/common-mistakes-in-java-script"},{label:"JavaScript Mistakes",permalink:"/docs/tags/java-script-mistakes"},{label:"JavaScript Mistakes Tutorial",permalink:"/docs/tags/java-script-mistakes-tutorial"},{label:"JavaScript Mistakes Example",permalink:"/docs/tags/java-script-mistakes-example"},{label:"JavaScript Mistakes to Avoid",permalink:"/docs/tags/java-script-mistakes-to-avoid"},{label:"JavaScript Common Mistakes",permalink:"/docs/tags/java-script-common-mistakes"},{label:"JavaScript Common Mistakes Tutorial",permalink:"/docs/tags/java-script-common-mistakes-tutorial"},{label:"JavaScript Common Mistakes Example",permalink:"/docs/tags/java-script-common-mistakes-example"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1711259655e3,sidebarPosition:42,frontMatter:{id:"mistakes-in-js",title:"Mistakes in JavaScript",sidebar_label:"Mistakes",sidebar_position:42,tags:["JavaScript","Mistakes","Common Mistakes in JavaScript","JavaScript Mistakes","JavaScript Mistakes Tutorial","JavaScript Mistakes Example","JavaScript Mistakes to Avoid","JavaScript Common Mistakes","JavaScript Common Mistakes Tutorial","JavaScript Common Mistakes Example"],description:"In this tutorial, we will learn about the common mistakes in JavaScript that developers make and how to avoid them. We will learn about the common pitfalls, bugs, and errors in JavaScript code and how to fix them."},sidebar:"javascript",previous:{title:"Best Practices",permalink:"/docs/javascript/best-practices-in-js"},next:{title:"Performance",permalink:"/docs/javascript/performance-in-javascript"}},c={},l=[{value:"Common Mistakes in JavaScript",id:"common-mistakes-in-javascript",level:2},{value:"Misunderstanding Variable Scope",id:"misunderstanding-variable-scope",level:3},{value:"Using <code>==</code> Instead of <code>===</code>",id:"using--instead-of-",level:3},{value:"Ignoring Asynchronous Code",id:"ignoring-asynchronous-code",level:3},{value:"Not Handling Errors",id:"not-handling-errors",level:3},{value:"Not Using Strict Mode",id:"not-using-strict-mode",level:3},{value:"Not Using <code>let</code> and <code>const</code>",id:"not-using-let-and-const",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const a={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.M)(),...e.components},{TabItem:n,Tabs:o}=a;return n||p("TabItem",!0),o||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"JavaScript is a powerful and flexible language, but it is also easy to make mistakes while writing code. In this tutorial, we will learn about the common mistakes in JavaScript that developers make and how to avoid them. By understanding these mistakes and pitfalls, you can write better and more reliable JavaScript code."}),"\n",(0,t.jsx)(a.h2,{id:"common-mistakes-in-javascript",children:"Common Mistakes in JavaScript"}),"\n",(0,t.jsx)(a.h3,{id:"misunderstanding-variable-scope",children:"Misunderstanding Variable Scope"}),"\n",(0,t.jsxs)(a.p,{children:["One common mistake in JavaScript is misunderstanding variable scope. JavaScript has function-level scope, which means that variables declared inside a function are only accessible within that function. If you declare a variable without the ",(0,t.jsx)(a.code,{children:"var"}),", ",(0,t.jsx)(a.code,{children:"let"}),", or ",(0,t.jsx)(a.code,{children:"const"})," keyword, it becomes a global variable and is accessible throughout the entire script. This can lead to unintended side effects and bugs in your code."]}),"\n",(0,t.jsxs)(o,{defaultValue:"good",groupId:"variable-scope",children:[(0,t.jsx)(n,{value:"good",label:"Good",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"function myFunction() {\n  let localVar = 10;\n    console.log(localVar);\n}\n\nmyFunction(); // 10\n"})})}),(0,t.jsx)(n,{value:"bad",label:"Bad",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"function myFunction() {\n    localVar = 10;\n    console.log(localVar); \n}\n\nmyFunction(); // 10    \n"})})})]}),"\n",(0,t.jsxs)(a.h3,{id:"using--instead-of-",children:["Using ",(0,t.jsx)(a.code,{children:"=="})," Instead of ",(0,t.jsx)(a.code,{children:"==="})]}),"\n",(0,t.jsxs)(a.p,{children:["Another common mistake in JavaScript is using the ",(0,t.jsx)(a.code,{children:"=="})," operator instead of the ",(0,t.jsx)(a.code,{children:"==="})," operator. The ",(0,t.jsx)(a.code,{children:"=="})," operator performs type coercion, which means that it converts the operands to the same type before comparing them. This can lead to unexpected results and bugs in your code. The ",(0,t.jsx)(a.code,{children:"==="})," operator, on the other hand, performs strict equality comparison, which means that it compares the operands without type coercion."]}),"\n",(0,t.jsxs)(o,{defaultValue:"good",groupId:"equality-operator",children:[(0,t.jsx)(n,{value:"good",label:"Good",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:'let x = 10;\nlet y = "10";\n\nif (x === 10) {\n  console.log("x is equal to 10");\n}\n\nif (x === y) {\n  console.log("x is equal to y");\n}\n'})})}),(0,t.jsx)(n,{value:"bad",label:"Bad",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:'let x = 10;\nlet y = "10";\n\nif (x == 10) {\n  console.log("x is equal to 10");\n}\n\nif (x == y) {\n  console.log("x is equal to y");\n}\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"ignoring-asynchronous-code",children:"Ignoring Asynchronous Code"}),"\n",(0,t.jsx)(a.p,{children:"JavaScript is a single-threaded language, which means that it can only execute one piece of code at a time. Asynchronous code allows you to perform time-consuming tasks without blocking the main thread. One common mistake in JavaScript is ignoring asynchronous code and performing time-consuming tasks synchronously. This can lead to slow performance and unresponsive user interfaces."}),"\n",(0,t.jsxs)(o,{defaultValue:"good",groupId:"asynchronous-code",children:[(0,t.jsx)(n,{value:"good",label:"Good",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:'function fetchData() {\n  fetch("https://api.github.com/users")\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error(error));\n}\n\nfetchData(); // Fetch and log data asynchronously\n'})})}),(0,t.jsx)(n,{value:"bad",label:"Bad",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:'function fetchData() {\n  let response = fetch("https://api.github.com/users");\n  let data = response.json();\n  console.log(data);\n}\n\nfetchData(); // Fetch and log data synchronously\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"not-handling-errors",children:"Not Handling Errors"}),"\n",(0,t.jsx)(a.p,{children:"Another common mistake in JavaScript is not handling errors properly. Errors can occur at any time in your code, and if they are not handled correctly, they can crash your application. It is important to use try-catch blocks or promise.catch() to catch and handle errors in your code."}),"\n",(0,t.jsxs)(o,{defaultValue:"good",groupId:"error-handling",children:[(0,t.jsx)(n,{value:"good",label:"Good",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:'  async function fetchData() {\n    try {\n      let response = await fetch("https://api.github.com/users");\n      let data = await response.json();\n      console.log(data);\n    } catch (error) {\n      console.error("Error fetching data:", error);\n    }\n  }    \n\n  fetchData(); // Fetch and log data with error handling\n\n'})})}),(0,t.jsx)(n,{value:"bad",label:"Bad",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:'async function fetchData() {\n  let response = await fetch("https://api.github.com/users");\n  let data = await response.json();\n  console.log(data);\n}\n\nfetchData(); // Fetch and log data without error handling\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"not-using-strict-mode",children:"Not Using Strict Mode"}),"\n",(0,t.jsx)(a.p,{children:"Strict mode is a feature in JavaScript that helps you write cleaner and more secure code. It catches common coding mistakes and prevents certain actions that are considered bad practice. One common mistake in JavaScript is not using strict mode in your code."}),"\n",(0,t.jsxs)(o,{defaultValue:"good",groupId:"strict-mode",children:[(0,t.jsx)(n,{value:"good",label:"Good",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:'"use strict";\n\n// Code that follows strict mode\n'})})}),(0,t.jsx)(n,{value:"bad",label:"Bad",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"// Code that does not follow strict mode\n"})})})]}),"\n",(0,t.jsxs)(a.h3,{id:"not-using-let-and-const",children:["Not Using ",(0,t.jsx)(a.code,{children:"let"})," and ",(0,t.jsx)(a.code,{children:"const"})]}),"\n",(0,t.jsxs)(a.p,{children:["Another common mistake in JavaScript is not using the ",(0,t.jsx)(a.code,{children:"let"})," and ",(0,t.jsx)(a.code,{children:"const"})," keywords to declare variables. The ",(0,t.jsx)(a.code,{children:"let"})," keyword is used to declare block-scoped variables, while the ",(0,t.jsx)(a.code,{children:"const"})," keyword is used to declare constants. Using ",(0,t.jsx)(a.code,{children:"let"})," and ",(0,t.jsx)(a.code,{children:"const"})," helps prevent unintended side effects and bugs in your code."]}),"\n",(0,t.jsxs)(o,{defaultValue:"good",groupId:"let-const",children:[(0,t.jsx)(n,{value:"good",label:"Good",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"let x = 10;\nconst y = 20;\n"})})}),(0,t.jsx)(n,{value:"bad",label:"Bad",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"var x = 10;\ny = 20;\n\nconsole.log(x); // 10\nconsole.log(y); // 20\n"})})})]}),"\n",(0,t.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(a.p,{children:["In this tutorial, we learned about the common mistakes in JavaScript that developers make and how to avoid them. By understanding these mistakes and pitfalls, you can write better and more reliable JavaScript code. We covered common mistakes such as misunderstanding variable scope, using ",(0,t.jsx)(a.code,{children:"=="})," instead of ",(0,t.jsx)(a.code,{children:"==="}),", ignoring asynchronous code, not handling errors, not using strict mode, and not using ",(0,t.jsx)(a.code,{children:"let"})," and ",(0,t.jsx)(a.code,{children:"const"}),". By avoiding these mistakes, you can write cleaner, more secure, and more efficient JavaScript code."]})]})}function h(e={}){const{wrapper:a}={...(0,s.M)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function p(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4552:(e,a,n)=>{n.d(a,{I:()=>r,M:()=>i});var t=n(11504);const s={},o=t.createContext(s);function i(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);