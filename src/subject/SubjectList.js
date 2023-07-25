import React from 'react'
import SubjectItem from './SubjectItem';
import { getAllSubjects } from './subjectSlice';
import { useSelector } from 'react-redux';

const SubjectList = () => {

    const subjects = useSelector(getAllSubjects)

  let content;

  content = subjects.map(
    (subject) =>(
      <SubjectItem 
      id = { subject.id}
      codeno = { subject.codeno}
      name = { subject.name}
      />
    )
  );

  return content;
}

export default SubjectList