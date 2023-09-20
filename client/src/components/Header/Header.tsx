"use client";

import Link from "next/link";
import SignInButton from "../SignInButton/SignInButton";
import styles from "./Header.module.css";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import SocketContext from "@/context/socket.context";
import { Socket } from "socket.io-client";

export default function Header() {
  const { data: session } = useSession();

  useEffect(() => {}, []);

  return (
    <header className={styles.header}>
      <h2>RegexBattle.io</h2>
      <Link href="/">Home</Link>
      <Link href="/social">Social</Link>
      {session?.user ? <Link href="/dashboard">Dashboard</Link> : undefined}
      <SignInButton />
    </header>
  );
}
