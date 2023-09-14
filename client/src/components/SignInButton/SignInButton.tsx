"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import styles from "./SignInButton.module.css";

const SignInButton = () => {
  const { data: session } = useSession();
  // console.log("SESSION :", session); //log
  if (session?.user) {
    return (
      <div>
        <p>{session.user.name}</p>
        <Link className={styles.authLink} href="/api/auth/signout">
          Sign out
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.auth}>
      <Link className={styles.authLink} href="/api/auth/signin">
        Sign in
      </Link>
      <Link className={styles.authLink} href="/signup">
        Sign up
      </Link>
    </div>
  );
};

export default SignInButton;
