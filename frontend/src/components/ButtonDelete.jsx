import { React, useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";
import { BiTrash } from "react-icons/bi";

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
        <span>
          <BiTrash />
        </span>
        Delete
      </button>
    </>
  );
}
