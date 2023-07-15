import React from 'react'
import { useSelector } from 'react-redux'
import { getAllTeachers } from './teacherSlice'
import TeacherItem from './TeacherItem'

const TecherList = () => {


  const teachers = useSelector(getAllTeachers)

  let content;

  content = teachers.map(
    (teacher) =>(
      <TeacherItem 
      id = { teacher.id}
      fullname = { teacher.fullname}
      phno = { teacher.phno}
      username = { teacher.username}
      qualification = {teacher.qualification}
      position = { teacher.position}
      nrc = { teacher.nrc}
      dob = {teacher.dob}
      gender = {teacher.gender}
      />
    )
  );

  return content;
}

export default TecherList