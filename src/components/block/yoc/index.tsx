import Slider from 'react-slick';
import { YEAROFCOLORS } from '@/constants/yoc';

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function YearOfColor() {
  return (
    <article className="w-1/2 h-auto">
      <Slider
        dots={false}
        infinite
        speed={1000}
        slidesToShow={4}
        slidesToScroll={1}
      >
        {YEAROFCOLORS.map((_element, _idx) => {
          console.log(_element);
          return (
            <div
              key={_idx}
              className="w-1 h-1"
              style={{ backgroundColor: _element.hex }}
            ></div>
          );
        })}
      </Slider>
    </article>
  );
}
