import { CurrentResultData, SyllabusResult } from "@/types/Index";

export const currentResult: CurrentResultData = {
  syllabusName: "B.Sc Computer Science - Semester 3",
  courseName: "Data Structures",
  processedAt: new Date().toISOString(),
  modules: [
    {
      id: "M1",
      title: "Information, Data, Data Types, ADT, Data Structure",
      content:
        "Information, Data, Data Types, Abstract Data Type (ADT), Data Structure, Static and Dynamic Data Structures, Implementation Methods",
      topics: [
        "Information & Data",
        "Data Types",
        "Abstract Data Type (ADT)",
        "Static vs Dynamic Data Structures",
        "Implementation Methods",
      ],
      hours: 6,
    },
    {
      id: "M2",
      title: "Array as an ADT",
      content:
        "Array as an ADT, Single and Multidimensional Arrays, Structures, ADT Polynomial, Sparse Matrix Representation",
      topics: [
        "Single & Multidimensional Arrays",
        "Structures",
        "ADT Polynomial",
        "Sparse Matrix",
      ],
      hours: 8,
    },
    {
      id: "M3",
      title: "Pointers and Linked Lists",
      content:
        "Pointers, ADT Linked List, Singly Linked List, Doubly Linked List, Multi-linked List, Implementation and Applications",
      topics: [
        "Pointers",
        "Singly Linked List",
        "Doubly Linked List",
        "Multi-linked List",
        "Applications",
      ],
      hours: 10,
    },
    {
      id: "M4",
      title: "Stacks and Queues",
      content:
        "Stack ADT, Queue ADT, Circular Queue, Priority Queue, Deque, Applications of Stacks and Queues, Expression Evaluation",
      topics: [
        "Stack ADT",
        "Queue ADT",
        "Circular Queue",
        "Priority Queue",
        "Deque",
        "Expression Evaluation",
      ],
      hours: 8,
    },
    {
      id: "M5",
      title: "Trees and Graphs",
      content:
        "Binary Trees, Binary Search Trees, AVL Trees, B-Trees, Graph Representations, BFS, DFS, Shortest Path Algorithms",
      topics: [
        "Binary Trees",
        "BST",
        "AVL Trees",
        "B-Trees",
        "Graph Representations",
        "BFS & DFS",
        "Shortest Path",
      ],
      hours: 12,
    },
  ],
  outcomes: [
    {
      id: "LO1",
      title: "Understand Data Structures Fundamentals",
      description:
        "Explain the concepts of data, data types, abstract data types, and distinguish between static and dynamic data structures with their implementation methods.",
      bloomLevel: "Understanding",
    },
    {
      id: "LO2",
      title: "Implement Array-Based Structures",
      description:
        "Design and implement array-based data structures including polynomials and sparse matrices using single and multidimensional arrays.",
      bloomLevel: "Applying",
    },
    {
      id: "LO3",
      title: "Apply Linked List Operations",
      description:
        "Implement and manipulate singly, doubly, and multi-linked lists for solving real-world problems efficiently.",
      bloomLevel: "Applying",
    },
    {
      id: "LO4",
      title: "Analyze Stack and Queue Applications",
      description:
        "Evaluate the use of stacks and queues in expression evaluation, scheduling algorithms, and other computational problems.",
      bloomLevel: "Analyzing",
    },
  ],
  resources: [
    {
      id: "R1",
      title: "Data Structures Using C",
      type: "book",
      source: "Reema Thareja",
      url: "#",
      rating: 4.8,
      isFeatured: true,
    },
    {
      id: "R2",
      title: "Data Structures Full Course",
      type: "video",
      source: "freeCodeCamp",
      url: "#",
      duration: "8 hours",
      rating: 4.9,
    },
    {
      id: "R3",
      title: "VisuAlgo - Visualising DS",
      type: "interactive",
      source: "VisuAlgo",
      url: "#",
      rating: 4.7,
    },
    {
      id: "R4",
      title: "GeeksforGeeks DS Tutorial",
      type: "article",
      source: "GeeksforGeeks",
      url: "#",
      rating: 4.6,
    },
  ],
  questions: [
    {
      id: "Q1",
      type: "mcq",
      difficulty: "Easy",
      question: "Which data structure follows LIFO principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      answer: "Stack",
    },
    {
      id: "Q2",
      type: "short",
      difficulty: "Medium",
      question:
        "Explain the difference between static and dynamic data structures with examples.",
      answer:
        "Static data structures have fixed size allocated at compile time (e.g., arrays). Dynamic data structures can grow/shrink at runtime (e.g., linked lists).",
    },
    {
      id: "Q3",
      type: "calculation",
      difficulty: "Hard",
      question:
        "Convert the infix expression A*(B+C)-D/E to postfix notation using stack.",
      answer: "ABC+*DE/-",
    },
    {
      id: "Q4",
      type: "mcq",
      difficulty: "Medium",
      question: "What is the time complexity of searching in a balanced BST?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: "O(log n)",
    },
  ],
};

export const historyResults: SyllabusResult[] = [
  {
    id: "hist-1",
    syllabusName: "B.Sc Computer Science - Semester 2",
    courseName: "Object Oriented Programming",
    uploadedAt: "2026-02-25T10:30:00Z",
    moduleCount: 6,
    outcomeCount: 12,
    questionCount: 45,
  },
  {
    id: "hist-2",
    syllabusName: "B.Sc Computer Science - Semester 2",
    courseName: "Database Management Systems",
    uploadedAt: "2026-02-20T14:15:00Z",
    moduleCount: 5,
    outcomeCount: 10,
    questionCount: 38,
  },
  {
    id: "hist-3",
    syllabusName: "B.Sc Computer Science - Semester 1",
    courseName: "Programming in C",
    uploadedAt: "2026-02-15T09:00:00Z",
    moduleCount: 4,
    outcomeCount: 8,
    questionCount: 32,
  },
  {
    id: "hist-4",
    syllabusName: "B.Sc Computer Science - Semester 1",
    courseName: "Discrete Mathematics",
    uploadedAt: "2026-02-10T16:45:00Z",
    moduleCount: 5,
    outcomeCount: 9,
    questionCount: 35,
  },
];
