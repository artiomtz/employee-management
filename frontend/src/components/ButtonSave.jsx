import React, { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";
import { BiSave } from "react-icons/bi";

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
        disabled={!props.isFormValid}
      >
        <span>
          <BiSave />
        </span>
        Save
      </button>
    </>
  );
}
