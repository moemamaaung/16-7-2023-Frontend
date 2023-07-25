import React from "react";
import classes from "../teacher/TeacherForm.module.css";
import { Link } from "react-router-dom";
const CreateSemesterButton = () => {
  const color1 = `btn btn-inverse-success btn-fw ms-4 ${classes.color1}`;

  return (
    <React.Fragment>
      <Link to="/create-semester">
        <button className={color1}>
          <i class="fas fa-plus fa-sm"></i> Semester
        </button>
      </Link>
    </React.Fragment>
  );
};

export default CreateSemesterButton;
