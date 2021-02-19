import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";

function EmployeeList() {
  const [search, setSearch] = useState("");
  const [employees, setEmps] = useState([]);
  const [filterEmps, setFilterEmps] = useState([]);

  useEffect(() => {
    API.getEmps().then((res) => {
      setEmps(res.data.results);
      setFilterEmps(res.data.results);
    });
  }, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);

    // filter through employees array here
    const result = employees.filter(
      (employee) =>
        // FILTER by first name
        employee.name.first
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase()) ||
        // FILTER by last name
        employee.name.last
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase()) ||
        // FILTER by phone
        employee.phone.startsWith(event.target.value) ||
        // FILTER by email
        employee.email.startsWith(event.target.value)
    );

    setFilterEmps(result);
  };

  const handleSort = () => {
    const sorted = employees.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    console.log(employees);
    setFilterEmps(sorted);
  };

  return (
    <>
      <div>
        <SearchForm handleInputChange={handleInputChange} search={search} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>
              <button onClick={() => handleSort()}>Name</button>
            </th>
            <th>Phone</th>
            <th> Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {console.log(filterEmps)}
          {filterEmps.map((employee) => (
            <tr key={employee.login.uuid}>
              <td>
                <img
                  src={employee.picture.thumbnail}
                  alt={employee.login.uuid}
                />
              </td>
              <td>
                {employee.name.first} {employee.name.last}
              </td>
              <td>{employee.phone}</td>

              <td>{employee.email}</td>

              <td>{employee.dob.date.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default EmployeeList;
