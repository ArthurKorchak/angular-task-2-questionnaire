import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionCreateComponent } from './question-create/question-create.component';
import { QuestionsComponent } from './question-management/questions/questions.component';
import { QuestionsListComponent } from './questions-list/questions-list/questions-list.component';

const routes: Routes = [
  { path: 'management', component: QuestionsComponent },
  { path: 'create', component: QuestionCreateComponent },
  { path: 'list', component: QuestionsListComponent },
  { path: '**', redirectTo: 'management', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
