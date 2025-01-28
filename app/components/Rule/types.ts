// types.ts
export interface InstructionSectionProps {
  title: string;
  content: string[];
}

export interface QuizInstructionsProps {
  title: string;
  subtitle: string;
  sections: InstructionSectionProps[];
}
