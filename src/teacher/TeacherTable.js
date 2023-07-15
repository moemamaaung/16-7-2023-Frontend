import React, { useEffect } from "react";
import TecherList from "./TecherList";
import { useDispatch } from "react-redux";
import { fetchTeachers } from "./teacherSlice";
import classes from './TeacherForm.module.css'

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

const TeacherTable = () => {
  const dispatch = useDispatch();

  const text = `m-0 font-weight-bold text-secondary text-center ${classes.text}`;

  useEffect(() => {
    dispatch(fetchTeachers());
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
        <h1 className={text}> Applicant List</h1>
      </div>
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
              <th>Phno</th>
              <th>Username</th>
              <th>Qualification</th>
              <th>Position</th>
              <th>Nrc</th>
              <th>DateOfBirth</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <TecherList />
          </tbody>
          <tfoot>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phno</th>
              <th>Username</th>
              <th>Qualification</th>
              <th>Position</th>
              <th>Nrc</th>
              <th>DateOfBirth</th>
              <th>Gender</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    </div>
    </div>
   
  );
};

export default TeacherTable;
