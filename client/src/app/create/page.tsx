import LevelCreator from "@/components/LevelCreator/LevelCreator";
import LevelList from "@/components/LevelList/LevelList";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";

export default function Create() {
  return (
    <>
      <Navbar />
      <div className={styles.create}>
        <LevelList levels={[]} />
        <LevelCreator />
      </div>
    </>
  );
}
