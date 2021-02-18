import React from "react";
import EmployeeList from "./EmployeeList";
import SearchForm from "./SearchForm";

function ListGen(props) {
  return (
    <div>
      <SearchForm />
      {props.employees.map((employee) => {
        return <EmployeeList employee={employee} />;
      })}
      ;
    </div>
  );
}

export default ListGen;
