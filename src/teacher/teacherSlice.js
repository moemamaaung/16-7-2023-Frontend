import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "jquery";

const GET_ALL_TEACHERS ='http://localhost:8585/api/teacher/all'
const CREATE_TEACHERS = 'http://localhost:8585/api/teacher/create'
const EDIT_TEACHERS = 'http://localhost:8585/api/teacher/update'
const DELETE_TEACHERS = 'http://localhost:8585/api/teacher/delete/'

export const fetchTeachers = createAsyncThunk('teachers/fetchTeachers',async()=>{
    const response = await axios.get(GET_ALL_TEACHERS)
    return response.data
})

export const createTeachers = createAsyncThunk('teachers/createTeachers',async(data) =>{
    console.log("Data"+data )
    const response = await axios.post(CREATE_TEACHERS,data)
    return response.data
})

export const updateTeachers = createAsyncThunk('teachers/updateTeachers',async (data) =>{
    const response = await axios.patch(EDIT_TEACHERS,data)
    return response.data
})

export const deleteTeacher = createAsyncThunk('teachers/deleteTeacher',async (teacherId) => {
    const response = await axios.delete(`${DELETE_TEACHERS}${teacherId}`);
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
            .addCase(createTeachers.fulfilled,(state,action)=>{
                state.status = 'succeed'
                state.teachers.push(Number(action.payload))
            })
            .addCase(updateTeachers.fulfilled,(state,action)=>{
                const teacher = action.payload
                const teachers = state.teachers.filter(t => t.id !== teacher.id)
                state.teachers = [...teachers,teacher]
            })
            .addCase(deleteTeacher.fulfilled,(state,action) =>{
                const teacher = state.teachers.filter(t => t.id !== Number(action.payload))
                state.teachers = teacher
            })
    }
    
})

export const getAllTeachers = (state) => state.teachers.teachers
export const selectTeacherById = (state,teacherId) => state.teachers.teachers.find(teacher => teacher.id === teacherId)

export const { addTeacher } = teacherSlice.actions
export default teacherSlice.reducer