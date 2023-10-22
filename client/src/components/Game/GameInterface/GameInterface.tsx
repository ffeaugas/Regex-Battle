"use client";

import { useEffect, useState } from "react";
import styles from "./GameInterface.module.css";
import { Level } from "@/components/Level";

export default function GameInterface() {
  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    getTutorialLevels().then((levels: Level[]) => setLevels(levels));
  }, []);

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
