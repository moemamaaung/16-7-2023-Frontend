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
import ProtectedRoute from "./login/ProtectedRoute";
import Login from "./login/Login";
import UserSidebar from "./admin/UserSidebar";
import UserDashboard from "./admin/UserDashboard";
import EmailSendForm from "./email/EmailSendForm";
import Decrypt from "./teacher/Decrypt";
import UnAuthenticated from "./login/UnAuthenticated";
import ProfileInfo from "./admin/ProfileInfo";
import UserProfileInfo from "./admin/UserProfileInfo";
import CreateAccordion from "./accordion/CreateAccordion";
import AccordionTable from "./accordion/AccordionTable";
import FilterAccordion from "./accordion/FilterAccordion";
import EditAccordion from "./accordion/EditAccordion";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Login />} />
       <Route element={<ProtectedRoute allowedRoles={["ROLE_ADMIN"]} />}>
        <Route path="/admin" element={<Sidebar />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/teacher" element={<TeacherTable />} />
          <Route path="/admin/create-teacher" element={<TeacherForm />} />
          <Route
            path="/admin/teacher/update/:teacherId"
            element={<EditTeacherForm />}
          />
          <Route path="/admin/teacher/:teacherId" element={<TeacherDetail />} />

          <Route path="/admin/allsubjects" element={<SubjectTable />} />
          <Route path="/admin/create-subject" element={<SubjectForm />} />
          <Route
            path="/admin/subject/update/:subjectId"
            element={<EditSubjectForm />}
          />

          <Route path="/admin/allstudents" element={<StudentTable />} />
          <Route path="/admin/create-student" element={<StudentFrom />} />
          <Route  path="/admin/student/update/:studentId" element={<EditStudentForm />}/>
          <Route path="/admin/student/:studentId" element={<StudentDetail />} />

          <Route path="/admin/allclasses" element={<ClassTable />} />
          <Route path="/admin/create-class" element={<CreateClass />} />
          <Route path="/admin/class/update/:classId" element={<UpdateClass />} />

          <Route path="/admin/allsemesters" element={<SemesterTable />} />
          <Route path="/admin/create-semester" element={<SemesterForm />} />
          <Route path="/admin/semester/update/:semesterId" element={<EditSemester />}/>

          <Route path="/admin/create-accordion" element={<CreateAccordion />} />
        <Route path="/admin/allAccordions" element={<AccordionTable />} />
        <Route path="/admin/allAccordion" element={<FilterAccordion />} />
        <Route path="/admin/accordion/edit/:accordionId" element={<EditAccordion />} />

          <Route path="/admin/email/:userId" element={<EmailSendForm />} />
          <Route path="/admin/decrypt/:userId" element={<Decrypt />} />

          <Route path="/admin/profile" element={<ProfileInfo />} />
          
        </Route>
      </Route>

      <Route path="/unauthenticated" element = {<UnAuthenticated />} />
      
      <Route element={<ProtectedRoute allowedRoles={["ROLE_TEACHER"]} />}>
        <Route path="/user" element={<UserSidebar />}>
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/user/teacher" element={<TeacherTable />} />
          <Route path="/user/profile" element={<UserProfileInfo />} />

        </Route>
      </Route>

      

     
    </Routes>
  );
}

export default App;
