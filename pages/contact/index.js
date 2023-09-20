import Circles from "/components/Circles"
import { BsArrowRight } from "react-icons/bs"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container flex items-center justify-center h-full py-32 mx-auto text-center xl:text-left">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-12 text-center h2">
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col flex-1 w-full gap-6 mx-auto">
            <div className="flex w-full gap-x-6">
              <input type="text" placeholder="Name" className="input" />
              <input type="text" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />
            <textarea placeholder="Message" className="textarea"></textarea>
            <button className="border rounded-full max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent border-white/50 btn group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                Let's talk
              </span>
              <div className="relative flex items-center justify-center">
                <span className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[18px] group-hover:-translate-x-12">
                  Send
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] group-hover:-translate-x-2 group-hover:delay-150" />
              </div>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact
