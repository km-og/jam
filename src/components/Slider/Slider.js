import SliderItem from "./SliderItem";
import "./Slider.css";
import { useEffect, useState } from "react";

function Slider({ catalogInfo, isActiveSection, onClick }) {
  const [scrollToTheSign, setScrollToTheSign] = useState(0);
  const [isWidthItem, setIsWidthItem] = useState(45);
  const [margin, setMargin] = useState({ marginLeft: 0 });

  function scrollByClick(number) {
    const numberSlide = number * -isWidthItem;
    setScrollToTheSign(numberSlide);
  }

  useEffect(() => {
    setMargin((prevMargin) => ({
      ...prevMargin,
      marginLeft: scrollToTheSign,
    }));
  }, [scrollToTheSign]);

  return (
    <ul className="slider__sections" style={margin}>
      {catalogInfo.map((item, ind) => (
        <SliderItem
          key={`${item.name + ind}`}
          number={ind}
          name={item.name}
          icon={item.icon}
          isActiveSection={isActiveSection}
          onClick={onClick}
          scrollByClick={scrollByClick}
        />
      ))}
    </ul>
  );
}

export default Slider;
