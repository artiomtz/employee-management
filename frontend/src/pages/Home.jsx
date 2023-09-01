import React from "react";
import { EmployeeContextProvider } from "../context/EmployeeContext";
import Table from "../components/Table";

export default function Home() {
  return (
    <EmployeeContextProvider>
      <div>Home</div>
      <Table />
    </EmployeeContextProvider>
  );
}
