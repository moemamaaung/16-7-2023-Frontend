import React from 'react'
import { fetchStudents, getAllStudents } from './studentSlice';
import StudentItem from './StudentItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClasses } from '../class/classSlice';
import { useEffect } from 'react';

const StudentList = () => {

  const dispatch = useDispatch()
    

    useEffect(()=> {
      dispatch(fetchStudents());
      dispatch(fetchClasses())
   },[dispatch]);
   
   const students = useSelector(getAllStudents)


    let content;
  
    content = students.map(
      (student) =>(
        <StudentItem 
        id = { student.id}
        fullname = { student.fullname}
        rollno = { student.rollno}
        phno = { student.phno}
        address = { student.address }
        username = { student.username}
        // fathername = {student.fathername}
        nrc = { student.nrc}
        // dob = {student.dob}
        gender = {student.gender}
        yearClass = {student.yearClass}
        />
      )
    );
  
    return content;
}

export default StudentList