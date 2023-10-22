import Navbar from "@/components/Navbar/Navbar";
import styles from "@/styles/page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.mainFrame}>
        <h1>RegexBattle</h1>
        <p>Improve your Regex skills by challenging your friends</p>
        <button>
          <Link href="/game/tutorial">Start now</Link>
        </button>
        <Link href="/api/auth/signin">Or login to your account</Link>
      </main>
    </>
  );
}
