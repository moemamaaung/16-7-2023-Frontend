import { Route, Routes } from "react-router-dom";
import TeacherForm from "./teacher/TeacherForm";
import Dashboard from "./admin/Dashboard";
import Sidebar from "./admin/Sidebar";
import TeacherTable from "./teacher/TeacherTable";
import EditTeacherForm from "./teacher/EditTeacherForm";
import SubjectTable from "./subject/SubjectTable";
import SubjectForm from "./subject/SubjectForm";
import EditSubjectForm from "./subject/EditSubjectForm";
import StudentTable from "./student/StudentTable";
import StudentFrom from "./student/StudentFrom";
import EditStudentForm from "./student/EditStudentForm";
import CreateClass from "./class/CreateClass";
import UpdateClass from "./class/UpdateClass";
import ClassTable from "./class/ClassTable";
import SemesterTable from "./semester/SemesterTable";
import SemesterForm from "./semester/SemesterForm";
import EditSemester from "./semester/EditSemester";
import StudentDetail from "./student/StudentDetail";
import TeacherDetail from "./teacher/TeacherDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/allteachers" element={<TeacherTable />} />
        <Route path="/create-teacher" element={<TeacherForm />} />
        <Route path="/teacher/update/:teacherId" element={<EditTeacherForm />} />
        <Route path="/teacher/:teacherId" element={<TeacherDetail />} />

        <Route path="/allsubjects" element={<SubjectTable />}/>
        <Route path="/create-subject" element={<SubjectForm />} />
        <Route path="/subject/update/:subjectId" element={<EditSubjectForm />} />

        <Route path="/allstudents" element={<StudentTable />}/>
        <Route path="/create-student" element={<StudentFrom />} />
        <Route path="/student/update/:studentId" element={<EditStudentForm />} />
        <Route path="/student/:studentId" element={<StudentDetail />} />


        <Route path="/allclasses" element={<ClassTable />} />
        <Route path="/create-class" element={<CreateClass />} />
        <Route  path="/class/update/:classId" element={<UpdateClass />} />

        <Route path="/allsemesters" element={<SemesterTable />} />
        <Route path="/create-semester" element={<SemesterForm />} />
        <Route  path="/semester/update/:semesterId" element={<EditSemester />} />
      </Route>
    </Routes>
  );
}

export default App;
