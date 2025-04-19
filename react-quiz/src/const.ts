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

export enum AppActionTypes {
  DATA_RECEIVED = "DATA_RECEIVED",
  DATA_FAILED = "DATA_FAILED",
  START = "START",
  NEW_ANSWER = "NEW_ANSWER",
  NEXT_QUESTION = "NEXT_QUESTION",
  TICK = "TICK"
}
