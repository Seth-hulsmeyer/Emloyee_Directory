import React from "react";

function SearchForm(props) {
  return (
    <div>
      <form className="row">
        <h5> Employee Search: </h5>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  );
}
//mapping over array, filteredEmp array = []
//dynamically add and remove characters based on what is typed in
export default SearchForm;
