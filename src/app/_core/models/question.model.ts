export interface Question {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'open';
  answerVariants: string[];
  answer: string[] | null;
  createDate: number;
  answerDate: number | null;
};

export const testData: Question[] = [
  {
    id: '1',
    text: 'Test text single',
    type: 'single',
    answerVariants: ['a', 'b', 'c'],
    answer: null,
    createDate: 1669716099621,
    answerDate: null,
  },
  {
    id: '2',
    text: 'Test text single',
    type: 'single',
    answerVariants: ['a', 'b', 'c'],
    answer: ['b'],
    createDate: 1669716063000,
    answerDate: 1669716073000,
  },
  {
    id: '3',
    text: 'Test text multiple',
    type: 'multiple',
    answerVariants: ['a', 'b', 'c', 'd'],
    answer: ['b', 'd'],
    createDate: 1669716060500,
    answerDate: 1669716160500,
  },
  {
    id: '4',
    text: 'Test text open',
    type: 'open',
    answerVariants: [],
    answer: null,
    createDate: 1669716060000,
    answerDate: null,
  },
  {
    id: '5',
    text: 'Test text open',
    type: 'open',
    answerVariants: [],
    answer: ['Test open answer'],
    createDate: 1669716060000,
    answerDate: 1669716090000,
  },
  {
    id: '6',
    text: 'Test text multiple',
    type: 'multiple',
    answerVariants: ['a', 'b', 'c', 'd'],
    answer: null,
    createDate: 1669716060500,
    answerDate: null,
  }
]