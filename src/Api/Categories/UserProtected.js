import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const UserProtected = () => {
    const [ isuser , setisuser ] = useState(false)
    const navigate = useNavigate()

    const logindata =JSON.parse(localStorage.getItem("userexist"));
    // const userData =JSON.parse(localStorage.getItem("login"));
console.log(logindata)
const checkAdmin = () => {
  if(logindata.Name != 'admin' && logindata.Password != 'admin'){
  setisuser(true);
  }else{
    setisuser(false)
  }
}

    useEffect(() => 
    {
     checkAdmin()

    },[])
  return (
    <>
    {isuser ? <Outlet/> : 'you are not user'}
    </>
  )
}

export default UserProtected

