"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";

const AuthBtn = () => {
  const { status, data: session } = useSession();
  return (
    <>
      {status === "loading" && (
        <div>
          <span className="loading loading-spinner loading-md"></span>
        </div>
      )}
      {status === "authenticated" && (
        <div className="flex gap-8 items-center">
        <p>{session.user!.name}</p>
        <Link href="/api/auth/signout" className="text-red-500">Signout</Link>
        
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
    </>
  );
}

export default AuthBtn