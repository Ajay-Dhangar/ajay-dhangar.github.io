"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[66061,18401,83249],{57591:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});t(96540);var s=t(34164),r=t(17153),a=t(18630),i=t(54688),o=t(5323),l=t(98793),c=t(36057),d=t(15659);const u={mdxPageWrapper:"mdxPageWrapper_j9I6"};var m=t(74848);function h(e){const{content:n}=e,{metadata:{title:t,editUrl:h,description:x,frontMatter:p,unlisted:g,lastUpdatedBy:f,lastUpdatedAt:b},assets:j}=n,{keywords:v,wrapperClassName:y,hide_table_of_contents:w}=p,N=j.image??p.image,A=!!(h||b||f);return(0,m.jsx)(r.e3,{className:(0,s.A)(y??a.G.wrapper.mdxPages,a.G.page.mdxPage),children:(0,m.jsxs)(i.A,{children:[(0,m.jsx)(r.be,{title:t,description:x,keywords:v,image:N}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,s.A)("row",u.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,s.A)("col",!w&&"col--8"),children:[g&&(0,m.jsx)(c.A,{}),(0,m.jsx)("article",{children:(0,m.jsx)(o.A,{children:(0,m.jsx)(n,{})})}),A&&(0,m.jsx)(d.A,{className:(0,s.A)("margin-top--sm",a.G.pages.pageFooterEditMetaRow),editUrl:h,lastUpdatedAt:b,lastUpdatedBy:f})]}),!w&&n.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(l.A,{toc:n.toc,minHeadingLevel:p.toc_min_heading_level,maxHeadingLevel:p.toc_max_heading_level})})]})})]})})}},98793:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var s=t(34164),r=t(61507);const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=t(74848);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,i.jsx)("div",{className:(0,s.A)(a.tableOfContents,"thin-scrollbar",n),children:(0,i.jsx)(r.A,{...t,linkClassName:o,linkActiveClassName:l})})}},61507:(e,n,t)=>{t.d(n,{A:()=>p});var s=t(96540),r=t(86957);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):s.push(r)})),s}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>o(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:r,minHeadingLevel:a,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let r=n;r<=t;r+=1)s.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),c=l(o,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var u=t(14783),m=t(74848);function h(e){let{toc:n,className:t,linkClassName:s,isChild:r}=e;return n.length?(0,m.jsx)("ul",{className:r?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const x=s.memo(h);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const p=(0,r.p)(),g=c??p.tableOfContents.minHeadingLevel,f=u??p.tableOfContents.maxHeadingLevel,b=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,s.useMemo)((()=>i({toc:a(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:g,maxHeadingLevel:f});return d((0,s.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:g,maxHeadingLevel:f}}),[o,l,g,f])),(0,m.jsx)(x,{toc:b,className:t,linkClassName:o,...h})}},36057:(e,n,t)=>{t.d(n,{A:()=>h});t(96540);var s=t(34164),r=t(23230),a=t(21141),i=t(74848);function o(){return(0,i.jsx)(r.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(r.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(18630),u=t(19581);function m(e){let{className:n}=e;return(0,i.jsx)(u.A,{type:"caution",title:(0,i.jsx)(o,{}),className:(0,s.A)(n,d.G.common.unlistedBanner),children:(0,i.jsx)(l,{})})}function h(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(m,{...e})]})}},67137:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var s=t(34164);const r={browserWindow:"browserWindow_jiSI",browserWindowHeader:"browserWindowHeader_ITW5",row:"row_OMw1",buttons:"buttons_hZyy",right:"right_RrL_",browserWindowAddressBar:"browserWindowAddressBar_iwHb",dot:"dot_Oyi3",browserWindowMenuIcon:"browserWindowMenuIcon_KLvG",bar:"bar_Liox",browserWindowBody:"browserWindowBody_T8Vh"};var a=t(74848);function i(e){let{children:n,minHeight:t,url:i="http://localhost:3000",style:o,bodyStyle:l}=e;return(0,a.jsxs)("div",{className:r.browserWindow,style:{...o,minHeight:t},children:[(0,a.jsxs)("div",{className:r.browserWindowHeader,children:[(0,a.jsxs)("div",{className:r.buttons,children:[(0,a.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,s.A)(r.browserWindowAddressBar,"text--truncate"),children:i}),(0,a.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:r.bar}),(0,a.jsx)("span",{className:r.bar}),(0,a.jsx)("span",{className:r.bar})]})})]}),(0,a.jsx)("div",{className:r.browserWindowBody,style:l,children:n})]})}},73405:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var s=t(13955),r=t(7710),a=t(74848);function i(){const{colorMode:e}=(0,r.G)();return(0,a.jsx)("div",{className:"giscus-component",children:(0,a.jsx)(s.A,{id:"giscus",repo:"ajay-dhangar/ajay-dhangar.github.io",repoId:"R_kgDOLNryZQ",category:"General",categoryId:"DIC_kwDOLNryZc4Cc7ll",mapping:"pathname",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"bottom",theme:e,lang:"en",loading:"lazy"})})}},36876:(e,n,t)=>{t.d(n,{A:()=>d});t(96540);var s=t(34164),r=t(18630);const a={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var i=t(74848);function o(e){let{type:n,className:t,children:o}=e;return(0,i.jsx)("div",{className:(0,s.A)(r.G.common.admonition,r.G.common.admonitionType(n),a.admonition,t),children:o})}function l(e){let{icon:n,title:t}=e;return(0,i.jsxs)("div",{className:a.admonitionHeading,children:[(0,i.jsx)("span",{className:a.admonitionIcon,children:n}),t]})}function c(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:a.admonitionContent,children:n}):null}function d(e){const{type:n,icon:t,title:s,children:r,className:a}=e;return(0,i.jsxs)(o,{type:n,className:a,children:[(0,i.jsx)(l,{title:s,icon:t}),(0,i.jsx)(c,{children:r})]})}},37126:(e,n,t)=>{t.d(n,{A:()=>G});var s=t(21141),r=t(67137),a=t(96540),i=t(25380),o=t(74848);const l=i.i7`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,c=i.Ay.a`
    display: block;
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: transform 0.3s ease;
    animation: ${l} 0.5s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    }
`,d=i.Ay.h3`
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 600;
    color: #7f8c8d;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`,u=i.Ay.span`
    font-size: 14px;
`,m=e=>{let{collections:n}=e;return(0,o.jsx)("div",{children:n.map(((e,n)=>(0,o.jsxs)(c,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(d,{children:e.label}),(0,o.jsx)(u,{children:e.url})]},n)))})};const h=i.Ay.div`
  margin: 5px;
`,x=i.Ay.div`
  margin: 10px 0;
  display: flex;
  scroll-behavior: smooth;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`,p=i.Ay.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }
`,g=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`,f=i.Ay.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`,b=i.Ay.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  background: linear-gradient(-30deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 150% 150%;
`,j=i.Ay.h3`
  margin-bottom: 5px;
  padding: 0 5px;
`,v=i.Ay.p`
  margin-bottom: 5px;
  padding: 0 8px;
  text-align: justify;
`,y=i.Ay.span`
  font-style: italic;
  padding: 0 8px;
`,w=i.Ay.div`
  margin-top: 10px;
  padding: 0 8px;

  a {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`,N=e=>{let{courses:n}=e;const[t,s]=(0,a.useState)("all"),r="all"===t?n:n.filter((e=>e.category===t));return(0,o.jsxs)(h,{children:[(0,o.jsxs)(x,{children:[(0,o.jsx)(p,{onClick:()=>s("all"),children:"All"}),(0,o.jsx)(p,{onClick:()=>s("html"),children:"HTML"}),(0,o.jsx)(p,{onClick:()=>s("css"),children:"CSS"}),(0,o.jsx)(p,{onClick:()=>s("javascript"),children:"JavaScript"}),(0,o.jsx)(p,{onClick:()=>s("dsa"),children:"DSA"}),(0,o.jsx)(p,{onClick:()=>s("react"),children:"React"}),(0,o.jsx)(p,{onClick:()=>s("node"),children:"Node"}),(0,o.jsx)(p,{onClick:()=>s("python"),children:"Python"}),(0,o.jsx)(p,{onClick:()=>s("mongodb"),children:"MongoDB"})]}),(0,o.jsx)(g,{children:r.map((e=>(0,o.jsxs)(f,{children:[(0,o.jsx)(b,{src:e.imageUrl,alt:e.title}),(0,o.jsx)(j,{children:e.title}),(0,o.jsx)(v,{children:e.description}),(0,o.jsxs)(y,{children:[(0,o.jsx)("strong",{children:"Author:"})," ",e.author]}),(0,o.jsx)(w,{children:(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"Visit Course"})})]},e.id)))})]})},A=()=>{const[e,n]=(0,a.useState)([]),[t,s]=(0,a.useState)(300),[r,i]=(0,a.useState)(null),[l,c]=(0,a.useState)(!1),[d,u]=(0,a.useState)(null),[m,h]=(0,a.useState)(!1);(0,a.useEffect)((()=>{x()}),[]),(0,a.useEffect)((()=>{p()}),[t]);const x=()=>{const e=Array.from({length:18},(()=>Math.ceil(90*Math.random())+10));n(e)},p=()=>{const e=document.styleSheets;for(let n=0;n<e.length;n++){const s=e[n].cssRules||e[n].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${t}ms`;break}}};return(0,o.jsxs)("div",{className:"array-visualizations",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:t,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{c(!0),h(!0);let n=e[0],s=0;for(let r=1;r<e.length;r++)u(r),e[r]<n&&(n=e[r],s=r),await new Promise((e=>setTimeout(e,t)));i(s),h(!1),c(!1)},disabled:l||m,children:"Find Lowest"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{x(),i(null)},disabled:l||m,children:"New Values"}),(0,o.jsxs)("p",{children:["Lowest value: ",null!==r?e[r]:null]}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,n)=>(0,o.jsx)("div",{className:`array-bar ${n===r?"min-value":""} ${n===d?"current-value":""}`,style:{height:3*e+"px"}},n)))})]})},k=()=>{const[e,n]=(0,a.useState)([]),[t,s]=(0,a.useState)(200),[r,i]=(0,a.useState)(!1),[l,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{d()}),[]),(0,a.useEffect)((()=>{u()}),[t]);const d=()=>{const e=Array.from({length:50},(()=>Math.ceil(100*Math.random())));n(e)},u=()=>{const e=document.styleSheets;for(let n=0;n<e.length;n++){const s=e[n].cssRules||e[n].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${t}ms`;break}}};return(0,o.jsxs)("div",{className:"bubble-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:t,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{i(!0);let s=[...e];for(let e=0;e<s.length-1;e++)for(let r=0;r<s.length-e-1;r++)if(c([r,r+1]),await new Promise((e=>setTimeout(e,t))),s[r]>s[r+1]){let e=s[r];s[r]=s[r+1],s[r+1]=e,n([...s])}c([]),i(!1)},disabled:r,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Instructions:"}),' Click the "Sort" button to visualize the Bubble Sort algorithm. You can also adjust the speed of the visualization using the slider.']}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,n)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(n)?"comparing":""),style:{height:3*e+"px"}},n)))})]})},C=()=>{const[e,n]=(0,a.useState)([]),[t,s]=(0,a.useState)(300),[r,i]=(0,a.useState)(null),[l,c]=(0,a.useState)(null),[d,u]=(0,a.useState)(!1);(0,a.useEffect)((()=>{m()}),[]),(0,a.useEffect)((()=>{h()}),[t]);const m=()=>{const e=Array.from({length:40},(()=>Math.ceil(90*Math.random())+10));n(e)},h=()=>{const e=document.styleSheets;for(const n of e){const e=n.cssRules;for(const n of e)if(".v-move"===n.selectorText){n.style.transitionDuration=`${t}ms`;break}}},x=e=>new Promise((n=>setTimeout(n,e)));return(0,o.jsxs)("div",{className:"insertion-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:t,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{u(!0);for(let s=1;s<e.length;s++){let r=e[s],a=s-1;for(c(s);a>=0&&e[a]>r;)await x(t),e[a+1]=e[a],n([...e]),a-=1;e[a+1]=r,n([...e]),i(a+1)}u(!1)},disabled:d,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{m(),i(null),c(null)},disabled:d,children:"Reset"}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,n)=>(0,o.jsx)("div",{className:"array-bar "+(n===l?"current-index":n===r?"min-index":""),style:{height:3*e+"px",transitionDelay:t/2+"ms"}},n)))})]})},L=()=>{const[e,n]=(0,a.useState)([]),[t,s]=(0,a.useState)(300),[r,i]=(0,a.useState)(!1),[l,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{d()}),[]),(0,a.useEffect)((()=>{u()}),[t]);const d=()=>{const e=Array.from({length:30},(()=>Math.ceil(100*Math.random())));n(e)},u=()=>{const e=document.styleSheets;for(let n=0;n<e.length;n++){const s=e[n].cssRules||e[n].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${t}ms`;break}}};return(0,o.jsxs)("div",{className:"selection-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:t,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{i(!0);let s=[...e];for(let e=0;e<s.length-1;e++){let r=e;for(let n=e+1;n<s.length;n++)c([r,n]),await new Promise((e=>setTimeout(e,t))),s[n]<s[r]&&(r=n);if(r!==e){let t=s[e];s[e]=s[r],s[r]=t,n([...s])}}c([]),i(!1)},disabled:r,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,n)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(n)?"comparing":""),style:{height:3*e+"px"}},n)))})]})},S="wrapper_Uma9",_="title_xLRu",H="titleInner_jsWe",M="icon_Dh3W";const W=function(e){let{children:n,name:t}=e;return(0,o.jsxs)("div",{className:S,children:[(0,o.jsx)("div",{className:_,children:(0,o.jsxs)("div",{className:H,children:[(0,o.jsx)("svg",{className:M,viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"})}),(0,o.jsx)("span",{children:t})]})}),n]})};var I=t(73405);const T=e=>{let{id:n,title:t,tags:s,description:r}=e;return(0,o.jsxs)("div",{className:"lesson",children:[(0,o.jsx)("h2",{className:"lesson-title",children:t}),(0,o.jsx)("p",{className:"lesson-description",children:r}),(0,o.jsx)("div",{className:"lesson-tags",children:s.map(((e,n)=>(0,o.jsx)("span",{className:"lesson-tag",children:e},n)))})]})};function E(e){let{names:n}=e;if(!n)return null;const t=n.split(",");return(0,o.jsx)("div",{className:"tag-wrapper",children:t.map(((e,n)=>(0,o.jsx)("span",{className:"topic-tag",children:e},n)))})}var z=t(93269),R=t(93935),B=t(7227),O=t(49489),P=t(85604);const D=function(e){let{id:n}=e;return(0,o.jsx)("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${n}`,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,webkitallowfullscreen:"true",mozallowfullscreen:"true"})},G={...z.A,SolutionAuthor:function(e){let{name:n}=e;return(0,o.jsx)("div",{className:"solution-author-wrapper",children:(0,o.jsxs)("span",{children:["Written by ",n]})})},Tabs:O.A,TabItem:B.A,TutorialAuthors:function(e){let{names:n}=e;const t=n.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper",children:[t.length>1?"Authors: ":"Author: ",t.map(((e,n)=>(0,o.jsx)("span",{className:"author-tag tag",children:e},n)))]})},Table:function(e){let{title:n,collectionLink:t,isSorted:s=!0,data:r}=e;const a=r.some((e=>e.tags)),i={Easy:0,Medium:1,Hard:2},l=(s?r.sort(((e,n)=>i[e.difficulty]-i[n.difficulty])):r).map(((e,n)=>{return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:e.leetCodeLink,target:"_blank",rel:"noopener noreferrer",children:e.problemName})}),(0,o.jsx)("td",{className:(t=e.difficulty,t.toLowerCase()),children:e.difficulty}),(0,o.jsxs)("td",{style:{textAlign:"center"},children:[e.solutionLink&&(0,o.jsx)("a",{href:e.solutionLink,target:"_blank",rel:"noopener noreferrer",children:"View Solutions"}),!e.solutionLink&&(0,o.jsx)("span",{children:"N/A"})]}),a&&(0,o.jsx)("td",{children:(0,o.jsx)(E,{names:e.tags})})]},n);var t}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:n}),t&&(0,o.jsxs)("h4",{children:["Start Practicing:"," ",(0,o.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:t})]}),(0,o.jsxs)("table",{className:"suggested-problem-table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Problem Name"}),(0,o.jsx)("th",{children:"Difficulty"}),(0,o.jsx)("th",{children:"Solution Link"}),a&&(0,o.jsx)("th",{children:"Topic"})]})}),(0,o.jsx)("tbody",{children:l})]})]})},Contributors:function(e){let{names:n}=e;const t=n.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper contributors",children:[t.length>1?"Contributors: ":"Contributor: ",t.map(((e,n)=>(0,o.jsx)("span",{className:"contributor-tag tag",children:e},n)))]})},BrowserWindow:r.A,Highlight:function(e){let{children:n,color:t}=e;return(0,o.jsx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:n})},GiscusComponent:I.A,ArrayVisualizations:A,BubbleSortVisualization:k,SelectionSortVisualization:L,CollectionList:m,DocCardList:R.A,FaReact:P.rMV,Courses:N,InsertionSortVisualization:C,File:W,YoutubeVideo:D,Lesson:T,Head:s.A}},24630:(e,n,t)=>{t.d(n,{A:()=>r});var s=t(96540);const r={React:s,...s}}}]);