import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createSubjects, fetchSubjects } from './subjectSlice'
import classes from '../teacher/TeacherForm.module.css'
import { fetchTeachers, getAllTeachers } from '../teacher/teacherSlice'
import { fetchClasses, getAllClasses } from '../class/classSlice'

const SubjectForm = () => {

    const [ codeno,setCodeno ] = useState('')
    const [ name,setName ] = useState('')
    const [ userId, setTeacher ] = useState('')
    const [ classId,setClass] = useState('')
    const [addRequestStatus,setAddRequestStatus ] = useState('idle')

    const onCodenoChange = e => setCodeno(e.target.value)
    const onNameChange = e => setName(e.target.value)
    const onTeacherIdChange = e => setTeacher(e.target.value)
    const onClassIdChange = e => setClass(e.target.value)

    const canSave = [codeno,name,userId,classId].every(Boolean) && addRequestStatus === 'idle'

    const dispatch = useDispatch()
    const navigate = useNavigate()

   
    useEffect(() => {
      dispatch(fetchTeachers());
      dispatch(fetchSubjects());
      dispatch(fetchClasses())
    }, [dispatch]);

    const teachers = useSelector(getAllTeachers);
    const yearclasses = useSelector(getAllClasses)
    console.log(yearclasses)
  
    const onSubmit = (event) => {
      event.preventDefault();
  
      if(canSave){
        try{
          setAddRequestStatus('pending')
  
          dispatch(
            createSubjects({
             codeno,
             name,
             userId,
             classId
          
    
            })
            )
        }catch(error){
          console.log(error)
        }finally{
          setAddRequestStatus('idle')
        }
  
        setCodeno('')
        setName('')
  
        navigate('/admin/allsubjects')
      }
    }

    

  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div className={classes.formboldformwrapper}>
          <form className={classes.form} onSubmit={onSubmit}>
            <p className={classes.title}>Create Subject</p>
            {/* <div className={classes.flex}> */}
            
                    <select
                      className="form-select"
                      value={userId}
                      onChange={onTeacherIdChange}
                    >
                      <option value="">Choose Teacher</option>
                      {teachers.map((a) => (
                        <option key={a.id} value={a.id}>
                          {a.fullname}
                        </option>
                      ))}
                      ;
                    </select>


                
                    <select
                      className="form-select"
                      value={classId}
                      onChange={onClassIdChange}
                    >
                      <option value="">Choose Class</option>
                      {yearclasses.map((a) => (
                        <option key={a.id} value={a.id}>
                          {a.name}
                        </option>
                      ))}
                      ;
                    </select>
                

              <label>
                <input type="text" className={classes.input} value={codeno} onChange={onCodenoChange} />
                <span>Code No</span>
              </label>

              <label>

                <input type="text" className={classes.input} value={name} onChange={onNameChange}/>
                <span>Subject Name</span>
              </label>
            {/* </div> */}

          


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