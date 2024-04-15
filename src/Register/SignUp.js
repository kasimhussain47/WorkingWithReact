import React from 'react'
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Axios from "axios"

const SignUp = () => {

    const [inputData, setInpuData] = useState();
    const [password, setPassword] = useState();
    const [value, setValue] = useState([]);


    // const history = useNavigate();
  


      function handleClick(e) {

        const values = JSON.parse(localStorage.getItem("values") || "[]");

      const kasim = {
        Name: inputData,
        Password: password,
        id: Math.random(),
      };
      values.push(kasim);
      localStorage.setItem("values", JSON.stringify(values));
    //   console.log(e.target.value[0]);
      setValue("");
      alert("submited");
    //   history("/authentication/Otp");
    // }
    console.log(value);
    
      }

  return (
    <div>
       <section style={{display:"flex", justifyContent: "center", marginTop: "15%", }}>
        <div style={{backgroundColor:"gray",width:"40%" ,height:"210px" , borderTopRightRadius:"50px" , borderBottomLeftRadius:"50px" ,}}>

        <section style={{ display: "flex", justifyContent: "center",marginTop: "10%" }}>
          <span style={{ marginTop: "8px" }}>
            <b>UserName</b> :
          </span>
          &nbsp;&nbsp;&nbsp;
          <Input
            placeholder="Add username"
            name="username"
            value={inputData}
            onChange={(e) => setInpuData(e.target.value)}
            sx={{ textAlign: "center" }}
          ></Input>
        </section>
        <section style={{ display: "flex", justifyContent: "center" }}>
          <span style={{ marginTop: "8px" }}>
            <b>Password</b> :
          </span>
          &nbsp;&nbsp;&nbsp;
          <Input
            placeholder="Add password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ textAlign: "center" }}
          ></Input>
        </section>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to={"signin"}>
          <Button
            onClick={() => handleClick()}
            sx={{ backgroundColor: "black", marginTop: "10px" }}
            >
            Submit
          </Button>
              </Link> 
        </div>
        </div>

        </section>
    </div>
  )
}

export default SignUp
