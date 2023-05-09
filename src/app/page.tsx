import { redirect } from "next/navigation";

export default function Home() {

  const isAuthenticated = false

  if (!isAuthenticated) {
    redirect('/sign-up')
    return <></>
  };

  return (
    <main className="flex items-center justify-around" >
    </main >
  )
}
