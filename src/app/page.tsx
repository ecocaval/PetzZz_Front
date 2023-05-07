import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-around">
      <Link href="/sign-in">
        <button>Sign in</button>
      </Link>
      <Link href="/sign-up">
        <button>Sign up</button>
      </Link>
    </main>
  )
}
