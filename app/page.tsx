import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOption } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import nextJs from "@/public/next.svg";

async function Home() {
  const session = await getServerSession(authOption);
  return (
    <>
      <main>
        <h1>سلام {session && <span>{session?.user?.name}</span>}</h1>
      </main>
    </>
  );
}

export default Home;
