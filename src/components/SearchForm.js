import React from "react";

function SearchForm(props) {
  return (
    <div
      className="card"
      style={{ backgroundColor: "navy", padding: "5px", color: "white" }}
    >
      <form className="row">
        <h5 className="col-md-2 offset-sm-1 display-8"> Employee Search: </h5>
        <input
          className="col-md-4"
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
