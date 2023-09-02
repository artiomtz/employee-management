import React, { useState, createContext } from "react";

const EmployeeContext = createContext();

export function EmployeeContextProvider({ children }) {
  const [employees, setEmployees] = useState([]);

  const fetchEmployeeData = async () => {
    const employeeData = await import("../../public/sample_data.json");
    // console.log(employeeData.employees);
    setEmployees(employeeData.employees);
  };

  const saveEmployeeData = async (employeeId, employeeDetails) => {
    if (employeeId) {
      console.log("updating an employee on the server...");
    } else {
      console.log("saving a new employee on the server...");
    }
  };

  return (
    <>
      <EmployeeContext.Provider
        value={{
          employees,
          fetchEmployeeData,
          saveEmployeeData,
        }}
      >
        {children}
      </EmployeeContext.Provider>
    </>
  );
}

export default EmployeeContext;
