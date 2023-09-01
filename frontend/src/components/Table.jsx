import { React, useContext, useEffect } from "react";
import EmployeeContext from "../context/EmployeeContext";

export default function Table() {
  const { employees, fetchEmployeeData } = useContext(EmployeeContext);

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <div>
      {employees.map((employee) => (
        <div key={employee.firstName}>{employee.firstName}</div>
      ))}
    </div>
  );
}
