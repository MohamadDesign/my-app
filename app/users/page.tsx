import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";
interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <div>User List </div>
      <Link href="/users/newUser" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>data is loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UserPage;
