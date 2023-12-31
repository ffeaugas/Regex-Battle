import { useEffect, useState } from "react";
import { Level } from "..";
import styles from "./LevelList.module.css";
import { getLevels } from "../utils";

type LevelItemProps = {
  level: Level;
};

export default function LevelList() {
  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    getLevels().then((res) => setLevels(res));
  }, []);

  return (
    <div className={styles.levelList}>
      <h3>Level list</h3>
      {levels.length
        ? levels.map((level: Level) => (
            <LevelItem key={level.id} level={level} isOpen />
          ))
        : null}
    </div>
  );
}

function LevelItem({ level }: LevelItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={`${styles.levelItem}  ${isOpen ? styles.active : ""}`}>
      <div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        <p>{level.title}</p>
        <p className={`${styles.arrow}`}>&#62;</p>
      </div>
      <div className={styles.content}>
        <div>
          <p>{level.statement}</p>
          <p>{level.type}</p>
          <p>{level.input}</p>
          <p>{level.output}</p>
        </div>
      </div>
    </div>
  );
}

// {isOpen ? (
//   <div className={styles.content}>
//     <p>{level.statement}</p>
//     <p>{level.type}</p>
//     <p>{level.input}</p>
//     <p>{level.output}</p>
//   </div>
// ) : null}
