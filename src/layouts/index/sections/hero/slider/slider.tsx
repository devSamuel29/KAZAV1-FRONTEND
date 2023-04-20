import Image from 'next/image'
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import * as Img from './img'

export function Slider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,

    slideChanged() {
      return
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <Image src={Img.CarouselImage1} alt="carousel-image1" />
      </div>
      <div className="keen-slider__slide">
        <Image src={Img.CarouselImage2} alt="carousel-image2" />
      </div>
      <div className="keen-slider__slide">
        <Image src={Img.CarouselImage3} alt="carousel-image3" />
      </div>
    </div>
  )
}
