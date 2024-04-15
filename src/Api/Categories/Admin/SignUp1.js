import React from "react";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// import Axios from "axios"

const SignUp1 = () => {
  const [inputData, setInpuData] = useState({
    username: "",
    password: "",
  });

  const [value, setValue] = useState([]);

  const history = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setInpuData({
      ...inputData,
      [name]: value,
    });
  }

  function handleClick() {
    // location.reload();
    const values = JSON.parse(localStorage.getItem("login") || "[]");

    const kasim = {
      Name: inputData.username,
      Password: inputData.password,
      id: Math.random(),
    };
    values.push(kasim);
    localStorage.setItem("login", JSON.stringify(values));
    //   console.log(e.target.value[0]);
    setValue("");
    toast("registered succesfully");
    setTimeout(() => {
      history("/signin");
    }, 2000);

    console.log(value);
  }

  return (
    <div>
      <ToastContainer />
      <section
        style={{ display: "flex", justifyContent: "center", marginTop: "15%" }}
      >
        <div
          style={{
            backgroundColor: "gray",
            width: "40%",
            height: "210px",
            borderTopRightRadius: "50px",
            borderBottomLeftRadius: "50px",
          }}
        >
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10%",
            }}
          >
            <span style={{ marginTop: "8px" }}>
              <b>UserName</b> :
            </span>
            &nbsp;&nbsp;&nbsp;
            <Input
              placeholder="Add username"
              name="username"
              value={inputData.username}
              onChange={(e) => handleChange(e)}
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
              value={inputData.password}
              onChange={(e) => handleChange(e)}
              sx={{ textAlign: "center" }}
            ></Input>
          </section>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <Link to={"signin"}> */}
            <Button
              onClick={() => handleClick()}
              sx={{ backgroundColor: "black", marginTop: "10px" }}
            >
              Submit
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp1;
