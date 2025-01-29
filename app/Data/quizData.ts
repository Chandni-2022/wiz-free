// // app/data/quizData.ts
// import { QuizTopic, QuizQuestion, Option } from "../components/Quiz/types"; // Correct path for types

// export const quizData: QuizTopic[] = [
//   // Existing topics...

//   {
//     topicName: "Technology",
//     questions: [
//       {
//         id: "11",
//         questionNumber: 1,
//         questionText: "What does HTML stand for?",
//         options: [
//           { id: "1", text: "HyperText Markup Language", value: "A" },
//           { id: "2", text: "HyperTool Markup Language", value: "B" },
//           { id: "3", text: "HyperText Machine Language", value: "C" },
//           { id: "4", text: "HighText Markup Language", value: "D" },
//         ],
//       },
//       {
//         id: "12",
//         questionNumber: 2,
//         questionText: "What is the most popular programming language for web development?",
//         options: [
//           { id: "1", text: "JavaScript", value: "A" },
//           { id: "2", text: "Python", value: "B" },
//           { id: "3", text: "C#", value: "C" },
//           { id: "4", text: "Ruby", value: "D" },
//         ],
//       },
//       {
//         id: "13",
//         questionNumber: 3,
//         questionText: "Which company developed the Android operating system?",
//         options: [
//           { id: "1", text: "Google", value: "A" },
//           { id: "2", text: "Apple", value: "B" },
//           { id: "3", text: "Microsoft", value: "C" },
//           { id: "4", text: "Samsung", value: "D" },
//         ],
//       },
//       {
//         id: "14",
//         questionNumber: 4,
//         questionText: "What is the full form of CPU?",
//         options: [
//           { id: "1", text: "Central Processing Unit", value: "A" },
//           { id: "2", text: "Central Programming Unit", value: "B" },
//           { id: "3", text: "Central Process Unit", value: "C" },
//           { id: "4", text: "Central Processor Unit", value: "D" },
//         ],
//       },
//       {
//         id: "15",
//         questionNumber: 5,
//         questionText: "Which of these is a cloud computing service?",
//         options: [
//           { id: "1", text: "AWS (Amazon Web Services)", value: "A" },
//           { id: "2", text: "Skype", value: "B" },
//           { id: "3", text: "Spotify", value: "C" },
//           { id: "4", text: "Google Chrome", value: "D" },
//         ],
//       },
//     ],
//   },
//   // Continue adding more topics here...
// ];


import { QuizTopic } from "../components/Quiz/types"; // Correct path for types

export const quizData: QuizTopic[] = [
  {
    topicName: "Technology",
    questions: [
      {
        id: "11",
        questionNumber: 1,
        questionText: "What does HTML stand for?",
        options: [
          { id: "1", text: "HyperText Markup Language", value: "A" },
          { id: "2", text: "HyperTool Markup Language", value: "B" },
          { id: "3", text: "HyperText Machine Language", value: "C" },
          { id: "4", text: "HighText Markup Language", value: "D" },
        ],
        isLast: false, // Mark as not the last question
      },
      {
        id: "12",
        questionNumber: 2,
        questionText: "What is the most popular programming language for web development?",
        options: [
          { id: "1", text: "JavaScript", value: "A" },
          { id: "2", text: "Python", value: "B" },
          { id: "3", text: "C#", value: "C" },
          { id: "4", text: "Ruby", value: "D" },
        ],
        isLast: false,
      },
      {
        id: "13",
        questionNumber: 3,
        questionText: "Which company developed the Android operating system?",
        options: [
          { id: "1", text: "Google", value: "A" },
          { id: "2", text: "Apple", value: "B" },
          { id: "3", text: "Microsoft", value: "C" },
          { id: "4", text: "Samsung", value: "D" },
        ],
        isLast: false,
      },
      {
        id: "14",
        questionNumber: 4,
        questionText: "What is the full form of CPU?",
        options: [
          { id: "1", text: "Central Processing Unit", value: "A" },
          { id: "2", text: "Central Programming Unit", value: "B" },
          { id: "3", text: "Central Process Unit", value: "C" },
          { id: "4", text: "Central Processor Unit", value: "D" },
        ],
        isLast: false,
      },
      {
        id: "15",
        questionNumber: 5,
        questionText: "Which of these is a cloud computing service?",
        options: [
          { id: "1", text: "AWS (Amazon Web Services)", value: "A" },
          { id: "2", text: "Skype", value: "B" },
          { id: "3", text: "Spotify", value: "C" },
          { id: "4", text: "Google Chrome", value: "D" },
        ],
        isLast: true, // Mark as the last question
      },
    ],
  },
  // Add more topics here...
];
