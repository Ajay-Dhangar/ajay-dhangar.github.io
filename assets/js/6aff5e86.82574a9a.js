"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[62120],{84852:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(74848),t=a(28453);const s={id:"array-datatypes-in-javascript",title:"Array Data Types in JavaScript",sidebar_label:"Array",sidebar_position:2,tags:["JavaScript","Data Types","Non-Primitive Data Types","Array","Array in JavaScript","Array data type","Creating arrays in JavaScript","Accessing array elements","Modifying array elements","Adding array elements","Deleting array elements","Array methods","Array properties","Array styles","Typed arrays","Array-like objects","Array buffers","Array buffer views","Array destructuring","Array spread operator","Arrays Style","Dense Array","Sparse Array","Typed Arrays","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],description:"What is the array data type in JavaScript? Learn about the array data type and how to create, access, modify, add, and delete array elements in JavaScript."},i=void 0,l={id:"javascript/datatypes/non-primitive-data-types/array-datatypes-in-javascript",title:"Array Data Types in JavaScript",description:"What is the array data type in JavaScript? Learn about the array data type and how to create, access, modify, add, and delete array elements in JavaScript.",source:"@site/docs/javascript/datatypes/non-primitive-data-types/array-js.mdx",sourceDirName:"javascript/datatypes/non-primitive-data-types",slug:"/javascript/datatypes/non-primitive-data-types/array-datatypes-in-javascript",permalink:"/docs/javascript/datatypes/non-primitive-data-types/array-datatypes-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/datatypes/non-primitive-data-types/array-js.mdx",tags:[{inline:!0,label:"JavaScript",permalink:"/docs/tags/java-script"},{inline:!0,label:"Data Types",permalink:"/docs/tags/data-types"},{inline:!0,label:"Non-Primitive Data Types",permalink:"/docs/tags/non-primitive-data-types"},{inline:!0,label:"Array",permalink:"/docs/tags/array"},{inline:!0,label:"Array in JavaScript",permalink:"/docs/tags/array-in-java-script"},{inline:!0,label:"Array data type",permalink:"/docs/tags/array-data-type"},{inline:!0,label:"Creating arrays in JavaScript",permalink:"/docs/tags/creating-arrays-in-java-script"},{inline:!0,label:"Accessing array elements",permalink:"/docs/tags/accessing-array-elements"},{inline:!0,label:"Modifying array elements",permalink:"/docs/tags/modifying-array-elements"},{inline:!0,label:"Adding array elements",permalink:"/docs/tags/adding-array-elements"},{inline:!0,label:"Deleting array elements",permalink:"/docs/tags/deleting-array-elements"},{inline:!0,label:"Array methods",permalink:"/docs/tags/array-methods"},{inline:!0,label:"Array properties",permalink:"/docs/tags/array-properties"},{inline:!0,label:"Array styles",permalink:"/docs/tags/array-styles"},{inline:!0,label:"Typed arrays",permalink:"/docs/tags/typed-arrays"},{inline:!0,label:"Array-like objects",permalink:"/docs/tags/array-like-objects"},{inline:!0,label:"Array buffers",permalink:"/docs/tags/array-buffers"},{inline:!0,label:"Array buffer views",permalink:"/docs/tags/array-buffer-views"},{inline:!0,label:"Array destructuring",permalink:"/docs/tags/array-destructuring"},{inline:!0,label:"Array spread operator",permalink:"/docs/tags/array-spread-operator"},{inline:!0,label:"Arrays Style",permalink:"/docs/tags/arrays-style"},{inline:!0,label:"Dense Array",permalink:"/docs/tags/dense-array"},{inline:!0,label:"Sparse Array",permalink:"/docs/tags/sparse-array"},{inline:!0,label:"Typed Arrays",permalink:"/docs/tags/typed-arrays"},{inline:!0,label:"Int8Array",permalink:"/docs/tags/int-8-array"},{inline:!0,label:"Uint8Array",permalink:"/docs/tags/uint-8-array"},{inline:!0,label:"Uint8ClampedArray",permalink:"/docs/tags/uint-8-clamped-array"},{inline:!0,label:"Int16Array",permalink:"/docs/tags/int-16-array"},{inline:!0,label:"Uint16Array",permalink:"/docs/tags/uint-16-array"},{inline:!0,label:"Int32Array",permalink:"/docs/tags/int-32-array"},{inline:!0,label:"Uint32Array",permalink:"/docs/tags/uint-32-array"},{inline:!0,label:"Float32Array",permalink:"/docs/tags/float-32-array"},{inline:!0,label:"Float64Array",permalink:"/docs/tags/float-64-array"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1709142715e3,sidebarPosition:2,frontMatter:{id:"array-datatypes-in-javascript",title:"Array Data Types in JavaScript",sidebar_label:"Array",sidebar_position:2,tags:["JavaScript","Data Types","Non-Primitive Data Types","Array","Array in JavaScript","Array data type","Creating arrays in JavaScript","Accessing array elements","Modifying array elements","Adding array elements","Deleting array elements","Array methods","Array properties","Array styles","Typed arrays","Array-like objects","Array buffers","Array buffer views","Array destructuring","Array spread operator","Arrays Style","Dense Array","Sparse Array","Typed Arrays","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],description:"What is the array data type in JavaScript? Learn about the array data type and how to create, access, modify, add, and delete array elements in JavaScript."},sidebar:"tutorialSidebar",previous:{title:"Object",permalink:"/docs/javascript/datatypes/non-primitive-data-types/object-datatypes-in-javascript"},next:{title:"Function",permalink:"/docs/javascript/datatypes/non-primitive-data-types/function-datatypes-in-javascript"}},d={},c=[{value:"What is an Array in JavaScript?",id:"what-is-an-array-in-javascript",level:2},{value:"Creating Arrays in JavaScript",id:"creating-arrays-in-javascript",level:2},{value:"Accessing Array Elements",id:"accessing-array-elements",level:2},{value:"Modifying Array Elements",id:"modifying-array-elements",level:2},{value:"Adding Array Elements",id:"adding-array-elements",level:2},{value:"Deleting Array Elements",id:"deleting-array-elements",level:2},{value:"Deleting Array Elements using <code>pop</code> Method",id:"deleting-array-elements-using-pop-method",level:2},{value:"Arrays Style in JavaScript",id:"arrays-style-in-javascript",level:2},{value:"1. Dense Array",id:"1-dense-array",level:3},{value:"2. Sparse Array",id:"2-sparse-array",level:3},{value:"3. Array-like Objects",id:"3-array-like-objects",level:3},{value:"4. Typed Arrays",id:"4-typed-arrays",level:3},{value:"Typed Arrays in JavaScript",id:"typed-arrays-in-javascript",level:2},{value:"1. <code>Int8Array</code>",id:"1-int8array",level:3},{value:"2. <code>Uint8Array</code>",id:"2-uint8array",level:3},{value:"3. <code>Uint8ClampedArray</code>",id:"3-uint8clampedarray",level:3},{value:"4. <code>Int16Array</code>",id:"4-int16array",level:3},{value:"5. <code>Uint16Array</code>",id:"5-uint16array",level:3},{value:"6. <code>Int32Array</code>",id:"6-int32array",level:3},{value:"7. <code>Uint32Array</code>",id:"7-uint32array",level:3},{value:"8. <code>Float32Array</code>",id:"8-float32array",level:3},{value:"9. <code>Float64Array</code>",id:"9-float64array",level:3},{value:"Conclusion",id:"conclusion",level:2}];function o(e){const r={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["An ",(0,n.jsx)(r.code,{children:"Array"})," is a non-primitive data type in JavaScript. It represents a collection of elements, where each element can be of any data type, including other arrays."]}),"\n",(0,n.jsx)(r.mermaid,{value:'graph TD;\n    subgraph "Arrays"\n        style arrayStyle fill:#FF00FF,color:#333,stroke-width:2px;\n        arrayStyle --\x3e denseArray["Dense Array"];\n        denseArray --\x3e sparseArray["Sparse Array"];\n        arrayStyle --\x3e arrayLike["Array-like Objects"];\n        arrayLike --\x3e argumentsObject["Arguments Object"];\n    end;\n    subgraph "Typed Arrays"\n        style typedArrayStyle fill:#FF00FF,color:#333,stroke-width:2px;\n        typedArrayStyle --\x3e Int8Array["Int8Array"];\n        typedArrayStyle --\x3e Uint8Array["Uint8Array"];\n        typedArrayStyle --\x3e Uint8ClampedArray["Uint8ClampedArray"];\n        typedArrayStyle --\x3e Int16Array["Int16Array"];\n        typedArrayStyle --\x3e Uint16Array["Uint16Array"];\n        typedArrayStyle --\x3e Int32Array["Int32Array"];\n        typedArrayStyle --\x3e Uint32Array["Uint32Array"];\n        typedArrayStyle --\x3e Float32Array["Float32Array"];\n        typedArrayStyle --\x3e Float64Array["Float64Array"];\n    end;\n'}),"\n",(0,n.jsx)(r.h2,{id:"what-is-an-array-in-javascript",children:"What is an Array in JavaScript?"}),"\n",(0,n.jsxs)(r.p,{children:["In JavaScript, an ",(0,n.jsx)(r.code,{children:"Array"})," is a special type of object that represents a collection of elements. The elements can be of any data type, including other arrays. Arrays are used to store multiple values in a single variable. Each element in an array has a unique index, which is used to access the element. The index starts from ",(0,n.jsx)(r.code,{children:"0"})," and goes up to ",(0,n.jsx)(r.code,{children:"length - 1"}),", where ",(0,n.jsx)(r.code,{children:"length"})," is the number of elements in the array."]}),"\n",(0,n.jsx)(r.h2,{id:"creating-arrays-in-javascript",children:"Creating Arrays in JavaScript"}),"\n",(0,n.jsx)(r.p,{children:"You can create an array in JavaScript using the following syntax:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Creating Arrays in JavaScript"',children:"let numbers = [1, 2, 3, 4, 5];\nlet names = ['John', 'Doe', 'Jane', 'Smith'];\nlet mixed = [1, 'John', true, null, undefined];\n"})}),"\n",(0,n.jsx)(r.p,{children:"In the above examples, we have created arrays of numbers, strings, and mixed data types."}),"\n",(0,n.jsx)(r.h2,{id:"accessing-array-elements",children:"Accessing Array Elements"}),"\n",(0,n.jsxs)(r.p,{children:["You can access elements of an array using their index. The index starts from ",(0,n.jsx)(r.code,{children:"0"})," for the first element and goes up to ",(0,n.jsx)(r.code,{children:"length - 1"})," for the last element."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Accessing Array Elements"',children:"let numbers = [1, 2, 3, 4, 5];\n\nconsole.log(numbers[0]); // Output: 1\nconsole.log(numbers[2]); // Output: 3\nconsole.log(numbers[4]); // Output: 5\n"})}),"\n",(0,n.jsxs)(r.p,{children:["In the above example, we have accessed the first, third, and fifth elements of the ",(0,n.jsx)(r.code,{children:"numbers"})," array using their indices."]}),"\n",(0,n.jsx)(r.h2,{id:"modifying-array-elements",children:"Modifying Array Elements"}),"\n",(0,n.jsx)(r.p,{children:"You can modify elements of an array using their index."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Modifying Array Elements"',children:"let numbers = [1, 2, 3, 4, 5];\n\nnumbers[0] = 10;\n\nconsole.log(numbers); // Output: [10, 2, 3, 4, 5]\n"})}),"\n",(0,n.jsxs)(r.p,{children:["In the above example, we have modified the first element of the ",(0,n.jsx)(r.code,{children:"numbers"})," array and changed its value to ",(0,n.jsx)(r.code,{children:"10"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"adding-array-elements",children:"Adding Array Elements"}),"\n",(0,n.jsxs)(r.p,{children:["You can add elements to the end of an array using the ",(0,n.jsx)(r.code,{children:"push"})," method."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Adding Array Elements"',children:"let numbers = [1, 2, 3, 4, 5];\n\nnumbers.push(6);\n\nconsole.log(numbers); // Output: [1, 2, 3, 4, 5, 6]\n"})}),"\n",(0,n.jsxs)(r.p,{children:["In the above example, we have added the number ",(0,n.jsx)(r.code,{children:"6"})," to the end of the ",(0,n.jsx)(r.code,{children:"numbers"})," array using the ",(0,n.jsx)(r.code,{children:"push"})," method."]}),"\n",(0,n.jsx)(r.h2,{id:"deleting-array-elements",children:"Deleting Array Elements"}),"\n",(0,n.jsxs)(r.p,{children:["You can delete elements from an array using the ",(0,n.jsx)(r.code,{children:"delete"})," operator or the ",(0,n.jsx)(r.code,{children:"splice"})," method."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Deleting Array Elements"',children:"let numbers = [1, 2, 3, 4, 5];\n\ndelete numbers[2];\n\nconsole.log(numbers); // Output: [1, 2, empty, 4, 5]\n"})}),"\n",(0,n.jsxs)(r.p,{children:["In the above example, we have deleted the third element of the ",(0,n.jsx)(r.code,{children:"numbers"})," array using the ",(0,n.jsx)(r.code,{children:"delete"})," operator. The element is replaced with ",(0,n.jsx)(r.code,{children:"empty"}),", which is a placeholder for the deleted element."]}),"\n",(0,n.jsxs)(r.h2,{id:"deleting-array-elements-using-pop-method",children:["Deleting Array Elements using ",(0,n.jsx)(r.code,{children:"pop"})," Method"]}),"\n",(0,n.jsxs)(r.p,{children:["You can also delete elements from the end of an array using the ",(0,n.jsx)(r.code,{children:"pop"})," method."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Deleting Array Elements using pop Method"',children:"let numbers = [1, 2, 3, 4, 5];\n\nnumbers.pop();\n\nconsole.log(numbers); // Output: [1, 2, 3, 4]\n"})}),"\n",(0,n.jsxs)(r.p,{children:["In the above example, we have deleted the last element of the ",(0,n.jsx)(r.code,{children:"numbers"})," array using the ",(0,n.jsx)(r.code,{children:"pop"})," method."]}),"\n",(0,n.jsxs)(r.admonition,{title:"\ud83d\udcdd Note",type:"info",children:[(0,n.jsx)(r.h2,{id:"arrays-style-in-javascript",children:"Arrays Style in JavaScript"}),(0,n.jsx)(r.p,{children:"There are different styles of arrays in JavaScript:"}),(0,n.jsx)(r.h3,{id:"1-dense-array",children:"1. Dense Array"}),(0,n.jsx)(r.p,{children:"A dense array is an array in which the elements are stored in contiguous memory locations. It is the most common type of array in JavaScript."}),(0,n.jsx)(r.p,{children:"for example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Dense Array"',children:"let numbers = [1, 2, 3, 4, 5];\n"})}),(0,n.jsx)(r.h3,{id:"2-sparse-array",children:"2. Sparse Array"}),(0,n.jsx)(r.p,{children:"A sparse array is an array in which the elements are not stored in contiguous memory locations. It contains empty slots, which are placeholders for the missing elements."}),(0,n.jsx)(r.p,{children:"for example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Sparse Array"',children:"let numbers = [1, , 3, , 5];\n"})}),(0,n.jsx)(r.h3,{id:"3-array-like-objects",children:"3. Array-like Objects"}),(0,n.jsxs)(r.p,{children:["Array-like objects are objects that have a ",(0,n.jsx)(r.code,{children:"length"})," property and indexed elements, but they are not instances of the ",(0,n.jsx)(r.code,{children:"Array"})," constructor."]}),(0,n.jsx)(r.p,{children:"for example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Array-like Objects"',children:"let arrayLike = {\n  0: 'a',\n  1: 'b',\n  2: 'c',\n  length: 3\n};\n"})}),(0,n.jsx)(r.h3,{id:"4-typed-arrays",children:"4. Typed Arrays"}),(0,n.jsx)(r.p,{children:"Typed arrays are a set of array-like objects that provide a way to work with binary data in JavaScript. They are used to represent raw binary data in memory and are used in various scenarios, such as working with WebGL, file I/O, and networking."}),(0,n.jsx)(r.p,{children:"for example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Typed Arrays"',children:"let buffer = new ArrayBuffer(16);\nlet int32Array = new Int32Array(buffer);\n"})}),(0,n.jsx)(r.h2,{id:"typed-arrays-in-javascript",children:"Typed Arrays in JavaScript"}),(0,n.jsx)(r.p,{children:"Typed arrays are a set of array-like objects that provide a way to work with binary data in JavaScript. They are used to represent raw binary data in memory and are used in various scenarios, such as working with WebGL, file I/O, and networking."}),(0,n.jsx)(r.p,{children:"The following are the different types of typed arrays available in JavaScript:"}),(0,n.jsxs)(r.h3,{id:"1-int8array",children:["1. ",(0,n.jsx)(r.code,{children:"Int8Array"})]}),(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"Int8Array"})," represents an array of 8-bit signed integers."]}),(0,n.jsx)(r.p,{children:"for example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Int8Array"',children:"let buffer = new ArrayBuffer(16);\nlet int8Array = new Int8Array(buffer);\n"})}),(0,n.jsxs)(r.h3,{id:"2-uint8array",children:["2. ",(0,n.jsx)(r.code,{children:"Uint8Array"})]}),(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"Uint8Array"})," represents an array of 8-bit unsigned integers."]}),(0,n.jsx)(r.p,{children:"for example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Uint8Array"',children:"let buffer = new ArrayBuffer(16);\nlet uint8Array = new Uint8Array(buffer);\n"})}),(0,n.jsxs)(r.h3,{id:"3-uint8clampedarray",children:["3. ",(0,n.jsx)(r.code,{children:"Uint8ClampedArray"})]}),(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"Uint8ClampedArray"})," represents an array of 8-bit unsigned integers clamped to 0-255."]}),(0,n.jsx)(r.p,{children:"for example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Uint8ClampedArray"',children:"let buffer = new ArrayBuffer(16);\nlet uint8ClampedArray = new Uint8ClampedArray(buffer);\n"})}),(0,n.jsxs)(r.h3,{id:"4-int16array",children:["4. ",(0,n.jsx)(r.code,{children:"Int16Array"})]}),(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"Int16Array"})," represents an array of 16-bit signed integers."]}),(0,n.jsx)(r.p,{children:"for example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Int16Array"',children:"let buffer = new ArrayBuffer(16);\nlet int16Array = new Int16Array(buffer);\n"})}),(0,n.jsxs)(r.h3,{id:"5-uint16array",children:["5. ",(0,n.jsx)(r.code,{children:"Uint16Array"})]}),(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"Uint16Array"})," represents an array of 16-bit unsigned integers."]}),(0,n.jsx)(r.p,{children:"for example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Uint16Array"',children:"let buffer = new ArrayBuffer(16);\nlet uint16Array = new Uint16Array(buffer);\n"})}),(0,n.jsxs)(r.h3,{id:"6-int32array",children:["6. ",(0,n.jsx)(r.code,{children:"Int32Array"})]}),(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"Int32Array"})," represents an array of 32-bit signed integers."]}),(0,n.jsx)(r.p,{children:"for example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Int32Array"',children:"let buffer = new ArrayBuffer(16);\nlet int32Array = new Int32Array(buffer);\n"})}),(0,n.jsxs)(r.h3,{id:"7-uint32array",children:["7. ",(0,n.jsx)(r.code,{children:"Uint32Array"})]}),(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"Uint32Array"})," represents an array of 32-bit unsigned integers."]}),(0,n.jsx)(r.p,{children:"for example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Uint32Array"',children:"let buffer = new ArrayBuffer(16);\nlet uint32Array = new Uint32Array(buffer);\n"})}),(0,n.jsxs)(r.h3,{id:"8-float32array",children:["8. ",(0,n.jsx)(r.code,{children:"Float32Array"})]}),(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"Float32Array"})," represents an array of 32-bit floating-point numbers."]}),(0,n.jsx)(r.p,{children:"for example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Float32Array"',children:"let buffer = new ArrayBuffer(16);\nlet float32Array = new Float32Array(buffer);\n"})}),(0,n.jsxs)(r.h3,{id:"9-float64array",children:["9. ",(0,n.jsx)(r.code,{children:"Float64Array"})]}),(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"Float64Array"})," represents an array of 64-bit floating-point numbers."]}),(0,n.jsx)(r.p,{children:"for example:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="Float64Array"',children:"let buffer = new ArrayBuffer(16);\nlet float64Array = new Float64Array(buffer);\n"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.admonition,{title:"Tips and Tricks",type:"tip",children:(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Array Literals"}),": The array literal syntax ",(0,n.jsx)(r.code,{children:"[]"})," is the most common way to create arrays in JavaScript."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Array Elements"}),": Arrays can contain elements of any data type, including other arrays."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Accessing Array Elements"}),": You can access array elements using their index, which starts from ",(0,n.jsx)(r.code,{children:"0"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Modifying Array Elements"}),": You can modify array elements using their index."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Adding Array Elements"}),": You can add elements to the end of an array using the ",(0,n.jsx)(r.code,{children:"push"})," method."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Deleting Array Elements"}),": You can delete elements from an array using the ",(0,n.jsx)(r.code,{children:"delete"})," operator or the ",(0,n.jsx)(r.code,{children:"splice"})," method."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.strong,{children:["Deleting Array Elements using ",(0,n.jsx)(r.code,{children:"pop"})," Method"]}),": You can delete elements from the end of an array using the ",(0,n.jsx)(r.code,{children:"pop"})," method."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Array Styles"}),": There are different styles of arrays in JavaScript, including dense arrays, sparse arrays, array-like objects, and typed arrays."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Typed Arrays"}),": Typed arrays are a set of array-like objects that provide a way to work with binary data in JavaScript."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Array Methods"}),": JavaScript provides various methods for working with arrays, such as ",(0,n.jsx)(r.code,{children:"push"}),", ",(0,n.jsx)(r.code,{children:"pop"}),", ",(0,n.jsx)(r.code,{children:"shift"}),", ",(0,n.jsx)(r.code,{children:"unshift"}),", ",(0,n.jsx)(r.code,{children:"splice"}),", ",(0,n.jsx)(r.code,{children:"slice"}),", ",(0,n.jsx)(r.code,{children:"concat"}),", ",(0,n.jsx)(r.code,{children:"join"}),", ",(0,n.jsx)(r.code,{children:"reverse"}),", ",(0,n.jsx)(r.code,{children:"sort"}),", ",(0,n.jsx)(r.code,{children:"indexOf"}),", ",(0,n.jsx)(r.code,{children:"lastIndexOf"}),", ",(0,n.jsx)(r.code,{children:"includes"}),", ",(0,n.jsx)(r.code,{children:"forEach"}),", ",(0,n.jsx)(r.code,{children:"map"}),", ",(0,n.jsx)(r.code,{children:"filter"}),", ",(0,n.jsx)(r.code,{children:"reduce"}),", and ",(0,n.jsx)(r.code,{children:"find"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Array Properties"}),": Arrays have various properties, such as ",(0,n.jsx)(r.code,{children:"length"}),", ",(0,n.jsx)(r.code,{children:"constructor"}),", and ",(0,n.jsx)(r.code,{children:"prototype"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Array-like Objects"}),": Array-like objects are objects that have a ",(0,n.jsx)(r.code,{children:"length"})," property and indexed elements, but they are not instances of the ",(0,n.jsx)(r.code,{children:"Array"})," constructor."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Typed Arrays"}),": Typed arrays are a set of array-like objects that provide a way to work with binary data in JavaScript."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Array Buffers"}),": Array buffers are used to represent raw binary data in memory and are used in various scenarios, such as working with WebGL, file I/O, and networking."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Array Buffer Views"}),": Array buffer views are used to read and write binary data to and from array buffers."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Array Destructuring"}),": Array destructuring is a convenient way to extract multiple elements from an array and assign them to variables."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Array Spread Operator"}),": The array spread operator (",(0,n.jsx)(r.code,{children:"..."}),") is used to expand an array into individual elements."]}),"\n"]})}),"\n",(0,n.jsx)(r.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(r.p,{children:"In this tutorial, you learned about the array data type in JavaScript and how to create, access, modify, add, and delete array elements. You can use arrays to store multiple values in a single variable and perform various operations on the elements of the array."})]})}function y(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>i,x:()=>l});var n=a(96540);const t={},s=n.createContext(t);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);