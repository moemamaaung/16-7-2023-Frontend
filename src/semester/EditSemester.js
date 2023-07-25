import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSemesterById, updateSemester } from './semesterSlice'
import classes from '../teacher/TeacherForm.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
const EditSemester = () => {
    const { semesterId } = useParams( )
    const semesters = useSelector((state)=>selectSemesterById(state,Number(semesterId))) 

    const [ id ] = useState(semesters.id)
    const [ name,setName] = useState(semesters.name)
    const [ startdate,setStartDate] = useState(semesters.startdate)
    const [ enddate,setEndDate] = useState(semesters.enddate)
   
    const [updateRequestStatus, setUpdateRequestStatus] = useState('idle')
  
    const onNameChange = e => setName(e.target.value)
    const onStartDateChange = e => setStartDate(e.target.value)
    const onEndDateChange = e => setEndDate(e.target.value)
    
    const canSave = [id,name,startdate,enddate].every(Boolean) && updateRequestStatus === 'idle'
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const onSubmit = (event) => {
      event.preventDefault();
  
      if(canSave){
        try{
          setUpdateRequestStatus('pending')
  
          dispatch(
            updateSemester({
              id,
              name,
              startdate,
              enddate
    
            })
            )
        }catch(error){
          console.log(error)
        }finally{
          setUpdateRequestStatus('idle')
        }
  
        setName('')
        setStartDate('')
        setEndDate('')
  
        navigate('/allsemesters')
      }
    }
  
  return (
    <div class="main-panel">
    <div class="content-wrapper">
      <div className={classes.formboldformwrapper}>
        <form className={classes.form} onSubmit={onSubmit}>
          <p className={classes.title}>Edit Semester</p>
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
              UPDATE
             
            </button>
            </center>
        </form>
      </div>
    </div>
  </div>
  )
}

export default EditSemester