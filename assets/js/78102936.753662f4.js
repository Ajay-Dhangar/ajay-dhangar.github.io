"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[34840],{67312:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=r(17624),i=r(4552);const t={id:"master-theorem",title:"Master Theorem for Divide and Conquer Recurrences",sidebar_label:"Master Theorem",sidebar_position:3,description:"Master Theorem for solving divide and conquer recurrences. Explained with examples.",tags:["dsa","data-structures","algorithms","divide-and-conquer","master-theorem","recurrences"]},o=void 0,l={id:"dsa/master-theorem",title:"Master Theorem for Divide and Conquer Recurrences",description:"Master Theorem for solving divide and conquer recurrences. Explained with examples.",source:"@site/docs/dsa/master-theorem.md",sourceDirName:"dsa",slug:"/dsa/master-theorem",permalink:"/docs/dsa/master-theorem",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/dsa/master-theorem.md",tags:[{label:"dsa",permalink:"/docs/tags/dsa"},{label:"data-structures",permalink:"/docs/tags/data-structures"},{label:"algorithms",permalink:"/docs/tags/algorithms"},{label:"divide-and-conquer",permalink:"/docs/tags/divide-and-conquer"},{label:"master-theorem",permalink:"/docs/tags/master-theorem"},{label:"recurrences",permalink:"/docs/tags/recurrences"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1712073681e3,sidebarPosition:3,frontMatter:{id:"master-theorem",title:"Master Theorem for Divide and Conquer Recurrences",sidebar_label:"Master Theorem",sidebar_position:3,description:"Master Theorem for solving divide and conquer recurrences. Explained with examples.",tags:["dsa","data-structures","algorithms","divide-and-conquer","master-theorem","recurrences"]},sidebar:"dsa",previous:{title:"Data Structure Types",permalink:"/docs/dsa/data-structure-types"},next:{title:"Basic Concepts",permalink:"/docs/category/basic-concepts-1"}},a={},c=[{value:"Master Theorem Cases",id:"master-theorem-cases",level:2},{value:"Example",id:"example",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Implementations",id:"implementations",level:2},{value:"Live Coding Implementation",id:"live-coding-implementation",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components},{TabItem:r,Tabs:t}=n;return r||m("TabItem",!0),t||m("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Master Theorem is a popular technique to solve recurrence relations of divide and conquer algorithms. It provides a way to determine the time complexity of recursive algorithms. The theorem is used to solve recurrences of the form:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",metastring:'title="Recurrence Relation"',children:"T(n) = aT(n/b) + f(n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"T(n)"})," is the time complexity of the algorithm."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"a"})," is the number of subproblems in the recursion."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n/b"})," is the size of each subproblem."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"f(n)"})," is the time complexity of the work done outside the recursive calls."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n"})," is the size of the input."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"a >= 1"})," and ",(0,s.jsx)(n.code,{children:"b > 1"})," are constants."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"f(n)"})," is a function that is asymptotically positive."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"T(n)"})," is defined on non-negative integers."]}),"\n",(0,s.jsxs)(n.li,{children:["The recurrence relation is defined for ",(0,s.jsx)(n.code,{children:"n >= n0"})," for some constant ",(0,s.jsx)(n.code,{children:"n0"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The Master Theorem provides a way to determine the time complexity of the algorithm based on the values of ",(0,s.jsx)(n.code,{children:"a"}),", ",(0,s.jsx)(n.code,{children:"b"}),", and ",(0,s.jsx)(n.code,{children:"f(n)"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"master-theorem-cases",children:"Master Theorem Cases"}),"\n",(0,s.jsxs)(n.p,{children:["The Master Theorem has three cases based on the comparison of ",(0,s.jsx)(n.code,{children:"f(n)"})," with ",(0,s.jsx)(n.code,{children:"n^log_b(a)"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Case 1"}),": If ",(0,s.jsx)(n.code,{children:"f(n) = O(n^log_b(a - \u03b5))"})," for some constant ",(0,s.jsx)(n.code,{children:"\u03b5 > 0"}),", then ",(0,s.jsx)(n.code,{children:"T(n) = \u0398(n^log_b(a))"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Case 2"}),": If ",(0,s.jsx)(n.code,{children:"f(n) = \u0398(n^log_b(a))"}),", then ",(0,s.jsx)(n.code,{children:"T(n) = \u0398(n^log_b(a) * log(n))"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Case 3"}),": If ",(0,s.jsx)(n.code,{children:"f(n) = \u03a9(n^log_b(a + \u03b5))"})," for some constant ",(0,s.jsx)(n.code,{children:"\u03b5 > 0"}),", if ",(0,s.jsx)(n.code,{children:"a * f(n/b) <= c * f(n)"})," for some constant ",(0,s.jsx)(n.code,{children:"c < 1"})," and sufficiently large ",(0,s.jsx)(n.code,{children:"n"}),", then ",(0,s.jsx)(n.code,{children:"T(n) = \u0398(f(n))"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Let's consider the recurrence relation for the Merge Sort algorithm:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",metastring:'title="Merge Sort Recurrence Relation"',children:"T(n) = 2T(n/2) + \u0398(n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"a = 2"})," (number of subproblems)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"b = 2"})," (size of each subproblem)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"f(n) = \u0398(n)"})," (time complexity of work done outside the recursive calls)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n"})," is the size of the input."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n0 = 1"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"f(n)"})," is asymptotically positive."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"a >= 1"})," and ",(0,s.jsx)(n.code,{children:"b > 1"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The recurrence relation is defined for ",(0,s.jsx)(n.code,{children:"n >= n0"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The relation is of the form ",(0,s.jsx)(n.code,{children:"T(n) = aT(n/b) + f(n)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Now, let's compare ",(0,s.jsx)(n.code,{children:"f(n)"})," with ",(0,s.jsx)(n.code,{children:"n^log_b(a)"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n^log_b(a) = n^log_2(2) = n"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"f(n) = \u0398(n)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"f(n) = \u0398(n) = n^log_b(a)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Since ",(0,s.jsx)(n.code,{children:"f(n) = \u0398(n) = n^log_b(a)"}),", the recurrence relation falls under ",(0,s.jsx)(n.strong,{children:"Case 2"})," of the Master Theorem. Therefore, the time complexity of the Merge Sort algorithm is ",(0,s.jsx)(n.code,{children:"T(n) = \u0398(n * log(n))"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["The Master Theorem provides a way to determine the time complexity of divide and conquer algorithms. It simplifies the process of solving recurrence relations and helps in analyzing the time complexity of recursive algorithms. By comparing the function ",(0,s.jsx)(n.code,{children:"f(n)"})," with ",(0,s.jsx)(n.code,{children:"n^log_b(a)"}),", the Master Theorem classifies the recurrence relation into one of the three cases and provides the time complexity of the algorithm."]}),"\n",(0,s.jsx)(n.p,{children:"Master Theorem is a powerful tool to analyze the time complexity of divide and conquer algorithms. It is widely used in the analysis of recursive algorithms to determine their time complexity."}),"\n",(0,s.jsx)(n.h2,{id:"implementations",children:"Implementations"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)(r,{value:"js",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:' function masterTheorem(a, b, f, n) {\n  if (a < 1 || b < 1) {\n       return "Invalid input";\n  }\n \n  const logBaseB = Math.log(a) / Math.log(b);\n \n  if (f === n ** logBaseB) {\n       return `T(n) = \u0398(n^${logBaseB} * log(n))`;\n  } else if (f < n ** logBaseB) {\n       return `T(n) = \u0398(n^${logBaseB})`;\n  } else {\n       return "Case 3: Not covered by Master Theorem";\n  }\n }\n'})})}),(0,s.jsx)(r,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public class MasterTheorem {\n    public static String masterTheorem(int a, int b, int f, int n) {\n        if (a < 1 || b < 1) {\n            return "Invalid input";\n        }\n\n        double logBaseB = Math.log(a) / Math.log(b);\n\n        if (f == Math.pow(n, logBaseB)) {\n            return String.format("T(n) = \u0398(n^%.2f * log(n))", logBaseB);\n        } else if (f < Math.pow(n, logBaseB)) {\n            return String.format("T(n) = \u0398(n^%.2f)", logBaseB);\n        } else {\n            return "Case 3: Not covered by Master Theorem";\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(masterTheorem(2, 2, 2, 2));\n    }\n}\n'})})}),(0,s.jsx)(r,{value:"python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def master_theorem(a, b, f, n):\n    if a < 1 or b < 1:\n        return "Invalid input"\n\n    log_base_b = a / b\n\n    if f == n ** log_base_b:\n        return f"T(n) = \u0398(n^{log_base_b} * log(n))"\n    elif f < n ** log_base_b:\n        return f"T(n) = \u0398(n^{log_base_b})"\n    else:\n        return "Case 3: Not covered by Master Theorem"\n'})})}),(0,s.jsx)(r,{value:"cpp",label:"C++",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <cmath>\n#include <string>\n\nstd::string masterTheorem(int a, int b, int f, int n) {\n    if (a < 1 || b < 1) {\n        return "Invalid input";\n    }\n\n    double logBaseB = log(a) / log(b);\n\n    if (f == pow(n, logBaseB)) {\n        return "T(n) = \u0398(n^" + std::to_string(logBaseB) + " * log(n))";\n    } else if (f < pow(n, logBaseB)) {\n        return "T(n) = \u0398(n^" + std::to_string(logBaseB) + ")";\n    } else {\n        return "Case 3: Not covered by Master Theorem";\n    }\n}\n\nint main() {\n    std::cout << masterTheorem(2, 2, 2, 2) << std::endl;\n    return 0;\n}\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"live-coding-implementation",children:"Live Coding Implementation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function MasterTheoremExample() {\n  const a = 2, b = 2, f = 2, n = 4;\n\n  function MasterTheorem(a, b, f, n) {\n    if (a < 1 || b < 1) {\n      return `Invalid input`;\n    }\n\n    const logBaseB = Math.log(a) / Math.log(b);\n\n    if (f === n ** logBaseB) {\n      return `T(n) = \u0398(n^${logBaseB} * log(n))`;\n    } else if (f < n ** logBaseB) {\n      return `T(n) = \u0398(n^${logBaseB})`;\n    } else {\n      return `Case 3: Not covered by Master Theorem`;\n    }\n  }\n\n  return (\n    <div>\n      <p>\n        <b>Output:</b> {MasterTheorem(a, b, f, n)}\n      </p>\n    </div>\n  );\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4552:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>o});var s=r(11504);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);