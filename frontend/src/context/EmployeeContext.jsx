import React, { useState, createContext } from "react";
import { serverRoute, serverRouteEmployees } from "../config/api";

const EmployeeContext = createContext();

export function EmployeeContextProvider({ children }) {
  const [employees, setEmployees] = useState([]);

  const fetchEmployeeData = async () => {
    try {
      // console.log("getting employees from the server...");
      const response = await fetch(`${serverRoute + serverRouteEmployees}`);
      const data = await response.json();
      setEmployees(data.results);
    } catch (error) {
      console.log("Error while loading employees.");
    }
  };

  const saveEmployeeData = async (employeeDetails) => {
    if (employeeDetails.id) {
      console.log("updating an employee on the server...");
      try {
        const response = await fetch(
          `${serverRoute + serverRouteEmployees + employeeDetails.id}`,
          {
            method: "PUT",
            body: JSON.stringify(employeeDetails),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const data = await response.json();

        if (data.results == "ok") {
          console.log(`successfully updated employee id=${employeeDetails.id}`);
          setEmployees((prevEmployees) =>
            prevEmployees.map((employee) =>
              employee.id === employeeDetails.id ? employeeDetails : employee
            )
          );
        } else {
          console.warn(`couldn't update employee id=${employeeDetails.id}`);
        }
      } catch (error) {
        console.log("Error while updating an employee.");
      }
    } else {
      console.log("saving a new employee on the server...");
      try {
        const response = await fetch(`${serverRoute + serverRouteEmployees}`, {
          method: "POST",
          body: JSON.stringify(employeeDetails),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data = await response.json();

        if (data.results == "ok") {
          console.log(`successfully created a new employee with id=${data.id}`);
          employeeDetails.id = data.id;
          setEmployees((prevEmployees) => [...prevEmployees, employeeDetails]);
        } else {
          console.warn(`couldn't created a new employee.`);
        }
      } catch (error) {
        console.log("Error while updating an employee.");
      }
    }
  };

  const deleteEmployeeData = async (employeeId) => {
    console.log("deleting an employee on the server...");
    try {
      const response = await fetch(
        `${serverRoute + serverRouteEmployees + employeeId}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (data.results == "ok") {
        console.log(`successfully deleted employee id=${employeeId}`);
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== employeeId)
        );
      } else {
        console.warn(`couldn't deleted employee id=${employeeId}`);
      }
    } catch (error) {
      console.log("Error while updating an employee.");
    }
  };

  return (
    <>
      <EmployeeContext.Provider
        value={{
          employees,
          fetchEmployeeData,
          saveEmployeeData,
          deleteEmployeeData,
        }}
      >
        {children}
      </EmployeeContext.Provider>
    </>
  );
}

export default EmployeeContext;
