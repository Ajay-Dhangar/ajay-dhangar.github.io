"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[79932],{40980:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=s(17624),i=s(4552);const o={id:"lesson-3",title:"Unit Testing with Jest (Optional)",sidebar_label:"Lesson - 3",sidebar_position:3,description:"In this lesson, we will learn about unit testing with Jest. We will cover the basics of unit testing, setting up Jest in a React project, writing test cases for components, hooks, and utilities, and running tests with Jest.",tags:["courses","react-js","advanced-level","unit-testing","jest","testing","components","hooks","utilities"]},a=void 0,r={id:"react-js/advanced-level/beyond-the-basics/lesson-3",title:"Unit Testing with Jest (Optional)",description:"In this lesson, we will learn about unit testing with Jest. We will cover the basics of unit testing, setting up Jest in a React project, writing test cases for components, hooks, and utilities, and running tests with Jest.",source:"@site/courses/react-js/advanced-level/beyond-the-basics/lesson_3.md",sourceDirName:"react-js/advanced-level/beyond-the-basics",slug:"/react-js/advanced-level/beyond-the-basics/lesson-3",permalink:"/courses/react-js/advanced-level/beyond-the-basics/lesson-3",draft:!1,unlisted:!1,tags:[{label:"courses",permalink:"/courses/tags/courses"},{label:"react-js",permalink:"/courses/tags/react-js"},{label:"advanced-level",permalink:"/courses/tags/advanced-level"},{label:"unit-testing",permalink:"/courses/tags/unit-testing"},{label:"jest",permalink:"/courses/tags/jest"},{label:"testing",permalink:"/courses/tags/testing"},{label:"components",permalink:"/courses/tags/components"},{label:"hooks",permalink:"/courses/tags/hooks"},{label:"utilities",permalink:"/courses/tags/utilities"}],version:"current",lastUpdatedBy:"Restyled.io",lastUpdatedAt:1713288804e3,sidebarPosition:3,frontMatter:{id:"lesson-3",title:"Unit Testing with Jest (Optional)",sidebar_label:"Lesson - 3",sidebar_position:3,description:"In this lesson, we will learn about unit testing with Jest. We will cover the basics of unit testing, setting up Jest in a React project, writing test cases for components, hooks, and utilities, and running tests with Jest.",tags:["courses","react-js","advanced-level","unit-testing","jest","testing","components","hooks","utilities"]},sidebar:"codeharborhub",previous:{title:"Lesson - 2",permalink:"/courses/react-js/advanced-level/beyond-the-basics/lesson-2"},next:{title:"Module 15: Deployment and Beyond",permalink:"/courses/category/module-15-deployment-and-beyond"}},c={},l=[{value:"What is Unit Testing?",id:"what-is-unit-testing",level:2},{value:"Why Unit Testing?",id:"why-unit-testing",level:2},{value:"Early Bug Detection",id:"early-bug-detection",level:3},{value:"Code Quality",id:"code-quality",level:3},{value:"Regression Testing",id:"regression-testing",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Setting up Jest in a React Project",id:"setting-up-jest-in-a-react-project",level:2},{value:"Writing Test Cases with Jest",id:"writing-test-cases-with-jest",level:2},{value:"Matchers",id:"matchers",level:3},{value:"Testing React Components",id:"testing-react-components",level:3},{value:"Testing React Hooks",id:"testing-react-hooks",level:3},{value:"Testing Utilities",id:"testing-utilities",level:3},{value:"Running Tests with Jest",id:"running-tests-with-jest",level:2},{value:"Practice with DSA Repository on GitHub with Jest",id:"practice-with-dsa-repository-on-github-with-jest",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In this lesson, we will learn about unit testing with Jest. We will cover the basics of unit testing, setting up Jest in a React project, writing test cases for components, hooks, and utilities, and running tests with Jest."}),"\n",(0,n.jsx)(t.h2,{id:"what-is-unit-testing",children:"What is Unit Testing?"}),"\n",(0,n.jsx)(t.p,{children:"Unit testing is a software testing technique where individual units or components of a software application are tested in isolation. The goal of unit testing is to validate that each unit of the software performs as designed. Unit tests are typically written and executed by developers to ensure the correctness of their code."}),"\n",(0,n.jsx)(t.p,{children:"Unit testing helps identify bugs and issues early in the development process, improves code quality, and provides confidence that changes to the codebase do not introduce regressions. Unit tests are fast, repeatable, and can be automated to run as part of the continuous integration (CI) pipeline."}),"\n",(0,n.jsx)(t.h2,{id:"why-unit-testing",children:"Why Unit Testing?"}),"\n",(0,n.jsx)(t.p,{children:"Unit testing offers several benefits to developers and software projects, including:"}),"\n",(0,n.jsx)(t.h3,{id:"early-bug-detection",children:"Early Bug Detection"}),"\n",(0,n.jsx)(t.p,{children:"Unit tests help identify bugs and issues early in the development process, making it easier and cheaper to fix them. By writing tests for individual units of code, developers can catch errors before they propagate to other parts of the application."}),"\n",(0,n.jsx)(t.h3,{id:"code-quality",children:"Code Quality"}),"\n",(0,n.jsx)(t.p,{children:"Unit tests help improve the quality of the codebase by enforcing good coding practices, such as writing modular, testable, and maintainable code. Writing tests encourages developers to write clean, well-structured code that is easier to understand and maintain."}),"\n",(0,n.jsx)(t.h3,{id:"regression-testing",children:"Regression Testing"}),"\n",(0,n.jsx)(t.p,{children:"Unit tests provide a safety net for refactoring and making changes to the codebase. By running tests after making changes, developers can ensure that existing functionality still works as expected and that new features do not introduce regressions."}),"\n",(0,n.jsx)(t.h3,{id:"documentation",children:"Documentation"}),"\n",(0,n.jsx)(t.p,{children:"Unit tests serve as living documentation for the codebase, describing the expected behavior of individual units of code. Tests provide insights into how the code should work and help new developers understand the codebase more quickly."}),"\n",(0,n.jsx)(t.h2,{id:"setting-up-jest-in-a-react-project",children:"Setting up Jest in a React Project"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://jestjs.io/",children:"Jest"})," is a popular JavaScript testing framework developed by Facebook. Jest is widely used for unit testing React applications due to its simplicity, speed, and built-in features. Jest provides a test runner, assertion library, and mocking capabilities out of the box."]}),"\n",(0,n.jsx)(t.p,{children:"To set up Jest in a React project, you can follow these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Install Jest and React Testing Library as development dependencies:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev jest @testing-library/react @testing-library/jest-dom\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Add a test script to your ",(0,n.jsx)(t.code,{children:"package.json"})," file:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["Create a test file with the ",(0,n.jsx)(t.code,{children:".test.js"})," or ",(0,n.jsx)(t.code,{children:".spec.js"})," extension:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="Button.test.js"',children:'import React from "react";\nimport { render, screen } from "@testing-library/react";\nimport Button from "./Button";\n\ntest("renders a button component", () => {\n  render(<Button label="Click me" />);\n  const buttonElement = screen.getByText(/click me/i);\n  expect(buttonElement).toBeInTheDocument();\n});\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["Run the tests using the ",(0,n.jsx)(t.code,{children:"npm test"})," command:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm test\n"})}),"\n",(0,n.jsx)(t.h2,{id:"writing-test-cases-with-jest",children:"Writing Test Cases with Jest"}),"\n",(0,n.jsx)(t.p,{children:"Jest provides a simple and intuitive API for writing test cases for React components, hooks, and utilities. Here are some common Jest matchers and testing utilities that you can use in your test cases:"}),"\n",(0,n.jsx)(t.h3,{id:"matchers",children:"Matchers"}),"\n",(0,n.jsx)(t.p,{children:"Matchers are functions provided by Jest to assert the expected behavior of the code under test. Here are some commonly used matchers:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"expect(value).toBe(expected)"}),":"]}),"\n",(0,n.jsxs)(t.p,{children:["Asserts that the value is strictly equal to the expected value. It uses ",(0,n.jsx)(t.code,{children:"Object.is"})," for equality comparisons."]}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="example.test.js"',children:'test("adds 1 + 2 to equal 3", () => {\n  expect(1 + 2).toBe(3);\n});\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"expect(value).toEqual(expected)"}),":"]}),"\n",(0,n.jsx)(t.p,{children:"Asserts that the value is deeply equal to the expected value. It recursively checks the equality of all fields of the value."}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="example.test.js"',children:'test("returns the correct object", () => {\n  expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });\n});\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"expect(value).toBeTruthy()"}),":"]}),"\n",(0,n.jsxs)(t.p,{children:["Asserts that the value is truthy (i.e., not ",(0,n.jsx)(t.code,{children:"false"}),", ",(0,n.jsx)(t.code,{children:"0"}),", ",(0,n.jsx)(t.code,{children:"''"}),", ",(0,n.jsx)(t.code,{children:"null"}),", ",(0,n.jsx)(t.code,{children:"undefined"}),", or ",(0,n.jsx)(t.code,{children:"NaN"}),")."]}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="example.test.js"',children:'test("returns a truthy value", () => {\n  expect(1).toBeTruthy();\n});\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"testing-react-components",children:"Testing React Components"}),"\n",(0,n.jsx)(t.p,{children:"You can test React components using Jest and React Testing Library. Here's an example of testing a simple button component:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="Button.test.js"',children:'import React from "react";\nimport { render, screen } from "@testing-library/react";\nimport Button from "./Button";\n\ntest("renders a button component", () => {\n  render(<Button label="Click me" />);\n  const buttonElement = screen.getByText(/click me/i);\n  expect(buttonElement).toBeInTheDocument();\n});\n'})}),"\n",(0,n.jsx)(t.h3,{id:"testing-react-hooks",children:"Testing React Hooks"}),"\n",(0,n.jsx)(t.p,{children:"You can test custom React hooks using Jest. Here's an example of testing a custom hook that fetches data from an API:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="useFetch.test.js"',children:'import { renderHook } from "@testing-library/react-hooks";\nimport useFetch from "./useFetch";\n\ntest("fetches data from an API", async () => {\n  const { result, waitForNextUpdate } = renderHook(() =>\n    useFetch("https://api.example.com/data"),\n  );\n  await waitForNextUpdate();\n  expect(result.current.data).toEqual({ message: "Hello, World!" });\n});\n'})}),"\n",(0,n.jsx)(t.h3,{id:"testing-utilities",children:"Testing Utilities"}),"\n",(0,n.jsx)(t.p,{children:"You can test utility functions using Jest. Here's an example of testing a utility function that adds two numbers:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="add.test.js"',children:'import add from "./add";\n\ntest("adds two numbers", () => {\n  expect(add(1, 2)).toBe(3);\n});\n'})}),"\n",(0,n.jsx)(t.h2,{id:"running-tests-with-jest",children:"Running Tests with Jest"}),"\n",(0,n.jsxs)(t.p,{children:["You can run tests using Jest by running the ",(0,n.jsx)(t.code,{children:"npm test"})," command in your project directory. Jest will look for test files with the ",(0,n.jsx)(t.code,{children:".test.js"})," or ",(0,n.jsx)(t.code,{children:".spec.js"})," extension in your project and execute them."]}),"\n",(0,n.jsxs)(t.p,{children:["Jest provides a watch mode that automatically re-runs tests when files change. You can run Jest in watch mode by using the ",(0,n.jsx)(t.code,{children:"--watch"})," flag:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm test -- --watch\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Jest also supports code coverage reporting to measure how much of your code is covered by tests. You can generate a code coverage report by running Jest with the ",(0,n.jsx)(t.code,{children:"--coverage"})," flag:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm test -- --coverage\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Jest will generate a coverage report in the ",(0,n.jsx)(t.code,{children:"coverage"})," directory of your project, showing the percentage of code covered by tests."]}),"\n",(0,n.jsxs)(t.admonition,{title:"\ud83d\udcda Learn More:",type:"info",children:[(0,n.jsx)(t.h2,{id:"practice-with-dsa-repository-on-github-with-jest",children:"Practice with DSA Repository on GitHub with Jest"}),(0,n.jsxs)(t.p,{children:["If you want to dive deeper into Jest and learn more about its features and capabilities, you can check out our repository on GitHub: ",(0,n.jsx)(t.a,{href:"https://github.com/Ajay-Dhangar/dsa-with-js",children:"https://github.com/Ajay-Dhangar/dsa-with-js"})]}),(0,n.jsx)(t.p,{children:"DSA With JS Repository is a collection of data structures and algorithms implemented in JavaScript. It also includes test cases written using Jest for each data structure and algorithm. You can explore the repository to learn how to write tests for different types of code using Jest."}),(0,n.jsxs)(t.admonition,{title:"tips & tricks",type:"tip",children:[(0,n.jsx)(t.p,{children:"So, now view the code and try to implement the same in your project."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:s(8223).c+"",width:"1366",height:"768"})}),(0,n.jsxs)(t.p,{children:["Now, checkout repository on GitHub: ",(0,n.jsx)(t.a,{href:"https://github.com/Ajay-Dhangar/dsa-with-js",children:"DSA With JS"})," and navigate spacs folder/directory to learn more about code and test cases."]}),(0,n.jsx)(t.p,{children:"And try to implement the same in your project. May be you can fork the repository and start contributing to the project. And most importantly, don't forget to star the repository if you like it."})]})]}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"In this lesson, we learned about unit testing with Jest. We covered the basics of unit testing, setting up Jest in a React project, writing test cases for components, hooks, and utilities, and running tests with Jest. Unit testing is an essential practice for developers to ensure the correctness and quality of their codebase. By writing tests for individual units of code, developers can identify bugs early, improve code quality, and provide confidence that changes to the codebase do not introduce regressions."})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8223:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/image-55adf4e29628a03965c5bb8b46e853b6.png"},4552:(e,t,s)=>{s.d(t,{I:()=>r,M:()=>a});var n=s(11504);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);