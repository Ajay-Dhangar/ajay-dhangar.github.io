"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[40098],{74203:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=o(74848),a=o(28453);const s={title:"Install MongoDB Linux",authors:["ajay-dhangar"],tags:["database","mongodb","mongosh","linux","debian","bullseye"],date:new Date("2024-03-15T08:37:46.000Z"),description:"Installation MongoDB and mongosh",draft:!1},l=void 0,i={permalink:"/blog/install-mongodb-linux",editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/blog/install-mongodb-linux.md",source:"@site/blog/install-mongodb-linux.md",title:"Install MongoDB Linux",description:"Installation MongoDB and mongosh",date:"2024-03-15T08:37:46.000Z",tags:[{inline:!0,label:"database",permalink:"/blog/tags/database"},{inline:!0,label:"mongodb",permalink:"/blog/tags/mongodb"},{inline:!0,label:"mongosh",permalink:"/blog/tags/mongosh"},{inline:!0,label:"linux",permalink:"/blog/tags/linux"},{inline:!0,label:"debian",permalink:"/blog/tags/debian"},{inline:!0,label:"bullseye",permalink:"/blog/tags/bullseye"}],readingTime:1.975,hasTruncateMarker:!1,authors:[{name:"Ajay Dhangar",url:"https://github.com/ajay-dhangar",imageURL:"https://avatars.githubusercontent.com/u/99037494?v=4",key:"ajay-dhangar"}],frontMatter:{title:"Install MongoDB Linux",authors:["ajay-dhangar"],tags:["database","mongodb","mongosh","linux","debian","bullseye"],date:"2024-03-15T08:37:46.000Z",description:"Installation MongoDB and mongosh",draft:!1},unlisted:!1,prevItem:{title:"Install MongoDB Windows",permalink:"/blog/install-mongodb-windows"},nextItem:{title:"Step-by-Step Guide Debugging Tests in Create React App",permalink:"/blog/debugging"}},r={authorsImageUrls:[void 0]},d=[{value:"Step 1: Import the MongoDB GPG Key",id:"step-1-import-the-mongodb-gpg-key",level:2},{value:"Step 2: Create a MongoDB Source List File",id:"step-2-create-a-mongodb-source-list-file",level:2},{value:"Step 3: Update the Package Database",id:"step-3-update-the-package-database",level:2},{value:"Step 4: Install MongoDB",id:"step-4-install-mongodb",level:2},{value:"Step 5: Start the MongoDB Service",id:"step-5-start-the-mongodb-service",level:2},{value:"Step 6: Verify the MongoDB Installation",id:"step-6-verify-the-mongodb-installation",level:2},{value:"Step 7: Install mongosh",id:"step-7-install-mongosh",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"MongoDB is a popular NoSQL database that is known for its flexibility and scalability. It is widely used in modern web applications and is a great choice for storing and managing large volumes of data. In this article, we will walk you through the process of installing MongoDB on a Linux system, specifically Debian Bullseye."}),"\n",(0,t.jsx)(n.h2,{id:"step-1-import-the-mongodb-gpg-key",children:"Step 1: Import the MongoDB GPG Key"}),"\n",(0,t.jsx)(n.p,{children:"The first step is to import the MongoDB GPG key, which is used to verify the authenticity of the MongoDB packages. You can do this by running the following command in your terminal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-2-create-a-mongodb-source-list-file",children:"Step 2: Create a MongoDB Source List File"}),"\n",(0,t.jsx)(n.p,{children:"Next, you need to create a source list file for MongoDB. You can do this by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/debian bullseye/mongodb-org/5.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list\n'})}),"\n",(0,t.jsx)(n.h2,{id:"step-3-update-the-package-database",children:"Step 3: Update the Package Database"}),"\n",(0,t.jsx)(n.p,{children:"After creating the source list file, you need to update the package database to include the MongoDB repository. You can do this by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-4-install-mongodb",children:"Step 4: Install MongoDB"}),"\n",(0,t.jsx)(n.p,{children:"Now that the MongoDB repository has been added to your package database, you can install MongoDB by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install -y mongodb-org\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-5-start-the-mongodb-service",children:"Step 5: Start the MongoDB Service"}),"\n",(0,t.jsx)(n.p,{children:"Once MongoDB is installed, you can start the MongoDB service by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start mongod\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also enable the MongoDB service to start automatically at boot time by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable mongod\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-6-verify-the-mongodb-installation",children:"Step 6: Verify the MongoDB Installation"}),"\n",(0,t.jsx)(n.p,{children:"To verify that MongoDB has been installed successfully, you can run the following command to check the status of the MongoDB service:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status mongod\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see output indicating that the MongoDB service is active and running."}),"\n",(0,t.jsx)(n.h2,{id:"step-7-install-mongosh",children:"Step 7: Install mongosh"}),"\n",(0,t.jsxs)(n.p,{children:["Finally, you can install ",(0,t.jsx)(n.code,{children:"mongosh"}),", the official MongoDB shell, by running the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install -y mongosh\n"})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["Congratulations! You have successfully installed MongoDB and ",(0,t.jsx)(n.code,{children:"mongosh"})," on your Debian Bullseye system. You can now start using MongoDB to store and manage your data. If you have any questions or run into any issues, feel free to consult the official ",(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/",children:"MongoDB documentation"}),". Happy coding!"]})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>i});var t=o(96540);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);