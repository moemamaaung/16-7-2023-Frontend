import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { selectStudentById, updateStudents } from './studentSlice'
import { useDispatch, useSelector } from 'react-redux'
import classes from '../teacher/TeacherForm.module.css'

const EditStudentForm = () => {

    const { studentId } = useParams( )
    console.log("TeacherId : "+studentId)
    const students = useSelector((state)=>selectStudentById(state,Number(studentId))) 
    console.log(students)

    const [id ] = useState(students.id)
    const [ fullname,setFullname] = useState(students.fullname)
    const [ rollno,setRollno] = useState(students.rollno)
    const [ phno,setPhno] = useState(students.phno)
    const [ address,setAddress ] = useState(students.address)
    const [ username,setUsername] = useState(students.username)
    // const [ fathername,setFathername ] = useState(students.fathername)
    const [ nrc,setNrc ] = useState(students.nrc)
    // const [ dob,setDob ] = useState(students.dob)
    const [gender,setGender] = useState(students.gender)
  
    const [updateRequestStatus, setUpdateRequestStatus] = useState('idle')
  
    const onFullnameChange = e => setFullname(e.target.value)
    const onRollnoChange = e => setRollno(e.target.value)
    const onPhnoChange = e => setPhno(e.target.value)
    const onAddressChange = e => setAddress(e.target.value)
    const onUsernameChange = e => setUsername(e.target.value)
    // const onFathernameChange = e => setFathername(e.target.value)
    const onNrcChange = e => setNrc(e.target.value)
    // const onDobChange = e => setDob(e.target.value)
    const onGenderChange = e => setGender(e.target.value)
    
    const canUpdate = [id,fullname,rollno,phno,address,username,nrc,gender].every(Boolean) && updateRequestStatus === 'idle'
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const onSubmit = (event) => {
      event.preventDefault();
  
      if(canUpdate){
        try{
          setUpdateRequestStatus('pending')
  
          dispatch(
            updateStudents({
              id,
              fullname,
              rollno,
              phno,
              address,
              username,
              // fathername,
              nrc,
              // dob,
              gender
    
            })
            )
        }catch(error){
          console.log(error)
        }finally{
          setUpdateRequestStatus('idle')
        }
  
        setFullname('')
        setRollno('')
        setPhno('')
        setAddress('')
        setUsername('')
        // setFathername('')
        setNrc('')
        // setDob('')
        setGender('')
  
        navigate('/allstudents')
      }
    }
  
  
  
    return (
      <div class="main-panel">
        <div class="content-wrapper">
          <div className={classes.formboldformwrapper}>
            <form className={classes.form} onSubmit={onSubmit}>
              <p className={classes.title}>Update Student</p>
              <label>
                  <input type="text" className={classes.input} value={id}  />
                  <span>Fullname</span>
                </label>
              <div className={classes.flex}>
             
                <label>
                  <input type="text" className={classes.input} value={fullname} onChange={onFullnameChange} />
                  <span>Fullname</span>
                </label>
                <label>
                  <input type="text" className={classes.input} value={rollno} onChange={onRollnoChange} />
                  <span>Roll No</span>
                </label>
              </div>
              <label>
                  <input type="text" className={classes.input} value={phno} onChange={onPhnoChange}/>
                  <span>Phno</span>
                </label>
              <label>
                <input type="text" className={classes.input} value={address} onChange={onAddressChange}/>
                <span>Address</span>
              </label>
              <label>
                <input type="email" className={classes.input} value={username} onChange={onUsernameChange}/>
                <span>Email</span>
              </label>
              {/* <label>
                <input type="text" className={classes.input} value={fathername} onChange={onFathernameChange}/>
                <span>Father Name</span>
              </label> */}
  
              <label>
                <input type="text" className={classes.input} value={nrc} onChange={onNrcChange}/>
                <span>NRC</span>
              </label>
  
              {/* <label>
                <input type="date" className={classes.input} value={dob} onChange={onDobChange}/>
                <span>Date Of Birth</span>
              </label> */}
  
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
                <i class="mdi mdi-file-check btn-icon-prepend"></i> UPDATE
                 
                </button>
                </center>
            </form>
          </div>
        </div>
      </div>

  )
  
}



export default EditStudentForm