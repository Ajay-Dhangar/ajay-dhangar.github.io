"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[62632],{55544:(e,s,t)=>{t.d(s,{c:()=>a});t(11504);var r=t(65456);const i={browserWindow:"browserWindow_jiSI",browserWindowHeader:"browserWindowHeader_ITW5",row:"row_OMw1",buttons:"buttons_hZyy",right:"right_RrL_",browserWindowAddressBar:"browserWindowAddressBar_iwHb",dot:"dot_Oyi3",browserWindowMenuIcon:"browserWindowMenuIcon_KLvG",bar:"bar_Liox",browserWindowBody:"browserWindowBody_T8Vh"};var o=t(17624);function a(e){let{children:s,minHeight:t,url:a="http://localhost:3000",style:n,bodyStyle:d}=e;return(0,o.jsxs)("div",{className:i.browserWindow,style:{...n,minHeight:t},children:[(0,o.jsxs)("div",{className:i.browserWindowHeader,children:[(0,o.jsxs)("div",{className:i.buttons,children:[(0,o.jsx)("span",{className:i.dot,style:{background:"#f25f58"}}),(0,o.jsx)("span",{className:i.dot,style:{background:"#fbbe3c"}}),(0,o.jsx)("span",{className:i.dot,style:{background:"#58cb42"}})]}),(0,o.jsx)("div",{className:(0,r.c)(i.browserWindowAddressBar,"text--truncate"),children:a}),(0,o.jsx)("div",{className:i.browserWindowMenuIcon,children:(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:i.bar}),(0,o.jsx)("span",{className:i.bar}),(0,o.jsx)("span",{className:i.bar})]})})]}),(0,o.jsx)("div",{className:i.browserWindowBody,style:d,children:s})]})}},32216:(e,s,t)=>{t.d(s,{c:()=>a});t(11504);var r=t(59400),i=t(70768),o=t(17624);function a(){const{colorMode:e}=(0,i.U)();return(0,o.jsx)("div",{className:"giscus-component",children:(0,o.jsx)(r.c,{id:"giscus",repo:"ajay-dhangar/ajay-dhangar.github.io",repoId:"R_kgDOLNryZQ",category:"General",categoryId:"DIC_kwDOLNryZc4Cc7ll",mapping:"pathname",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"bottom",theme:e,lang:"en",loading:"lazy"})})}},88024:(e,s,t)=>{t.r(s),t.d(s,{default:()=>k});var r=t(54596),i=t(32216),o=t(30028),a=t(41828),n=t(11504);const d="hero_container_gHWH",c="course_cards_JdeI",l="feature_container_xl4Y",h="hero_content_zZyP",u="hero_title_QWss",m="hero_description_i6W0",b="buttons_container_rvjm",g="animated_button_hIjd",p="source_link_k3z0",_="hero_image_container_aZy4",v="hero_image_eYjF",w="feature_item_HLSc",x="course_card_bQ4V",j="play_button_overlay_l46v",y="play_icon_TEVn";var N=t(17624);const f=e=>{let{courses:s}=e;return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("div",{className:c,children:s.map((e=>(0,N.jsxs)("div",{className:x,children:[e.imageUrl&&(0,N.jsx)("img",{src:e.imageUrl,alt:e.title}),(0,N.jsx)("h3",{children:e.title}),(0,N.jsx)("p",{children:e.description})]},e.title)))})})},H=e=>{let{features:s}=e;return(0,N.jsx)("div",{className:l,children:s.map((e=>(0,N.jsxs)("div",{className:w,children:[(0,N.jsx)("img",{src:e.icon,alt:e.title}),(0,N.jsx)("h3",{children:e.title}),(0,N.jsx)("p",{children:e.description})]},e.title)))})};var C=t(45800),W=t(55544);const B=e=>{let{videoId:s,height:t,width:r}=e;const i=(0,n.useRef)(null);return(0,n.useEffect)((()=>{let e;const o=()=>{e=new window.YT.Player(i.current,{height:t,width:r,videoId:s,playerVars:{playsinline:1},events:{onReady:a,onStateChange:n}})},a=e=>{e.target.playVideo()},n=s=>{s.data===window.YT.PlayerState.PLAYING&&setTimeout((()=>{e&&e.stopVideo()}),13e4)};if(window.YT)o();else{const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";const s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s),window.onYouTubeIframeAPIReady=o}return()=>{e&&e.destroy()}}),[s,t,r]),(0,N.jsx)("div",{ref:i})},S=e=>{let{title:s,description:t,imageUrl:r}=e;const[i,o]=(0,n.useState)(!1);return(0,N.jsxs)("div",{className:d,children:[(0,N.jsxs)("div",{className:h,children:[(0,N.jsx)("h1",{className:u,children:s}),(0,N.jsx)("p",{className:m,children:t}),(0,N.jsxs)("div",{className:b,children:[(0,N.jsx)("button",{className:g,children:(0,N.jsx)(C.c,{className:p,to:"/docs/",children:"Getting Started"})}),(0,N.jsx)("button",{className:g,children:(0,N.jsx)(C.c,{className:p,to:"/courses/category/beginners-level/",children:"Courses"})})]})]}),r&&(0,N.jsx)("div",{className:_,children:i?(0,N.jsx)(W.c,{url:"https://www.codeharborhub.live",bodyStyle:{padding:"0",overflow:"hidden"},children:(0,N.jsx)(B,{videoId:"lI3RBnK8V6Y",height:300,width:480})}):(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(W.c,{url:"https://www.codeharborhub.live",bodyStyle:{padding:"0"},children:[(0,N.jsx)("img",{className:v,src:r,alt:s}),(0,N.jsx)("div",{className:j,onClick:()=>{o(!0)},children:(0,N.jsx)("div",{className:y,children:(0,N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,N.jsx)("path",{d:"M8 5v14l11-7z"})})})})]})})})]})},I={heroBanner:"heroBanner_qdFl",waveX:"waveX_sxuA",waveY:"waveY_uFS5",hero__subtitle:"hero__subtitle_AUTZ",buttons:"buttons_AeoN",hero:"hero_aEcG",heroInner:"heroInner_V4lS",heroProjectTagline:"heroProjectTagline_CH9a",heroTitleTextHtml:"heroTitleTextHtml_XBoE",heroLogo:"heroLogo_U6bI",jackInTheBox:"jackInTheBox_opah",indexCtas:"indexCtas_Pg_g",indexCtasGetStartedButton:"indexCtasGetStartedButton_vQXE",indexCtasGitHubButtonWrapper:"indexCtasGitHubButtonWrapper_psdh",indexCtasGitHubButton:"indexCtasGitHubButton_6hBL",home__divider:"home__divider_CwK1"},T=[{icon:"/img/svg/blogging.svg",title:"Blog Posts",description:"Read the latest blog posts shared by the CodeHarborHub."},{icon:"/img/svg/browsing.svg",title:"Browse Courses",description:"Browse through the courses and tutorials shared by the CodeHarborHub."},{icon:"/img/svg/building.svg",title:"Contribute To projects",description:"Contribute to open source projects and learn from the CodeHarborHub."},{icon:"/img/svg/coding.svg",title:"Code Snippets",description:"Find and share code snippets with the CodeHarborHub."}],L=[{title:"HTML & CSS",description:"Learn the basics of HTML and CSS. Start building your first website.",imageUrl:"/img/svg/static_website.svg"},{title:"JavaScript",description:"Learn the basics of JavaScript. Start building interactive websites.",imageUrl:"/img/svg/static_assets.svg"},{title:"React",description:"Learn the basics of React. Start building your first React app.",imageUrl:"/img/svg/react.svg"},{title:"Node.js",description:"Learn the basics of Node.js. Start building your first Node.js app.",imageUrl:"/img/svg/youtube_tutorial.svg"}];function k(){const{siteConfig:e}=(0,r.c)();return(0,N.jsx)(a.c,{title:`Hello from ${e.title}`,description:"Welcome to CodeHarborHub. Learn the basics to advanced concepts of web development. html, css, javascript, react, node.js, dsa, and more.",children:(0,N.jsxs)("main",{children:[" ",(0,N.jsx)(S,{title:"Welcome To CodeHarborHub",description:"Your gateway to top-notch tech education. We're dedicated to empowering individuals with the skills to thrive in today's tech landscape. Whether you're a novice or a seasoned developer, our inclusive platform offers tailored learning opportunities. Join us today and embark on your path to tech mastery!",imageUrl:"/img/img-5.png"}),(0,N.jsx)("hr",{style:{margin:"1rem"}}),(0,N.jsx)("div",{className:I.home__divider,children:(0,N.jsx)(o.c,{as:"h2",children:"Features of CodeHarborHub"})}),(0,N.jsx)(H,{features:T}),(0,N.jsx)("div",{className:I.home__divider,children:(0,N.jsx)(o.c,{as:"h2",children:"Courses Available"})}),(0,N.jsx)(f,{courses:L}),(0,N.jsx)("div",{className:I.home__divider,children:(0,N.jsx)(o.c,{as:"h2",children:"Join the Discussion"})}),(0,N.jsx)("div",{children:(0,N.jsx)(i.c,{})})]})})}}}]);