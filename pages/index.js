import Image from "next/image"

//components
import ParticlesContainer from "../components/ParticlesContainer"
import ProjectsBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"
//framer motion
import { easeInOut, motion } from "framer-motion"
//Variants
import { fadeIn } from "../variants"

const Home = () => {
  return (
    <div className="h-full bg-primary/60">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className="container flex flex-col justify-center h-full mx-auto text-center xl:pt-40 xl:text-left">
          <motion.h1 variants={fadeIn("down", 0.2)} initial="hidden" animate="show" exit="hidden" className="h1">
            Transforming Ideas <br /> Into <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illo quam fuga commodi, iste architecto amet voluptas
            eaque consequatur et!
          </motion.p>
          <div className="relative flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="absolute w-full h-full bg-none xl:bg-right xl:bg-explosion xl:bg-cover xl:bg-no-repeat mix-blend-color-dodge translate-z-0 "></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
