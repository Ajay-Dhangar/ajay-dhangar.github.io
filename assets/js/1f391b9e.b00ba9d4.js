"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[74204],{40652:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});t(11504);var s=t(65456),r=t(8920),a=t(55808),i=t(444),l=t(91360),o=t(69280),c=t(98938);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(17624);function m(e){const{content:n}=e,{metadata:{title:t,description:m,frontMatter:h,unlisted:x},assets:f}=n,{keywords:g,wrapperClassName:v,hide_table_of_contents:b}=h,j=f.image??h.image;return(0,u.jsx)(r.cr,{className:(0,s.c)(v??a.W.wrapper.mdxPages,a.W.page.mdxPage),children:(0,u.jsxs)(i.c,{children:[(0,u.jsx)(r.U7,{title:t,description:m,keywords:g,image:j}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,s.c)("row",d.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,s.c)("col",!b&&"col--8"),children:[x&&(0,u.jsx)(c.c,{}),(0,u.jsx)("article",{children:(0,u.jsx)(l.c,{children:(0,u.jsx)(n,{})})})]}),!b&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(o.c,{toc:n.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level})})]})})]})})}},69280:(e,n,t)=>{t.d(n,{c:()=>c});t(11504);var s=t(65456),r=t(48720);const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=t(17624);const l="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,i.jsx)("div",{className:(0,s.c)(a.tableOfContents,"thin-scrollbar",n),children:(0,i.jsx)(r.c,{...t,linkClassName:l,linkActiveClassName:o})})}},48720:(e,n,t)=>{t.d(n,{c:()=>f});var s=t(11504),r=t(53912);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):s.push(r)})),s}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>l(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.y)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:r,minHeadingLevel:a,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let r=n;r<=t;r+=1)s.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),c=o(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(45800),m=t(17624);function h(e){let{toc:n,className:t,linkClassName:s,isChild:r}=e;return n.length?(0,m.jsx)("ul",{className:r?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.c,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const x=s.memo(h);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const f=(0,r.y)(),g=c??f.tableOfContents.minHeadingLevel,v=u??f.tableOfContents.maxHeadingLevel,b=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,s.useMemo)((()=>i({toc:a(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:g,maxHeadingLevel:v});return d((0,s.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:g,maxHeadingLevel:v}}),[l,o,g,v])),(0,m.jsx)(x,{toc:b,className:t,linkClassName:l,...h})}},98938:(e,n,t)=>{t.d(n,{c:()=>h});t(11504);var s=t(65456),r=t(57932),a=t(18300),i=t(17624);function l(){return(0,i.jsx)(r.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(r.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(a.c,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(55808),u=t(72488);function m(e){let{className:n}=e;return(0,i.jsx)(u.c,{type:"caution",title:(0,i.jsx)(l,{}),className:(0,s.c)(n,d.W.common.unlistedBanner),children:(0,i.jsx)(o,{})})}function h(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(m,{...e})]})}},55544:(e,n,t)=>{t.d(n,{c:()=>i});t(11504);var s=t(65456);const r={browserWindow:"browserWindow_jiSI",browserWindowHeader:"browserWindowHeader_ITW5",row:"row_OMw1",buttons:"buttons_hZyy",right:"right_RrL_",browserWindowAddressBar:"browserWindowAddressBar_iwHb",dot:"dot_Oyi3",browserWindowMenuIcon:"browserWindowMenuIcon_KLvG",bar:"bar_Liox",browserWindowBody:"browserWindowBody_T8Vh"};var a=t(17624);function i(e){let{children:n,minHeight:t,url:i="http://localhost:3000",style:l,bodyStyle:o}=e;return(0,a.jsxs)("div",{className:r.browserWindow,style:{...l,minHeight:t},children:[(0,a.jsxs)("div",{className:r.browserWindowHeader,children:[(0,a.jsxs)("div",{className:r.buttons,children:[(0,a.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,s.c)(r.browserWindowAddressBar,"text--truncate"),children:i}),(0,a.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:r.bar}),(0,a.jsx)("span",{className:r.bar}),(0,a.jsx)("span",{className:r.bar})]})})]}),(0,a.jsx)("div",{className:r.browserWindowBody,style:o,children:n})]})}},32216:(e,n,t)=>{t.d(n,{c:()=>i});t(11504);var s=t(59400),r=t(70768),a=t(17624);function i(){const{colorMode:e}=(0,r.U)();return(0,a.jsx)("div",{className:"giscus-component",children:(0,a.jsx)(s.c,{id:"giscus",repo:"ajay-dhangar/code-harbor-hub",repoId:"R_kgDOLNryZQ",category:"General",categoryId:"DIC_kwDOLNryZc4Cc7ll",mapping:"pathname",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"bottom",theme:e,lang:"en",loading:"lazy"})})}},62928:(e,n,t)=>{t.d(n,{c:()=>r});t(11504);var s=t(17624);function r(e){let{name:n}=e;return(0,s.jsx)("div",{className:"solution-author-wrapper",children:(0,s.jsxs)("span",{children:["Written by ",n]})})}},68984:(e,n,t)=>{t.d(n,{c:()=>d});t(11504);var s=t(65456),r=t(55808);const a={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var i=t(17624);function l(e){let{type:n,className:t,children:l}=e;return(0,i.jsx)("div",{className:(0,s.c)(r.W.common.admonition,r.W.common.admonitionType(n),a.admonition,t),children:l})}function o(e){let{icon:n,title:t}=e;return(0,i.jsxs)("div",{className:a.admonitionHeading,children:[(0,i.jsx)("span",{className:a.admonitionIcon,children:n}),t]})}function c(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:a.admonitionContent,children:n}):null}function d(e){const{type:n,icon:t,title:s,children:r,className:a}=e;return(0,i.jsxs)(l,{type:n,className:a,children:[(0,i.jsx)(o,{title:s,icon:t}),(0,i.jsx)(c,{children:r})]})}},820:(e,n,t)=>{t.d(n,{c:()=>f});var s=t(9370),r=t(86212),a=t(22440),i=t(62928),l=t(11504),o=t(17624);function c(e){let{names:n}=e;if(!n)return null;const t=n.split(",");return(0,o.jsx)("div",{className:"tag-wrapper",children:t.map(((e,n)=>(0,o.jsx)("span",{className:"topic-tag",children:e},n)))})}const d=()=>{const[e,n]=(0,l.useState)([]),[t,s]=(0,l.useState)(300),[r,a]=(0,l.useState)(null),[i,c]=(0,l.useState)(!1),[d,u]=(0,l.useState)(null),[m,h]=(0,l.useState)(!1);(0,l.useEffect)((()=>{x()}),[]),(0,l.useEffect)((()=>{f()}),[t]);const x=()=>{const e=Array.from({length:18},(()=>Math.ceil(90*Math.random())+10));n(e)},f=()=>{const e=document.styleSheets;for(let n=0;n<e.length;n++){const s=e[n].cssRules||e[n].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${t}ms`;break}}};return(0,o.jsxs)("div",{className:"array-visualizations",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:t,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{c(!0),h(!0);let n=e[0],s=0;for(let r=1;r<e.length;r++)u(r),e[r]<n&&(n=e[r],s=r),await new Promise((e=>setTimeout(e,t)));a(s),h(!1),c(!1)},disabled:i||m,children:"Find Lowest"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{x(),a(null)},disabled:i||m,children:"New Values"}),(0,o.jsxs)("p",{children:["Lowest value: ",null!==r?e[r]:null]}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,n)=>(0,o.jsx)("div",{className:`array-bar ${n===r?"min-value":""} ${n===d?"current-value":""}`,style:{height:3*e+"px"}},n)))})]})},u=()=>{const[e,n]=(0,l.useState)([]),[t,s]=(0,l.useState)(300),[r,a]=(0,l.useState)(!1),[i,c]=(0,l.useState)([]);(0,l.useEffect)((()=>{d()}),[]),(0,l.useEffect)((()=>{u()}),[t]);const d=()=>{const e=Array.from({length:30},(()=>Math.ceil(100*Math.random())));n(e)},u=()=>{const e=document.styleSheets;for(let n=0;n<e.length;n++){const s=e[n].cssRules||e[n].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${t}ms`;break}}};return(0,o.jsxs)("div",{className:"selection-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:t,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{a(!0);let s=[...e];for(let e=0;e<s.length-1;e++){let r=e;for(let n=e+1;n<s.length;n++)c([r,n]),await new Promise((e=>setTimeout(e,t))),s[n]<s[r]&&(r=n);if(r!==e){let t=s[e];s[e]=s[r],s[r]=t,n([...s])}}c([]),a(!1)},disabled:r,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,n)=>(0,o.jsx)("div",{className:"array-bar "+(i.includes(n)?"comparing":""),style:{height:3*e+"px"}},n)))})]})},m=()=>{const[e,n]=(0,l.useState)([]),[t,s]=(0,l.useState)(200),[r,a]=(0,l.useState)(!1),[i,c]=(0,l.useState)([]);(0,l.useEffect)((()=>{d()}),[]),(0,l.useEffect)((()=>{u()}),[t]);const d=()=>{const e=Array.from({length:30},(()=>Math.ceil(100*Math.random())));n(e)},u=()=>{const e=document.styleSheets;for(let n=0;n<e.length;n++){const s=e[n].cssRules||e[n].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${t}ms`;break}}};return(0,o.jsxs)("div",{className:"bubble-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:t,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{a(!0);let s=[...e];for(let e=0;e<s.length-1;e++)for(let r=0;r<s.length-e-1;r++)if(c([r,r+1]),await new Promise((e=>setTimeout(e,t))),s[r]>s[r+1]){let e=s[r];s[r]=s[r+1],s[r+1]=e,n([...s])}c([]),a(!1)},disabled:r,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Instructions:"}),' Click the "Sort" button to visualize the Bubble Sort algorithm. You can also adjust the speed of the visualization using the slider.']}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,n)=>(0,o.jsx)("div",{className:"array-bar "+(i.includes(n)?"comparing":""),style:{height:3*e+"px"}},n)))})]})};var h=t(55544),x=t(32216);const f={...s.c,SolutionAuthor:i.c,Tabs:r.c,TabItem:a.c,TutorialAuthors:function(e){let{names:n}=e;const t=n.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper",children:[t.length>1?"Authors: ":"Author: ",t.map(((e,n)=>(0,o.jsx)("span",{className:"author-tag tag",children:e},n)))]})},Table:function(e){let{title:n,collectionLink:t,isSorted:s=!0,data:r}=e;const a=r.some((e=>e.tags)),i={Easy:0,Medium:1,Hard:2},l=(s?r.sort(((e,n)=>i[e.difficulty]-i[n.difficulty])):r).map(((e,n)=>{return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:e.leetCodeLink,target:"_blank",rel:"noopener noreferrer",children:e.problemName})}),(0,o.jsx)("td",{className:(t=e.difficulty,t.toLowerCase()),children:e.difficulty}),(0,o.jsxs)("td",{style:{textAlign:"center"},children:[e.solutionLink&&(0,o.jsx)("a",{href:e.solutionLink,target:"_blank",rel:"noopener noreferrer",children:"View Solutions"}),!e.solutionLink&&(0,o.jsx)("span",{children:"N/A"})]}),a&&(0,o.jsx)("td",{children:(0,o.jsx)(c,{names:e.tags})})]},n);var t}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:n}),t&&(0,o.jsxs)("h4",{children:["Start Practicing:"," ",(0,o.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:t})]}),(0,o.jsxs)("table",{className:"suggested-problem-table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Problem Name"}),(0,o.jsx)("th",{children:"Difficulty"}),(0,o.jsx)("th",{children:"Solution Link"}),a&&(0,o.jsx)("th",{children:"Topic"})]})}),(0,o.jsx)("tbody",{children:l})]})]})},Contributors:function(e){let{names:n}=e;const t=n.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper contributors",children:[t.length>1?"Contributors: ":"Contributor: ",t.map(((e,n)=>(0,o.jsx)("span",{className:"contributor-tag tag",children:e},n)))]})},BrowserWindow:h.c,GiscusComponent:x.c,ArrayVisualizations:d,BubbleSortVisualization:m,SelectionSortVisualization:u}},22192:(e,n,t)=>{t.d(n,{c:()=>r});var s=t(11504);const r={React:s,...s}}}]);