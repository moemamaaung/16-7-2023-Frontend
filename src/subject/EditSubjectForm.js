import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchSubjects, selectSubjectById, updateSubjects } from './subjectSlice'
import classes from '../teacher/TeacherForm.module.css'
import { fetchTeachers, getAllTeachers } from '../teacher/teacherSlice'
import { fetchClasses, getAllClasses } from '../class/classSlice'

const EditSubjectForm = () => {

    const { subjectId } = useParams()
    console.log("SubjectId "+subjectId)
    const subjects = useSelector((state)=>selectSubjectById(state,Number(subjectId)))
    console.log(subjects)

    const [ id ] = useState(subjects.id)
    const [ userId, setTeacher] = useState(subjects?.user.id)
    const [ classId,setClass] = useState(subjects.yearClass.id)
    const [ codeno,setCodeno ] = useState(subjects.codeno)
    const [ name,setName ] = useState(subjects.name)
    const [updateRequestStatus,setUpdateRequestStatus ] = useState('idle')

    const onCodenoChange = e => setCodeno(e.target.value)
    const onNameChange = e => setName(e.target.value)
    const onTeacherIdChange = e => setTeacher(e.target.value)
    const onClassIdChange = e => setClass(e.target.value)

    const canUpdate = [id,codeno,name,userId,classId].every(Boolean) && updateRequestStatus === 'idle'

    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const teachers = useSelector(getAllTeachers);
    const yearclasses = useSelector(getAllClasses)
    useEffect(() => {
      dispatch(fetchTeachers());
      dispatch(fetchSubjects());
      dispatch(fetchClasses())
    }, [dispatch]);

    const onSubmit = (event) => {
      event.preventDefault();
  
      if(canUpdate){
        try{
          setUpdateRequestStatus('pending')
  
          dispatch(
            updateSubjects({
              id,
             codeno,
             name,
             userId,
             classId
             
    
            })
            )
        }catch(error){
          console.log(error)
        }finally{
          setUpdateRequestStatus('idle')
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
            <p className={classes.title}>Update Subject</p>
            <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <select
                      className={classes.name}
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
                  </div>
                </div>

                <div className={classes.inputGroup}>
                  <div className={classes.inputBox}>
                    <select
                      className={classes.name}
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
                  </div>
                </div>
         
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