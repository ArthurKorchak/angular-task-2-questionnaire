import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/_core/models/question.model';

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.scss']
})
export class SingleListComponent implements OnInit {
  
  @Input() title = "List";
  @Input() listType: 'unanswered' | 'answered' = 'unanswered';
  @Input() questions: Question[] | null = null;

  constructor() { }

  filterByAnswer(questions: Question[]): Question[] {
    return this.listType === 'unanswered'
      ? questions.filter(item => !item.answer)
      : questions.filter(item => item.answer);
  };

  ngOnInit(): void {

  };

};
