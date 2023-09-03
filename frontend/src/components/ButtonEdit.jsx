import React from "react";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";

export default function ButtonEdit(props) {
  return (
    <>
      <Link to={"/" + props.employeeId}>
        <button type="button" className="btn btn-primary">
          <span className="icon-gap">
            <BiEdit />
          </span>
          Edit
        </button>
      </Link>
    </>
  );
}
