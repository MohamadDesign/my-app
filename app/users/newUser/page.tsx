"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NewUser = () => {
  const route = useRouter();
  return (
    <>
      <button onClick={() => route.push("/users")} className="btn btn-primary">
        Create New User
      </button>
      <Link href="/users" className="btn">
        Back to the table
      </Link>
    </>
  );
};

export default NewUser;
