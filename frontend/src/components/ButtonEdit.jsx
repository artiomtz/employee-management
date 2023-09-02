import React from "react";
import { Link } from "react-router-dom";

export default function ButtonEdit(props) {
  return (
    <>
      <Link to={"/" + props.employeeId}>
        <button type="button" className="btn btn-primary">
          Edit
        </button>
      </Link>
    </>
  );
}
