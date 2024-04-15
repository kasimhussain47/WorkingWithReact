import React, { useState } from "react";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
// import Form from "./Form";

const TodoList = ({ id }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
    id:""
  });
  const [consol, setConsol] = useState([]);
  
  function handleClick() {
    // console.log(event.target.value)
    setConsol([...consol,{id:consol.length + 1, username : data.username , password : data.password  ,isEditing: false }]);
    setData({
      username: "",
      password: "",
      id:""
    });



    // consol.filter((val) => {
    //   return  if(val.id == data.id){
    //     return  setConsol((prev) => { 
    //       return [...prev, val.username = data.username ,
    //        val.password = data.password,
    //        val.id = data.id]
    //        } )
    //     }


    // })
   

    // setPassword("");
  }

  function handleChange(e) {
    console.log(e.target.value);
    // setData(event.target.value)
    const name = e.target.name;
    const value = e.target.value;

    setData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
   
  }

  const deleteItems = (id) => {
    // e.preventDefault()

    // setConsol(consol.filter((data)=>data?.id !== id))
    // consol.filter((arrElem, index) => {
    //   return index != id;
    // });
    // setConsol((newItems) => {
    //   return
    // });
    setConsol(consol.filter((data) => data.id !== id ));
  };

  function EditItems(id) {

      var newEditItem = consol.find((data) => {
        return data.id === id;
      });
      console.log(newEditItem)

      setData({ username: newEditItem.username ,
      password: newEditItem.password,
      id: newEditItem.id
    })

    
  }
  
  function UpdateItems(id) {
    console.log(id)
    setConsol(
          consol.map((val) =>
            val.id === id ? { ...val, id : id , username : data.username , password : data.password  } : val
          )
        );

    
  }

  return (
    <>
      <section style={{ justifyContent: "center", marginTop: "15%" }}>
        <section style={{ display: "flex", justifyContent: "center" }}>
          <span style={{ marginTop: "8px" }}>
            <b>UserName</b> :
          </span>
          &nbsp;&nbsp;&nbsp;
          <Input
            placeholder="Add username"
            name="username"
            value={data.username}
            onChange={handleChange}
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
            value={data.password}
            onChange={handleChange}
            sx={{ textAlign: "center" }}
          ></Input>
        </section>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => handleClick()}
            sx={{ backgroundColor: "black", marginTop: "10px" }}
          >
            +
          </Button>
        </div>
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
            style={{
              // backgroundColor: "black",
              marginLeft: "300px",
              marginBottom: "5px",
            }}
            // id="cross"
            onClick={()=>UpdateItems(consol.id, consol.username , consol.password)}
          >
            Update
          </Button>
        </div> */}
      </section>



      {console.log(consol, "consol")}

      {consol.map((val, index) => (
        <div>
          {" "}
          <h1 style={{ backgroundColor: "gray", marginLeft: "10px" }}>
            {val.username}&nbsp;
          </h1>
          {val.password}
          {val.id}
          {/* <td>
         </td>
         <td>
         </td>
        <td> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              backgroundColor: "black",
              marginLeft: "300px",
              marginBottom: "5px",
            }}
            // id="cross"
            onClick={()=>deleteItems(val.id)}
          >
            ❌
          </Button>
          <Button
            style={{
              // backgroundColor: "black",
              marginLeft: "300px",
              marginBottom: "5px",
            }}
            // id="cross"
            onClick={()=>EditItems(val.id)}
          >
            Edit
          </Button>

        <Button
            style={{
              // backgroundColor: "black",
              marginLeft: "300px",
              marginBottom: "5px",
            }}
            // id="cross"
            onClick={()=>UpdateItems(val.id, val.username , val.password)}
          >
            Update
          </Button>
        </div>
          {/* </td> */}
        </div>
      ))}
    </>
  );
};

export default TodoList;
