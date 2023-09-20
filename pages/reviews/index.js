import ReviewSlider from "../../components/ReviewSlider"

import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Reviews = () => {
  return (
    <div className="h-full py-32 text-center bg-primary/30">
      <div className="container flex flex-col justify-center h-full mx-auto">
        <motion.h2 variants={fadeIn("down", 0.2)} initial="hidden" animate="show" exit="hidden" className="mb-8 h2 xl:mb-0">
          What clients <span className="text-accent">say.</span>
        </motion.h2>
        <motion.div variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden">
          <ReviewSlider />
        </motion.div>
      </div>
    </div>
  )
}

export default Reviews
