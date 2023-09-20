import { delay, motion } from "framer-motion"

//variants
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
}

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 z-30 h-screen right-full bg-[#2e2257] w-screen"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 z-20 h-screen right-full bg-[#3e2d71] w-screen"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 z-10 h-screen right-full bg-[#4b3792] w-screen"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}></motion.div>
    </>
  )
}

export default Transition
