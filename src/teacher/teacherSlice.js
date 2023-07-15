import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_TEACHERS ='http://localhost:8585/api/teacher/all'

export const fetchTeachers = createAsyncThunk('teachers/fetchTeachers',async()=>{
    const response = await axios.get(GET_ALL_TEACHERS)
    return response.data
})

const initialState ={
    teachers:[],
    status:'idle',
    error:null
}
export const teacherSlice = createSlice({
    name:"teachers",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchTeachers.fulfilled,(state,action) =>{
                console.log("Teahcer"+action.payload)
                state.status = "succeeded"
                state.teachers = action.payload
            })
    }
    
})

export const getAllTeachers = (state) => state.teachers.teachers

export default teacherSlice.reducer