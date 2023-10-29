"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();
  return (
    <>
      <div className="flex bg-slate-200 p-3 space-x-3">
        <Link href="/" className="mr-4">
          Home Page
        </Link>
        <Link href="/users">User Page</Link>
        <Link href="/products">Product Page</Link>
        {status === "loading" && <div>...Loading</div>}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
        {status === "authenticated" && (
          <div>
            <Link href="/api/auth/signout" className="ml-3">
              Sign Out
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
