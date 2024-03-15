"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[32392],{77508:(e,t,n)=>{n.d(t,{c:()=>r});n(11504);var s=n(57932),a=n(31152),i=n(17624);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.c,{permalink:n,title:(0,i.jsx)(s.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(a.c,{permalink:r,title:(0,i.jsx)(s.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},56565:(e,t,n)=>{n.d(t,{c:()=>r});n(11504);var s=n(26064),a=n(73472),i=n(17624);function r(e){let{items:t,component:n=a.c}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.E,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},86332:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(11504);var s=n(65456),a=n(57932),i=n(45648),r=n(8920),l=n(55808),o=n(45800),c=n(88936),d=n(77508),u=n(11248),h=n(56565),m=n(98938),g=n(30028),x=n(17624);function p(e){const t=function(){const{selectMessage:e}=(0,i.A)();return t=>e(t,(0,a.G)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.G)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=p(t);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.U7,{title:n}),(0,x.jsx)(u.c,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:s,listMetadata:i}=e;const r=p(t);return(0,x.jsxs)(c.c,{sidebar:s,children:[t.unlisted&&(0,x.jsx)(m.c,{}),(0,x.jsxs)("header",{className:"margin-bottom--xl",children:[(0,x.jsx)(g.c,{as:"h1",children:r}),(0,x.jsx)(o.c,{href:t.allTagsPath,children:(0,x.jsx)(a.c,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,x.jsx)(h.c,{items:n}),(0,x.jsx)(d.c,{metadata:i})]})}function f(e){return(0,x.jsxs)(r.cr,{className:(0,s.c)(l.W.wrapper.blogPages,l.W.page.blogTagPostListPage),children:[(0,x.jsx)(j,{...e}),(0,x.jsx)(b,{...e})]})}},98938:(e,t,n)=>{n.d(t,{c:()=>m});n(11504);var s=n(65456),a=n(57932),i=n(18300),r=n(17624);function l(){return(0,r.jsx)(a.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.c,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(55808),u=n(72488);function h(e){let{className:t}=e;return(0,r.jsx)(u.c,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,s.c)(t,d.W.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(h,{...e})]})}},62928:(e,t,n)=>{n.d(t,{c:()=>a});n(11504);var s=n(17624);function a(e){let{name:t}=e;return(0,s.jsx)("div",{className:"solution-author-wrapper",children:(0,s.jsxs)("span",{children:["Written by ",t]})})}},68984:(e,t,n)=>{n.d(t,{c:()=>d});n(11504);var s=n(65456),a=n(55808);const i={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var r=n(17624);function l(e){let{type:t,className:n,children:l}=e;return(0,r.jsx)("div",{className:(0,s.c)(a.W.common.admonition,a.W.common.admonitionType(t),i.admonition,n),children:l})}function o(e){let{icon:t,title:n}=e;return(0,r.jsxs)("div",{className:i.admonitionHeading,children:[(0,r.jsx)("span",{className:i.admonitionIcon,children:t}),n]})}function c(e){let{children:t}=e;return t?(0,r.jsx)("div",{className:i.admonitionContent,children:t}):null}function d(e){const{type:t,icon:n,title:s,children:a,className:i}=e;return(0,r.jsxs)(l,{type:t,className:i,children:[(0,r.jsx)(o,{title:s,icon:n}),(0,r.jsx)(c,{children:a})]})}},820:(e,t,n)=>{n.d(t,{c:()=>m});var s=n(9370),a=n(86212),i=n(22440),r=n(62928),l=n(11504),o=n(17624);function c(e){let{names:t}=e;if(!t)return null;const n=t.split(",");return(0,o.jsx)("div",{className:"tag-wrapper",children:n.map(((e,t)=>(0,o.jsx)("span",{className:"topic-tag",children:e},t)))})}const d=()=>{const[e,t]=(0,l.useState)([]),[n,s]=(0,l.useState)(300),[a,i]=(0,l.useState)(null),[r,c]=(0,l.useState)(!1),[d,u]=(0,l.useState)(null),[h,m]=(0,l.useState)(!1);(0,l.useEffect)((()=>{g()}),[]),(0,l.useEffect)((()=>{x()}),[n]);const g=()=>{const e=Array.from({length:18},(()=>Math.ceil(90*Math.random())+10));t(e)},x=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const s=e[t].cssRules||e[t].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"array-visualizations",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{c(!0),m(!0);let t=e[0],s=0;for(let a=1;a<e.length;a++)u(a),e[a]<t&&(t=e[a],s=a),await new Promise((e=>setTimeout(e,n)));i(s),m(!1),c(!1)},disabled:r||h,children:"Find Lowest"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{g(),i(null)},disabled:r||h,children:"New Values"}),(0,o.jsxs)("p",{children:["Lowest value: ",null!==a?e[a]:null]}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:`array-bar ${t===a?"min-value":""} ${t===d?"current-value":""}`,style:{height:3*e+"px"}},t)))})]})},u=()=>{const[e,t]=(0,l.useState)([]),[n,s]=(0,l.useState)(300),[a,i]=(0,l.useState)(!1),[r,c]=(0,l.useState)([]);(0,l.useEffect)((()=>{d()}),[]),(0,l.useEffect)((()=>{u()}),[n]);const d=()=>{const e=Array.from({length:30},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const s=e[t].cssRules||e[t].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"selection-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{i(!0);let s=[...e];for(let e=0;e<s.length-1;e++){let a=e;for(let t=e+1;t<s.length;t++)c([a,t]),await new Promise((e=>setTimeout(e,n))),s[t]<s[a]&&(a=t);if(a!==e){let n=s[e];s[e]=s[a],s[a]=n,t([...s])}}c([]),i(!1)},disabled:a,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:a,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(r.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})},h=()=>{const[e,t]=(0,l.useState)([]),[n,s]=(0,l.useState)(200),[a,i]=(0,l.useState)(!1),[r,c]=(0,l.useState)([]);(0,l.useEffect)((()=>{d()}),[]),(0,l.useEffect)((()=>{u()}),[n]);const d=()=>{const e=Array.from({length:30},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const s=e[t].cssRules||e[t].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"bubble-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{i(!0);let s=[...e];for(let e=0;e<s.length-1;e++)for(let a=0;a<s.length-e-1;a++)if(c([a,a+1]),await new Promise((e=>setTimeout(e,n))),s[a]>s[a+1]){let e=s[a];s[a]=s[a+1],s[a+1]=e,t([...s])}c([]),i(!1)},disabled:a,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:a,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Instructions:"}),' Click the "Sort" button to visualize the Bubble Sort algorithm. You can also adjust the speed of the visualization using the slider.']}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(r.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})},m={...s.c,SolutionAuthor:r.c,Tabs:a.c,TabItem:i.c,TutorialAuthors:function(e){let{names:t}=e;const n=t.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper",children:[n.length>1?"Authors: ":"Author: ",n.map(((e,t)=>(0,o.jsx)("span",{className:"author-tag tag",children:e},t)))]})},Table:function(e){let{title:t,collectionLink:n,isSorted:s=!0,data:a}=e;const i=a.some((e=>e.tags)),r={Easy:0,Medium:1,Hard:2},l=(s?a.sort(((e,t)=>r[e.difficulty]-r[t.difficulty])):a).map(((e,t)=>{return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:e.leetCodeLink,target:"_blank",rel:"noopener noreferrer",children:e.problemName})}),(0,o.jsx)("td",{className:(n=e.difficulty,n.toLowerCase()),children:e.difficulty}),(0,o.jsxs)("td",{style:{textAlign:"center"},children:[e.solutionLink&&(0,o.jsx)("a",{href:e.solutionLink,target:"_blank",rel:"noopener noreferrer",children:"View Solutions"}),!e.solutionLink&&(0,o.jsx)("span",{children:"N/A"})]}),i&&(0,o.jsx)("td",{children:(0,o.jsx)(c,{names:e.tags})})]},t);var n}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:t}),n&&(0,o.jsxs)("h4",{children:["Start Practicing:"," ",(0,o.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:n})]}),(0,o.jsxs)("table",{className:"suggested-problem-table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Problem Name"}),(0,o.jsx)("th",{children:"Difficulty"}),(0,o.jsx)("th",{children:"Solution Link"}),i&&(0,o.jsx)("th",{children:"Topic"})]})}),(0,o.jsx)("tbody",{children:l})]})]})},Contributors:function(e){let{names:t}=e;const n=t.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper contributors",children:[n.length>1?"Contributors: ":"Contributor: ",n.map(((e,t)=>(0,o.jsx)("span",{className:"contributor-tag tag",children:e},t)))]})},ArrayVisualizations:d,BubbleSortVisualization:h,SelectionSortVisualization:u}},22192:(e,t,n)=>{n.d(t,{c:()=>a});var s=n(11504);const a={React:s,...s}}}]);