function SliderItem({
  name,
  icon,
  isActiveSection,
  onClick,
  scrollByClick,
  number,
}) {
  function handleClick(e) {
    e.stopPropagation();
    onClick({ newProduct: name });
    scrollByClick(number);
  }

  return (
    <li
      className={`slider__item cursor ${
        isActiveSection === name ? "slider__item_type_active" : ""
      }`}
      onClick={handleClick}
    >
      <img className="slider__icon" src={icon} alt={name} />
      <h2
        className={`slider__title ${
          isActiveSection === name ? "slider__title_type_active" : ""
        }`}
      >
        {name}
      </h2>
    </li>
  );
}

export default SliderItem;
