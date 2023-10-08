"use client";

import { ChangeEvent, LevelForm, LevelType } from "..";
import styles from "./LevelCreator.module.css";
import { FormEvent, ReactNode, useState } from "react";
import { createLevel } from "../utils";

const defaultForm: LevelForm = {
  title: "Where the hell are my keys ?!",
  type: LevelType.MATCH,
  statement: "Write a Regex that matches John's key",
  input:
    "Key-JNNOOOJJOOOOONNNNNNOOOHJ\nKey-JNNOOOJJOOOOONNNNNNUOOHJ\nKey-JNNQOOJJOOOOONNNNNNUOOHJ",
  output: "Key-JNNOOOJJOOOOONNNNNNOOOHJ",
  solution: "Key-[JOHN]*$",
};

export default function LevelCreator(): ReactNode {
  const [form, setForm] = useState<LevelForm>(defaultForm);
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleChange(e: ChangeEvent) {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorMessage: string | null = await createLevel(form);
    if (errorMessage) setErrorMessage(errorMessage);
    else setErrorMessage("");
    console.log("error message :", errorMessage);
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
        <div className={styles.submit}>
          <button type="submit">Submit</button>
          <p>
            <i>{errorMessage}</i>
          </p>
        </div>
      </form>
    </div>
  );
}