import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Question } from 'src/app/_core/models/question.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() question: Question | null = null;
  @Input() isBlocked: boolean = false;

  public questionForm: FormGroup | null = null;

  constructor(private formBuilder: FormBuilder) { };

  answerHandle(form: FormGroupDirective): void {
    const answer = [];

    if (this.question?.type === 'single') {
      answer.push(form.value.single);
    } else if (this.question?.type === 'multiple') {
      form.value.multiple.forEach((item: boolean, idx: number) => {
        if (item) answer.push(this.question?.answerVariants[idx]);
      });
    } else if (this.question?.type === 'open') {
      answer.push(form.value.open);
    };

    const answeredQuestion = {
      ...this.question,
      answer,
      answerDate: Date.now()
    };
    
    console.log(answeredQuestion);
  };
  
  toUnansweredHandle(): void {
    const unansweredQuestion = {
      ...this.question,
      answer: null,
      answerDate: null
    };

    console.log(unansweredQuestion);
  };
  
  dateFormatter(date: number): string {
    return new Date(date).toLocaleString();
  };

  ngOnInit(): void {
    if (this.question?.answerVariants) {
      this.questionForm = this.formBuilder.group({
        single: '',
        multiple: this.formBuilder.array(
          this.question.answerVariants.map(item => {
            return {
              value: !!this.question?.answer?.includes(item),
              disabled: this.isBlocked
            };
          })
        ),
        open: ''
      });
    };
  };
};
