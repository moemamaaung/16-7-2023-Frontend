import { Route, Routes } from "react-router-dom";
import TeacherForm from "./teacher/TeacherForm";
import Dashboard from "./admin/Dashboard";
import Sidebar from "./admin/Sidebar";
import TeacherTable from "./teacher/TeacherTable";
import EditTeacherForm from "./teacher/EditTeacherForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/allteachers" element={<TeacherTable />} />
        <Route path="/create-teacher" element={<TeacherForm />} />
        <Route path="/teacher/update/:teacherId" element={<EditTeacherForm />} />
      </Route>
    </Routes>
  );
}

export default App;
