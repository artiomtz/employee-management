import { React, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeContext from "../context/EmployeeContext";

export default function Table() {
  const { employees, fetchEmployeeData } = useContext(EmployeeContext);

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salary}</td>
              <td>
                <Link to={"/" + employee.id}>
                  <button type="button" className="btn btn-primary">
                    Edit
                  </button>
                </Link>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
