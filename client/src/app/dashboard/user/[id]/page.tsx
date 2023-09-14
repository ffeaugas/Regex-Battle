import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { useEffect, useState } from "react";

interface User {
  id: number;
  createdAt: Date;
  email: string;
  name: string;
}

type ProfilePageProps = {
  params: {
    id: string;
  };
};

export default async function ProfilePage(props: ProfilePageProps) {
  const session = await getServerSession(authOptions);
  const user = await getProfile(session, props.params.id);

  if (!user) return <p>Error</p>;

  return (
    <>
      <p>{user.id}</p>
      <p>{user.createdAt.toString()}</p>
      <p>{user.email}</p>
      <p>{user.name}</p>
    </>
  );
}

async function getProfile(
  session: Session | null,
  id: string
): Promise<User | undefined> {
  try {
    const res = await fetch(`http://localhost:3001/user/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${session?.backendTokens.accessToken}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (res.ok) {
      const user = await res.json();
      console.log("---------------USE: ", user);
      return user;
    } else {
      console.log("error: ", res.statusText);
    }
  } catch (error) {
    console.log(error);
  }
  return undefined;
}
