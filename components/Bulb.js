import Image from "next/image"

const Bulb = () => {
  return (
    <div className="absolute z-10 duration-75 -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse w-[200px] xl:w-[260px]">
      <Image src={"/Bulb.png"} width={260} height={200} alt="" className="w-full h-full" />
    </div>
  )
}

export default Bulb
