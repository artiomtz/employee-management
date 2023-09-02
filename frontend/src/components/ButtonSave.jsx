import React, { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

export default function ButtonSave(props) {
  const { saveEmployeeData } = useContext(EmployeeContext);

  const handleSaveClick = () => {
    saveEmployeeData(props.employee);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleSaveClick}
      >
        Save
      </button>
    </>
  );
}
