import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeContext from "../context/EmployeeContext";
import ButtonSave from "./ButtonSave";

export default function Form(props) {
  const { employeeId } = useParams();
  const { employees, fetchEmployeeData } = useContext(EmployeeContext);
  const [isFormValid, setIsFormValid] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState({
    id: null,
    firstName: "",
    lastName: "",
    salary: "",
  });

  // get employee by id if exists
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

  // handle form input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({
      ...employeeDetails,
      [name]: value,
    });
  };

  // verify form inputs are valid
  const validateForm = () => {
    const isFirstNameValid = /^[a-zA-Z]{1,20}$/.test(employeeDetails.firstName);
    const isLastNameValid = /^[a-zA-Z]{1,20}$/.test(employeeDetails.lastName);
    const isSalaryValid =
      /^[1-9]\d*$/.test(employeeDetails.salary) &&
      employeeDetails.salary <= 999999;
    setIsFormValid(isFirstNameValid && isLastNameValid && isSalaryValid);
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <>
      <div className="container col-md-8 col-lg-5">
        <form className="needs-validation" noValidate>
          <div className="mb-4">
            <label htmlFor="EditEmployeeFirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              // add pattern attribute for letters only, 1-20 characters
              className={`form-control ${
                !/^[A-Za-z]{1,20}$/.test(employeeDetails.firstName) &&
                "is-invalid"
              }`}
              id="EditEmployeeFirstName"
              name="firstName"
              placeholder="Employee's first name"
              value={employeeDetails.firstName}
              onChange={handleInputChange}
              onKeyUp={validateForm}
              required
              pattern="[A-Za-z]{1,20}"
            />
            <div className="invalid-feedback">
              Please provide a valid first name (letters only, 1-20 characters).
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="EditEmployeeLastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              // add pattern attribute for letters only, 1-20 characters
              className={`form-control ${
                !/^[A-Za-z]{1,20}$/.test(employeeDetails.lastName) &&
                "is-invalid"
              }`}
              id="EditEmployeeLastName"
              name="lastName"
              placeholder="Employee's last name"
              value={employeeDetails.lastName}
              onChange={handleInputChange}
              onKeyUp={validateForm}
              required
              pattern="[A-Za-z]{1,20}"
            />
            <div className="invalid-feedback">
              Please provide a valid last name (letters only, 1-20 characters).
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="EditEmployeeSalary" className="form-label">
              Salary
            </label>
            <input
              type="number"
              // add pattern attribute for numbers only, range 1-999,999
              className={`form-control ${
                !(
                  /^[1-9]\d*$/.test(employeeDetails.salary) &&
                  employeeDetails.salary <= 999999
                ) && "is-invalid"
              }`}
              id="EditEmployeeSalary"
              name="salary"
              placeholder="Employee's salary"
              value={employeeDetails.salary}
              onChange={handleInputChange}
              onKeyUp={validateForm}
              required
              min="1"
              max="999999"
            />
            <div className="invalid-feedback">
              Please provide a valid salary (numbers only, range 1-999,999).
            </div>
          </div>
          <div className="pt-5">
            <ButtonSave employee={employeeDetails} isFormValid={isFormValid} />
          </div>
        </form>
      </div>
    </>
  );
}
