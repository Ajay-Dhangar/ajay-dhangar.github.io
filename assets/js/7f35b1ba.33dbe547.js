"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[63464],{63184:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>r});var o=n(17624),t=n(4552);const l={id:"while-loop-in-javascript",title:"While Loop in JavaScript",sidebar_label:"While Loop",sidebar_position:24,tags:["JavaScript","While Loop","Loop","Iteration","Control","Flow","Iterative","Statements","Loops","Iteration","Iterating","Iterations"],description:"In this tutorial, we will learn about the while loop in JavaScript. We will learn how to use the while loop to execute a block of code repeatedly as long as a specified condition is true."},s=void 0,a={id:"javascript/while-loop-in-javascript",title:"While Loop in JavaScript",description:"In this tutorial, we will learn about the while loop in JavaScript. We will learn how to use the while loop to execute a block of code repeatedly as long as a specified condition is true.",source:"@site/docs/javascript/while-loop.md",sourceDirName:"javascript",slug:"/javascript/while-loop-in-javascript",permalink:"/docs/javascript/while-loop-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/while-loop.md",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"},{label:"While Loop",permalink:"/docs/tags/while-loop"},{label:"Loop",permalink:"/docs/tags/loop"},{label:"Iteration",permalink:"/docs/tags/iteration"},{label:"Control",permalink:"/docs/tags/control"},{label:"Flow",permalink:"/docs/tags/flow"},{label:"Iterative",permalink:"/docs/tags/iterative"},{label:"Statements",permalink:"/docs/tags/statements"},{label:"Loops",permalink:"/docs/tags/loops"},{label:"Iterating",permalink:"/docs/tags/iterating"},{label:"Iterations",permalink:"/docs/tags/iterations"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710868693e3,sidebarPosition:24,frontMatter:{id:"while-loop-in-javascript",title:"While Loop in JavaScript",sidebar_label:"While Loop",sidebar_position:24,tags:["JavaScript","While Loop","Loop","Iteration","Control","Flow","Iterative","Statements","Loops","Iteration","Iterating","Iterations"],description:"In this tutorial, we will learn about the while loop in JavaScript. We will learn how to use the while loop to execute a block of code repeatedly as long as a specified condition is true."},sidebar:"javascript",previous:{title:"For...Of",permalink:"/docs/javascript/for-of-loop-in-javascript"},next:{title:"Break",permalink:"/docs/javascript/breack-statement-in-javascript"}},c={},r=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Infinite <code>while</code> Loop",id:"infinite-while-loop",level:2},{value:"Nested <code>while</code> Loop",id:"nested-while-loop",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const i={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["In JavaScript, the ",(0,o.jsx)(i.code,{children:"while"})," loop is used to execute a block of code repeatedly as long as a specified condition is true. It is often used when you do not know the number of iterations you want to perform."]}),"\n",(0,o.jsx)(i.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsxs)(i.p,{children:["The syntax of the ",(0,o.jsx)(i.code,{children:"while"})," loop is as follows:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-js",metastring:'title="app.js"',children:"while (condition) {\n  // code to be executed\n}\n"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["The ",(0,o.jsx)(i.code,{children:"while"})," loop starts with the ",(0,o.jsx)(i.code,{children:"while"})," keyword followed by parentheses."]}),"\n",(0,o.jsxs)(i.li,{children:["Inside the parentheses, you need to specify a ",(0,o.jsx)(i.code,{children:"condition"})," that will be evaluated before each iteration."]}),"\n",(0,o.jsxs)(i.li,{children:["The code inside the loop will be executed as long as the ",(0,o.jsx)(i.code,{children:"condition"})," is ",(0,o.jsx)(i.code,{children:"true"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:["If the ",(0,o.jsx)(i.code,{children:"condition"})," is ",(0,o.jsx)(i.code,{children:"false"}),", the loop terminates, and the program continues with the next statement after the loop."]}),"\n",(0,o.jsxs)(i.li,{children:["The ",(0,o.jsx)(i.code,{children:"condition"})," can be any expression that evaluates to a boolean value (",(0,o.jsx)(i.code,{children:"true"})," or ",(0,o.jsx)(i.code,{children:"false"}),")."]}),"\n",(0,o.jsxs)(i.li,{children:["If the ",(0,o.jsx)(i.code,{children:"condition"})," is ",(0,o.jsx)(i.code,{children:"true"})," initially, the code inside the loop will be executed at least once."]}),"\n",(0,o.jsxs)(i.li,{children:["If the ",(0,o.jsx)(i.code,{children:"condition"})," is ",(0,o.jsx)(i.code,{children:"false"})," initially, the code inside the loop will not be executed at all."]}),"\n",(0,o.jsxs)(i.li,{children:["It is important to ensure that the ",(0,o.jsx)(i.code,{children:"condition"})," will eventually become ",(0,o.jsx)(i.code,{children:"false"})," to avoid an infinite loop."]}),"\n",(0,o.jsxs)(i.li,{children:["An infinite loop occurs when the ",(0,o.jsx)(i.code,{children:"condition"})," never becomes ",(0,o.jsx)(i.code,{children:"false"}),", and the loop continues indefinitely."]}),"\n",(0,o.jsx)(i.li,{children:"An infinite loop can crash the browser or the server and should be avoided."}),"\n",(0,o.jsxs)(i.li,{children:["The ",(0,o.jsx)(i.code,{children:"break"})," statement can be used to exit the ",(0,o.jsx)(i.code,{children:"while"})," loop prematurely."]}),"\n",(0,o.jsxs)(i.li,{children:["The ",(0,o.jsx)(i.code,{children:"continue"})," statement can be used to skip the rest of the code inside the loop and continue with the next iteration."]}),"\n",(0,o.jsxs)(i.li,{children:["The ",(0,o.jsx)(i.code,{children:"while"})," loop should be used when you do not know the number of iterations you want to perform."]}),"\n",(0,o.jsxs)(i.li,{children:["The ",(0,o.jsx)(i.code,{children:"for"})," loop is often used when you know the number of iterations you want to perform."]}),"\n",(0,o.jsxs)(i.li,{children:["The ",(0,o.jsx)(i.code,{children:"do...while"})," loop is similar to the ",(0,o.jsx)(i.code,{children:"while"})," loop but guarantees that the code inside the loop will be executed at least once."]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(i.p,{children:["The following example demonstrates how to use the ",(0,o.jsx)(i.code,{children:"while"})," loop to print the numbers from 1 to 5:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-js",metastring:'title="app.js"',children:"let i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;\n}\n"})}),"\n",(0,o.jsxs)(i.p,{children:["In this example, the ",(0,o.jsx)(i.code,{children:"while"})," loop checks if ",(0,o.jsx)(i.code,{children:"i"})," is less than or equal to ",(0,o.jsx)(i.code,{children:"5"}),". If the condition is ",(0,o.jsx)(i.code,{children:"true"}),", it executes the code inside the loop and increments ",(0,o.jsx)(i.code,{children:"i"})," by ",(0,o.jsx)(i.code,{children:"1"}),". This process continues until ",(0,o.jsx)(i.code,{children:"i"})," is no longer less than or equal to ",(0,o.jsx)(i.code,{children:"5"}),"."]}),"\n",(0,o.jsx)(i.p,{children:"The output of the above example will be:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-plaintext",metastring:'title="Output"',children:"1\n2\n3\n4\n5\n"})}),"\n",(0,o.jsxs)(i.p,{children:["In each iteration, the value of ",(0,o.jsx)(i.code,{children:"i"})," is printed to the console."]}),"\n",(0,o.jsxs)(i.h2,{id:"infinite-while-loop",children:["Infinite ",(0,o.jsx)(i.code,{children:"while"})," Loop"]}),"\n",(0,o.jsxs)(i.p,{children:["It is important to ensure that the ",(0,o.jsx)(i.code,{children:"condition"})," will eventually become ",(0,o.jsx)(i.code,{children:"false"})," to avoid an infinite loop. An infinite loop occurs when the ",(0,o.jsx)(i.code,{children:"condition"})," never becomes ",(0,o.jsx)(i.code,{children:"false"}),", and the loop continues indefinitely."]}),"\n",(0,o.jsxs)(i.p,{children:["If you omit the ",(0,o.jsx)(i.code,{children:"condition"})," expression, the ",(0,o.jsx)(i.code,{children:"while"})," loop will run indefinitely. This is known as an infinite loop. For example:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-js",metastring:'title="app.js"',children:"while (true) {\n  // code to be executed\n}\n"})}),"\n",(0,o.jsxs)(i.p,{children:["In this example, the ",(0,o.jsx)(i.code,{children:"while"})," loop will run indefinitely because the ",(0,o.jsx)(i.code,{children:"condition"})," is ",(0,o.jsx)(i.code,{children:"true"}),". This is an example of an infinite loop and should be avoided."]}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"break"})," statement can be used to exit the ",(0,o.jsx)(i.code,{children:"while"})," loop prematurely. For example:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-js",metastring:'title="app.js"',children:"let i = 1;\nwhile (true) {\n  console.log(i);\n  i++;\n  if (i > 5) {\n    break;\n  }\n}\n"})}),"\n",(0,o.jsxs)(i.p,{children:["In this example, the ",(0,o.jsx)(i.code,{children:"while"})," loop will run indefinitely because the ",(0,o.jsx)(i.code,{children:"condition"})," is ",(0,o.jsx)(i.code,{children:"true"}),". However, the ",(0,o.jsx)(i.code,{children:"break"})," statement is used to exit the loop when ",(0,o.jsx)(i.code,{children:"i"})," is greater than ",(0,o.jsx)(i.code,{children:"5"}),"."]}),"\n",(0,o.jsx)(i.p,{children:"The output of the above example will be:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-plaintext",metastring:'title="Output"',children:"1\n2\n3\n4\n5\n"})}),"\n",(0,o.jsxs)(i.p,{children:["In each iteration, the value of ",(0,o.jsx)(i.code,{children:"i"})," is printed to the console. The ",(0,o.jsx)(i.code,{children:"break"})," statement is used to exit the loop when ",(0,o.jsx)(i.code,{children:"i"})," is greater than ",(0,o.jsx)(i.code,{children:"5"}),"."]}),"\n",(0,o.jsxs)(i.h2,{id:"nested-while-loop",children:["Nested ",(0,o.jsx)(i.code,{children:"while"})," Loop"]}),"\n",(0,o.jsxs)(i.p,{children:["You can use a ",(0,o.jsx)(i.code,{children:"while"})," loop inside another ",(0,o.jsx)(i.code,{children:"while"})," loop. This is known as a nested ",(0,o.jsx)(i.code,{children:"while"})," loop. For example:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-js",metastring:'title="app.js"',children:"let i = 1;\n\nwhile (i <= 3) {\n  let j = 1;\n  while (j <= 3) {\n    console.log(`i = ${i}, j = ${j}`);\n    j++;\n  }\n  i++;\n}\n"})}),"\n",(0,o.jsxs)(i.p,{children:["In this example, the outer ",(0,o.jsx)(i.code,{children:"while"})," loop runs three times, and the inner ",(0,o.jsx)(i.code,{children:"while"})," loop runs three times for each iteration of the outer loop. The output of the above example will be:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-plaintext",metastring:'title="Output"',children:"i = 1, j = 1\ni = 1, j = 2\ni = 1, j = 3\ni = 2, j = 1\ni = 2, j = 2\ni = 2, j = 3\ni = 3, j = 1\ni = 3, j = 2\ni = 3, j = 3\n"})}),"\n",(0,o.jsxs)(i.p,{children:["In each iteration of the outer loop, the inner loop runs three times, printing the value of ",(0,o.jsx)(i.code,{children:"i"})," and ",(0,o.jsx)(i.code,{children:"j"})," to the console."]}),"\n",(0,o.jsx)(i.admonition,{title:"\ud83d\udcdd Note",type:"info",children:(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"1."})," You can use the ",(0,o.jsx)(i.code,{children:"break"})," statement to exit a ",(0,o.jsx)(i.code,{children:"while"})," loop prematurely. You can also use the ",(0,o.jsx)(i.code,{children:"continue"})," statement to skip the current iteration and continue with the next iteration."]})}),"\n",(0,o.jsx)(i.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(i.p,{children:["In this tutorial, we learned about the ",(0,o.jsx)(i.code,{children:"while"})," loop in JavaScript. We learned how to use the ",(0,o.jsx)(i.code,{children:"while"})," loop to execute a block of code repeatedly as long as a specified condition is ",(0,o.jsx)(i.code,{children:"true"}),". We also learned about infinite ",(0,o.jsx)(i.code,{children:"while"})," loops and nested ",(0,o.jsx)(i.code,{children:"while"})," loops."]})]})}function h(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,i,n)=>{n.d(i,{I:()=>a,M:()=>s});var o=n(11504);const t={},l=o.createContext(t);function s(e){const i=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(l.Provider,{value:i},e.children)}}}]);