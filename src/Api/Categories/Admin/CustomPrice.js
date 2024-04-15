import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "../Chart";

const CustomPrice = () => {
  let navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem("values"));
  console.log(data);

  const [inputField, setinputField] = useState(false);
  const [change, setChange] = useState();
  const [price, setPrice] = useState({
    price1:"",
    id:""
  });

  function handleChange(e) {
    setChange(e.target.value)
    const {name,value}=e.target;
    setPrice((predata) => {
    return {
      ...predata,
      [name]:value
    }
    })
  }

  function handleClick(id) {
    // setinputField((prevInputFields) => ({
    //  prevInputFields,
    //   [id]: !prevInputFields[id], // Toggle the input field for the clicked product
    // }));

    // if(id === vac.id){

    // }
    setinputField(true)
    const data2 = data.filter((val) => {
      return val.id == id
    })
    console.log(data2)
    setPrice({price1:data2[0].price , id:data2[0].id})

  }

  function Update(id) {
    let data1 = data?.filter((item) => {
      // console.log(item, "item");
      // console.log(id, "valid");
      return item?.id === id;
    });
    console.log(data1, "idsss");
    if (data1 && data1.length > 0) {
      data1[0].price = change;
      localStorage.setItem("values", JSON.stringify(data));
      let updateddata = JSON.parse(localStorage.getItem("values"));
      setPrice(updateddata);
    }
    setinputField(false)

    // setinputField((prevInputFields) => ({
    //   ...prevInputFields,
    //   [id]: !prevInputFields[id], // Toggle the input field for the clicked product
    // }));
  }
  function Logoutbutton() {
    navigate("/signin");
    // localStorage.setItem('adminlog',false);

  }
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
                <Button onClick={Logoutbutton}>log out</Button>
      <table>
        <tr>
          <th>product</th>
          &nbsp;&nbsp;
          <th>price</th>
        </tr>
        
        {data?.map((val) => {
          return (
            <tr key={val.id}>
              <td>{val.title}</td>
              &nbsp;&nbsp;
              
              {inputField && val.id == price.id ? (
                <section style={{ display: "flex", flexDirection: "row" }}>
                  <input
                    type="number"
                    name="price1"
                    key={val.id}                   
                    onChange={(e) => handleChange(e)}
                    value={price.price1}
                    // defaultValue={val.price}
                  />
                  <Button onClick={() => Update(val.id)}>update</Button>
                </section>
              ) : <td onClick={() => handleClick(val.id)}>{val.price}</td>}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default CustomPrice;
