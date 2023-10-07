"use client";

import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import LevelList from "@/components/Level/LevelList/LevelList";
import LevelCreator from "@/components/Level/LevelCreator/LevelCreator";

export default function Create() {
  return (
    <>
      <Navbar />
      <div className={styles.create}>
        <LevelList />
        <LevelCreator />
      </div>
    </>
  );
}
