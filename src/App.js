import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ListTasks } from "./pages/listTasks";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Events from "./pages/Events";
import Header from "./components/header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/list-tasks" element={<ListTasks />} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
