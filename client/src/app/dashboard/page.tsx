"use client";

import Header from "@/components/Header/Header";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <>
      <Header />
      <p>cc c le dashboard ici</p>
      <Link href={`/dashboard/user/${session?.user?.id}`}>Profile</Link>
    </>
  );
}
