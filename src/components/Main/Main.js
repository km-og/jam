import Catalog from "../Catalog/Catalog";
import "./Main.css";

function Main() {
  return (
    <section className="main">
      <h1 className="main__greeting">Hi, Anna!</h1>
      <Catalog />
    </section>
  );
}

export default Main;
