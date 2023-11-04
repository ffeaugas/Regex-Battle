/*---------------------------------------------------------------------------*/
/*                                  ENUMS                                    */
/*---------------------------------------------------------------------------*/

export enum LevelType {
  MATCHONE = "MATCHONE",
  MATCHALL = "MATCHALL",
  REPLACE = "REPLACE",
}

/*---------------------------------------------------------------------------*/
/*                                  TYPES                                    */
/*---------------------------------------------------------------------------*/

export type LevelForm = {
  title: string;
  type: LevelType;
  statement: string;
  input: string;
  output: string;
  solution: string;
};

export interface Level extends LevelForm {
  id: string;
}

export type Feedback = {
  status: "FAILURE" | "SUCCESS";
  message: string;
};

export type ChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;
