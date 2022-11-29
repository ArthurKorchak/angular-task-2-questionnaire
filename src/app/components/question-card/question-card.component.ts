import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/_core/models/question.model';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {

  question: Question = {
    id: 'sadsdad',
    text: 'Lorem ipsum',
    type: 'multiple',
    answerVariants: ['a', 'b', 'c', 'd'],
    answer: ['b'],
    createDate: 1669716099621,
    answerDate: null
  };
  
  createDate = new Date(this.question.createDate);

  constructor() { }

  ngOnInit(): void {

  }

}
