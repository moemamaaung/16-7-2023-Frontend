import React from 'react'
import { Link } from 'react-router-dom'
import ConfirmModal from '../utility/ConfirmModal'
import { deleteTeacher } from './teacherSlice'
import { useState } from 'react'
import { useDispatch } from "react-redux";

 

const TeacherItem = (props) => {

  const dispatch = useDispatch()
  const [isModalOpen, setModalOpen] = useState(false)

  function deleteHandler() {
    setModalOpen(true);
}

function cancelHandler() {
    setModalOpen(false);
}

function confirmHandler() {
    dispatch(deleteTeacher(props.id)).unwrap()
    setModalOpen(false)
}



  return (
   <tr>
    <td>{props.id}</td>
    <td>{props.fullname}</td>
    {/* <td>{props.phno}</td>
    <td>{props.username}</td> */}
    {/* <td>{props.qualification}</td> */}
    <td>{props.position}</td>
    {/* <td>{props.nrc}</td> */}
    {/* <td>{props.dob}</td> */}
    {/* <td>{props.gender}</td> */}
    <td><Link to={`/teacher/${props.id}`} style={{textDecoration : 'none'}} className="fw-bold text-success">View Detail</Link></td>

    <td><Link to={`/teacher/update/${props.id}`}  ><i class="far fa-edit fa-lg" style={{color:"green"}}></i></Link>&nbsp;&nbsp;
           <Link  type='button' onClick={deleteHandler} ><i class="ms-3 fas fa-trash fa-lg" style={{color:"green"}}></i></Link>
      </td>

      {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler} />}
    
   </tr>

   
  )
}

export default TeacherItem