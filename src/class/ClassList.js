import React from 'react'
import { getAllClasses } from './classSlice';
import { useSelector } from 'react-redux';
import ClassItem from './ClassItem';

const ClassList = () => {
    const classes = useSelector(getAllClasses)

    let content;
  
    content = classes.map(
      (c) =>(
        <ClassItem 
        id = { c.id}
        codeNo ={c.codeNo}
        className = { c.className}
       
        />
      )
    );
  
    return content;
  }

export default ClassList