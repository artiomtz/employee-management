import { React, useContext, useEffect } from "react";
import EmployeeContext from "../context/EmployeeContext";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";

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
                <ButtonEdit employeeId={employee.id} />
                <ButtonDelete employeeId={employee.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
