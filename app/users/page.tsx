import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <Link href="/users/new" className="btn">
        New Users
      </Link>
      <Suspense
        fallback={<span className="loading loading-dots loading-md"></span>}
      >
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
