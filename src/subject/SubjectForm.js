import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createSubjects } from './subjectSlice'
import classes from '../teacher/TeacherForm.module.css'

const SubjectForm = () => {

    const [ codeno,setCodeno ] = useState('')
    const [ name,setName ] = useState('')
    const [addRequestStatus,setAddRequestStatus ] = useState('idle')

    const onCodenoChange = e => setCodeno(e.target.value)
    const onNameChange = e => setName(e.target.value)

    const canSave = [codeno,name].every(Boolean) && addRequestStatus === 'idle'

    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const onSubmit = (event) => {
      event.preventDefault();
  
      if(canSave){
        try{
          setAddRequestStatus('pending')
  
          dispatch(
            createSubjects({
             codeno,
             name
    
            })
            )
        }catch(error){
          console.log(error)
        }finally{
          setAddRequestStatus('idle')
        }
  
        setCodeno('')
        setName('')
  
        navigate('/allsubjects')
      }
    }

    

  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div className={classes.formboldformwrapper}>
          <form className={classes.form} onSubmit={onSubmit}>
            <p className={classes.title}>Create Subject</p>
            <div className={classes.flex}>
              <label>
                <input type="text" className={classes.input} value={codeno} onChange={onCodenoChange} />
                <span>Code No</span>
              </label>
              <label>
                <input type="text" className={classes.input} value={name} onChange={onNameChange}/>
                <span>Name</span>
              </label>
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

export default SubjectForm