import React from "react";
import Form from "../components/Form";

export default function NewEmployee() {
  return (
    <>
      <div className="text-bg-dark">
        <div className="container min-vh-100">
          <h1 className="container page-title">Add A New Employee</h1>
          <div className="container pt-5">
            <Form formType="add" />
          </div>
        </div>
      </div>
    </>
  );
}
