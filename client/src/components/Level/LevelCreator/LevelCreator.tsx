"use client";

import { ChangeEvent, Feedback, LevelForm, LevelType } from "..";
import styles from "./LevelCreator.module.css";
import { FormEvent, ReactNode, useState } from "react";
import { createLevel } from "../utils";
import { defaultForm } from "@/const/defaultLevels";
import HelpTip from "@/components/Utils/Help/HelpTip";

export default function LevelCreator(): ReactNode {
  const [form, setForm] = useState<LevelForm>(defaultForm);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  function handleChange(e: ChangeEvent) {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorMessage: Feedback | null = await createLevel(form);
    if (errorMessage) setFeedback(errorMessage);
    else
      setFeedback({
        status: "SUCCESS",
        message: "Level successfully created !",
      });
  }

  return (
    <div className={styles.levelCreator}>
      <h3>Create a level</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.radioInputs}>
          <label className={styles.radio}>
            <input
              type="radio"
              name="type"
              value={LevelType.MATCHONE}
              onChange={handleChange}
              checked={form.type === LevelType.MATCHONE}
            ></input>
            <span className={styles.name}>MATCH ONE</span>
          </label>
          <label className={styles.radio}>
            <input
              type="radio"
              name="type"
              value={LevelType.MATCHALL}
              onChange={handleChange}
              checked={form.type === LevelType.MATCHALL}
            ></input>
            <span className={styles.name}>MATCH ALL</span>
          </label>
          <label className={styles.radio}>
            <input
              type="radio"
              name="type"
              value={LevelType.REPLACE}
              onChange={handleChange}
              checked={form.type === LevelType.REPLACE}
            ></input>
            <span className={styles.name}>REPLACE</span>
          </label>
        </div>
        <div>
          <label htmlFor="title">Title :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="statement">Statement</label>
          <input
            type="text"
            id="statement"
            name="statement"
            value={form.statement}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="input">Input</label>
          <textarea
            id="input"
            name="input"
            value={form.input}
            onChange={handleChange}
            spellCheck="false"
          ></textarea>
        </div>
        <div>
          <HelpTip text="Output of the regex solution applied on the input. MATCH ALL mode output is an array of all the distinct matched expressions">
            <label htmlFor="output">Output expected</label>
          </HelpTip>
          <textarea
            id="output"
            name="output"
            value={form.output}
            onChange={handleChange}
            spellCheck="false"
          ></textarea>
        </div>
        <div>
          <HelpTip text="Regex that will match or replace the input to get the expected output">
            <label htmlFor="solution">Solution</label>
          </HelpTip>
          <input
            type="text"
            id="solution"
            name="solution"
            value={form.solution}
            onChange={handleChange}
          ></input>
        </div>
        <div className={styles.submit}>
          <button type="submit">Submit</button>
          <p
            className={
              feedback?.status === "FAILURE"
                ? styles.errorMessage
                : styles.successMessage
            }
          >
            <b>{feedback?.message}</b>
          </p>
        </div>
      </form>
    </div>
  );
}
