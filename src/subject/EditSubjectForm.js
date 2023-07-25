import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { selectSubjectById, updateSubjects } from './subjectSlice'
import classes from '../teacher/TeacherForm.module.css'

const EditSubjectForm = () => {

    const { subjectId } = useParams()
    console.log("SubjectId "+subjectId)
    const subjects = useSelector((state)=>selectSubjectById(state,Number(subjectId)))
    console.log(subjects)

    const [ id ] = useState(subjects.id)
    const [ codeno,setCodeno ] = useState(subjects.codeno)
    const [ name,setName ] = useState(subjects.name)
    const [updateRequestStatus,setUpdateRequestStatus ] = useState('idle')

    const onCodenoChange = e => setCodeno(e.target.value)
    const onNameChange = e => setName(e.target.value)

    const canUpdate = [id,codeno,name].every(Boolean) && updateRequestStatus === 'idle'

    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const onSubmit = (event) => {
      event.preventDefault();
  
      if(canUpdate){
        try{
          setUpdateRequestStatus('pending')
  
          dispatch(
            updateSubjects({
              id,
             codeno,
             name
    
            })
            )
        }catch(error){
          console.log(error)
        }finally{
          setUpdateRequestStatus('idle')
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
            <p className={classes.title}>Update Subject</p>
            <label>
                <input type="text" className={classes.input} value={id} />
                <span>Id</span>
              </label>
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
              <i class="mdi mdi-file-check btn-icon-prepend"></i> UPDATE
               
              </button>
              </center>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditSubjectForm