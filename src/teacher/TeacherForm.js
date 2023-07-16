import React from "react";
import classes from "./TeacherForm.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTeachers } from "./teacherSlice";


const TeacherForm = () => {

  const [ fullname,setFullname] = useState('')
  const [ phno,setPhno] = useState('')
  const [ username,setUsername] = useState('')
  const [ qualification,setQualification] = useState('')
  const [ position,setPosition ] = useState('')
  const [ nrc,setNrc ] = useState('')
  const [ dob,setDob ] = useState('')
  const [gender,setGender] = useState('')

  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const onFullnameChange = e => setFullname(e.target.value)
  const onPhnoChange = e => setPhno(e.target.value)
  const onUsernameChange = e => setUsername(e.target.value)
  const onQualificationChange = e => setQualification(e.target.value)
  const onPositionChange = e => setPosition(e.target.value)
  const onNrcChange = e => setNrc(e.target.value)
  const onDobChange = e => setDob(e.target.value)
  const onGenderChange = e => setGender(e.target.value)
  
  const canSave = [fullname,phno,username,qualification,position,nrc,dob,gender].every(Boolean) && addRequestStatus === 'idle'

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault();

    if(canSave){
      try{
        setAddRequestStatus('pending')

        dispatch(
          createTeachers({
            fullname,
            phno,
            username,
            qualification,
            position,
            nrc,
            dob,
            gender
  
          })
          )
      }catch(error){
        console.log(error)
      }finally{
        setAddRequestStatus('idle')
      }

      setFullname('')
      setPhno('')
      setUsername('')
      setQualification('')
      setPosition('')
      setNrc('')
      setDob('')
      setGender('')

      navigate('/allteachers')
    }
  }



  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div className={classes.formboldformwrapper}>
          <form className={classes.form} onSubmit={onSubmit}>
            <p className={classes.title}>Create Teacher</p>
            <div className={classes.flex}>
              <label>
                <input type="text" className={classes.input} value={fullname} onChange={onFullnameChange} />
                <span>Fullname</span>
              </label>
              <label>
                <input type="text" className={classes.input} value={phno} onChange={onPhnoChange}/>
                <span>Phno</span>
              </label>
            </div>

            <label>
              <input type="email" className={classes.input} value={username} onChange={onUsernameChange}/>
              <span>Email</span>
            </label>

            <label>
              <input type="text" className={classes.input} value={qualification} onChange={onQualificationChange}/>
              <span>Qualification</span>
            </label>

            <label>
              <input type="text" className={classes.input} value={position} onChange={onPositionChange}/>
              <span>Position</span>
            </label>

            <label>
              <input type="text" className={classes.input} value={nrc} onChange={onNrcChange}/>
              <span>NRC</span>
            </label>

            <label>
              <input type="date" className={classes.input} value={dob} onChange={onDobChange}/>
              <span>Date Of Birth</span>
            </label>

            <div>
            <select
              className="form-select"
              value={gender}
              onChange={onGenderChange}
            >
              <option>Choose Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

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
