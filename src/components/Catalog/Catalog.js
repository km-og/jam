import "./Catalog.css";
import { useState } from "react";
import { catalogInfo, donutsInfo } from "../../utils/constants";
import CatalogCard from "../CatalogCard/CatalogCard";
import Slider from "../Slider/Slider";
import SearchForm from "../SearchForm/SearchForm";

function Catalog() {
  const [isActiveSection, setIsActiveSection] = useState("Donuts");
  const [isCardInfo, setIsCardInfo] = useState(donutsInfo);
  const [isProductCount, setIsProductCount] = useState([]);

  function renderProducts(product) {
    switch (product) {
      case "Donuts":
        setIsCardInfo(donutsInfo);
        break;
      case "Сakes":
        setIsCardInfo("");
        break;
      case "Candies":
        setIsCardInfo("");
        break;
      case "Croissants":
        setIsCardInfo("");
        break;
      case "Another":
        setIsCardInfo("");
        break;
      default:
        setIsCardInfo("");
    }
  }

  function handleClickOnAnotherProduct({ newProduct }) {
    setIsActiveSection(newProduct);
    renderProducts(newProduct);
  }

  function updateCounter({ title, inCart }) {
    if (!inCart) {
      setIsProductCount([...isProductCount, { product: title }]);
    } else {
      setIsProductCount(isProductCount.filter((t) => t.product !== title));
    }
  }

  function renderProductsFromSearch({ formValue }) {
    let products = [];
    if (formValue === "") {
      renderProducts(isActiveSection);
      return;
    }
    for (let i = 0; i < isCardInfo.length; i++) {
      if (isCardInfo[i].title.toLowerCase().includes(formValue.toLowerCase())) {
        products.push(isCardInfo[i]);
      }
    }
    setIsCardInfo(products);
  }

  return (
    <div className="catalog">
      <SearchForm onSubmit={renderProductsFromSearch} />
      <Slider
        catalogInfo={catalogInfo}
        isActiveSection={isActiveSection}
        onClick={handleClickOnAnotherProduct}
      />
      <ul className="catalog__products">
        {isCardInfo === ""
          ? ""
          : isCardInfo.map((item, ind) => (
              <CatalogCard
                key={`${item.title + ind}`}
                preview={item.preview}
                title={item.title}
                composition={item.composition}
                price={item.price}
                updateCounter={updateCounter}
              />
            ))}
      </ul>
      <button type="button" className="catalog__btn cursor">
        {isProductCount.length === 0 ? (
          <div className="catalog__btn_icon_cart"></div>
        ) : (
          isProductCount.length
        )}
      </button>
    </div>
  );
}

export default Catalog;
