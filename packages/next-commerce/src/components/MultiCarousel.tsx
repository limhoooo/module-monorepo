import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
};
import React from 'react';

type Props = {
  children: React.ReactNode;
  infinite?: boolean;
  autoPlay?: boolean;
  arrows?: boolean;
  partialVisbile?: boolean;
};
export default function MultiCarousel({
  children,
  infinite,
  autoPlay,
  arrows,
  partialVisbile,
}: Props) {
  return (
    <Carousel
      infinite={infinite}
      autoPlay={autoPlay}
      partialVisbile={partialVisbile}
      arrows={arrows}
      ssr={true}
      responsive={responsive}
      itemClass="m-2"
    >
      {children}
    </Carousel>
  );
}
