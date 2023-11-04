"use client";

import Link from "next/link";
import SignInButton from "../SignInButton/SignInButton";
import styles from "./Navbar.module.css";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import SocketContext from "@/context/socket.context";
import { Socket } from "socket.io-client";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className={styles.navbar}>
      <Link className={styles.link} href="/">
        <h2>RegexBattle.io</h2>
      </Link>
      <Link className={styles.link} href="/social">
        Social
      </Link>
      <Link className={styles.link} href="/create">
        Create
      </Link>
      {session?.user ? (
        <Link className={styles.link} href="/statistics">
          Statistics
        </Link>
      ) : undefined}
      <SignInButton />
    </header>
  );
}
