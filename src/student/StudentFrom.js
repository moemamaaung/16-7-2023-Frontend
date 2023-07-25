import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { createStudents } from './studentSlice'
import classes from '../teacher/TeacherForm.module.css'

const StudentFrom = () => {
    const [ fullname,setFullname] = useState('')
    const [ rollno,setRollno] = useState('')
    const [ phno,setPhno] = useState('')
    const [ address,setAddress ] = useState('')
    const [ username,setUsername] = useState('')
    // const [ fathername,setFathername ] = useState('')
    const [ nrc,setNrc ] = useState('')
    // const [ dob,setDob ] = useState('')
    const [gender,setGender] = useState('')
  
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
  
    const onFullnameChange = e => setFullname(e.target.value)
    const onRollnoChange = e => setRollno(e.target.value)
    const onPhnoChange = e => setPhno(e.target.value)
    const onAddressChange = e => setAddress(e.target.value)
    const onUsernameChange = e => setUsername(e.target.value)
    // const onFathernameChange = e => setFathername(e.target.value)
    const onNrcChange = e => setNrc(e.target.value)
    // const onDobChange = e => setDob(e.target.value)
    const onGenderChange = e => setGender(e.target.value)
    
    const canSave = [fullname,rollno,phno,address,username,nrc,gender].every(Boolean) && addRequestStatus === 'idle'
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const onSubmit = (event) => {
      event.preventDefault();
  
      if(canSave){
        try{
          setAddRequestStatus('pending')
  
          dispatch(
            createStudents({
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
          setAddRequestStatus('idle')
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
              <p className={classes.title}>Create Student</p>
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
                <i class="mdi mdi-file-check btn-icon-prepend"></i> Create
                 
                </button>
                </center>
            </form>
          </div>
        </div>
      </div>

  )
  
}

export default StudentFrom