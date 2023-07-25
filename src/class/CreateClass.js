import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createClass } from './classSlice'
import classes from '../teacher/TeacherForm.module.css'
const CreateClass = () => {
  const [codeNo,setCodeNo ] = useState('')
  const [ className,setClassName ] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')
  const onCodenoChange = e => setCodeNo(e.target.value)
const onClassNameChange = e=> setClassName(e.target.value)
const canSave = [codeNo,className].every(Boolean) && addRequestStatus === 'idle'
const dispatch = useDispatch();
  const navigate = useNavigate()

  const onSubmit = (event)=>{
      event.preventDefault();

      if(canSave){
          try {
              setAddRequestStatus('pending')
     
          dispatch(
              createClass({
                    codeNo,
                    className
                

              }),
          
      );
  }
  catch (error) {
      console.log(error)
  }finally{
      setAddRequestStatus('idle')
  }
    setCodeNo('')
    setClassName('')

      navigate(`/allclasses`)
}
  }
  return (
    <div class="main-panel">
    <div class="content-wrapper">
      <div className={classes.formboldformwrapper}>
        <form className={classes.form} onSubmit={onSubmit}>
          <p className={classes.title}>Create Class</p>
          <label>
              <input type="text" className={classes.input} value={codeNo} onChange={onCodenoChange} />
              <span>CodeNo</span>
            </label>
            <label>
              <input type="text" className={classes.input} value={className} onChange={onClassNameChange} />
              <span>ClassName</span>
            </label>
 


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

export default CreateClass