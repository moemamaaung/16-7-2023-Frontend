import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { selectClassById, updateClass } from './classSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import style from '../teacher/TeacherForm.module.css'

const UpdateClass = () => {
  const { classId } = useParams( )
    console.log("TeacherId : "+classId)
    const classes = useSelector((state)=>selectClassById(state,Number(classId))) 
    console.log(classes)

    const [ id] = useState(classes.id)
    const [ codeNo,setCodeNo] = useState(classes.codeNo)
    const [ className,setClassName] = useState(classes.className)

    const [updateRequestStatus, setUpdateRequestStatus] = useState('idle')

    const onCodeNoChange = e => setCodeNo(e.target.value)
    const onClassNameChange = e => setClassName(e.target.value)
    const canSave = [id,codeNo,className].every(Boolean) && updateRequestStatus === 'idle'


    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const onSubmit = (event) => {
      event.preventDefault();
  
      if(canSave){
        try{
          setUpdateRequestStatus('pending')
  
          dispatch(
            updateClass({
              id,
              codeNo,
              className
              
    
            })
            )
        }catch(error){
          console.log(error)
        }finally{
          setUpdateRequestStatus('idle')
        }
  
       
  
        navigate('/allclasses')
      }
    }
  
  return (
    <div class="main-panel">
    <div class="content-wrapper">
      <div className={style.formboldformwrapper}>
        <form className={style.form} onSubmit={onSubmit}>
          <p className={style.title}>Edit Class</p>
          <label>
            <input type="text" className={style.input} value={codeNo} onChange={onCodeNoChange}/>
            <span>Code No</span>
          </label>
          <label>
            <input type="text" className={style.input} value={className} onChange={onClassNameChange}/>
            <span>ClassName</span>
          </label>


        <center>
            <button className={style.send}>
              UPDATE
             
            </button>
            </center>
        </form>
      </div>
    </div>
  </div>
  )
}

export default UpdateClass