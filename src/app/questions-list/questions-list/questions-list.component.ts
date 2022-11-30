import { Component, OnInit } from '@angular/core';
import { testData } from 'src/app/_core/models/question.model';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  questions = testData

  constructor() { }

  ngOnInit(): void {
  }

}
