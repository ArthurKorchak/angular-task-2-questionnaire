import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent {

  public questionCreateForm: FormGroup;
  public isCreatingPossible = false;

  constructor(private fb: FormBuilder) {
    this.questionCreateForm = this.fb.group({
      text: null,
      type: null,
      answerVariants: this.fb.array(['', '']) ,
    });
  };

  get text(): FormArray {
    return this.questionCreateForm.get("text") as FormArray;
  };

  get type(): FormArray {
    return this.questionCreateForm.get("type") as FormArray;
  };

  get answerVariants(): FormArray {
    return this.questionCreateForm.get("answerVariants") as FormArray;
  };

  addVariant(): void {      
    this.answerVariants.push(new FormControl<string>(''));
  };

  removeVariant(event: any): void {
    this.answerVariants.removeAt(event.currentTarget.id);
  };

  ngDoCheck(): void {
    (this.text.value && this.type.value && this.answerVariants.value[0] && this.answerVariants.value[1])
      ? this.isCreatingPossible = true
      : this.isCreatingPossible = false;
  };
};
