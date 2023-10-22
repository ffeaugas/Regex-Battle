"use client";

import { useState } from "react";
import styles from "./CheatSheet.module.css";
import Image from "next/image";

export function CheatSheetButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={styles.cheatSheetButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src="/cheatsheet-icon.svg"
          width="40"
          height="40"
          alt="Cheatsheet icon"
        />
      </div>
      {isOpen ? <CheatSheet /> : null}
    </>
  );
}

export function CheatSheet() {
  return (
    <div className={styles.cheatSheet}>
      <p>Cheatsheet</p>
    </div>
  );
}
