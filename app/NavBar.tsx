import Link from "next/link";
import React from "react";
import AuthBtn from "./components/authBtn";

const Navbar = () => {
  return (
    <div className="flex bg-slate-200 p-[2rem] gap-8">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/upload">Add Files</Link>
      <AuthBtn/>
    </div>
  );
};

export default Navbar;
