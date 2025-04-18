export enum Status {
  LOADING = "LOADING",
  ERROR = "ERROR",
  READY = "READY",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED"
}

export interface QuestionInterface {
  id: string;
  points: number;
  correctOption: number;
  question: string;
  options: string[];
}
