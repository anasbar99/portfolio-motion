import Link from "next/link"

//line icons
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri"
import { FiFacebook, FiLinkedin } from "react-icons/fi"
//icons
//!import { FaYoutube, FaFacebookSquare, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

const Socials = () => {
  return (
    <div className="flex items-center text-lg xl:text-3xl">
      <Link
        href={"https://www.youtube.com/@sanchezzaja"}
        target="_blank"
        className="px-3 transition-all duration-300 hover:text-accent">
        <RiYoutubeLine />
      </Link>
      <Link
        href={"https://www.instagram.com/anasbar_/"}
        target="_blank"
        className="px-3 transition-all duration-300 hover:text-accent">
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/anasbar01"}
        target="_blank"
        className="px-3 transition-all duration-300 hover:text-accent">
        <FiFacebook />
      </Link>
      <Link
        href={"https://www.facebook.com/anasbar01"}
        target="_blank"
        className="px-3 transition-all duration-300 hover:text-accent">
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/muhammad-anas-mbr/"}
        target="_blank"
        className="px-3 transition-all duration-300 hover:text-accent">
        <FiLinkedin />
      </Link>
    </div>
  )
}

export default Socials
