import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeachers, getAllTeachers } from './teacherSlice'
import TeacherItem from './TeacherItem'

const TecherList = () => {

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchTeachers());
  
  // }, );


  const teachers = useSelector(getAllTeachers)
  console.log(teachers)

  let content;

  content = teachers.map(
    (teacher) =>(
      <TeacherItem 
      id = { teacher.id}
      fullname = { teacher.fullname}
      username = { teacher.username}
      password = { teacher.password}
      // qualification = {teacher.qualification}
      position = { teacher.position}
      status = { teacher.status}
      nrc = { teacher.nrc}
      // dob = {teacher.dob}
      phno = {teacher.phno}
      gender = {teacher.gender}
      />
    )
  );

  return content;
}

export default TecherList