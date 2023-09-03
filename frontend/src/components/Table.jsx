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
      <table className="table table-secondary table-striped table-hover">
        <thead>
          <tr>
            <th scope="col" className="table-head">
              First Name
            </th>
            <th scope="col" className="table-head">
              Last Name
            </th>
            <th scope="col" className="table-head">
              Salary
            </th>
            <th scope="col" className="table-head">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {employees.map((employee) => (
            <tr key={employee.id} className="align-middle">
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
