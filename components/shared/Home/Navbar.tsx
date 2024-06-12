import { Button } from "@/components/ui/button"
import Logo from "../Logo"
import Link from "next/link"

export default function HomeNavbar() {
  return (
    <div className="flex items-center w-full p-2 px-6 justify-around">
        <Logo />
        <div className="hidden sm:flex gap-3 items-center justify-center">
            <Button>
              <Link href={"#Home"}>
              Home
              </Link>
            </Button>
            <Button>
              <Link href={"#features"}>
              Features
              </Link>
            </Button>
            <Button>About</Button>
            <Button>
              <Link href={"#team"}>Team</Link>
            </Button>
        </div>
        <div className="flex gap-2">
            <Link className="link-button-dark" href={'/login'}>Signin</Link>
            <Link className="link-button-dark" href={'/register'}>Signup</Link>
        </div>
    </div>
  )
}
