import GameInterface from "@/components/Game/GameInterface/GameInterface";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import { CheatSheetButton } from "@/components/CheatSheet/CheatSheet";

export default function Tutorial() {
  return (
    <div className={styles.page}>
      <Navbar />
      <GameInterface />
      <CheatSheetButton />
    </div>
  );
}
