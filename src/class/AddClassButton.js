import { Link } from "react-router-dom";
import classes from "../teacher/TeacherForm.module.css";
import React from "react";
export const AddClassButton = () => {
  const color1 = `btn btn-inverse-success btn-fw ms-4  ${classes.color1}`;
  return (
    <React.Fragment>
      <Link to="/create-class">
        <button className={color1}>
          <i class="fas fa-plus fa-sm"></i> Class
        </button>
      </Link>
    </React.Fragment>
  );
};
