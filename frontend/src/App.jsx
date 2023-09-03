import { Routes, Route } from "react-router-dom";
import { EmployeeContextProvider } from "./context/EmployeeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewEmployee from "./pages/NewEmployee";
import EditEmployee from "./pages/EditEmployee";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <EmployeeContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewEmployee />} />
          <Route path="/:employeeId" element={<EditEmployee />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </EmployeeContextProvider>
    </>
  );
}

export default App;
