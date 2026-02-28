import { CurrentResultData } from "@/types/Index";

export const allResultsData: Record<string, CurrentResultData> = {
  current: {
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
  },
  "hist-1": {
    syllabusName: "B.Sc Computer Science - Semester 2",
    courseName: "Object Oriented Programming",
    processedAt: "2026-02-25T10:30:00Z",
    modules: [
      {
        id: "M1",
        title: "Introduction to OOP Concepts",
        content:
          "Classes, Objects, Abstraction, Encapsulation, Inheritance, Polymorphism",
        topics: [
          "Classes & Objects",
          "Abstraction",
          "Encapsulation",
          "Inheritance",
          "Polymorphism",
        ],
        hours: 6,
      },
      {
        id: "M2",
        title: "Classes and Objects in Java",
        content:
          "Defining classes, creating objects, constructors, access modifiers, static members",
        topics: [
          "Class Definition",
          "Constructors",
          "Access Modifiers",
          "Static Members",
          "Method Overloading",
        ],
        hours: 8,
      },
      {
        id: "M3",
        title: "Inheritance and Interfaces",
        content:
          "Single inheritance, multilevel inheritance, abstract classes, interfaces",
        topics: [
          "Single Inheritance",
          "Multilevel Inheritance",
          "Abstract Classes",
          "Interfaces",
        ],
        hours: 8,
      },
    ],
    outcomes: [
      {
        id: "LO1",
        title: "Understand OOP Principles",
        description:
          "Explain and differentiate between procedural and object-oriented programming paradigms.",
        bloomLevel: "Understanding",
      },
      {
        id: "LO2",
        title: "Implement Inheritance Hierarchies",
        description:
          "Design and implement class hierarchies using inheritance, abstract classes, and interfaces.",
        bloomLevel: "Applying",
      },
    ],
    resources: [
      {
        id: "R1",
        title: "Head First Java",
        type: "book",
        source: "Kathy Sierra",
        url: "#",
        rating: 4.7,
        isFeatured: true,
      },
      {
        id: "R2",
        title: "Java OOP Tutorial",
        type: "video",
        source: "Bro Code",
        url: "#",
        duration: "6 hours",
        rating: 4.8,
      },
    ],
    questions: [
      {
        id: "Q1",
        type: "mcq",
        difficulty: "Easy",
        question: "Which OOP concept binds data and methods together?",
        options: [
          "Inheritance",
          "Encapsulation",
          "Polymorphism",
          "Abstraction",
        ],
        answer: "Encapsulation",
      },
      {
        id: "Q2",
        type: "short",
        difficulty: "Medium",
        question:
          "Explain the difference between abstract class and interface in Java.",
        answer:
          "Abstract classes can have both abstract and concrete methods with state, while interfaces only have abstract methods (before Java 8) and no state.",
      },
    ],
  },
  "hist-2": {
    syllabusName: "B.Sc Computer Science - Semester 2",
    courseName: "Database Management Systems",
    processedAt: "2026-02-20T14:15:00Z",
    modules: [
      {
        id: "M1",
        title: "Introduction to DBMS",
        content: "Database concepts, DBMS architecture, data models, schemas",
        topics: [
          "Database Concepts",
          "DBMS Architecture",
          "Data Models",
          "Schemas",
        ],
        hours: 5,
      },
      {
        id: "M2",
        title: "Relational Model and SQL",
        content:
          "Relational algebra, SQL queries, DDL, DML, DCL, joins, subqueries",
        topics: [
          "Relational Algebra",
          "SQL Queries",
          "DDL & DML",
          "Joins",
          "Subqueries",
        ],
        hours: 10,
      },
    ],
    outcomes: [
      {
        id: "LO1",
        title: "Understand DBMS Fundamentals",
        description:
          "Describe database concepts, architecture, and various data models.",
        bloomLevel: "Understanding",
      },
      {
        id: "LO2",
        title: "Write Complex SQL Queries",
        description:
          "Formulate SQL queries involving joins, subqueries, aggregations, and views.",
        bloomLevel: "Applying",
      },
    ],
    resources: [
      {
        id: "R1",
        title: "Database System Concepts",
        type: "book",
        source: "Silberschatz, Korth",
        url: "#",
        rating: 4.9,
        isFeatured: true,
      },
    ],
    questions: [
      {
        id: "Q1",
        type: "mcq",
        difficulty: "Easy",
        question: "Which key uniquely identifies a row in a table?",
        options: ["Foreign Key", "Primary Key", "Candidate Key", "Super Key"],
        answer: "Primary Key",
      },
    ],
  },
  "hist-3": {
    syllabusName: "B.Sc Computer Science - Semester 1",
    courseName: "Programming in C",
    processedAt: "2026-02-15T09:00:00Z",
    modules: [
      {
        id: "M1",
        title: "Basics of C Programming",
        content: "Variables, data types, operators, expressions, I/O functions",
        topics: ["Variables", "Data Types", "Operators", "I/O Functions"],
        hours: 6,
      },
      {
        id: "M2",
        title: "Control Structures",
        content:
          "if-else, switch, for loop, while loop, do-while, break, continue",
        topics: ["if-else", "switch", "Loops", "break & continue"],
        hours: 6,
      },
    ],
    outcomes: [
      {
        id: "LO1",
        title: "Write Basic C Programs",
        description:
          "Develop programs using variables, operators, and standard I/O functions.",
        bloomLevel: "Applying",
      },
    ],
    resources: [
      {
        id: "R1",
        title: "Let Us C",
        type: "book",
        source: "Yashavant Kanetkar",
        url: "#",
        rating: 4.6,
        isFeatured: true,
      },
    ],
    questions: [
      {
        id: "Q1",
        type: "mcq",
        difficulty: "Easy",
        question: "Which function is used to print output in C?",
        options: ["cout", "print()", "printf()", "echo"],
        answer: "printf()",
      },
    ],
  },
  "hist-4": {
    syllabusName: "B.Sc Computer Science - Semester 1",
    courseName: "Discrete Mathematics",
    processedAt: "2026-02-10T16:45:00Z",
    modules: [
      {
        id: "M1",
        title: "Set Theory and Logic",
        content:
          "Sets, relations, functions, propositional logic, truth tables",
        topics: [
          "Sets",
          "Relations",
          "Functions",
          "Propositional Logic",
          "Truth Tables",
        ],
        hours: 8,
      },
      {
        id: "M2",
        title: "Graph Theory",
        content: "Graphs, trees, Euler and Hamiltonian paths, graph coloring",
        topics: [
          "Graphs & Trees",
          "Euler Paths",
          "Hamiltonian Paths",
          "Graph Coloring",
        ],
        hours: 10,
      },
    ],
    outcomes: [
      {
        id: "LO1",
        title: "Apply Set Theory Concepts",
        description:
          "Solve problems using set operations, relations, and functions.",
        bloomLevel: "Applying",
      },
    ],
    resources: [
      {
        id: "R1",
        title: "Discrete Mathematics and Its Applications",
        type: "book",
        source: "Kenneth Rosen",
        url: "#",
        rating: 4.8,
        isFeatured: true,
      },
    ],
    questions: [
      {
        id: "Q1",
        type: "mcq",
        difficulty: "Medium",
        question:
          "A graph with n vertices and n-1 edges that is connected is called?",
        options: ["Complete graph", "Bipartite graph", "Tree", "Cycle"],
        answer: "Tree",
      },
    ],
  },
};

export function getResultById(id: string): CurrentResultData | null {
  return allResultsData[id] || null;
}
