import { RegisterAnnouncementCard } from "@/app/components/RegisterAnnouncementCard/RegisterAnnouncementCard"
import { RegisterFormCard } from "@/app/components/RegisterFormCard/RegisterFormCard"

export const metadata = {
  title: 'PetzZz - Sign-Up'
}

export default function SignUp() {
  return (
    <main className="flex justify-between grow px-32 py-10 bg-white">
      <RegisterFormCard/>
      <RegisterAnnouncementCard/>
    </main> 
  )
}
