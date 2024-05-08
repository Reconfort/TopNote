import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/productComponent/ProductCard";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";
import Pic from "@/public/Picture.png"

export default async function Home() {
  const session = await getServerSession(authOption)
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="users">Users</Link>
      <Image src={Pic} fill alt="Mension house" className="object-cover" />
      <ProductCard />
    </main>
  );
}
