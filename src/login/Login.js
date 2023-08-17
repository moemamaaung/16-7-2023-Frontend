import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getLoginStatus, getRoles, login } from './authSlice'
import classes from './Login.module.css'

const Login = () => {
    const [username,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loginRequestStatus,setLoginRequestStatus] = useState('idle')
  const [message,setMessage] = useState('')

  useEffect(()=>{
    setMessage('')
  },[username,password])
 

  const onEmailChange = e => {setEmail(e.target.value)}
  const onPasswordChange = e => {setPassword(e.target.value)}

  const canLogin = [username,password].every(Boolean) && loginRequestStatus === 'idle'
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/admin"
  const fromS = location.state?.from?.pathname || "/user"

  const loginStatus = useSelector(getLoginStatus)
  const roleType = useSelector(getRoles)
  console.log("RoleType:" + roleType)

  useEffect(()=>{
    if(String(loginStatus) === 'success'){
      if(roleType == 'ROLE_ADMIN'){
        navigate(from,{replace:true})
      }else{
        navigate(fromS,{replace:true})
      }
    }
  },[loginStatus,from,navigate])

  useEffect(()=>{
    if(String(loginStatus) === 'failed'){
      setMessage(<span className="alert-danger">Username or password is incorrect</span>)
    }
},[loginStatus])

  const onLogin = (e) => {
    e.preventDefault()
    
    if(canLogin){
      setLoginRequestStatus('pending')

      try {
          dispatch(login({
            username,
            password
          })).unwrap()
          
          
      } catch (error) {
        console.error(error)
      } finally {
        setLoginRequestStatus('idle')
      }
    }
  }

  return (
    <div className={classes.m}>
    <form className={classes.form}>
    <div className={classes.header}>Sign in</div>
    <div className={classes.inputs}>
      <input placeholder="Email" className={classes.input} value={username} onChange={onEmailChange} type="text" />
      <input placeholder="Password" className={classes.input} value={password} onChange={onPasswordChange} type="password" />
      <div className={classes.checkboxcontainer}>
        <label className={classes.checkbox}>
          <input type="checkbox" id="checkbox" />
        </label>
        <label for="checkbox" className={classes.checkboxtext}>Remember me</label>
      </div>
      <button className={classes.siginbtn} onClick={onLogin}>Submit</button>
    </div>
  </form >
  </div>

  )
}

export default Login