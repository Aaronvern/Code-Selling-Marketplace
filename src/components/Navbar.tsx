import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 shadow-md bg-white flex justify-between">
      <Link href="/" className="font-bold text-lg">Bounty Market</Link>
      <Link href="/sell" className="bg-black text-white px-4 py-2 rounded">Sell</Link>
    </nav>
  );
}
