import React, { useEffect } from "react";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn1 = () => {
  const [inputData, setInpuData] = useState();
  const [password, setPassword] = useState();
  const [value, setValue] = useState();

  const history = useNavigate();

  const values = JSON.parse(localStorage.getItem("login")) || [];

  // const adminName =values.map((val) => {
  //   // console.log(val.Name === "admin");
  //   return val.Name === "admin"
  // })
  // const adminPassword =values.map((val) => {
  //   // console.log(val.Name === "admin");
  //   return val.Password === "admin"           <------ not working
  // })

  const matchingUser = values.filter(
    (user) => user.Name == "admin" && user.Password == "admin"
  );
  const registeredUser = values.find(
    (user) => user.Name == inputData && user.Password == password
  );

  console.log(registeredUser);

  function handleClick() {
    if (!inputData && !password) {
      // alert("Enter inputs");
      toast("Enter inputs first");
      // history("/");
    }
    console.log(matchingUser, "matchingUser");

    if (matchingUser.length > 0) {
      if (
        matchingUser[0].Name == inputData &&
        matchingUser[0].Password == password
      ) {
        setValue(matchingUser[0]);
        toast("Admin log in successfully");
        setTimeout(() => {
          history("/admin");
        }, 3000);
        // localStorage.setItem('adminlog',true);
      } else if (registeredUser) {
        setValue(registeredUser);
        toast("User log in successfully");
        setTimeout(() => {
          history("/user/product");
        }, 3000);
        // localStorage.setItem('userlog',true);
      } else {
        toast("You are not registered user");
      }
    }
  }
  useEffect(() => {
    localStorage.setItem("userexist", JSON.stringify(value));
  }, [value]);
  console.log(value);

  return (
    <>
      <ToastContainer />
      <div>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15%",
          }}
        >
          <div
            style={{
              backgroundColor: "gray",
              width: "40%",
              height: "210px",
              borderTopRightRadius: "50px",
              borderBottomLeftRadius: "50px",
              borderColor: "orange",
              border: "5px  solid yellow ",
              boxShadow: "5px 10px",
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
              <Button
                onClick={() => handleClick()}
                sx={{ backgroundColor: "black", marginTop: "10px" }}
              >
                SignIn
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn1;
