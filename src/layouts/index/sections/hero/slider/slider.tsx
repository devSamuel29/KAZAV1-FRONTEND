import Image from 'next/image'
import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ArrowRight } from '~/components/common/navbar/svg'
import * as Img from './img'

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    loop: true,
  })

  function handlePreviousPhoto() {
    instanceRef.current?.prev()
  }

  function handleNextPhoto() {
    instanceRef.current?.next()
  }

  return (
    <>
      <div className="navigation-wrapper relative mx-auto w-[90%] max-w-[1280px]">
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
          <ArrowRight className="absolute" />
        </div>
        {loaded && instanceRef.current && (
          <>
            {/* <Arrow
              left
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={
                currentSlide === instanceRef.current.track.details.slides.length - 1
              }
            /> */}
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}
