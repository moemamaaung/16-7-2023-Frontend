import React from 'react'
import { getAllStudents } from './studentSlice';
import StudentItem from './StudentItem';
import { useSelector } from 'react-redux';

const StudentList = () => {
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
        />
      )
    );
  
    return content;
}

export default StudentList