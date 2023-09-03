import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

export default function ButtonAdd() {
  return (
    <>
      <Link to={"/new"}>
        <button type="button" className="btn btn-success">
          <span>
            <BiPlus />
          </span>
          Add
        </button>
      </Link>
    </>
  );
}
