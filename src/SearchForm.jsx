import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchQuery, isClicked, setIsClicked } = useGlobalContext();

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="search">
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button
          type="submit"
          className="bnt"
          onClick={() => setIsClicked(true)}
        >
          search{" "}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
