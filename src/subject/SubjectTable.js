import React, { useEffect } from "react";
import classes from '../teacher/TeacherForm.module.css'
import SubjectList from "./SubjectList";
import { useDispatch } from "react-redux";
import { fetchSubjects } from "./subjectSlice";
import CreateSubjectButton from "./CreateSubjectButton";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

const SubjectTable = () => {
    const dispatch = useDispatch()

    const text = `m-0 font-weight-bold text-center ${classes.text}`;
     useEffect(()=> {
        dispatch(fetchSubjects());
     },[dispatch]);

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
            <h1 className="text-center text-success"> Subject List</h1>
          </div>
          <br />
          <CreateSubjectButton />
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
                  <th>Teacher Name</th>
                  <th>Class</th>
                  <th>Code No</th>
                  <th>Subject Name</th>
                  <th>Actions</th>
                 
                </tr>
              </thead>
              <tbody>
                <SubjectList />
              </tbody>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Teacher Name</th>
                  <th>Class</th>
                  <th>Code No</th>
                  <th>Subject Name</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectTable;
