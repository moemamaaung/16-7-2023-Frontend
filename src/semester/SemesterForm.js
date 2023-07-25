import React from "react";
import classes from "../teacher/TeacherForm.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSemester } from "./semesterSlice";



const SemesterForm = () => {

  const [ name,setName] = useState('')
  const [ startdate,setStartDate] = useState('')
  const [ enddate,setEndDate] = useState('')

  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const onNameChange = e => setName(e.target.value)
  const onStartDateChange = e => setStartDate(e.target.value)
  const onEndDateChange = e => setEndDate(e.target.value)

  
  const canSave = [name,startdate,enddate].every(Boolean) && addRequestStatus === 'idle'

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault();

    if(canSave){
      try{
        setAddRequestStatus('pending')

        dispatch(
          createSemester({
           name,
           startdate,
           enddate
            
          })
          )
          console.log("starDate");
      }catch(error){
        console.log(error)
      }finally{
        setAddRequestStatus('idle')
      }

      setName('');
      setStartDate('');
      setEndDate('');

      navigate('/allsemesters')
    }
  }


    console.log("Reach form");
  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div className={classes.formboldformwrapper}>
          <form className={classes.form} onSubmit={onSubmit}>
            <p className={classes.title}>Create Semester</p>
            
              <label>
                <input type="text" className={classes.input} value={name} onChange={onNameChange} />
                <span>Name</span>
              </label>
            

            <label>
                <input type="date" className={classes.input} value={startdate} onChange={onStartDateChange}/>
                <span>Start Date</span>
              </label>

            <label>
              <input type="date" className={classes.input} value={enddate} onChange={onEndDateChange}/>
              <span>End Date</span>
            </label>

            

          <center>
              <button className={classes.send}>
              <i class="mdi mdi-file-check btn-icon-prepend"></i> Create
               
              </button>
              </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SemesterForm;
