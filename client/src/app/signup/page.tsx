"use client";

import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import { useState } from "react";

interface SignUpDatas {
  email: string;
  name: string;
  password: string;
}

export default function SignUp() {
  const [signUpDatas, setSignUpDatas] = useState<SignUpDatas>({
    email: "",
    name: "",
    password: "",
  });

  function handleChange(evt: any) {
    const { name, value } = evt.target;
    setSignUpDatas({ ...signUpDatas, [name]: value });
  }

  async function handleSubmit(evt: any) {
    evt.preventDefault();
    console.log("ACCES TO : ", `${process.env.BACKEND_URL} /auth/register`);
    const res = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...signUpDatas }),
    });
  }

  return (
    <>
      <Header />
      <div className={styles.signup}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={signUpDatas.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="name"
              value={signUpDatas.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={signUpDatas.password}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
