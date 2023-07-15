import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "../teacher/teacherSlice";

export const store = configureStore({
    reducer:{
        teachers:teacherSlice
    }
})