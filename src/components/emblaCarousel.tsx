"use client";
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
  autoplay?: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, autoplay } = props;
  const plugins = autoplay ? [Autoplay({ playOnInit: true, delay: 5000 })] : []
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)
  const [isPlaying, setIsPlaying] = useState(false)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);


  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    // Start autoplay on component mount
    autoplay.play()

    setIsPlaying(autoplay.isPlaying())
    emblaApi
      .on('autoplay:play', () => setIsPlaying(true))
      .on('autoplay:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoplay.isPlaying()))
  }, [emblaApi])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(
            (
              slide,
              index
            ) => (
              <div className="embla__slide" key={index}>
                {slide}
              </div>
            )
          )}
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
              className={`text-xs rounded-full after:bg-gray-900 p-1 md:p-2 h-fit ${
                index === selectedIndex
                  ? "outline outline-2 outline-gray-200"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;