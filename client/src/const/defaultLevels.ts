import { LevelForm, LevelType } from "@/components/Level";

export const defaultForm: LevelForm = {
  title: "Where the hell are my keys ?!",
  type: LevelType.MATCHONE,
  statement: "Write a Regex that matches John's key",
  input:
    "Key-JNNOOOJJOOOOONNNNNNOOOHJ\nKey-JNNOOOJJOOOOONNNNNNUOOHJ\nKey-JNNQOOJJOOOOONNNNNNUOOHJ",
  output: "Key-JNNOOOJJOOOOONNNNNNOOOHJ",
  solution: "Key-[JOHN]*$",
};
