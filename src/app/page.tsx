import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-around">
      <Link href="user/sign-in">
        <button>Sign in</button>
      </Link>
      <Link href="user/sign-up">
        <button>Sign up</button>
      </Link>
    </main>
  )
}
