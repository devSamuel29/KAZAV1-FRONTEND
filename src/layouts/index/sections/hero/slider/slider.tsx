import Image from 'next/image'
import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import * as Img from './img'

export function Slider() {
  const [ref] = useKeenSlider<HTMLDivElement>()
  return (
    <div ref={ref} className="keen-slider max-w-2xl m-auto">
      <Image
        className="keen-slider__slide"
        src={Img.CarouselImage1}
        alt="carousel-image1"
      />
      <Image
        className="keen-slider__slide"
        src={Img.CarouselImage2}
        alt="carousel-image2"
      />
      <Image
        className="keen-slider__slide"
        src={Img.CarouselImage3}
        alt="carousel-image3"
      />
    </div>
  )
}
