"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[82640],{18052:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(74848),l=s(28453);const i={id:"all-about-strings",title:"All Basic About Strings in JavaScript",sidebar_label:"Strings in JavaScript",sidebar_position:13,tags:["JavaScript","Strings","String Methods","Template Literals","Escape Characters","String Length","toUpperCase","toLowerCase","charAt","indexOf","lastIndexOf","includes","startsWith","endsWith","slice","substring","substr","replace","split","trim","concat","repeat","padStart","padEnd","match","search","localeCompare","charCodeAt","fromCharCode","fromCodePoint","codePointAt","normalize"],description:"In the JavaScript programming language, strings are text that is displayed on the screen. They are used to store and manipulate text. In this section, you will learn how to create and manipulate strings in JavaScript. You will also learn about the different methods that can be used to manipulate strings. We are going to cover the following topics in this section:"},a=void 0,r={id:"javascript/all-about-strings",title:"All Basic About Strings in JavaScript",description:"In the JavaScript programming language, strings are text that is displayed on the screen. They are used to store and manipulate text. In this section, you will learn how to create and manipulate strings in JavaScript. You will also learn about the different methods that can be used to manipulate strings. We are going to cover the following topics in this section:",source:"@site/docs/javascript/strings.md",sourceDirName:"javascript",slug:"/javascript/all-about-strings",permalink:"/docs/javascript/all-about-strings",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/strings.md",tags:[{inline:!0,label:"JavaScript",permalink:"/docs/tags/java-script"},{inline:!0,label:"Strings",permalink:"/docs/tags/strings"},{inline:!0,label:"String Methods",permalink:"/docs/tags/string-methods"},{inline:!0,label:"Template Literals",permalink:"/docs/tags/template-literals"},{inline:!0,label:"Escape Characters",permalink:"/docs/tags/escape-characters"},{inline:!0,label:"String Length",permalink:"/docs/tags/string-length"},{inline:!0,label:"toUpperCase",permalink:"/docs/tags/to-upper-case"},{inline:!0,label:"toLowerCase",permalink:"/docs/tags/to-lower-case"},{inline:!0,label:"charAt",permalink:"/docs/tags/char-at"},{inline:!0,label:"indexOf",permalink:"/docs/tags/index-of"},{inline:!0,label:"lastIndexOf",permalink:"/docs/tags/last-index-of"},{inline:!0,label:"includes",permalink:"/docs/tags/includes"},{inline:!0,label:"startsWith",permalink:"/docs/tags/starts-with"},{inline:!0,label:"endsWith",permalink:"/docs/tags/ends-with"},{inline:!0,label:"slice",permalink:"/docs/tags/slice"},{inline:!0,label:"substring",permalink:"/docs/tags/substring"},{inline:!0,label:"substr",permalink:"/docs/tags/substr"},{inline:!0,label:"replace",permalink:"/docs/tags/replace"},{inline:!0,label:"split",permalink:"/docs/tags/split"},{inline:!0,label:"trim",permalink:"/docs/tags/trim"},{inline:!0,label:"concat",permalink:"/docs/tags/concat"},{inline:!0,label:"repeat",permalink:"/docs/tags/repeat"},{inline:!0,label:"padStart",permalink:"/docs/tags/pad-start"},{inline:!0,label:"padEnd",permalink:"/docs/tags/pad-end"},{inline:!0,label:"match",permalink:"/docs/tags/match"},{inline:!0,label:"search",permalink:"/docs/tags/search"},{inline:!0,label:"localeCompare",permalink:"/docs/tags/locale-compare"},{inline:!0,label:"charCodeAt",permalink:"/docs/tags/char-code-at"},{inline:!0,label:"fromCharCode",permalink:"/docs/tags/from-char-code"},{inline:!0,label:"fromCodePoint",permalink:"/docs/tags/from-code-point"},{inline:!0,label:"codePointAt",permalink:"/docs/tags/code-point-at"},{inline:!0,label:"normalize",permalink:"/docs/tags/normalize"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1709995643e3,sidebarPosition:13,frontMatter:{id:"all-about-strings",title:"All Basic About Strings in JavaScript",sidebar_label:"Strings in JavaScript",sidebar_position:13,tags:["JavaScript","Strings","String Methods","Template Literals","Escape Characters","String Length","toUpperCase","toLowerCase","charAt","indexOf","lastIndexOf","includes","startsWith","endsWith","slice","substring","substr","replace","split","trim","concat","repeat","padStart","padEnd","match","search","localeCompare","charCodeAt","fromCharCode","fromCodePoint","codePointAt","normalize"],description:"In the JavaScript programming language, strings are text that is displayed on the screen. They are used to store and manipulate text. In this section, you will learn how to create and manipulate strings in JavaScript. You will also learn about the different methods that can be used to manipulate strings. We are going to cover the following topics in this section:"},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/javascript/events-in-javascript"},next:{title:"Numbers",permalink:"/docs/javascript/all-about-numbers"}},c={},d=[{value:"String Length",id:"string-length",level:2},{value:"Escape Characters",id:"escape-characters",level:2},{value:"String Methods",id:"string-methods",level:2},{value:"<code>toUpperCase()</code>",id:"touppercase",level:3},{value:"<code>toLowerCase()</code>",id:"tolowercase",level:3},{value:"<code>charAt()</code>",id:"charat",level:3},{value:"<code>indexOf()</code>",id:"indexof",level:3},{value:"<code>lastIndexOf()</code>",id:"lastindexof",level:3},{value:"<code>includes()</code>",id:"includes",level:3},{value:"<code>startsWith()</code>",id:"startswith",level:3},{value:"<code>endsWith()</code>",id:"endswith",level:3},{value:"<code>slice()</code>",id:"slice",level:3},{value:"<code>substring()</code>",id:"substring",level:3},{value:"<code>substr()</code>",id:"substr",level:3},{value:"<code>replace()</code>",id:"replace",level:3},{value:"<code>split()</code>",id:"split",level:3},{value:"<code>trim()</code>",id:"trim",level:3},{value:"<code>concat()</code>",id:"concat",level:3},{value:"<code>repeat()</code>",id:"repeat",level:3},{value:"<code>padStart()</code>",id:"padstart",level:3},{value:"<code>padEnd()</code>",id:"padend",level:3},{value:"<code>match()</code>",id:"match",level:3},{value:"<code>search()</code>",id:"search",level:3},{value:"<code>localeCompare()</code>",id:"localecompare",level:3},{value:"<code>charCodeAt()</code>",id:"charcodeat",level:3},{value:"<code>fromCharCode()</code>",id:"fromcharcode",level:3},{value:"<code>fromCodePoint()</code>",id:"fromcodepoint",level:3},{value:"<code>codePointAt()</code>",id:"codepointat",level:3},{value:"<code>normalize()</code>",id:"normalize",level:3},{value:"<code>includes()</code>",id:"includes-1",level:3},{value:"Template Literals",id:"template-literals",level:2},{value:"Conclusion",id:"conclusion",level:2}];function o(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Strings are used to store text. They are used to represent a sequence of characters.\nStrings are written with quotes. You can use single or double quotes."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let name = \"Ajay\";\nlet message = 'Hello, Ajay!';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"string-length",children:"String Length"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"length"})," property returns the length of a string (number of characters)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let name = "Ajay";\nconsole.log(name.length); // 4\n'})}),"\n",(0,t.jsx)(n.h2,{id:"escape-characters",children:"Escape Characters"}),"\n",(0,t.jsxs)(n.p,{children:["In JavaScript, you can use the backslash ",(0,t.jsx)(n.code,{children:"\\"})," to escape quotes and other characters."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = 'It\\'s a beautiful day!';\nconsole.log(message); // It's a beautiful day!\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The backslash ",(0,t.jsx)(n.code,{children:"\\"})," is used to escape quotes and other characters in a string."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Code"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Output"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"\\'"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"'"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Single quote"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:'\\"'})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:'"'}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Double quote"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"\\\\"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\\"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Backslash"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"\\n"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"}}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"New line"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"\\r"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"}}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Carriage return"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"\\t"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"}}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Tab"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"\\b"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"}}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Backspace"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"\\f"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"}}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Form feed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"\\v"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"}}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Vertical tab"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"string-methods",children:"String Methods"}),"\n",(0,t.jsx)(n.p,{children:"JavaScript has a number of built-in methods for working with strings."}),"\n",(0,t.jsx)(n.h3,{id:"touppercase",children:(0,t.jsx)(n.code,{children:"toUpperCase()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"toUpperCase()"})," method converts a string to uppercase letters."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let name = "Ajay";\nconsole.log(name.toUpperCase()); // AJAY\n'})}),"\n",(0,t.jsx)(n.h3,{id:"tolowercase",children:(0,t.jsx)(n.code,{children:"toLowerCase()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"toLowerCase()"})," method converts a string to lowercase letters."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let name = "AJAY";\nconsole.log(name.toLowerCase()); // ajay\n'})}),"\n",(0,t.jsx)(n.h3,{id:"charat",children:(0,t.jsx)(n.code,{children:"charAt()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"charAt()"})," method returns the character at a specified index (position) in a string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let name = "Ajay";\nconsole.log(name.charAt(0)); // A\nconsole.log(name.charAt(1)); // j\n'})}),"\n",(0,t.jsx)(n.h3,{id:"indexof",children:(0,t.jsx)(n.code,{children:"indexOf()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"indexOf()"})," method returns the position of the first occurrence of a specified value in a string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = 'Hello, Ajay!';\nconsole.log(message.indexOf('Ajay')); // 7\n"})}),"\n",(0,t.jsx)(n.h3,{id:"lastindexof",children:(0,t.jsx)(n.code,{children:"lastIndexOf()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"lastIndexOf()"})," method returns the position of the last occurrence of a specified value in a string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = 'Hello, Ajay!';\nconsole.log(message.lastIndexOf('l')); // 3\n"})}),"\n",(0,t.jsx)(n.h3,{id:"includes",children:(0,t.jsx)(n.code,{children:"includes()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"includes()"})," method returns ",(0,t.jsx)(n.code,{children:"true"})," if a string contains a specified value, otherwise ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = 'Hello, Ajay!';\nconsole.log(message.includes('Ajay')); // true\nconsole.log(message.includes('Ajayy')); // false\n\n// Case sensitive\nconsole.log(message.includes('ajay')); // false\n"})}),"\n",(0,t.jsx)(n.h3,{id:"startswith",children:(0,t.jsx)(n.code,{children:"startsWith()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"startsWith()"})," method returns ",(0,t.jsx)(n.code,{children:"true"})," if a string starts with a specified value, otherwise ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = 'Hello, Ajay!';\nconsole.log(message.startsWith('Hello')); // true\nconsole.log(message.startsWith('Ajay')); // false\n"})}),"\n",(0,t.jsx)(n.h3,{id:"endswith",children:(0,t.jsx)(n.code,{children:"endsWith()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"endsWith()"})," method returns ",(0,t.jsx)(n.code,{children:"true"})," if a string ends with a specified value, otherwise ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = 'Hello, Ajay!';\nconsole.log(message.endsWith('Ajay!')); // true\nconsole.log(message.endsWith('Hello')); // false\n"})}),"\n",(0,t.jsx)(n.h3,{id:"slice",children:(0,t.jsx)(n.code,{children:"slice()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"slice()"})," method extracts a part of a string and returns the extracted part in a new string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = 'Hello, Ajay!';\nconsole.log(message.slice(7)); // Ajay!\nconsole.log(message.slice(7, 11)); // Ajay\n"})}),"\n",(0,t.jsx)(n.h3,{id:"substring",children:(0,t.jsx)(n.code,{children:"substring()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"substring()"})," method extracts the characters from a string, between two specified indices, and returns the new sub string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = 'Hello, Ajay!';\nconsole.log(message.substring(7)); // Ajay!\nconsole.log(message.substring(7, 11)); // Ajay\n"})}),"\n",(0,t.jsx)(n.h3,{id:"substr",children:(0,t.jsx)(n.code,{children:"substr()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"substr()"})," method extracts the characters from a string, beginning at a specified start position, and through the specified number of character."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = 'Hello, Ajay!';\nconsole.log(message.substr(7)); // Ajay!\nconsole.log(message.substr(7, 4)); // Ajay\n"})}),"\n",(0,t.jsx)(n.h3,{id:"replace",children:(0,t.jsx)(n.code,{children:"replace()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"replace()"})," method replaces a specified value with another value in a string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = 'Hello, Ajay!';\nconsole.log(message.replace('Ajay', 'John')); // Hello, John!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"split",children:(0,t.jsx)(n.code,{children:"split()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"split()"})," method splits a string into an array of substrings, and returns the new array."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = 'Hello, Ajay!';\nconsole.log(message.split(' ')); // [ 'Hello,', 'Ajay!' ]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"trim",children:(0,t.jsx)(n.code,{children:"trim()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"trim()"})," method removes whitespace from both ends of a string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = '   Hello, Ajay!   ';\nconsole.log(message.trim()); // Hello, Ajay!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"concat",children:(0,t.jsx)(n.code,{children:"concat()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"concat()"})," method joins two or more strings."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let name = \"Ajay\";\nlet message = 'Hello, ';\nconsole.log(message.concat(name)); // Hello, Ajay\n"})}),"\n",(0,t.jsx)(n.h3,{id:"repeat",children:(0,t.jsx)(n.code,{children:"repeat()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"repeat()"})," method returns a new string with a specified number of copies of the string it was called on."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let name = "Ajay";\nconsole.log(name.repeat(3)); // AjayAjayAjay\n'})}),"\n",(0,t.jsx)(n.h3,{id:"padstart",children:(0,t.jsx)(n.code,{children:"padStart()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"padStart()"})," method pads the current string with another string until the resulting string reaches the given length."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let name = \"Ajay\";\nconsole.log(name.padStart(10, 'Hi ')); // Hi Hi Ajay\n"})}),"\n",(0,t.jsx)(n.h3,{id:"padend",children:(0,t.jsx)(n.code,{children:"padEnd()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"padEnd()"})," method pads the current string with another string until the resulting string reaches the given length."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let name = \"Ajay\";\nconsole.log(name.padEnd(10, ' Hi')); // Ajay Hi Hi\n"})}),"\n",(0,t.jsx)(n.h3,{id:"match",children:(0,t.jsx)(n.code,{children:"match()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"match()"})," method searches a string for a match against a regular expression, and returns the matches, as an Array object."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = 'Hello, Ajay!';\nconsole.log(message.match('Ajay')); // [ 'Ajay', index: 7, input: 'Hello, Ajay!', groups: undefined ]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"search",children:(0,t.jsx)(n.code,{children:"search()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"search()"})," method searches a string for a specified value, and returns the position of the match."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let message = 'Hello, Ajay!';\nconsole.log(message.search('Ajay')); // 7\n"})}),"\n",(0,t.jsx)(n.h3,{id:"localecompare",children:(0,t.jsx)(n.code,{children:"localeCompare()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"localeCompare()"})," method compares two strings in the current locale."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let name1 = "Ajay";\nlet name2 = "John";\n\nconsole.log(name1.localeCompare(name2)); // -1\nconsole.log(name2.localeCompare(name1)); // 1\nconsole.log(name1.localeCompare(name1)); // 0\n'})}),"\n",(0,t.jsx)(n.h3,{id:"charcodeat",children:(0,t.jsx)(n.code,{children:"charCodeAt()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"charCodeAt()"})," method returns the Unicode of the character at a specified index in a string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let name = "Ajay";\nconsole.log(name.charCodeAt(0)); // 65\nconsole.log(name.charCodeAt(1)); // 106\n'})}),"\n",(0,t.jsx)(n.h3,{id:"fromcharcode",children:(0,t.jsx)(n.code,{children:"fromCharCode()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"fromCharCode()"})," method converts Unicode values to characters."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"console.log(String.fromCharCode(65)); // A\nconsole.log(String.fromCharCode(106)); // j\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fromcodepoint",children:(0,t.jsx)(n.code,{children:"fromCodePoint()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"fromCodePoint()"})," method returns a string created by using the specified sequence of code points."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"console.log(String.fromCodePoint(65)); // A\nconsole.log(String.fromCodePoint(106)); // j\n"})}),"\n",(0,t.jsx)(n.h3,{id:"codepointat",children:(0,t.jsx)(n.code,{children:"codePointAt()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"codePointAt()"})," method returns a non-negative integer that is the Unicode code point value."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let name = "Ajay";\nconsole.log(name.codePointAt(0)); // 65\nconsole.log(name.codePointAt(1)); // 106\n'})}),"\n",(0,t.jsx)(n.h3,{id:"normalize",children:(0,t.jsx)(n.code,{children:"normalize()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"normalize()"})," method returns the Unicode Normalization Form of a given string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let name = "Ajay";\nconsole.log(name.normalize()); // Ajay\n'})}),"\n",(0,t.jsx)(n.h3,{id:"includes-1",children:(0,t.jsx)(n.code,{children:"includes()"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"includes()"})," method determines whether a string contains the characters of a specified string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"let name = \"Ajay\";\nconsole.log(name.includes('A')); // true\nconsole.log(name.includes('a')); // false\n"})}),"\n",(0,t.jsx)(n.h2,{id:"template-literals",children:"Template Literals"}),"\n",(0,t.jsx)(n.p,{children:'Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'let name = "Ajay";\nlet message = `Hello, ${name}!`;\nconsole.log(message); // Hello, Ajay!\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"Template literals are enclosed by the back-tick (&lt) (grave accent) character instead of double or single quotes."})]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial, we learned about strings in JavaScript and various methods to work with strings. We also learned about template literals."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(96540);const l={},i=t.createContext(l);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);