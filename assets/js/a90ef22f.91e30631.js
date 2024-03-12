"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[33784],{30252:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(17624),i=n(4552);const r={id:"for-loop-in-javascript",title:"For Loop in JavaScript",sidebar_label:"For Loop",sidebar_position:21,tags:["JavaScript","For Loop","Loop","Iteration","Control","Flow","Iterative","Statements","Loops","Iteration","Iterating","Iterations"],description:"In this tutorial, we will learn about the for loop in JavaScript. We will learn how to use the for loop to execute a block of code multiple times in JavaScript."},s=void 0,l={id:"javascript/for-loop-in-javascript",title:"For Loop in JavaScript",description:"In this tutorial, we will learn about the for loop in JavaScript. We will learn how to use the for loop to execute a block of code multiple times in JavaScript.",source:"@site/docs/javascript/for-loop.md",sourceDirName:"javascript",slug:"/javascript/for-loop-in-javascript",permalink:"/code-harbor-hub/docs/javascript/for-loop-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/for-loop.md",tags:[{label:"JavaScript",permalink:"/code-harbor-hub/docs/tags/java-script"},{label:"For Loop",permalink:"/code-harbor-hub/docs/tags/for-loop"},{label:"Loop",permalink:"/code-harbor-hub/docs/tags/loop"},{label:"Iteration",permalink:"/code-harbor-hub/docs/tags/iteration"},{label:"Control",permalink:"/code-harbor-hub/docs/tags/control"},{label:"Flow",permalink:"/code-harbor-hub/docs/tags/flow"},{label:"Iterative",permalink:"/code-harbor-hub/docs/tags/iterative"},{label:"Statements",permalink:"/code-harbor-hub/docs/tags/statements"},{label:"Loops",permalink:"/code-harbor-hub/docs/tags/loops"},{label:"Iterating",permalink:"/code-harbor-hub/docs/tags/iterating"},{label:"Iterations",permalink:"/code-harbor-hub/docs/tags/iterations"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710246252,formattedLastUpdatedAt:"Mar 12, 2024",sidebarPosition:21,frontMatter:{id:"for-loop-in-javascript",title:"For Loop in JavaScript",sidebar_label:"For Loop",sidebar_position:21,tags:["JavaScript","For Loop","Loop","Iteration","Control","Flow","Iterative","Statements","Loops","Iteration","Iterating","Iterations"],description:"In this tutorial, we will learn about the for loop in JavaScript. We will learn how to use the for loop to execute a block of code multiple times in JavaScript."},sidebar:"tutorialSidebar",previous:{title:"Switch Statement",permalink:"/code-harbor-hub/docs/javascript/switch-in-javascript"},next:{title:"DSA",permalink:"/code-harbor-hub/docs/dsa/"}},a={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Flow Chart of the <code>for</code> Loop",id:"flow-chart-of-the-for-loop",level:2},{value:"Example",id:"example",level:2},{value:"Infinite <code>for</code> Loop",id:"infinite-for-loop",level:2},{value:"Nested <code>for</code> Loop",id:"nested-for-loop",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const o={admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["In JavaScript, the ",(0,t.jsx)(o.code,{children:"for"})," loop is used to execute a block of code multiple times. It is often used when you know the number of iterations you want to perform."]}),"\n",(0,t.jsx)(o.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(o.p,{children:["The syntax of the ",(0,t.jsx)(o.code,{children:"for"})," loop is as follows:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",metastring:'title="app.js"',children:"for (initialization; condition; increment / decrement) {\n  // code to be executed\n}\n"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["The ",(0,t.jsx)(o.code,{children:"for"})," loop starts with the ",(0,t.jsx)(o.code,{children:"for"})," keyword followed by parentheses."]}),"\n",(0,t.jsxs)(o.li,{children:["Inside the parentheses, you need to specify three expressions separated by semicolons:","\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["The ",(0,t.jsx)(o.code,{children:"initialization"})," expression is executed only once before the loop starts. It is used to initialize the loop variable."]}),"\n",(0,t.jsxs)(o.li,{children:["The ",(0,t.jsx)(o.code,{children:"condition"})," expression is evaluated before each iteration. If the condition is ",(0,t.jsx)(o.code,{children:"true"}),", the code inside the loop is executed. If the condition is ",(0,t.jsx)(o.code,{children:"false"}),", the loop terminates."]}),"\n",(0,t.jsxs)(o.li,{children:["The ",(0,t.jsx)(o.code,{children:"increment/decrement"})," expression is executed at the end of each iteration. It is used to update the loop variable."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.h2,{id:"flow-chart-of-the-for-loop",children:["Flow Chart of the ",(0,t.jsx)(o.code,{children:"for"})," Loop"]}),"\n",(0,t.jsx)(o.mermaid,{value:"graph TD;\n    Start([Start]) --\x3e Initialization;\n    Initialization --\x3e|Condition| Condition{Condition};\n    Condition --\x3e|True| Action;\n    Action --\x3e Increment[Increment/Decrement];\n    Increment --\x3e Condition{Condition};\n    Condition --\x3e|False| Stop;\n    Stop --\x3e End([End]);"}),"\n",(0,t.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(o.p,{children:["The following example demonstrates how to use the ",(0,t.jsx)(o.code,{children:"for"})," loop to print the numbers from 1 to 5:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",metastring:'title="app.js"',children:"for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["In this example, the ",(0,t.jsx)(o.code,{children:"for"})," loop initializes the loop variable ",(0,t.jsx)(o.code,{children:"i"})," to ",(0,t.jsx)(o.code,{children:"1"}),". It then checks if ",(0,t.jsx)(o.code,{children:"i"})," is less than or equal to ",(0,t.jsx)(o.code,{children:"5"}),". If the condition is ",(0,t.jsx)(o.code,{children:"true"}),", it executes the code inside the loop and increments ",(0,t.jsx)(o.code,{children:"i"})," by ",(0,t.jsx)(o.code,{children:"1"}),". This process continues until ",(0,t.jsx)(o.code,{children:"i"})," is no longer less than or equal to ",(0,t.jsx)(o.code,{children:"5"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"The output of the above example will be:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-plaintext",metastring:'title="Output"',children:"1\n2\n3\n4\n5\n"})}),"\n",(0,t.jsxs)(o.p,{children:["In each iteration, the value of ",(0,t.jsx)(o.code,{children:"i"})," is printed to the console."]}),"\n",(0,t.jsxs)(o.h2,{id:"infinite-for-loop",children:["Infinite ",(0,t.jsx)(o.code,{children:"for"})," Loop"]}),"\n",(0,t.jsxs)(o.p,{children:["If you omit the ",(0,t.jsx)(o.code,{children:"condition"})," expression, the ",(0,t.jsx)(o.code,{children:"for"})," loop will run indefinitely. This is known as an infinite loop. For example:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",metastring:'title="app.js"',children:"for (let i = 1; ; i++) {\n  console.log(i);\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["In this example, the ",(0,t.jsx)(o.code,{children:"condition"})," expression is omitted, so the loop will run indefinitely. You can use the ",(0,t.jsx)(o.code,{children:"break"})," statement to exit the loop when a certain condition is met."]}),"\n",(0,t.jsxs)(o.h2,{id:"nested-for-loop",children:["Nested ",(0,t.jsx)(o.code,{children:"for"})," Loop"]}),"\n",(0,t.jsxs)(o.p,{children:["You can use a ",(0,t.jsx)(o.code,{children:"for"})," loop inside another ",(0,t.jsx)(o.code,{children:"for"})," loop. This is known as a nested ",(0,t.jsx)(o.code,{children:"for"})," loop. For example:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",metastring:'title="app.js"',children:"for (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= 3; j++) {\n    console.log(`i = ${i}, j = ${j}`);\n  }\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["In this example, the outer ",(0,t.jsx)(o.code,{children:"for"})," loop runs three times, and the inner ",(0,t.jsx)(o.code,{children:"for"})," loop runs three times for each iteration of the outer loop. The output of the above example will be:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-plaintext",metastring:'title="Output"',children:"i = 1, j = 1\ni = 1, j = 2\ni = 1, j = 3\ni = 2, j = 1\ni = 2, j = 2\ni = 2, j = 3\ni = 3, j = 1\ni = 3, j = 2\ni = 3, j = 3\n"})}),"\n",(0,t.jsxs)(o.p,{children:["In each iteration of the outer loop, the inner loop runs three times, printing the value of ",(0,t.jsx)(o.code,{children:"i"})," and ",(0,t.jsx)(o.code,{children:"j"})," to the console."]}),"\n",(0,t.jsxs)(o.admonition,{title:"\ud83d\udcdd Note",type:"info",children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"1."})," You can use the ",(0,t.jsx)(o.code,{children:"break"})," statement to exit a ",(0,t.jsx)(o.code,{children:"for"})," loop prematurely. You can also use the ",(0,t.jsx)(o.code,{children:"continue"})," statement to skip the current iteration and continue with the next iteration."]}),(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"2. Live Example"})}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",metastring:"live",live:!0,children:"function printNumbers() {\n    return (\n        <div>\n            {(() => {\n                let numbers = [];\n                for (let i = 1; i <= 5; i++) {\n                    numbers.push(<p key={i}>{i}</p>);\n                }\n                return numbers;\n            })()}\n        </div>\n    )\n}\n"})}),(0,t.jsx)(o.h2,{id:"conclusion",children:"Conclusion"}),(0,t.jsxs)(o.p,{children:["In this tutorial, you learned about the ",(0,t.jsx)(o.code,{children:"for"})," loop in JavaScript and how to use it to execute a block of code multiple times. You also learned about infinite ",(0,t.jsx)(o.code,{children:"for"})," loops and nested ",(0,t.jsx)(o.code,{children:"for"})," loops."]})]})]})}function h(e={}){const{wrapper:o}={...(0,i.M)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,o,n)=>{n.d(o,{I:()=>l,M:()=>s});var t=n(11504);const i={},r=t.createContext(i);function s(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);