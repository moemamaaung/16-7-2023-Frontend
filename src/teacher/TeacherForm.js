import React from "react";
import classes from "./TeacherForm.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTeachers } from "./teacherSlice";
import { sendEmail } from "../email/emailSlice";



const TeacherForm = () => {

  const [ fullname,setFullname] = useState('')
  const [ password,setPassword ] = useState('')
  const [ phno,setPhno] = useState('')
  const [ username,setUsername] = useState('')
  const [ position,setPosition ] = useState('')
  const [ nrc,setNrc ] = useState('')
  const [gender,setGender] = useState('')

  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const onFullnameChange = e => setFullname(e.target.value)
  const onPasswordChange = () => {
    const length = 8;
    const charset =
      "000000000000000000000000000000";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }

    setPassword(result);
  };

  const onPhnoChange = e => setPhno(e.target.value)
  const onUsernameChange = e => setUsername(e.target.value)
  const onPositionChange = e => setPosition(e.target.value)
  const onNrcChange = e => setNrc(e.target.value)
  const onGenderChange = e => setGender(e.target.value)
  
  const canSave = [fullname,password,phno,username,position,nrc,gender].every(Boolean) && addRequestStatus === 'idle'

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
            password,
            phno,
            username,
            position,
            nrc,
            gender
  
          })
          )
          console.log("sendEmail"+sendEmail)
      }catch(error){
        console.log(error)
      }finally{
        setAddRequestStatus('idle')
      }

      setFullname('')
      setPassword('')
      setPhno('')
      setUsername('')
      setPosition('')
      setNrc('')
      setGender('')

      navigate('/admin/teacher')
    }
  }



  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div className={classes.formboldformwrapper}>
          <form className={classes.form} onSubmit={onSubmit}>
            <p className={classes.title}>Create Teacher</p>
            
              <label>
                <input type="text" className={classes.input} value={fullname} onChange={onFullnameChange} />
                <span>Fullname</span>
              </label>
              <label>
                <input type="password" className={classes.input} value={password} onChange={onPasswordChange} />
                <span>Password</span>
              </label>
              <label>
                <input type="text" className={classes.input} value={phno} onChange={onPhnoChange}/>
                <span>Phno</span>
              </label>
              
            <label>
              <input type="email" className={classes.input} value={username} onChange={onUsernameChange}/>
              <span>Email</span>
            </label>

            <label>
              <input type="text" className={classes.input} value={position} onChange={onPositionChange}/>
              <span>Position</span>
            </label>

            <label>
              <input type="text" className={classes.input} value={nrc} onChange={onNrcChange} />
              <span>NRC</span>
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
              <i class="mdi mdi-file-check btn-icon-prepend"></i> Create
               
              </button>
          </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherForm;
