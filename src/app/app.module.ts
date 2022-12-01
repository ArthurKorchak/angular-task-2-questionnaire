import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { mainReducer } from './_core/state/main.reducer';
import { QuestionCardComponent } from './question-management/question-card/question-card.component';
import { QuestionsComponent } from './question-management/questions/questions.component';
import { HeaderComponent } from './components/header/header.component';
import { SingleListComponent } from './questions-list/single-list/single-list.component';
import { ListItemComponent } from './questions-list/list-item/list-item.component';
import { QuestionsListComponent } from './questions-list/questions-list/questions-list.component';
import { QuestionCreateComponent } from './question-create/question-create.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionCardComponent,
    QuestionsComponent,
    HeaderComponent,
    SingleListComponent,
    ListItemComponent,
    QuestionsListComponent,
    QuestionCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    // MatFormFieldControl,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({ main: mainReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
