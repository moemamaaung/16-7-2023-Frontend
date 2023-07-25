import { useSelector } from "react-redux";
import SemesterItem from "./SemesterItem";
import { getAllSemesters } from "./semesterSlice";

const SemesterList = () => {


    const semesters = useSelector(getAllSemesters)
  
    let content;
  
    content = semesters.map(
      (semester) =>(
        <SemesterItem 
        id = { semester.id}
        name = { semester.name}
        startDate = { semester.startdate}
        endDate = { semester.enddate}
        />
      )
    );
  
    return content;
  }
  
  export default SemesterList