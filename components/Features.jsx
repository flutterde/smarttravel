import React from "react"
import Title from "./Title"
import Image from "next/image"

const Features = () => {
  return (
    <section className="max-container padding-container py-20 gap-16 flex md:flex-row xs:flex-col">
      {/* LEFT */}
      <div className="xs:w-full md:w-1/2 flex flex-col gap-8">
        <div className="top">
          <Title title="Key features" subtitle="We offer best services" />
          <p className="mt-8 opacity-50">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        </div>
        <div className="bottom">
          <FeaturesCard icon="/icon-feature.png" title="We offer best services" subtitle="Lorem Ipsum is not simply random text" />
          <FeaturesCard icon="/icon-feature3.png" title="Get discounted coupons" subtitle="Lorem Ipsum is not simply random text" />
        </div>
      </div>
    </section>
  )
}

const FeaturesCard = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center xs:w-full xl:w-3/4 gap-4 p-6 rounded-3xl hover:border">
      <div className="left">
        <Image src={icon} alt="icon" width={80} height={80} />
      </div>

      <div>
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p className="text-lg opacity-50">{subtitle}</p>
      </div>
    </div>
  )
}

export default Features
