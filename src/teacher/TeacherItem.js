import React from 'react'

const TeacherItem = (props) => {
  return (
   <tr>
    <td>{props.id}</td>
    <td>{props.fullname}</td>
    <td>{props.phno}</td>
    <td>{props.username}</td>
    <td>{props.qualification}</td>
    <td>{props.position}</td>
    <td>{props.nrc}</td>
    <td>{props.dob}</td>
    <td>{props.gender}</td>
   </tr>
  )
}

export default TeacherItem