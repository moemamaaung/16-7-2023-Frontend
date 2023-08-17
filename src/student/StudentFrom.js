import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createStudents, getAllStudents } from './studentSlice'
import classes from '../teacher/TeacherForm.module.css'
import { fetchClasses, getAllClasses } from '../class/classSlice'

const StudentFrom = () => {

  useEffect(() => {
    dispatch(fetchClasses())


  }, [])

  const yearClasses = useSelector(getAllClasses)
  console.log("Class" + yearClasses)


  const [fullname, setFullname] = useState('')
  const [rollno, setRollno] = useState('')
  const [phno, setPhno] = useState('')
  const [classId, setClassId] = useState('')
  const [address, setAddress] = useState('')
  const [username, setUsername] = useState('')
  // const [ fathername,setFathername ] = useState('')
  const [nrc, setNrc] = useState('')
  // const [ dob,setDob ] = useState('')
  const [gender, setGender] = useState('')

  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const onFullnameChange = e => setFullname(e.target.value)
  const onRollnoChange = e => setRollno(e.target.value)
  const onPhnoChange = e => setPhno(e.target.value)
  const onAddressChange = e => setAddress(e.target.value)
  const onUsernameChange = e => setUsername(e.target.value)
  // const onFathernameChange = e => setFathername(e.target.value)
  const onNrcChange = e => setNrc(e.target.value)
  const onClassIdChange = e => setClassId(e.target.value)
  // const onDobChange = e => setDob(e.target.value)
  const onGenderChange = e => setGender(e.target.value)



  const canSave = [fullname, rollno, phno, address, username, nrc, gender, classId].every(Boolean) && addRequestStatus === 'idle'

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault();

    if (canSave) {
      try {
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
            gender,
            classId

          })
        )
      } catch (error) {
        console.log(error)
      } finally {
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

      navigate('/admin/allstudents')
    }
  }




  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div className={classes.formboldformwrapper}>
          <form className={classes.form} onSubmit={onSubmit}>
            <p className={classes.title}>Create Student</p>


            <select
              className="form-select"
              value={classId}
              onChange={onClassIdChange}

            >
              <option value="">Choose Class</option>

              {yearClasses.map((year) => (

                <option key={year.id}
                  value={year.id}

                >
                  <span> {year.name} </span>
                </option>
              ))}

            </select>


            <label>
              <input type="text" className={classes.input} value={fullname} onChange={onFullnameChange} />
              <span>Fullname</span>
            </label>
            <label>
              <input type="text" className={classes.input} value={rollno} onChange={onRollnoChange} />
              <span>Roll No</span>
            </label>

            <label>
              <input type="text" className={classes.input} value={phno} onChange={onPhnoChange} />
              <span>Phno</span>
            </label>
            <label>
              <input type="text" className={classes.input} value={address} onChange={onAddressChange} />
              <span>Address</span>
            </label>
            <label>
              <input type="email" className={classes.input} value={username} onChange={onUsernameChange} />
              <span>Email</span>
            </label>
            {/* <label>
                <input type="text" className={classes.input} value={fathername} onChange={onFathernameChange}/>
                <span>Father Name</span>
              </label> */}

            <label>
              <input type="text" className={classes.input} value={nrc} onChange={onNrcChange} />
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