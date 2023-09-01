import React, { useState, createContext } from "react";

const EmployeeContext = createContext();

export function EmployeeContextProvider({ children }) {
  const [employees, setEmployees] = useState([]);

  const fetchEmployeeData = async () => {
    const employeeData = await import("../../public/sample_data.json");
    // console.log(employeeData.employees);
    setEmployees(employeeData.employees);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        fetchEmployeeData,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeContext;
