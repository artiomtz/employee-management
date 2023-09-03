import React from "react";
import Form from "../components/Form";
import { ToastContainer } from "react-toastify";

export default function EditEmployee() {
  return (
    <>
      <div className="text-bg-dark">
        <div className="container min-vh-100">
          <h1 className="container page-title">Edit An Employee</h1>
          <div className="container pt-5">
            <Form formType="edit" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
