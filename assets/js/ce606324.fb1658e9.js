"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[72574],{26190:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=r(74848),i=r(28453);const t={id:"arrays-insertionsort",title:"Arrays - Insertion Sort",sidebar_label:"Insertion Sort",sidebar_position:4,description:"Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",tags:["dsa","arrays","sorting","insertion-sort","sorting-algorithms"]},o=void 0,l={id:"dsa/arrays/arrays-insertionsort",title:"Arrays - Insertion Sort",description:"Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",source:"@site/docs/dsa/arrays/arrays-insertionsort.md",sourceDirName:"dsa/arrays",slug:"/dsa/arrays/arrays-insertionsort",permalink:"/docs/dsa/arrays/arrays-insertionsort",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/dsa/arrays/arrays-insertionsort.md",tags:[{inline:!0,label:"dsa",permalink:"/docs/tags/dsa"},{inline:!0,label:"arrays",permalink:"/docs/tags/arrays"},{inline:!0,label:"sorting",permalink:"/docs/tags/sorting"},{inline:!0,label:"insertion-sort",permalink:"/docs/tags/insertion-sort"},{inline:!0,label:"sorting-algorithms",permalink:"/docs/tags/sorting-algorithms"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1711945789e3,sidebarPosition:4,frontMatter:{id:"arrays-insertionsort",title:"Arrays - Insertion Sort",sidebar_label:"Insertion Sort",sidebar_position:4,description:"Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",tags:["dsa","arrays","sorting","insertion-sort","sorting-algorithms"]},sidebar:"tutorialSidebar",previous:{title:"Selection Sort",permalink:"/docs/dsa/arrays/arrays-selectionsort-in-dsa"}},a={},d=[{value:"How Insertion Sort Works?",id:"how-insertion-sort-works",level:2},{value:"Visualization",id:"visualization",level:2},{value:"Algorithm",id:"algorithm",level:2},{value:"Pseudocode",id:"pseudocode",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Complexity Analysis",id:"complexity-analysis",level:2},{value:"References",id:"references",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{InsertionSortVisualization:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("InsertionSortVisualization",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Insertion Sort"})," is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort."]}),"\n",(0,s.jsx)(n.p,{children:"However, insertion sort provides several advantages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Simple implementation:"})," The code implementation of insertion sort is simple and easy to understand."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Efficient for small data sets:"})," Insertion sort is efficient for small data sets."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Adaptive:"})," It is adaptive, meaning it is efficient for data sets that are already substantially sorted."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stable:"})," It is a stable sorting algorithm, meaning it preserves the relative order of equal elements."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"In-place:"})," It requires only a constant amount of additional memory space."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Online:"})," It can sort a list as it receives it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"More efficient in practice:"})," It is more efficient in practice than other quadratic-time sorting algorithms like bubble sort and selection sort."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Simple to code:"})," It is simple to code and implement."]}),"\n"]}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"The insertion sort algorithm takes value at a time from the unsorted part and places it in its correct position in the sorted part. The sorted part is built from left to right, and the unsorted part is on the right side of the array. The algorithm works by shifting the elements in the sorted part that are greater than the current element to the right, creating space for the current element to be inserted."}),"\n",(0,s.jsx)(n.admonition,{title:"Key Points",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," Sorting Algorithm"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Time Complexity:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Best Case:"})," ",(0,s.jsx)(n.em,{children:"O(n)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Average Case:"})," ",(0,s.jsxs)(n.em,{children:["O(n",(0,s.jsx)("sup",{children:"2"}),")"]})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Worst Case:"})," ",(0,s.jsxs)(n.em,{children:["O(n",(0,s.jsx)("sup",{children:"2"}),")"]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Space Complexity:"})," ",(0,s.jsx)(n.em,{children:"O(1)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stable:"})," Yes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"In-Place:"})," Yes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Online:"})," Yes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Adaptive:"})," Yes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Comparison Sort:"})," Yes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Suitable for:"})," Small data sets, partially sorted data sets"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Efficient for:"})," Small data sets"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Not efficient for:"})," Large data sets"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Simple to code:"})," Yes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Efficient in practice:"})," Yes"]}),"\n"]})}),"\n",(0,s.jsxs)(n.admonition,{title:"Real-World Analogy",type:"tip",children:[(0,s.jsx)(n.p,{children:"Insertion sort can be compared to sorting a deck of cards. You start with an empty hand and pick one card at a time from the deck. You then insert the card into its correct position in your hand, shifting the other cards if necessary. This process is repeated until all the cards are sorted in your hand."}),(0,s.jsx)(n.h2,{id:"how-insertion-sort-works",children:"How Insertion Sort Works?"}),(0,s.jsx)(n.p,{children:"Let's understand how the Insertion Sort algorithm works with an example:"}),(0,s.jsxs)(n.p,{children:["Consider an array ",(0,s.jsx)(n.code,{children:"arr = [12, 11, 13, 5, 6]"})," that we want to sort in ascending order using the Insertion Sort algorithm."]}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Initial Array:"})," ",(0,s.jsx)(n.code,{children:"[12, 11, 13, 5, 6]"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 1:"})," Start from the second element (index 1) and compare it with the previous element."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Compare ",(0,s.jsx)(n.code,{children:"11"})," with ",(0,s.jsx)(n.code,{children:"12"}),". Since ",(0,s.jsx)(n.code,{children:"11"})," is smaller, swap them."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Array after Step 1:"})," ",(0,s.jsx)(n.code,{children:"[11, 12, 13, 5, 6]"})]}),"\n",(0,s.jsx)(n.li,{children:"The array is partially sorted from index 0 to 1."}),"\n",(0,s.jsxs)(n.li,{children:["The current array looks like this: ",(0,s.jsx)(n.code,{children:"[11, 12, 13, 5, 6]"})]}),"\n",(0,s.jsxs)(n.li,{children:["The sorted part is ",(0,s.jsx)(n.code,{children:"[11, 12]"}),", and the unsorted part is ",(0,s.jsx)(n.code,{children:"[13, 5, 6]"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The key element is ",(0,s.jsx)(n.code,{children:"13"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"The key element is compared with the elements in the sorted part."}),"\n",(0,s.jsxs)(n.li,{children:["Since ",(0,s.jsx)(n.code,{children:"13"})," is greater than ",(0,s.jsx)(n.code,{children:"12"}),", no swap is needed."]}),"\n",(0,s.jsxs)(n.li,{children:["The array remains the same: ",(0,s.jsx)(n.code,{children:"[11, 12, 13, 5, 6]"})]}),"\n",(0,s.jsx)(n.li,{children:"The array is partially sorted from index 0 to 2."}),"\n",(0,s.jsxs)(n.li,{children:["The current array looks like this: ",(0,s.jsx)(n.code,{children:"[11, 12, 13, 5, 6]"})]}),"\n",(0,s.jsxs)(n.li,{children:["The sorted part is ",(0,s.jsx)(n.code,{children:"[11, 12, 13]"}),", and the unsorted part is ",(0,s.jsx)(n.code,{children:"[5, 6]"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The key element is ",(0,s.jsx)(n.code,{children:"5"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"The key element is compared with the elements in the sorted part."}),"\n",(0,s.jsxs)(n.li,{children:["Since ",(0,s.jsx)(n.code,{children:"5"})," is smaller than ",(0,s.jsx)(n.code,{children:"13"}),", ",(0,s.jsx)(n.code,{children:"12"}),", and ",(0,s.jsx)(n.code,{children:"11"}),", it is moved to the left."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Array after Step 1:"})," ",(0,s.jsx)(n.code,{children:"[5, 11, 12, 13, 6]"})]}),"\n",(0,s.jsx)(n.li,{children:"The array is partially sorted from index 0 to 3."}),"\n",(0,s.jsxs)(n.li,{children:["The current array looks like this: ",(0,s.jsx)(n.code,{children:"[5, 11, 12, 13, 6]"})]}),"\n",(0,s.jsxs)(n.li,{children:["The sorted part is ",(0,s.jsx)(n.code,{children:"[5, 11, 12, 13]"}),", and the unsorted part is ",(0,s.jsx)(n.code,{children:"[6]"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The key element is ",(0,s.jsx)(n.code,{children:"6"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"The key element is compared with the elements in the sorted part."}),"\n",(0,s.jsxs)(n.li,{children:["Since ",(0,s.jsx)(n.code,{children:"6"})," is smaller than ",(0,s.jsx)(n.code,{children:"13"}),", it is moved to the left."]}),"\n",(0,s.jsxs)(n.li,{children:["Since ",(0,s.jsx)(n.code,{children:"6"})," is smaller than ",(0,s.jsx)(n.code,{children:"12"}),", it is moved to the left."]}),"\n",(0,s.jsxs)(n.li,{children:["Since ",(0,s.jsx)(n.code,{children:"6"})," is smaller than ",(0,s.jsx)(n.code,{children:"11"}),", it is moved to the left."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Array after Step 1:"})," ",(0,s.jsx)(n.code,{children:"[5, 6, 11, 12, 13]"})]}),"\n",(0,s.jsx)(n.li,{children:"The array is now sorted."}),"\n",(0,s.jsxs)(n.li,{children:["The sorted array is ",(0,s.jsx)(n.code,{children:"[5, 6, 11, 12, 13]"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Final Sorted Array:"})," ",(0,s.jsx)(n.code,{children:"[5, 6, 11, 12, 13]"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The array is now sorted in ascending order using the Insertion Sort algorithm."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The time complexity of the Insertion Sort algorithm is ",(0,s.jsx)(n.em,{children:(0,s.jsxs)(n.strong,{children:["O(n",(0,s.jsx)("sup",{children:"2"}),")"]})})," in the worst-case scenario."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The space complexity of the Insertion Sort algorithm is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"O(1)"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The Insertion Sort algorithm is efficient for small data sets and partially sorted data sets."}),"\n"]}),"\n"]}),(0,s.jsx)(n.h2,{id:"visualization",children:"Visualization"}),(0,s.jsx)(n.p,{children:"You can visualize the Insertion Sort algorithm using the following animation:"}),(0,s.jsx)("div",{style:{padding:"10px 50px"},children:(0,s.jsx)(r,{})}),(0,s.jsx)(n.p,{children:"You can select the Insertion Sort algorithm from the drop-down menu and visualize how it works on different arrays."})]}),"\n",(0,s.jsx)(n.h2,{id:"algorithm",children:"Algorithm"}),"\n",(0,s.jsx)(n.p,{children:"The insertion sort algorithm works as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Start from the second element (index 1) and compare it with the previous elements."}),"\n",(0,s.jsx)(n.li,{children:"If the current element is smaller than the previous element, swap them."}),"\n",(0,s.jsx)(n.li,{children:"Repeat this process until the current element is greater than the previous element or until the first element is reached."}),"\n",(0,s.jsx)(n.li,{children:"Move to the next element and repeat the process."}),"\n",(0,s.jsx)(n.li,{children:"Continue this process until the entire array is sorted."}),"\n",(0,s.jsx)(n.li,{children:"The array is now sorted."}),"\n",(0,s.jsxs)(n.li,{children:["The time complexity of the insertion sort algorithm is ",(0,s.jsx)(n.em,{children:(0,s.jsxs)(n.strong,{children:["O(n",(0,s.jsx)("sup",{children:"2"}),")"]})})," in the worst-case scenario."]}),"\n",(0,s.jsxs)(n.li,{children:["The space complexity of the insertion sort algorithm is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"O(1)"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"pseudocode",children:"Pseudocode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"1. for i = 1 to n-1\n2.     key = arr[i]\n3.     j = i - 1\n4.     while j >= 0 and arr[j] > key\n5.         arr[j + 1] = arr[j]\n6.         j = j - 1\n7.     arr[j + 1] = key\n"})}),"\n",(0,s.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(n.p,{children:"Here's the implementation of the Insertion Sort algorithm in JavaScript:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="Insertion Sort"',children:"function insertionSort(arr) {\n    const n = arr.length;\n    for (let i = 1; i < n; i++) {\n        let key = arr[i];\n        let j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j = j - 1;\n        }\n        arr[j + 1] = key;\n    }\n    return arr;\n}\n\nconst arr = [12, 11, 13, 5, 6];\nconsole.log(insertionSort(arr)); // Output: [5, 6, 11, 12, 13]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"complexity-analysis",children:"Complexity Analysis"}),"\n",(0,s.jsxs)(n.p,{children:["The time complexity of the Insertion Sort algorithm is ",(0,s.jsx)(n.em,{children:(0,s.jsxs)(n.strong,{children:["O(n",(0,s.jsx)("sup",{children:"2"}),")"]})})," in the worst-case scenario when the array is sorted in reverse order. The best-case time complexity is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"O(n)"})})," when the array is already sorted."]}),"\n",(0,s.jsxs)(n.p,{children:["The space complexity of the Insertion Sort algorithm is ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"O(1)"})})," since it requires only a constant amount of additional memory space."]}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Insertion_sort",children:"Wikipedia - Insertion Sort"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.geeksforgeeks.org/insertion-sort/",children:"GeeksforGeeks - Insertion Sort"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.programiz.com/dsa/insertion-sort",children:"Programiz - Insertion Sort"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort",children:"Khan Academy - Insertion Sort"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.tutorialspoint.com/data_structures_algorithms/insertion_sort_algorithm.htm",children:"TutorialsPoint - Insertion Sort"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.studytonight.com/data-structures/insertion-sorting",children:"StudyTonight - Insertion Sort"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html",children:"Insertion Sort Visualization"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var s=r(96540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);