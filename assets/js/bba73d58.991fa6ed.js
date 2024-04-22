"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[72548],{62636:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=a(17624),r=a(4552);const o={id:"random-in-javascript",title:"Random in JavaScript",sidebar_label:"Random",sidebar_position:18,tags:["JavaScript","Math","Object","Methods","Random","Number","Integer","Range","Floating-point","Generate","Math.random()"],description:"In this tutorial, we will learn about the Math.random() method in JavaScript. We will learn how to generate random numbers in JavaScript."},i=void 0,s={id:"javascript/random-in-javascript",title:"Random in JavaScript",description:"In this tutorial, we will learn about the Math.random() method in JavaScript. We will learn how to generate random numbers in JavaScript.",source:"@site/docs/javascript/random.md",sourceDirName:"javascript",slug:"/javascript/random-in-javascript",permalink:"/docs/javascript/random-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/random.md",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"},{label:"Math",permalink:"/docs/tags/math"},{label:"Object",permalink:"/docs/tags/object"},{label:"Methods",permalink:"/docs/tags/methods"},{label:"Random",permalink:"/docs/tags/random"},{label:"Number",permalink:"/docs/tags/number"},{label:"Integer",permalink:"/docs/tags/integer"},{label:"Range",permalink:"/docs/tags/range"},{label:"Floating-point",permalink:"/docs/tags/floating-point"},{label:"Generate",permalink:"/docs/tags/generate"},{label:"Math.random()",permalink:"/docs/tags/math-random"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:171023759e4,sidebarPosition:18,frontMatter:{id:"random-in-javascript",title:"Random in JavaScript",sidebar_label:"Random",sidebar_position:18,tags:["JavaScript","Math","Object","Methods","Random","Number","Integer","Range","Floating-point","Generate","Math.random()"],description:"In this tutorial, we will learn about the Math.random() method in JavaScript. We will learn how to generate random numbers in JavaScript."},sidebar:"javascript",previous:{title:"Math",permalink:"/docs/javascript/math-in-javascript"},next:{title:"If...Else",permalink:"/docs/javascript/if-else-in-javascript"}},d={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Generate Random Number within a Range",id:"generate-random-number-within-a-range",level:2},{value:"Generate Random Integer",id:"generate-random-integer",level:2},{value:"A property of Math.random() method",id:"a-property-of-mathrandom-method",level:2},{value:"Conclusion",id:"conclusion",level:2}];function m(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In JavaScript, the ",(0,t.jsx)(n.code,{children:"Math.random()"})," method is used to generate a random floating-point number between 0 (inclusive) and 1 (exclusive)."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["The syntax of the ",(0,t.jsx)(n.code,{children:"Math.random()"})," method is as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"Math.random()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["The following example demonstrates how to use the ",(0,t.jsx)(n.code,{children:"Math.random()"})," method to generate a random number between 0 and 1:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.random()); // 0.12345678901234567\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, the ",(0,t.jsx)(n.code,{children:"Math.random()"})," method returns a random floating-point number between 0 (inclusive) and 1 (exclusive)."]}),"\n",(0,t.jsx)(n.h2,{id:"generate-random-number-within-a-range",children:"Generate Random Number within a Range"}),"\n",(0,t.jsx)(n.p,{children:"To generate a random number within a specific range, you can use the following formula:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"Math.floor(Math.random() * (max - min + 1)) + min\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Where ",(0,t.jsx)(n.code,{children:"min"})," is the minimum value and ",(0,t.jsx)(n.code,{children:"max"})," is the maximum value."]}),"\n",(0,t.jsx)(n.p,{children:"The following example demonstrates how to generate a random number between 1 and 10:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.floor(Math.random() * (10 - 1 + 1)) + 1); // 5\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, the ",(0,t.jsx)(n.code,{children:"Math.floor(Math.random() * (10 - 1 + 1)) + 1"})," expression generates a random number between 1 and 10."]}),"\n",(0,t.jsx)(n.h2,{id:"generate-random-integer",children:"Generate Random Integer"}),"\n",(0,t.jsx)(n.p,{children:"To generate a random integer within a specific range, you can use the following formula:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"Math.floor(Math.random() * (max - min + 1)) + min\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Where ",(0,t.jsx)(n.code,{children:"min"})," is the minimum value and ",(0,t.jsx)(n.code,{children:"max"})," is the maximum value."]}),"\n",(0,t.jsx)(n.p,{children:"The following example demonstrates how to generate a random integer between 1 and 10:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.floor(Math.random() * (10 - 1 + 1)) + 1); // 5\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, the ",(0,t.jsx)(n.code,{children:"Math.floor(Math.random() * (10 - 1 + 1)) + 1"})," expression generates a random integer between 1 and 10."]}),"\n",(0,t.jsx)(n.h2,{id:"a-property-of-mathrandom-method",children:"A property of Math.random() method"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Math.random()"})," method returns a random floating-point number between 0 (inclusive) and 1 (exclusive)."]}),"\n",(0,t.jsx)(n.admonition,{title:"\ud83d\udcdd Note",type:"info",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Math.random()"})," method returns a random number between 0 (inclusive) and 1 (exclusive)."]})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["In this tutorial, you learned how to use the ",(0,t.jsx)(n.code,{children:"Math.random()"})," method to generate random numbers in JavaScript. You also learned how to generate random numbers within a specific range and how to generate random integers."]})]})}function c(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},4552:(e,n,a)=>{a.d(n,{I:()=>s,M:()=>i});var t=a(11504);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);