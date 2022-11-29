import { Component, OnInit } from '@angular/core';

import { testData } from 'src/app/_core/models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions = testData
  constructor() { }

  ngOnInit(): void {
  }

}
