"use client";

import Link from "next/link";
import SignInButton from "../SignInButton/SignInButton";
import styles from "./Header.module.css";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className={styles.header}>
      <h1>Regex Battle</h1>
      <Link href="/">Home</Link>
      <Link href="/tests">Tests</Link>
      {session?.user ? <Link href="/dashboard">Dashboard</Link> : undefined}
      <SignInButton />
    </header>
  );
}
