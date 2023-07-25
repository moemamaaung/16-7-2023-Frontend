import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "../teacher/teacherSlice";
import subjectSlice from "../subject/subjectSlice";
import studentSlice from "../student/studentSlice";
import classSlice from "../class/classSlice";
import semesterSlice from "../semester/semesterSlice";

export const store = configureStore({
    reducer:{
        teachers:teacherSlice,
        subjects:subjectSlice,
        students:studentSlice,
        classes:classSlice,
        semesters:semesterSlice
    }
})