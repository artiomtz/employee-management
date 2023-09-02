import { React, useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

export default function ButtonDelete(props) {
  const { deleteEmployeeData } = useContext(EmployeeContext);

  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          deleteEmployeeData(props.employeeId);
        }}
      >
        Delete
      </button>
    </>
  );
}
