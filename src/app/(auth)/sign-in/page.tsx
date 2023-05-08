import Link from "next/link";
// import { cookies, headers } from "next/dist/client/components/headers";

export const metadata = {
  title: 'PetzZz - Sign-in'
}

export default function SignIn() {

  //* TODO
  // const cookies_ = cookies();
  // const headers_ = headers();

  return (
    <main className="">
      <Link href="/">
        <button>Home</button>
      </Link>
    </main> 
  )
}
