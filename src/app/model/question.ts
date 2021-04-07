import { Answer } from "./answer";

export class Question {
  id: number = 0;
  questions: string = '';
  answers: Answer[] = [];
  points: number = 1;
  active: boolean = true;
}
