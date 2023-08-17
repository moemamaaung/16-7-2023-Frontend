import React from 'react'
import classes from '../teacher/TeacherForm.module.css'
import { Link } from 'react-router-dom';

const CreateSubjectButton = () => {

    const color1 = `btn btn-inverse-success btn-fw ms-4 ${classes.color1}`;
  return (
    <React.Fragment>
      <Link to="/admin/create-subject">
        <button className={color1}>
          <i class="fas fa-plus fa-sm"></i> Subject
        </button>
      </Link>
    </React.Fragment>
  )
}

export default CreateSubjectButton