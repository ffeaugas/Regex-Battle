"use client";

import styles from "./GameInterface.module.css";
import { useEffect, useState } from "react";
import { Level } from "@/components/Level";
import { getTutorialLevels } from "../utils";

export default function GameInterface() {
  const [levels, setLevels] = useState<Level[]>([]);
  const [currentLevel, setCurrentLevel] = useState<number>(0);

  useEffect(() => {
    getTutorialLevels().then((levels: Level[]) => setLevels(levels));
  }, []);

  if (!levels.length) return <>Loading...</>;

  return (
    <div className={styles.gameInterface}>
      <div>
        <p>Text</p>
      </div>
      <div>
        <p>expected output</p>
      </div>
    </div>
  );
}
