import { Component, Input } from '@angular/core';
import { Question } from 'src/app/_core/models/question.model';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent  {

  @Input() question: Question | null = null;

  dateFormatter(date: number): string {
    return new Date(date).toLocaleString();
  };
};
