"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[90316],{59012:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=o(17624),n=o(4552);const i={id:"for-in-loop-in-javascript",title:"For In Loop in JavaScript",sidebar_label:"For...In",sidebar_position:22,tags:["JavaScript","For In Loop","Loop","Iteration","Control","Flow","Iterative","Statements","Loops","Iteration","Iterating","Iterations"],description:"In this tutorial, we will learn about the for...in loop in JavaScript. We will learn how to use the for...in loop to iterate over the properties of an object in JavaScript."},s=void 0,a={id:"javascript/for-in-loop-in-javascript",title:"For In Loop in JavaScript",description:"In this tutorial, we will learn about the for...in loop in JavaScript. We will learn how to use the for...in loop to iterate over the properties of an object in JavaScript.",source:"@site/docs/javascript/for-in-loop.md",sourceDirName:"javascript",slug:"/javascript/for-in-loop-in-javascript",permalink:"/docs/javascript/for-in-loop-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/for-in-loop.md",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"},{label:"For In Loop",permalink:"/docs/tags/for-in-loop"},{label:"Loop",permalink:"/docs/tags/loop"},{label:"Iteration",permalink:"/docs/tags/iteration"},{label:"Control",permalink:"/docs/tags/control"},{label:"Flow",permalink:"/docs/tags/flow"},{label:"Iterative",permalink:"/docs/tags/iterative"},{label:"Statements",permalink:"/docs/tags/statements"},{label:"Loops",permalink:"/docs/tags/loops"},{label:"Iterating",permalink:"/docs/tags/iterating"},{label:"Iterations",permalink:"/docs/tags/iterations"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710868693e3,sidebarPosition:22,frontMatter:{id:"for-in-loop-in-javascript",title:"For In Loop in JavaScript",sidebar_label:"For...In",sidebar_position:22,tags:["JavaScript","For In Loop","Loop","Iteration","Control","Flow","Iterative","Statements","Loops","Iteration","Iterating","Iterations"],description:"In this tutorial, we will learn about the for...in loop in JavaScript. We will learn how to use the for...in loop to iterate over the properties of an object in JavaScript."},sidebar:"javascript",previous:{title:"For Loop",permalink:"/docs/javascript/for-loop-in-javascript"},next:{title:"For...Of",permalink:"/docs/javascript/for-of-loop-in-javascript"}},l={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Using <code>hasOwnProperty</code> Method",id:"using-hasownproperty-method",level:2},{value:"Array.forEach Method",id:"arrayforeach-method",level:2},{value:"Array.forEach Method vs. for...of Loop vs. for...in Loop Comparison",id:"arrayforeach-method-vs-forof-loop-vs-forin-loop-comparison",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In JavaScript, the ",(0,r.jsx)(t.code,{children:"for...in"})," loop is used to iterate over the properties of an object. It is often used when you want to perform an action on each property of an object."]}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsxs)(t.p,{children:["The syntax of the ",(0,r.jsx)(t.code,{children:"for...in"})," loop is as follows:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="app.js"',children:"for (variable in object) {\n  // code to be executed\n}\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"for...in"})," loop starts with the ",(0,r.jsx)(t.code,{children:"for"})," keyword followed by parentheses."]}),"\n",(0,r.jsxs)(t.li,{children:["Inside the parentheses, you need to specify a ",(0,r.jsx)(t.code,{children:"variable"})," to hold the property name and the ",(0,r.jsx)(t.code,{children:"object"})," over which you want to iterate."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"variable"})," will be assigned the property name of the object on each iteration."]}),"\n",(0,r.jsx)(t.li,{children:"The code inside the loop will be executed for each property of the object."}),"\n",(0,r.jsx)(t.li,{children:"The loop will iterate over all enumerable properties of the object, including inherited properties from the object's prototype chain."}),"\n",(0,r.jsx)(t.li,{children:"The order of iteration is not guaranteed and may vary between different JavaScript engines."}),"\n",(0,r.jsxs)(t.li,{children:["It is recommended to use the ",(0,r.jsx)(t.code,{children:"hasOwnProperty"})," method to check if the property is a direct property of the object and not inherited from its prototype chain."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"for...in"})," loop should not be used to iterate over arrays, as it may produce unexpected results due to the iteration of array indices and inherited properties."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"for...in"})," loop should be used only for objects."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["The following example demonstrates how to use the ",(0,r.jsx)(t.code,{children:"for...in"})," loop to iterate over the properties of an object:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="app.js"',children:'const person = {\n  name: "John",\n  age: 23,\n  // Method\n  greet: function () {\n    console.log(\n      "Hello, I am " + this.name + " and I am " + this.age + " years old."\n    );\n  },\n};\n\nfor (let property in person) {\n  console.log(property + ": " + person[property]);\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["In this example, the ",(0,r.jsx)(t.code,{children:"for...in"})," loop iterates over the properties of the ",(0,r.jsx)(t.code,{children:"person"})," object. On each iteration, the ",(0,r.jsx)(t.code,{children:"property"})," variable is assigned the name of the property, and the code inside the loop logs the property name and its value to the console."]}),"\n",(0,r.jsx)(t.p,{children:"The output of the above example will be:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",metastring:'title="Output"',children:'name: John\nage: 23\ngreet: function () {\n  console.log(\n    "Hello, I am " + this.name + " and I am " + this.age + " years old."\n  );\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"In each iteration, the property name and its value are printed to the console."}),"\n",(0,r.jsxs)(t.h2,{id:"using-hasownproperty-method",children:["Using ",(0,r.jsx)(t.code,{children:"hasOwnProperty"})," Method"]}),"\n",(0,r.jsxs)(t.p,{children:["To check if the property is a direct property of the object and not inherited from its prototype chain, you can use the ",(0,r.jsx)(t.code,{children:"hasOwnProperty"})," method. Here's an example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="app.js"',children:'const person = {\n  name: "John",\n  age: 23,\n  // Method\n  greet: function () {\n    console.log(\n      "Hello, I am " + this.name + " and I am " + this.age + " years old."\n    );\n  },\n};\n\nfor (let property in person) {\n  if (person.hasOwnProperty(property)) {\n    console.log(property + ": " + person[property]);\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["In this example, the ",(0,r.jsx)(t.code,{children:"hasOwnProperty"})," method is used to check if the property is a direct property of the ",(0,r.jsx)(t.code,{children:"person"})," object. If it is, the property name and its value are printed to the console."]}),"\n",(0,r.jsxs)(t.admonition,{title:"tips & tricks",type:"tip",children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"hasOwnProperty"})," method returns ",(0,r.jsx)(t.code,{children:"true"})," if the property is a direct property of the object, otherwise it returns ",(0,r.jsx)(t.code,{children:"false"}),"."]}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"for...in"})," loop should be used with caution, as it iterates over all enumerable properties of the object, including inherited properties from the object's prototype chain. It is recommended to use the ",(0,r.jsx)(t.code,{children:"hasOwnProperty"})," method to check if the property is a direct property of the object."]}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"for...in"})," loop should not be used to iterate over arrays, as it may produce unexpected results due to the iteration of array indices and inherited properties."]}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"for...in"})," loop should be used only for objects."]})]}),"\n",(0,r.jsxs)(t.admonition,{title:"\ud83d\udcda Learn Extra",type:"info",children:[(0,r.jsx)(t.h2,{id:"arrayforeach-method",children:"Array.forEach Method"}),(0,r.jsxs)(t.p,{children:["If you want to iterate over the elements of an array, you can use the ",(0,r.jsx)(t.code,{children:"forEach"})," method. The ",(0,r.jsx)(t.code,{children:"forEach"})," method is a more appropriate way to iterate over the elements of an array, as it provides a concise and readable syntax for performing actions on each element of the array."]}),(0,r.jsxs)(t.p,{children:["Here's an example that demonstrates the use of the ",(0,r.jsx)(t.code,{children:"forEach"})," method to iterate over the elements of an array:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="app.js"',children:"const numbers = [1, 2, 3, 4, 5];\n\nnumbers.forEach(function (number) {\n  console.log(number);\n});\n"})}),(0,r.jsxs)(t.p,{children:["In this example, the ",(0,r.jsx)(t.code,{children:"forEach"})," method iterates over the elements of the ",(0,r.jsx)(t.code,{children:"numbers"})," array and executes the provided function for each element."]}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"forEach"})," method is a convenient and concise way to iterate over the elements of an array in JavaScript."]}),(0,r.jsx)(t.h2,{id:"arrayforeach-method-vs-forof-loop-vs-forin-loop-comparison",children:"Array.forEach Method vs. for...of Loop vs. for...in Loop Comparison"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"No."}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"forEach Method"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"for...of Loop"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"for...in Loop"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Iterates over the elements of an array."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Iterates over the elements of an iterable object."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Iterates over the properties of an object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Provides a concise and readable syntax."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Provides a concise and readable syntax."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Provides a concise and readable syntax."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"3."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Should be used for arrays."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Should be used for iterable objects."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Should be used for objects."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"4."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Does not iterate over inherited properties."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Does not iterate over inherited properties."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Iterates over inherited properties."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"5."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Does not iterate over array indices."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Does not iterate over array indices."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Iterates over array indices."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"6."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Does not require a loop variable."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Requires a loop variable."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Requires a loop variable."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"7."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Does not require an explicit check for direct properties."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Does not require an explicit check for direct properties."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Requires an explicit check for direct properties."})]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(t.p,{children:["In this tutorial, we learned about the ",(0,r.jsx)(t.code,{children:"for...in"})," loop in JavaScript. We learned how to use the ",(0,r.jsx)(t.code,{children:"for...in"})," loop to iterate over the properties of an object. We also learned about using the ",(0,r.jsx)(t.code,{children:"hasOwnProperty"})," method to check if the property is a direct property of the object and not inherited from its prototype chain."]})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,t,o)=>{o.d(t,{I:()=>a,M:()=>s});var r=o(11504);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);