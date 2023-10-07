/*---------------------------------------------------------------------------*/
/*                                  ENUMS                                    */
/*---------------------------------------------------------------------------*/

export enum LevelType {
  MATCH = "Match",
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

export type ChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;
