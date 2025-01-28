export interface QuestionProps {
    questionNumber: number;
    questionText: string;
    options: {
      label: string;
      text: string;
      isCorrect?: boolean;
      isSelected?: boolean;
    }[];
    correctAnswer: string;
    explanation: string;
  }
  
  export interface ScoreCardProps {
    icon?: string;
    label: string;
    value: string;
  }