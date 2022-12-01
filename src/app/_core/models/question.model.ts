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
    answer: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in cursus turpis massa tincidunt dui. Cursus turpis massa tincidunt dui. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Tincidunt ornare massa eget egestas purus.'],
    createDate: 1669716060000,
    answerDate: 1669716090000,
  },
  {
    id: '6',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in cursus turpis massa tincidunt dui. Cursus turpis massa tincidunt dui. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Tincidunt ornare massa eget egestas purus.',
    type: 'multiple',
    answerVariants: ['a', 'b', 'c', 'd'],
    answer: null,
    createDate: 1669716060500,
    answerDate: null,
  },
  {
    id: '7',
    text: 'Test text multiple',
    type: 'multiple',
    answerVariants: ['a', 'b', 'c', 'd'],
    answer: null,
    createDate: 1669716060500,
    answerDate: null,
  },
  {
    id: '8',
    text: 'Test text multiple',
    type: 'multiple',
    answerVariants: ['a', 'b', 'c', 'd'],
    answer: ['c', 'd'],
    createDate: 1669716060500,
    answerDate: 1669716060500,
  }
]