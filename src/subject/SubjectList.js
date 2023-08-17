import React, { useEffect } from 'react'
import SubjectItem from './SubjectItem';
import { fetchSubjects, getAllSubjects } from './subjectSlice';
import { useDispatch, useSelector } from 'react-redux';

const SubjectList = () => {

    const subjects = useSelector(getAllSubjects)
    const dispatch = useDispatch()
    useEffect(()=> {
      dispatch(fetchSubjects());
   },[dispatch]);


  let content;

  content = subjects.map(
    (subject) =>(
      <SubjectItem 
      id = { subject.id}
      codeno = { subject.codeno}
      name = { subject.name}
      user ={ subject.user }
      yearClass = {subject.yearClass}
      />
    )
  );

  return content;
}

export default SubjectList