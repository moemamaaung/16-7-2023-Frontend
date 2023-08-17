import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createClass } from './classSlice'
import classes from '../teacher/TeacherForm.module.css'

const CreateClass = () => {
  const [codeNo,setCodeNo ] = useState('')
  const [ name,setClassName ] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')
  const onCodenoChange = e => setCodeNo(e.target.value)
const onClassNameChange = e=> setClassName(e.target.value)
const canSave = [codeNo,name].every(Boolean) && addRequestStatus === 'idle'
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
                    name
                

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

      navigate(`/admin/allclasses`)
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
            <div>
              <select
                className="form-select"
                value={name}
                onChange={onClassNameChange}
              >
                <option>Choose Class</option>
                <option value="FirstYear">FirstYear</option>
                <option value="SecondYear">SecondYear</option>
                <option value="ThirdYear">ThirdYear</option>
                <option value="FourthYear">FourthYear</option>
                <option value="FifthYear">FifthYear</option>

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

export default CreateClass