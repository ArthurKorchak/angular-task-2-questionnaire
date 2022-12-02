import { Component, Input } from '@angular/core';

import { Question } from 'src/app/_core/models/question.model';

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.scss']
})
export class SingleListComponent {
  
  @Input() title = "List";
  @Input() listType: 'unanswered' | 'answered' = 'unanswered';
  @Input() questions: Question[] | null = null;

  public filterByAnswer(questions: Question[]): Question[] {
    return this.listType === 'unanswered'
      ? questions.filter(item => !item.answer).sort((a, b) => b.createDate - a.createDate)
      : questions.filter(item => item.answer).sort((a, b) => (b.answerDate || 0) - (a.answerDate || 0));
  };
};
