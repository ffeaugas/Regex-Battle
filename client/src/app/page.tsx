import styles from "@/styles/page.module.css";
import Header from "@/components/Header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.mainFrame}>
        <h1>RegexBattle</h1>
        <p>Improve your Regex skills by challenging your friends</p>
        <button>Start now</button>
        <Link href="/api/auth/signin">Or login to your account</Link>
      </main>
    </>
  );
}
