import { Answer } from "./answer";

export class Question {
  id: number = 0;
  questions: number[];
  answers: Answer[];
  points: number = 0;
  active: boolean;
}
