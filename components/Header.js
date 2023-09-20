import Image from "next/image"
import Link from "next/link"
import Socials from "../components/Socials"

const Header = () => {
  return (
    <header className="absolute z-30 flex items-center w-full px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between py-8 lg:flex-row gap-y-6">
          <Link href={"/"}>
            <Image src={"/logo.svg"} width={220} height={48} alt="" priority={true} />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header
