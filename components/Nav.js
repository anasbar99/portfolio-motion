// icons
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from "react-icons/hi2"

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "reviews",
    path: "/reviews",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
]

//next Link
import Link from "next/link"
//next Router
import { useRouter } from "next/router"
const Nav = () => {
  const router = useRouter()
  const pathname = router.pathname
  return (
    <nav className="fixed bottom-0 flex flex-col items-center mt-auto xl:right-[2%] h-max xl:justify-center gap-y-4 z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {}
      <div className="flex items-center justify-between w-full px-2 py-3 bg-white/10 overflow-y-hidden xl:h-max xl:flex-col xl:justify-center gap-y-0 md:px-40 xl:px-0 backdrop-blur-sm xl:text-xl xl:rounded-full h-[80px]">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent overflow-hidden"
              } relative flex items-center justify-center group hover:text-accent xl:hover:bg-white/5 transition-all duration-300 w-full h-full p-4 text-3xl md:text-4xl`}
              href={link.path}
              key={index}>
              {/* tooltip */}
              <div className="absolute right-0 hidden pr-20 xl:group-hover:flex">
                <div className="relative flex items-center bg-white text-primary p-[6px] rounded-[4px]">
                  <div className="text-[16px] leading-none font-semibold capitalize">{link.name}</div>
                  {/* triangle */}
                  <div className="border-l-8 border-solid border-y-transparent border-y-[6px] border-r-0 absolute -right-2 border-l-white"></div>
                </div>
              </div>

              {/* icon */}
              {link.icon}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Nav
