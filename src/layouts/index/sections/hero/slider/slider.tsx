import Image from 'next/image'
import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { cn } from '~/styles/utils'
import * as Img from './img'

const slides = [Img.CarouselImage1, Img.CarouselImage2, Img.CarouselImage3]

export function Slider() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide, index) => (
            <div key={index} className="keen-slider__slide">
              <Image src={slide} alt="teste" className="cursor-pointer" />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={
                currentSlide === instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-center gap-2.5 pt-2.5">
          {slides.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  instanceRef.current?.moveToIdx(index)
                }}
                className={cn(
                  'h-2.5 w-2.5 cursor-pointer rounded-[50%] border-none bg-[#c5c5c5] p-[5px]',
                  currentSlide === index && 'bg-black'
                )}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props: { disabled: boolean; left?: boolean; onClick: (e: any) => void }) {
  return (
    <svg
      onClick={props.onClick}
      className={cn(
        'absolute top-[50%] h-8 w-8 translate-y-[-50%] cursor-pointer fill-white',
        props.left ? 'left-[5px]' : 'left-auto right-[5px]'
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  )
}
