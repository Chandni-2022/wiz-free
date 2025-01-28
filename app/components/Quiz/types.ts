export interface AnswerOption {
    id: string;
    text: string;
    value: string;
  }
  
  export interface QuizQuestion {
    id: string;
    questionNumber: number;
    questionText: string;
    options: AnswerOption[];
  }