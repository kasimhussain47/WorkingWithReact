import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AdminDashboard = () => {
  

  const [data, setData] = useState([]);
  

  useEffect(() => {
    const storedData = localStorage.getItem('values');

    if (storedData) {
      setData(JSON.parse(storedData));
    }
    console.log(storedData)
  }, []); 

  function handleEdit(id,Name) {
    // const updatedData = { ...data, keyToUpdate: 'updatedValue' };
    // setData(updatedData);
    // updateDataInLocalStorage(updatedData);

    
    var newEditItem = data.find((val) => {
      return val.id === id;
    });
    // console.log(newEditItem)
    
    setInpuData(newEditItem.Name)
    setPassword(newEditItem.Password)
  }

  const handleDelete = (itemId) => {

    const storedData = JSON.parse(localStorage.getItem('values')) || [];
    const updatedData = storedData.filter(item => item.id !== itemId);
    localStorage.setItem('values', JSON.stringify(updatedData));
    setData(updatedData);

  }

  const [inputData, setInpuData] = useState();
  const [password, setPassword] = useState();

  const history = useNavigate();

  function handleClick (itemId,event) {
    // event.preventDefault();
    const values = JSON.parse(localStorage.getItem('values')) || [];

    const kasim = {
      Name: inputData,
      Password: password,
      id: Math.random(),
    };
    values.push(kasim);
    // localStorage.setItem("values", JSON.stringify(values));
    // const loginData = { Name:inputData, Password:password };
    const updatedData = values.filter(item => item.id !== itemId);
   localStorage.setItem('values', JSON.stringify(updatedData));
    alert('Login data updated successfully!');
    setData(updatedData)
    // console.log(updatedData)
  }

  return (
    <>
       <ToastContainer />
    {/* <DataContext.Provider value={{ inputData, setInpuData}}>
      <AdminDashboard/>
    </DataContext.Provider> */}
    <div>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4%",
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
          {/* <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={() => handleClick()}
              sx={{ backgroundColor: "black", marginTop: "10px" }}
            >
              Update
            </Button>
          </div> */}
        </div>
      </section>
    </div>
     
    {/* <Update/> */}
      <div>Admin</div>
      <div style={{justifyContent:"center",alignItems:"center",position:"absolute", left:"500px" , top:"350px"}}>
      <table style={{border:"1px solid black",borderCollapse:"collapse"}}>
  <tr>
    <th>Id</th>&nbsp;
    <th>UserName</th>&nbsp;
    <th>Password</th>&nbsp;
    <th>Edit</th>&nbsp;
    <th>Delete</th>&nbsp;
  </tr>
      {data && data?.map((val)=>{return(
  <tr key={val.id}>
    <td>{val.id}</td>&nbsp;
    <td>{val.Name}</td>&nbsp;
    <td>{val.Password}</td>&nbsp;
    <td><Button onClick={() => handleEdit(val.id)}>Edit</Button></td>&nbsp;
    <td><Button
              onClick={() => handleClick(val.id)}
              sx={{ backgroundColor: "black", marginTop: "10px" }}
            >
              Update
            </Button></td>&nbsp;
    <td><Button onClick={() => handleDelete(val.id)}>Delete</Button></td>&nbsp;
  </tr>
  )})}
</table>
      </div>
    </>
  );
};

export default AdminDashboard;
