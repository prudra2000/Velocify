'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => ( // Change index to slide
            <div className="embla__slide" key={index}>
              {slide} 
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row gap-5 justify-center items-center pt-4">
        <div className="flex justify-center gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex justify-center gap-2 bg-gray-100 rounded-full px-1 items-center py-1">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`text-xs rounded-full after:bg-gray-900 p-1 md:p-2 h-fit ${index === selectedIndex ? 'outline outline-2 outline-gray-200' : ''}`}
              children={
                <p></p>
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel