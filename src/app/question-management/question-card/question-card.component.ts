import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/_core/models/question.model';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent  {

  @Input() question: Question | null = null;

  constructor(private router: Router) {}

  handleDelete() {

  };

  handleEdit() {
    this.router.navigate([`edit/${this.question?.id}`])
  };

  dateFormatter(date: number): string {
    return new Date(date).toLocaleString();
  };
};
