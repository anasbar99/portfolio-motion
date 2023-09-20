// testimonial data
const reviewData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
]

// icons
import { FaQuoteLeft } from "react-icons/fa"

//swiper-components
import { Swiper, SwiperSlide } from "swiper/react"
//swiper-style
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"
//modules
import { Navigation, Pagination, Autoplay } from "swiper"
import Image from "next/image"

const ReviewSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      loop={true}
      centeredSlides={true}
      navigation={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="h-[240px] sm:h-[480px]">
      {reviewData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center h-full px-16 md:flex-row gap-x-8">
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col items-center justify-center">
                  <div className="mx-auto mb-2">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>
              <div className="flex flex-col justify-center flex-1 before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 max-w-[40rem]">
                <div className="mb-4">
                  <FaQuoteLeft className="mx-auto text-4xl xl:text-5xl text-white/20 md:mx-0" />
                </div>
                <div className="text-lg text-center md:text-left">{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ReviewSlider
