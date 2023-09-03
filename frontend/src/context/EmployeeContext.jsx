import React, { useState, createContext } from "react";
import { serverRoute, serverRouteEmployees } from "../config/api";
import { toast } from "react-toastify";

const EmployeeContext = createContext();

export function EmployeeContextProvider({ children }) {
  const [employees, setEmployees] = useState([]);

  // get all employees
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

  // create or update employee
  const saveEmployeeData = async (employeeDetails) => {
    // update employee by id
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
          toast.success("Successfully updated.");
        } else {
          console.warn(`couldn't update employee id=${employeeDetails.id}`);
          toast.error("Something went wrong...");
        }
      } catch (error) {
        console.log("Error while updating an employee.");
        toast.error("Something went wrong...");
      }
    }
    // create employee
    else {
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
          toast.success("Successfully created.");
        } else {
          console.warn(`couldn't created a new employee.`);
          toast.error("Something went wrong...");
        }
      } catch (error) {
        console.log("Error while updating an employee.");
        toast.error("Something went wrong...");
      }
    }
  };

  // delete employee by id
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
        toast.success("Successfully deleted.");
      } else {
        console.warn(`couldn't deleted employee id=${employeeId}`);
        toast.error("Something went wrong...");
      }
    } catch (error) {
      console.log("Error while updating an employee.");
      toast.error("Something went wrong...");
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
