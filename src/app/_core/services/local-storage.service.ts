import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public readLS(): Question[] | undefined {
    const LS = localStorage.getItem('questions');
    return LS ? JSON.parse(LS) : undefined;
  };

  public writeLS(questions: Question[]): void {
    localStorage.setItem('questions', JSON.stringify(questions));
  };
};