import React from "react";
import ClassList from "./ClassList";
import { AddClassButton } from "./AddClassButton";
import { fetchClasses } from "./classSlice";
import classes from "../teacher/TeacherForm.module.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ClassTable = () => {
  const dispatch = useDispatch();

  const text = `m-0 font-weight-bold text-center ${classes.text}`;

  useEffect(() => {
    dispatch(fetchClasses());
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
            <h1 className={text}> Class List</h1>
          </div>
          <br />
          <AddClassButton />
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
                  <th>ClassName</th>
                  <th>CodeNo</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <ClassList />
              </tbody>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>ClassName</th>
                  <th>CodeNo</th>
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

export default ClassTable;
