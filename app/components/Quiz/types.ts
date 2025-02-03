// export interface AnswerOption {
//     id: string;
//     text: string;
//     value: string;
//   }
  
//   export interface QuizQuestion {
//     id: string;
//     questionNumber: number;
//     questionText: string;
//     options: AnswerOption[];
//   }
// app/data/types.ts
export interface Option {
  id: string;
  text: string;
  value: string;
  
}

export interface QuizQuestion {
  id: string;
  questionNumber: number;
  questionText: string;
  options: Option[];
  showTimeUp?: boolean;
  isLast: boolean; 
}

export interface QuizTopic {
  topicName: string;
  questions: QuizQuestion[];
}
export interface QuizButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  onClick: () => void;
}