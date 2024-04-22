"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[48456],{37348:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(17624),r=t(4552);const i={id:"for-of-loop-in-javascript",title:"For Of Loop in JavaScript",sidebar_label:"For...Of",sidebar_position:23,tags:["JavaScript","For Of Loop","Loop","Iteration","Control","Flow","Iterative","Statements","Loops","Iteration","Iterating","Iterations"],description:"In this tutorial, we will learn about the for...of loop in JavaScript. We will learn how to use the for...of loop to iterate over the elements of an iterable object in JavaScript."},a=void 0,s={id:"javascript/for-of-loop-in-javascript",title:"For Of Loop in JavaScript",description:"In this tutorial, we will learn about the for...of loop in JavaScript. We will learn how to use the for...of loop to iterate over the elements of an iterable object in JavaScript.",source:"@site/docs/javascript/for-of-loop.md",sourceDirName:"javascript",slug:"/javascript/for-of-loop-in-javascript",permalink:"/docs/javascript/for-of-loop-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/for-of-loop.md",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"},{label:"For Of Loop",permalink:"/docs/tags/for-of-loop"},{label:"Loop",permalink:"/docs/tags/loop"},{label:"Iteration",permalink:"/docs/tags/iteration"},{label:"Control",permalink:"/docs/tags/control"},{label:"Flow",permalink:"/docs/tags/flow"},{label:"Iterative",permalink:"/docs/tags/iterative"},{label:"Statements",permalink:"/docs/tags/statements"},{label:"Loops",permalink:"/docs/tags/loops"},{label:"Iterating",permalink:"/docs/tags/iterating"},{label:"Iterations",permalink:"/docs/tags/iterations"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710868693e3,sidebarPosition:23,frontMatter:{id:"for-of-loop-in-javascript",title:"For Of Loop in JavaScript",sidebar_label:"For...Of",sidebar_position:23,tags:["JavaScript","For Of Loop","Loop","Iteration","Control","Flow","Iterative","Statements","Loops","Iteration","Iterating","Iterations"],description:"In this tutorial, we will learn about the for...of loop in JavaScript. We will learn how to use the for...of loop to iterate over the elements of an iterable object in JavaScript."},sidebar:"javascript",previous:{title:"For...In",permalink:"/docs/javascript/for-in-loop-in-javascript"},next:{title:"While Loop",permalink:"/docs/javascript/while-loop-in-javascript"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Flow Chart of the <code>for...of</code> Loop",id:"flow-chart-of-the-forof-loop",level:2},{value:"Using <code>break</code> and <code>continue</code> Statements",id:"using-break-and-continue-statements",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const o={admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["In JavaScript, the ",(0,n.jsx)(o.code,{children:"for...of"})," loop is used to iterate over the elements of an iterable object. It is often used when you want to perform an action on each element of an array, set, map, string, or any other iterable object."]}),"\n",(0,n.jsx)(o.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsxs)(o.p,{children:["The syntax of the ",(0,n.jsx)(o.code,{children:"for...of"})," loop is as follows:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",metastring:'title="app.js"',children:"for (variable of iterable) {\n  // code to be executed\n}\n"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["The ",(0,n.jsx)(o.code,{children:"for...of"})," loop starts with the ",(0,n.jsx)(o.code,{children:"for"})," keyword followed by parentheses."]}),"\n",(0,n.jsxs)(o.li,{children:["Inside the parentheses, you need to specify a ",(0,n.jsx)(o.code,{children:"variable"})," to hold the element value and the ",(0,n.jsx)(o.code,{children:"iterable"})," over which you want to iterate."]}),"\n",(0,n.jsxs)(o.li,{children:["The ",(0,n.jsx)(o.code,{children:"variable"})," will be assigned the value of each element of the iterable on each iteration."]}),"\n",(0,n.jsx)(o.li,{children:"The code inside the loop will be executed for each element of the iterable."}),"\n",(0,n.jsx)(o.li,{children:"The loop will iterate over the elements of the iterable object in the order of their insertion."}),"\n",(0,n.jsxs)(o.li,{children:["The ",(0,n.jsx)(o.code,{children:"for...of"})," loop can be used with arrays, sets, maps, strings, and any other iterable object."]}),"\n",(0,n.jsxs)(o.li,{children:["The ",(0,n.jsx)(o.code,{children:"for...of"})," loop cannot be used to iterate over plain objects (i.e., objects created using ",(0,n.jsx)(o.code,{children:"{}"}),") because they are not iterable. To iterate over the properties of an object, you should use the ",(0,n.jsx)(o.code,{children:"for...in"})," loop or the ",(0,n.jsx)(o.code,{children:"Object.keys"}),", ",(0,n.jsx)(o.code,{children:"Object.values"}),", or ",(0,n.jsx)(o.code,{children:"Object.entries"})," methods."]}),"\n",(0,n.jsxs)(o.li,{children:["The ",(0,n.jsx)(o.code,{children:"for...of"})," loop can also be used with generator functions to iterate over the values generated by the generator."]}),"\n",(0,n.jsxs)(o.li,{children:["The ",(0,n.jsx)(o.code,{children:"for...of"})," loop cannot be used to iterate over asynchronous iterators, such as the iterators returned by the ",(0,n.jsx)(o.code,{children:"Symbol.asyncIterator"})," method."]}),"\n",(0,n.jsxs)(o.li,{children:["The ",(0,n.jsx)(o.code,{children:"for...of"})," loop can be used with the ",(0,n.jsx)(o.code,{children:"await"})," keyword to iterate over the values of asynchronous iterators in an asynchronous function."]}),"\n",(0,n.jsxs)(o.li,{children:["The ",(0,n.jsx)(o.code,{children:"for...of"})," loop can be used with the ",(0,n.jsx)(o.code,{children:"break"})," and ",(0,n.jsx)(o.code,{children:"continue"})," statements to control the flow of the loop."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(o.p,{children:["The following example demonstrates how to use the ",(0,n.jsx)(o.code,{children:"for...of"})," loop to iterate over the elements of an array:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",metastring:'title="app.js"',children:"const numbers = [1, 2, 3, 4, 5];\n\nfor (const number of numbers) {\n  console.log(number);\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["In this example, the ",(0,n.jsx)(o.code,{children:"for...of"})," loop iterates over the elements of the ",(0,n.jsx)(o.code,{children:"numbers"})," array and assigns each element to the ",(0,n.jsx)(o.code,{children:"number"})," variable on each iteration. It then executes the code inside the loop to log each element to the console."]}),"\n",(0,n.jsx)(o.p,{children:"The output of the above example will be:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-plaintext",metastring:'title="Output"',children:"1\n2\n3\n4\n5\n"})}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"for...of"})," loop is a convenient and concise way to iterate over the elements of an iterable object in JavaScript. It provides a simple and readable syntax for performing actions on each element of the iterable."]}),"\n",(0,n.jsxs)(o.h2,{id:"flow-chart-of-the-forof-loop",children:["Flow Chart of the ",(0,n.jsx)(o.code,{children:"for...of"})," Loop"]}),"\n",(0,n.jsx)(o.mermaid,{value:"graph TD;\n    Start([Start]) --\x3e Initialization;\n    Initialization --\x3e|Condition| Condition{Condition};\n    Condition --\x3e|True| Action;\n    Action --\x3e Increment[Next Element];\n    Increment --\x3e Condition{Condition};\n    Condition --\x3e|False| Stop;\n    Stop --\x3e End([End]);"}),"\n",(0,n.jsxs)(o.p,{children:["The flow chart above illustrates the flow of the ",(0,n.jsx)(o.code,{children:"for...of"})," loop. It starts with the ",(0,n.jsx)(o.code,{children:"Initialization"})," step, where the loop variable is initialized to the first element of the iterable. It then checks the ",(0,n.jsx)(o.code,{children:"Condition"})," before each iteration. If the condition is ",(0,n.jsx)(o.code,{children:"true"}),", it executes the ",(0,n.jsx)(o.code,{children:"Action"})," and moves to the next element. This process continues until the condition is ",(0,n.jsx)(o.code,{children:"false"}),", at which point the loop stops."]}),"\n",(0,n.jsxs)(o.h2,{id:"using-break-and-continue-statements",children:["Using ",(0,n.jsx)(o.code,{children:"break"})," and ",(0,n.jsx)(o.code,{children:"continue"})," Statements"]}),"\n",(0,n.jsxs)(o.p,{children:["You can use the ",(0,n.jsx)(o.code,{children:"break"})," and ",(0,n.jsx)(o.code,{children:"continue"})," statements to control the flow of the ",(0,n.jsx)(o.code,{children:"for...of"})," loop. The ",(0,n.jsx)(o.code,{children:"break"})," statement can be used to terminate the loop prematurely, while the ",(0,n.jsx)(o.code,{children:"continue"})," statement can be used to skip the current iteration and move to the next element."]}),"\n",(0,n.jsxs)(o.p,{children:["Here's an example that demonstrates the use of the ",(0,n.jsx)(o.code,{children:"break"})," and ",(0,n.jsx)(o.code,{children:"continue"})," statements with the ",(0,n.jsx)(o.code,{children:"for...of"})," loop:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",metastring:'title="app.js"',children:"const numbers = [1, 2, 3, 4, 5];\n\nfor (const number of numbers) {\n  if (number === 3) {\n    continue; // Skip the number 3\n  }\n\n  if (number === 5) {\n    break; // Terminate the loop when the number 5 is encountered\n  }\n\n  console.log(number);\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["In this example, the ",(0,n.jsx)(o.code,{children:"continue"})," statement is used to skip the number ",(0,n.jsx)(o.code,{children:"3"}),", and the ",(0,n.jsx)(o.code,{children:"break"})," statement is used to terminate the loop when the number ",(0,n.jsx)(o.code,{children:"5"})," is encountered. The code inside the loop logs the numbers to the console, skipping the number ",(0,n.jsx)(o.code,{children:"3"})," and terminating the loop when the number ",(0,n.jsx)(o.code,{children:"5"})," is encountered."]}),"\n",(0,n.jsx)(o.p,{children:"The output of the above example will be:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-plaintext",metastring:'title="Output"',children:"1\n2\n4\n"})}),"\n",(0,n.jsxs)(o.p,{children:["In each iteration, the code inside the loop checks if the current number is ",(0,n.jsx)(o.code,{children:"3"})," or ",(0,n.jsx)(o.code,{children:"5"}),". If the number is ",(0,n.jsx)(o.code,{children:"3"}),", it skips the current iteration using the ",(0,n.jsx)(o.code,{children:"continue"})," statement. If the number is ",(0,n.jsx)(o.code,{children:"5"}),", it terminates the loop using the ",(0,n.jsx)(o.code,{children:"break"})," statement. Otherwise, it logs the number to the console."]}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"for...of"})," loop is a powerful and flexible construct that provides a convenient way to iterate over the elements of an iterable object in JavaScript. It can be used with arrays, sets, maps, strings, and any other iterable object to perform actions on each element in a concise and readable manner."]}),"\n",(0,n.jsxs)(o.admonition,{title:"\ud83d\udcdd Note",type:"tip",children:[(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"for...of"})," loop cannot be used to iterate over plain objects (i.e., objects created using ",(0,n.jsx)(o.code,{children:"{}"}),") because they are not iterable. To iterate over the properties of an object, you should use the ",(0,n.jsx)(o.code,{children:"for...in"})," loop or the ",(0,n.jsx)(o.code,{children:"Object.keys"}),", ",(0,n.jsx)(o.code,{children:"Object.values"}),", or ",(0,n.jsx)(o.code,{children:"Object.entries"})," methods."]}),(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"for...of"})," loop can also be used with generator functions to iterate over the values generated by the generator."]}),(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"for...of"})," loop cannot be used to iterate over asynchronous iterators, such as the iterators returned by the ",(0,n.jsx)(o.code,{children:"Symbol.asyncIterator"})," method. However, it can be used with the ",(0,n.jsx)(o.code,{children:"await"})," keyword to iterate over the values of asynchronous iterators in an asynchronous function."]}),(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"for...of"})," loop can be used with the ",(0,n.jsx)(o.code,{children:"break"})," and ",(0,n.jsx)(o.code,{children:"continue"})," statements to control the flow of the loop."]})]}),"\n",(0,n.jsx)(o.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(o.p,{children:["In this tutorial, we learned about the ",(0,n.jsx)(o.code,{children:"for...of"})," loop in JavaScript. We learned how to use the ",(0,n.jsx)(o.code,{children:"for...of"})," loop to iterate over the elements of an iterable object. We also learned about using the ",(0,n.jsx)(o.code,{children:"break"})," and ",(0,n.jsx)(o.code,{children:"continue"})," statements to control the flow of the loop. The ",(0,n.jsx)(o.code,{children:"for...of"})," loop is a powerful and flexible construct that provides a convenient and concise way to iterate over the elements of an iterable object in JavaScript."]})]})}function h(e={}){const{wrapper:o}={...(0,r.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,o,t)=>{t.d(o,{I:()=>s,M:()=>a});var n=t(11504);const r={},i=n.createContext(r);function a(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);