import React from "react";
import classes from "./TeacherForm.module.css";

const TeacherForm = () => {
  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div className={classes.formboldformwrapper}>
          <form className={classes.form}>
            <p className={classes.title}>Create Teacher</p>
            <p className={classes.message}>
              add information now and get full access to ourapp.
            </p>
            <div className={classes.flex}>
              <label>
                <input type="text" className={classes.input} />
                <span>Fullname</span>
              </label>
              <label>
                <input type="text" className={classes.input} />
                <span>Fullname</span>
              </label>
            </div>

            <label>
              <input type="text" className={classes.input} />
              <span>Fullname</span>
            </label>

            <label>
              <input type="text" className={classes.input} />
              <span>Fullname</span>
            </label>

            <label>
              <input type="text" className={classes.input} />
              <span>Fullname</span>
            </label>

            <label>
              <input type="text" className={classes.input} />
              <span>Fullname</span>
            </label>

            <label>
              <input type="text" className={classes.input} />
              <span>Fullname</span>
            </label>

            <label>
              <input type="text" className={classes.input} />
              <span>Password</span>
            </label>

          <center>
              <button className={classes.send}>
                SEND
               
              </button>
              </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherForm;
