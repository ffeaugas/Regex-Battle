"use client";

import Navbar from "@/components/Navbar/Navbar";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <>
      <Navbar />
      <p>cc c le dashboard ici</p>
      <Link href={`/statistics/user/${session?.user?.id}`}>Profile</Link>
    </>
  );
}
