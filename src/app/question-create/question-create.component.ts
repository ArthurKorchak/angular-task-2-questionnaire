import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent {

  public questionCreateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.questionCreateForm = this.fb.group({
      text: null,
      type: null,
      answerVariants: this.fb.array(['', '']) ,
    });
  };

  get type(): FormArray {
    return this.questionCreateForm.get("type") as FormArray;
  };

  get answerVariants(): FormArray {
    return this.questionCreateForm.get("answerVariants") as FormArray;
  };

  public addVariant(): void {      
    this.answerVariants.push(new FormControl<string>(''));
    this.questionCreateForm.setErrors({'incorrect': true});
  };

  public removeVariant(event: any): void {
    this.answerVariants.removeAt(event.currentTarget.id);
  };

  public submit({value}: FormGroupDirective): void {
    const newQuestion = {
      id: Date.now() + (~~(Math.random() * 1e8)).toString(16),
      text: value.text,
      type: value.type,
      answerVariants: value.answerVariants,
      answer: null,
      createDate: Date.now(),
      answerDate: null
    };

    console.log(newQuestion)
  };
};
