import classes from "../teacher/TeacherForm.module.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchStudents } from "./studentSlice";
import CreateStudentButton from "./CreateStudentButton";
import StudentList from "./StudentList";

const StudentTable = () => {
  const dispatch = useDispatch();

  const text = `m-0 font-weight-bold text-center ${classes.text}`;

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  $(document).ready(function () {
    setTimeout(function () {
      $("#example").DataTable();
    }, 1000);
  });
  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div className="MainDiv">
          <div class="text-center">
            <h1 className={text}> Student List</h1>
          </div>
          <br />
          <CreateStudentButton />
          <div className="container">
            <br />
            <br />
            <table
              id="example"
              class="display table table-bordered table-hover table-striped"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Roll No</th>
                  {/* <th>Phno</th>
                  <th>Address</th> */}
                  <th>Username</th>
                  {/* <th>Father name</th> */}
                  {/* <th>Nrc</th>
                  <th>DateOfBirth</th>
                  <th>Gender</th> */}
                  <th>Detail</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <StudentList />
              </tbody>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Roll No</th>
                  {/* <th>Phno</th>
                  <th>Address</th> */}
                  <th>Username</th>
                  {/* <th>Father name</th> */}
                  {/* <th>Nrc</th>
                  <th>DateOfBirth</th>
                  <th>Gender</th> */}
                  <th>Detail</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
    // const dispatch = useDispatch();

    // const text = `m-0 font-weight-bold text-center ${classes.text}`;
    // useEffect(() => {
    //   dispatch(fetchStudents());
    // }, [dispatch]);

    // $(document).ready(function () {
    //   setTimeout(function () {
    //     $("#example").DataTable();
    //   }, 1000);
    // });
    // return (
    //   <div class="main-panel">
    //     <div class="content-wrapper">
    //       <div className="MainDiv">
    //         <div class="text-center">
    //           <h1 className={text}> Student List</h1>
    //         </div>
    //         <br />
    //         <CreateStudentButton />
    //         <div className="container">
    //           <br />
    //           <br />
    //           <table
    //             id="example"
    //             class="display table table-bordered table-hover table-striped"
    //           >
    //             <thead>
    //               <tr>
    //                 <th>ID</th>
    //                 <th>Name</th>
    //                 <th>Roll No</th>
    //                 <th>Phno</th>
    //                 <th>Address</th>
    //                 <th>Username</th>
    //                 <th>Father name</th>
    //                 <th>Nrc</th>
    //                 <th>DateOfBirth</th>
    //                 <th>Gender</th>
    //                 <th>Actions</th>

    //               </tr>
    //             </thead>
    //             <tbody>
    //               <StudentList />
    //             </tbody>
    //             <tfoot>
    //               <tr>
    //               <th>ID</th>
    //                 <th>Name</th>
    //                 <th>Roll No</th>
    //                 <th>Phno</th>
    //                 <th>Address</th>
    //                 <th>Username</th>
    //                 <th>Father name</th>
    //                 <th>Nrc</th>
    //                 <th>DateOfBirth</th>
    //                 <th>Gender</th>
    //                 <th>Actions</th>
    //               </tr>
    //             </tfoot>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default StudentTable;
