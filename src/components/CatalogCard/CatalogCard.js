import { useState } from "react";
import "./CatalogCard.css";

function CatalogCard({ preview, title, composition, price, updateCounter }) {
  const [inCart, setInCart] = useState(false);

  function addToCart() {
    inCart ? setInCart(false) : setInCart(true);
    updateCounter({ title, inCart });
  }

  return (
    <li className="card">
      <img className="card__preview" src={preview} alt={title} />
      <div className="card__texts">
        <h3 className="card__title">{title}</h3>
        <p className="card__composition">{composition}</p>
      </div>
      <div className="card__box">
        <p className="card__price">&#36;{price}</p>
        <button
          type="button"
          className={`card__btn ${inCart ? "card__btn_type_active" : ""}`}
          onClick={addToCart}
        ></button>
      </div>
    </li>
  );
}

export default CatalogCard;
