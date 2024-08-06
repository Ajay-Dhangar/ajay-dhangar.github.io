"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[66789],{52368:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var s=t(74848),i=t(28453);const r={id:"04-stacks-and-queues",title:"Stacks and Queues in Data Structures and Algorithms",sidebar_label:"Stacks and Queues",tags:["dsa","data-structures","stacks","queues","beginner","javascript","python","c++","java","programming","tutorial","typescript"],sidebar_position:4},a=void 0,u={id:"beginner/04-stacks-and-queues",title:"Stacks and Queues in Data Structures and Algorithms",description:"In this tutorial, we will learn about stacks and queues in Data Structures and Algorithms. We will discuss what stacks and queues are, how they are used, and how they are different from each other.",source:"@site/dsa/beginner/04-stacks-and-queues.md",sourceDirName:"beginner",slug:"/beginner/04-stacks-and-queues",permalink:"/dsa/beginner/04-stacks-and-queues",draft:!1,unlisted:!1,tags:[{inline:!0,label:"dsa",permalink:"/dsa/tags/dsa"},{inline:!0,label:"data-structures",permalink:"/dsa/tags/data-structures"},{inline:!0,label:"stacks",permalink:"/dsa/tags/stacks"},{inline:!0,label:"queues",permalink:"/dsa/tags/queues"},{inline:!0,label:"beginner",permalink:"/dsa/tags/beginner"},{inline:!0,label:"javascript",permalink:"/dsa/tags/javascript"},{inline:!0,label:"python",permalink:"/dsa/tags/python"},{inline:!0,label:"c++",permalink:"/dsa/tags/c"},{inline:!0,label:"java",permalink:"/dsa/tags/java"},{inline:!0,label:"programming",permalink:"/dsa/tags/programming"},{inline:!0,label:"tutorial",permalink:"/dsa/tags/tutorial"},{inline:!0,label:"typescript",permalink:"/dsa/tags/typescript"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1712073681e3,sidebarPosition:4,frontMatter:{id:"04-stacks-and-queues",title:"Stacks and Queues in Data Structures and Algorithms",sidebar_label:"Stacks and Queues",tags:["dsa","data-structures","stacks","queues","beginner","javascript","python","c++","java","programming","tutorial","typescript"],sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Arrays and Strings",permalink:"/dsa/beginner/03-arrays-and-strings"},next:{title:"Linked Lists",permalink:"/dsa/beginner/05-linked-lists"}},l={},o=[{value:"Stacks in Data Structures and Algorithms",id:"stacks-in-data-structures-and-algorithms",level:2},{value:"Queues in Data Structures and Algorithms",id:"queues-in-data-structures-and-algorithms",level:2},{value:"Differences Between Stacks and Queues",id:"differences-between-stacks-and-queues",level:2},{value:"Live Example",id:"live-example",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{TabItem:t,Tabs:r}=n;return t||d("TabItem",!0),r||d("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In this tutorial, we will learn about stacks and queues in Data Structures and Algorithms. We will discuss what stacks and queues are, how they are used, and how they are different from each other."}),"\n",(0,s.jsx)(n.h2,{id:"stacks-in-data-structures-and-algorithms",children:"Stacks in Data Structures and Algorithms"}),"\n",(0,s.jsx)(n.p,{children:"A stack is a data structure that stores a collection of elements. The elements in a stack are stored in a Last-In-First-Out (LIFO) order, which means that the last element added to the stack is the first one to be removed. Stacks are used to store elements that need to be accessed in a specific order, such as undo operations in a text editor, function calls in a program, or backtracking in a maze-solving algorithm."}),"\n",(0,s.jsx)(n.p,{children:"A stack has two main operations:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Push"}),": Adds an element to the top of the stack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pop"}),": Removes and returns the element at the top of the stack."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In addition to these operations, stacks may also support other operations such as:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Peek"}),": Returns the element at the top of the stack without removing it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"isEmpty"}),": Checks if the stack is empty."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Size"}),": Returns the number of elements in the stack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Clear"}),": Removes all elements from the stack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search"}),": Searches for an element in the stack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Copy"}),": Creates a copy of the stack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Iterate"}),": Iterates over the elements of the stack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Merge"}),": Merges two stacks into one."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Reverse"}),": Reverses the order of elements in the stack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sort"}),": Sorts the elements of the stack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Map"}),": Applies a function to each element of the stack."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of a stack in some programming languages:"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)(t,{value:"javascript",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// Creating a stack in JavaScript\nclass Stack {\n  constructor() {\n    this.items = [];\n  }\n\n  // Push operation\n  push(element) {\n    this.items.push(element);\n  }\n\n  // Pop operation\n  pop() {\n    if (this.isEmpty()) {\n      return "Underflow";\n    }\n    return this.items.pop();\n  }\n\n  // Peek operation\n  peek() {\n    return this.items[this.items.length - 1];\n  }\n\n  // isEmpty operation\n  isEmpty() {\n    return this.items.length === 0;\n  }\n\n  // Size operation\n  size() {\n    return this.items.length;\n  }\n\n  // Clear operation\n  clear() {\n    this.items = [];\n  }\n\n  // Print operation\n  print() {\n    console.log(this.items);\n  }\n}\n\n// Using the stack\nlet stack = new Stack();\nstack.push(1);\nstack.push(2);\nstack.push(3);\nstack.print(); // Output: [1, 2, 3]\nstack.pop();\nstack.print(); // Output: [1, 2]\nconsole.log(stack.peek()); // Output: 2\nconsole.log(stack.isEmpty()); // Output: false\nconsole.log(stack.size()); // Output: 2\nstack.clear();\nstack.print(); // Output: []\n'})})}),(0,s.jsx)(t,{value:"python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Creating a stack in Python\nclass Stack:\n    def __init__(self):\n        self.items = []\n\n    # Push operation\n    def push(self, element):\n        self.items.append(element)\n\n    # Pop operation\n    def pop(self):\n        if self.is_empty():\n            return "Underflow"\n        return self.items.pop()\n\n    # Peek operation\n    def peek(self):\n        return self.items[-1]\n\n    # isEmpty operation\n    def is_empty(self):\n        return len(self.items) == 0\n\n    # Size operation\n    def size(self):\n        return len(self.items)\n\n    # Clear operation\n    def clear(self):\n        self.items = []\n\n    # Print operation\n    def print(self):\n        print(self.items)\n\n# Using the stack\nstack = Stack()\nstack.push(1)\nstack.push(2)\nstack.push(3)\nstack.print() # Output: [1, 2, 3]\nstack.pop()\nstack.print() # Output: [1, 2]\nprint(stack.peek()) # Output: 2\nprint(stack.is_empty()) # Output: False\nprint(stack.size()) # Output: 2\nstack.clear()\nstack.print() # Output: []\n'})})}),(0,s.jsx)(t,{value:"typescript",label:"TypeScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// Creating a stack in TypeScript\nclass Stack<T> {\n  private items: T[] = [];\n\n  // Push operation\n  push(element: T): void {\n    this.items.push(element);\n  }\n\n  // Pop operation\n  pop(): T | string {\n    if (this.isEmpty()) {\n      return "Underflow";\n    }\n    return this.items.pop();\n  }\n\n  // Peek operation\n  peek(): T | undefined {\n    return this.items[this.items.length - 1];\n  }\n\n  // isEmpty operation\n  isEmpty(): boolean {\n    return this.items.length === 0;\n  }\n\n  // Size operation\n  size(): number {\n    return this.items.length;\n  }\n\n  // Clear operation\n  clear(): void {\n    this.items = [];\n  }\n\n  // Print operation\n  print(): void {\n    console.log(this.items);\n  }\n}\n\n// Using the stack\nlet stack = new Stack<number>();\nstack.push(1);\nstack.push(2);\nstack.push(3);\nstack.print(); // Output: [1, 2, 3]\nstack.pop();\nstack.print(); // Output: [1, 2]\nconsole.log(stack.peek()); // Output: 2\nconsole.log(stack.isEmpty()); // Output: false\nconsole.log(stack.size()); // Output: 2\nstack.clear();\nstack.print(); // Output: []\n'})})}),(0,s.jsx)(t,{value:"c++",label:"C++",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <vector>\nusing namespace std;\n\n// Creating a stack in C++\ntemplate <class T>\nclass Stack {\nprivate:\n    vector<T> items;\n\npublic:\n    // Push operation\n    void push(T element) {\n        items.push_back(element);\n    }\n\n    // Pop operation\n    T pop() {\n        if (isEmpty()) {\n            throw "Underflow";\n        }\n        T element = items.back();\n        items.pop_back();\n        return element;\n    }\n\n    // Peek operation\n    T peek() {\n        if (isEmpty()) {\n            throw "Stack is empty";\n        }\n        return items.back();\n    }\n\n    // isEmpty operation\n    bool isEmpty() {\n        return items.empty();\n    }\n\n    // Size operation\n    int size() {\n        return items.size();\n    }\n\n    // Clear operation\n    void clear() {\n        items.clear();\n    }\n\n    // Print operation\n    void print() {\n        for (T element : items) {\n            cout << element << " ";\n        }\n        cout << endl;\n    }\n};\n\nint main() {\n    // Using the stack\n    Stack<int> stack;\n    stack.push(1);\n    stack.push(2);\n    stack.push(3);\n    stack.print(); // Output: 1 2 3\n    stack.pop();\n    stack.print(); // Output: 1 2\n    cout << stack.peek() << endl; // Output: 2\n    cout << stack.isEmpty() << endl; // Output: 0\n    cout << stack.size() << endl; // Output: 2\n    stack.clear();\n    stack.print(); // Output:\n\n    return 0;\n}\n'})})}),(0,s.jsx)(t,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import java.util.Stack;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Creating a stack in Java\n        Stack<Integer> stack = new Stack<>();\n\n        // Push operation\n        stack.push(1);\n        stack.push(2);\n        stack.push(3);\n\n        // Print operation\n        System.out.println(stack); // Output: [1, 2, 3]\n\n        // Pop operation\n        stack.pop();\n        System.out.println(stack); // Output: [1, 2]\n\n        // Peek operation\n        System.out.println(stack.peek()); // Output: 2\n\n        // isEmpty operation\n        System.out.println(stack.isEmpty()); // Output: false\n\n        // Size operation\n        System.out.println(stack.size()); // Output: 2\n\n        // Clear operation\n        stack.clear();\n        System.out.println(stack); // Output: []\n    }\n}\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"queues-in-data-structures-and-algorithms",children:"Queues in Data Structures and Algorithms"}),"\n",(0,s.jsx)(n.p,{children:"A queue is a data structure that stores a collection of elements. The elements in a queue are stored in a First-In-First-Out (FIFO) order, which means that the first element added to the queue is the first one to be removed. Queues are used to store elements that need to be processed in a specific order, such as tasks in a job queue, messages in a message queue, or requests in a web server."}),"\n",(0,s.jsx)(n.p,{children:"A queue has two main operations:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Enqueue"}),": Adds an element to the back of the queue."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dequeue"}),": Removes and returns the element at the front of the queue."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In addition to these operations, queues may also support other operations such as:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Peek"}),": Returns the element at the front of the queue without removing it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"isEmpty"}),": Checks if the queue is empty."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Size"}),": Returns the number of elements in the queue."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Clear"}),": Removes all elements from the queue."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search"}),": Searches for an element in the queue."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Copy"}),": Creates a copy of the queue."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Iterate"}),": Iterates over the elements of the queue."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Merge"}),": Merges two queues into one."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Reverse"}),": Reverses the order of elements in the queue."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sort"}),": Sorts the elements of the queue."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Map"}),": Applies a function to each element of the queue."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of a queue in some programming languages:"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)(t,{value:"javascript",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// Creating a queue in JavaScript\nclass Queue {\n  constructor() {\n    this.items = [];\n  }\n\n  // Enqueue operation\n  enqueue(element) {\n    this.items.push(element);\n  }\n\n  // Dequeue operation\n  dequeue() {\n    if (this.isEmpty()) {\n      return "Underflow";\n    }\n    return this.items.shift();\n  }\n\n  // Peek operation\n  peek() {\n    return this.items[0];\n  }\n\n  // isEmpty operation\n  isEmpty() {\n    return this.items.length === 0;\n  }\n\n  // Size operation\n  size() {\n    return this.items.length;\n  }\n\n  // Clear operation\n  clear() {\n    this.items = [];\n  }\n\n  // Print operation\n  print() {\n    console.log(this.items);\n  }\n}\n\n// Using the queue\nlet queue = new Queue();\nqueue.enqueue(1);\nqueue.enqueue(2);\nqueue.enqueue(3);\nqueue.print(); // Output: [1, 2, 3]\nqueue.dequeue();\nqueue.print(); // Output: [2, 3]\nconsole.log(queue.peek()); // Output: 2\nconsole.log(queue.isEmpty()); // Output: false\nconsole.log(queue.size()); // Output: 2\nqueue.clear();\nqueue.print(); // Output: []\n'})})}),(0,s.jsx)(t,{value:"python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Creating a queue in Python\nclass Queue:\n    def __init__(self):\n        self.items = []\n\n    # Enqueue operation\n    def enqueue(self, element):\n        self.items.append(element)\n\n    # Dequeue operation\n    def dequeue(self):\n        if self.is_empty():\n            return "Underflow"\n        return self.items.pop(0)\n\n    # Peek operation\n    def peek(self):\n        return self.items[0]\n\n    # isEmpty operation\n    def is_empty(self):\n        return len(self.items) == 0\n\n    # Size operation\n    def size(self):\n        return len(self.items)\n\n    # Clear operation\n    def clear(self):\n        self.items = []\n\n    # Print operation\n    def print(self):\n        print(self.items)\n\n# Using the queue\nqueue = Queue()\nqueue.enqueue(1)\nqueue.enqueue\nqueue.enqueue(2)\nqueue.enqueue(3)\nqueue.print() # Output: [1, 2, 3]\nqueue.dequeue()\nqueue.print() # Output: [2, 3]\nprint(queue.peek()) # Output: 2\nprint(queue.is_empty()) # Output: False\nprint(queue.size()) # Output: 2\nqueue.clear()\nqueue.print() # Output: []\n'})})}),(0,s.jsx)(t,{value:"typescript",label:"TypeScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// Creating a queue in TypeScript\nclass Queue<T> {\n  private items: T[] = [];\n\n  // Enqueue operation\n  enqueue(element: T): void {\n    this.items.push(element);\n  }\n\n  // Dequeue operation\n  dequeue(): T | string {\n    if (this.isEmpty()) {\n      return "Underflow";\n    }\n    return this.items.shift();\n  }\n\n  // Peek operation\n  peek(): T | undefined {\n    return this.items[0];\n  }\n\n  // isEmpty operation\n  isEmpty(): boolean {\n    return this.items.length === 0;\n  }\n\n  // Size operation\n  size(): number {\n    return this.items.length;\n  }\n\n  // Clear operation\n  clear(): void {\n    this.items = [];\n  }\n\n  // Print operation\n  print(): void {\n    console.log(this.items);\n  }\n}\n\n// Using the queue\nlet queue = new Queue<number>();\nqueue.enqueue(1);\nqueue.enqueue(2);\nqueue.enqueue(3);\nqueue.print(); // Output: [1, 2, 3]\nqueue.dequeue();\nqueue.print(); // Output: [2, 3]\nconsole.log(queue.peek()); // Output: 2\nconsole.log(queue.isEmpty()); // Output: false\nconsole.log(queue.size()); // Output: 2\nqueue.clear();\nqueue.print(); // Output: []\n'})})}),(0,s.jsx)(t,{value:"c++",label:"C++",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <vector>\nusing namespace std;\n\n// Creating a queue in C++\ntemplate <class T>\nclass Queue {\nprivate:\n    vector<T> items;\n\npublic:\n    // Enqueue operation\n    void enqueue(T element) {\n        items.push_back(element);\n    }\n\n    // Dequeue operation\n    T dequeue() {\n        if (isEmpty()) {\n            throw underflow_error("Underflow");\n        }\n        T element = items.front();\n        items.erase(items.begin());\n        return element;\n    }\n\n    // Peek operation\n    T peek() {\n        if (isEmpty()) {\n            throw underflow_error("Queue is empty");\n        }\n        return items.front();\n    }\n\n    // isEmpty operation\n    bool isEmpty() {\n        return items.empty();\n    }\n\n    // Size operation\n    int size() {\n        return items.size();\n    }\n\n    // Clear operation\n    void clear() {\n        items.clear();\n    }\n\n    // Print operation\n    void print() {\n        for (T element : items) {\n            cout << element << " ";\n        }\n        cout << endl;\n    }\n};\n\nint main() {\n    Queue<int> queue;\n    queue.enqueue(1);\n    queue.enqueue(2);\n    queue.enqueue(3);\n    queue.print(); // Output: 1 2 3\n    queue.dequeue();\n    queue.print(); // Output: 2 3\n    cout << queue.peek() << endl; // Output: 2\n    cout << queue.isEmpty() << endl; // Output: 0\n    cout << queue.size() << endl; // Output: 2\n    queue.clear();\n    queue.print(); // Output:\n\n    return 0;\n}\n'})})}),(0,s.jsx)(t,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import java.util.LinkedList;\nimport java.util.Queue;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Creating a queue in Java\n        Queue<Integer> queue = new LinkedList<>();\n\n        // Enqueue operation\n        queue.add(1);\n        queue.add(2);\n        queue.add(3);\n\n        // Print operation\n        System.out.println(queue); // Output: [1, 2, 3]\n\n        // Dequeue operation\n        queue.poll();\n        System.out.println(queue); // Output: [2, 3]\n\n        // Peek operation\n        System.out.println(queue.peek()); // Output: 2\n\n        // isEmpty operation\n        System.out.println(queue.isEmpty()); // Output: false\n\n        // Size operation\n        System.out.println(queue.size()); // Output: 2\n\n        // Clear operation\n        queue.clear();\n        System.out.println(queue); // Output: []\n    }\n}\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"differences-between-stacks-and-queues",children:"Differences Between Stacks and Queues"}),"\n",(0,s.jsx)(n.p,{children:"Stacks and queues are both data structures that store a collection of elements, but they differ in how the elements are accessed and removed. The main differences between stacks and queues are:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"No."}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Feature"}),(0,s.jsx)(n.th,{children:"Stack"}),(0,s.jsx)(n.th,{children:"Queue"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Access Order"}),(0,s.jsx)(n.td,{children:"Elements are accessed in a Last-In-First-Out (LIFO) order."}),(0,s.jsx)(n.td,{children:"Elements are accessed in a First-In-First-Out (FIFO) order."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Insertion"}),(0,s.jsx)(n.td,{children:"Elements are inserted and removed from the top of the stack."}),(0,s.jsx)(n.td,{children:"Elements are inserted at the back and removed from the front of the queue."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Removal"}),(0,s.jsx)(n.td,{children:"The last element added to the stack is the first one to be removed."}),(0,s.jsx)(n.td,{children:"The first element added to the queue is the first one to be removed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4."}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Operations"}),(0,s.jsx)(n.td,{children:"Stacks support push, pop, peek, isEmpty, size, clear, and other operations."}),(0,s.jsx)(n.td,{children:"Queues support enqueue, dequeue, peek, isEmpty, size, clear, and other operations."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5."}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Applications"}),(0,s.jsx)(n.td,{children:"Stacks are used for undo operations, function calls, backtracking, and other applications."}),(0,s.jsx)(n.td,{children:"Queues are used for job queues, message queues, web servers, and other applications."})]})]})]}),"\n",(0,s.jsxs)(n.admonition,{title:"for better understanding \ud83e\udd13",type:"tip",children:[(0,s.jsx)(n.h2,{id:"live-example",children:"Live Example"}),(0,s.jsx)(n.p,{children:"You can try running the following code snippet to see the output of the examples provided above:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Example() {\n  // Stack class\n  class Stack {\n    constructor() {\n      this.items = [];\n    }\n\n    push(element) {\n      this.items.push(element);\n    }\n\n    pop() {\n      if (this.isEmpty()) {\n        return "Underflow";\n      }\n      return this.items.pop();\n    }\n\n    peek() {\n      return this.items[this.items.length - 1];\n    }\n\n    isEmpty() {\n      return this.items.length === 0;\n    }\n\n    size() {\n      return this.items.length;\n    }\n\n    clear() {\n      this.items = [];\n    }\n\n    print() {\n      return this.items.join(" ");\n    }\n  }\n\n  // Queue class\n  class Queue {\n    constructor() {\n      this.items = [];\n    }\n\n    enqueue(element) {\n      this.items.push(element);\n    }\n\n    dequeue() {\n      if (this.isEmpty()) {\n        return "Underflow";\n      }\n      return this.items.shift();\n    }\n\n    peek() {\n      return this.items[0];\n    }\n\n    isEmpty() {\n      return this.items.length === 0;\n    }\n\n    size() {\n      return this.items.length;\n    }\n\n    clear() {\n      this.items = [];\n    }\n\n    print() {\n      return this.items.join(" ");\n    }\n  }\n\n  // Creating a stack\n  let stack = new Stack();\n\n  // Creating a queue\n  let queue = new Queue();\n\n  return (\n    <div\n      style={{\n        display: "flex",\n        justifyContent: "space-around",\n        flexWrap: "wrap",\n      }}\n    >\n      <div\n        style={{\n          flex: 1,\n          margin: "20px",\n          padding: "20px",\n          border: "1px solid #ccc",\n          borderRadius: "5px",\n        }}\n      >\n        <h3>Stack Example</h3>\n        <div>\n          <p>Using the stack:</p>\n          <p>{stack.push(1)}</p>\n          <p>{stack.push(2)}</p>\n          <p>{stack.push(3)}</p>\n          <p>{stack.print()}</p>\n          <p>{stack.pop()}</p>\n          <p>{stack.print()}</p>\n          <p>{stack.peek()}</p>\n          <p>{stack.isEmpty().toString()}</p>\n          <p>{stack.size()}</p>\n          <p>{stack.clear()}</p>\n          <p>{stack.print()}</p>\n        </div>\n      </div>\n\n      <div\n        style={{\n          flex: 1,\n          margin: "20px",\n          padding: "20px",\n          border: "1px solid #ccc",\n          borderRadius: "5px",\n        }}\n      >\n        <h3>Queue Example</h3>\n        <div>\n          <p>Using the queue:</p>\n          <p>{queue.enqueue(1)}</p>\n          <p>{queue.enqueue(2)}</p>\n          <p>{queue.enqueue(3)}</p>\n          <p>{queue.print()}</p>\n          <p>{queue.dequeue()}</p>\n          <p>{queue.print()}</p>\n          <p>{queue.peek()}</p>\n          <p>{queue.isEmpty().toString()}</p>\n          <p>{queue.size()}</p>\n          <p>{queue.clear()}</p>\n          <p>{queue.print()}</p>\n        </div>\n      </div>\n    </div>\n  );\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"In this tutorial, we learned about stacks and queues in Data Structures and Algorithms. We discussed what stacks and queues are, how they are used, and how they are different from each other. We also saw examples of stacks and queues in JavaScript, Python, TypeScript, C++, and Java."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>u});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);