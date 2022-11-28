export interface Question {
  id: string;
  type: 'single' | 'multiple' | 'open';
  answerVariants: string[];
  answer: string[] | null;
};
