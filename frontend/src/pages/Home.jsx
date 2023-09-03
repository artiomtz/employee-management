import React from "react";
import ButtonAdd from "../components/ButtonAdd";
import Table from "../components/Table";

export default function Home() {
  return (
    <>
      <div className="text-bg-dark">
        <div className="container min-vh-100">
          <h1 className="container page-title">Employees</h1>
          <div className="p-2">
            <ButtonAdd />
          </div>
          <div className="container text-center">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}
