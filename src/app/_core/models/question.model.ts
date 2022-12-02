export interface Question {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'open';
  answerVariants: string[];
  answer: string[] | null;
  createDate: number;
  answerDate: number | null;
};
