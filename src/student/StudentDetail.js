import React from 'react'
import { selectStudentById } from './studentSlice';
import classes from './StudentDetail.module.css'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StudentDetail = () => {
    const { studentId } = useParams();
    console.log(studentId);
    const student = useSelector((state) =>
      selectStudentById(state, Number(studentId))
    );
    console.log(student);
  
    
    return (
      <div className={classes.all}>
        <div className={classes.wrapper}>
          <h2>{student.fullname}</h2>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.col}>
              <div className={classes.inputGroup}>
                  Ph No : {student.phno}
                </div>
                <div className={classes.inputGroup}>
                  Address : {student.address}
                </div>
                <div className={classes.inputGroup}>
                  NRC :{student.nrc}
                </div>
                {/* <div className={classes.inputGroup}>
                 Date Of Birth : {student.dob}
                </div> */}
               
  
                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    Gender : {student.gender}
                  </div>
                </div>
  
               </div>
               <br />
  
              <div className={classes.inputGroup}>
                <div className={classes.inputBox}>
                  <button type="submit" className={classes.btn}>
                    <Link to="/allstudents"  style={{ textDecoration: "none" ,color:"white"}}>
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

export default StudentDetail