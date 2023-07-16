import React from 'react'
import classes from './TeacherForm.module.css'
import { Link } from 'react-router-dom'

const CreateTeacherButton = () => {
    const color1 = ` ms-4 ${classes.color1}`
  return (
    <React.Fragment>
         <Link to='/create-teacher' >
         <button className={color1}><i class="fas fa-plus fa-sm"></i> Teacher</button>
        </Link>
        </React.Fragment>
  )
}

export default CreateTeacherButton