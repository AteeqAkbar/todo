import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ListTasks } from "./pages/listTasks";
import CreateTask from "./pages/createTask";
import Header from "./components/header";
import { BlukDelete } from "./pages/blukDelete";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/list-tasks" />} />
        <Route path="/list-tasks" element={<ListTasks />} />

        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/bulk-delete" element={<BlukDelete />} />
      </Routes>
    </>
  );
}

export default App;
