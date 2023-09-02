import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeContext from "../context/EmployeeContext";
import ButtonSave from "./ButtonSave";

export default function Form(props) {
  const { employeeId } = useParams();
  const { employees, fetchEmployeeData } = useContext(EmployeeContext);
  const [employeeDetails, setEmployeeDetails] = useState({
    id: null,
    firstName: "",
    lastName: "",
    salary: 0,
  });

  useEffect(() => {
    const selectedEmployee = employees.find(
      (employee) => employee.id === parseInt(employeeId)
    );

    if (selectedEmployee) {
      setEmployeeDetails({
        id: selectedEmployee.id,
        firstName: selectedEmployee.firstName,
        lastName: selectedEmployee.lastName,
        salary: selectedEmployee.salary,
      });
    }
  }, [employees, employeeId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({
      ...employeeDetails,
      [name]: value,
    });
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <>
      <div className="mb-3">
        <label htmlFor="EditEmployeeFirstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="EditEmployeeFirstName"
          name="firstName"
          placeholder="Employee's first name"
          value={employeeDetails.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="EditEmployeeLastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="EditEmployeeLastName"
          name="lastName"
          placeholder="Employee's last name"
          value={employeeDetails.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="EditEmployeeSalary" className="form-label">
          Salary
        </label>
        <input
          type="number"
          className="form-control"
          id="EditEmployeeSalary"
          name="salary"
          placeholder="Employee's salary"
          value={employeeDetails.salary}
          onChange={handleInputChange}
        />
      </div>
      <ButtonSave employee={employeeDetails} />
    </>
  );
}
