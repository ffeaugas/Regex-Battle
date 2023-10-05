"use client";

import styles from "./LevelCreator.module.css";
import { FormEvent, ReactNode, useState } from "react";

enum LevelType {
  MATCH = "Match",
}

type LevelCreatorProps = {};

type LevelForm = {
  title: string;
  type: LevelType;
  statement: string;
  input: string;
  output: string;
  solution: string;
};

type ChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

const defaultForm: LevelForm = {
  title: "Where the hell are my keys ?!",
  type: LevelType.MATCH,
  statement: "Write a Regex that matches John's key",
  input:
    "Oh god I lost my bike lock key in this heap of old keys... what do we have here ? Key-JNNOOOJJOOOOONNNNNNOOOHJ Key-JNNOOOJJOOOOONNNNNNUOOHJ Key-JNNQOOJJOOOOONNNNNNUOOHJ",
  output: "Key-JNNOOOJJOOOOONNNNNNOOOHJ",
  solution: "d{a,b}",
};

export default function LevelCreator({}: LevelCreatorProps): ReactNode {
  const [form, setForm] = useState<LevelForm>(defaultForm);

  function handleChange(e: ChangeEvent): void {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log("FORM : ", form);
  }

  return (
    <div className={styles.levelCreator}>
      <h3>Create a level</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
        ></input>
        <label htmlFor="levelType">Type :</label>
        <select id="levelType" name="levelType" onChange={handleChange}>
          <option value="Match">Match</option>
        </select>
        <label htmlFor="statement">Statement</label>
        <input
          type="text"
          id="statement"
          name="statement"
          value={form.statement}
          onChange={handleChange}
        ></input>
        <label htmlFor="input">Input</label>
        <textarea
          id="input"
          name="input"
          value={form.input}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="output">Output expected</label>
        <textarea
          id="output"
          name="output"
          value={form.output}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="solution">Solution</label>
        <input
          type="text"
          id="solution"
          name="solution"
          value={form.solution}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
