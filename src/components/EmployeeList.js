import React from "react";

function EmployeeList(props) {
  return (
    //employee information table
    <table>
      <thead>
        <tr>
          {/* thumbnail image, name, birthday, gender, phone number, email, country */}
          <th>Thumbnail</th>
          {/* sort by name ascending on click */}
          <th onClick={() => props.NAMEARRAY}>Name</th>
          <th>Date of Birth</th>
          <th>Gender</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Country</th>
        </tr>
      </thead>
    </table>
  );
}

export default EmployeeList;
