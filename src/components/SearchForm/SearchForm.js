import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSubmit }) {
  const [isValid, setIsValid] = useState(true);
  const [formValue, setFormValue] = useState({});

  function handleSearchChange(e) {
    setFormValue(e.target.value);
  }

  function handleSubmit(e) {
    console.log(formValue);
    e.preventDefault();
    // if (formValue === "") {
    //   setIsValid(false);
    //   return;
    // }
    setIsValid(true);
    onSubmit({ formValue });
  }

  return (
    <form
      className="search__form"
      id="searchForm"
      name="searchForm"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          minLength="2"
          maxLength="200"
          name="inputSearch"
          placeholder="Search"
          onChange={handleSearchChange}
        />
        {isValid ? (
          ""
        ) : (
          <span className="search__text-error">Field must be filled in</span>
        )}
        <button type="submit" className="search__btn cursor"></button>
      </div>
    </form>
  );
}

export default SearchForm;
