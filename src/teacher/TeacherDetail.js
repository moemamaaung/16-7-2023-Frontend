import React from 'react'
import { selectTeacherById } from './teacherSlice';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from '../student/StudentDetail.module.css'

const TeacherDetail = () => {
    const { teacherId } = useParams();
    console.log("TeacherId"+teacherId);
    const teacher = useSelector((state) =>
      selectTeacherById(state, Number(teacherId))
    );
    console.log("Teacher"+teacher);
  
  return (
    <div className={classes.all}>
        <div className={classes.wrapper}>
          <h2>{teacher.fullname}</h2>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.col}>
              <div className={classes.inputGroup}>
                  Ph No : {teacher.phno}
                </div>
                <div className={classes.inputGroup}>
                  Username : {teacher.username}
                </div>
                <div className={classes.inputGroup}>
                  NRC :{teacher.nrc}
                </div>
                {/* <div className={classes.inputGroup}>
                 Date Of Birth : {student.dob}
                </div> */}
               
  
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    Gender : {teacher.gender}
                  </div>
                </div>
  
               </div>
               <br />
  
              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  <button type="submit" className={classes.btn}>
                    <Link to="/allteachers"  style={{ textDecoration: "none" ,color:"white"}}>
                      Back
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TeacherDetail