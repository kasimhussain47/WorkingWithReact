import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Cart = () => {
  const [show, setShow] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(show.price);
  console.log(show);
  const Id = useParams();
  let Id1 = Id.id;
  // console.log(Id);

  const history = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${Id1}`
      );
      // console.log(response.data);
      setShow(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleQuantityChange = (val) => {
    // const selectedQuantity = parseInt(event.target.value);
    setQuantity((prev) => prev + val);
    setPrice(quantity * show.price);
  };

  function handleClick() {
    const values = JSON.parse(localStorage.getItem("values") || "[]");

    const kasim = {
      category: show.category,
      image: show.image,
      title: show.title,
      description: show.description,
      price: quantity === 1 ? show.price : price,
      quantity: quantity,
      id: Math.random(),
    };
    values.push(kasim);
    localStorage.setItem("values", JSON.stringify(values));
    history("/addtocart");
  }
  // console.log(show.price)

  return (
    <div>
      <li>
        <img style={{ width: "200px" }} src={show.image}></img>
        <h3>{show.title}</h3>
        <p>{show.description}</p>
        <h4>M.R.P {quantity < 1 ? show.price : show.price * quantity}$</h4>
        <div id="showbtn">
          <button onClick={() => handleQuantityChange(-1)}> - </button>
          &nbsp;&nbsp;
          <span>{quantity < 1 ? "1" : quantity}</span>
          &nbsp;&nbsp;
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        {/* <div>     
        <label for="cars">quantity</label>
        &nbsp;
        <select name="number" id="num" value={quantity} onChange={handleQuantityChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
        </select>
        </div> */}
        <Button
          onClick={handleClick}
          style={{ backgroundColor: "whitesmoke", marginTop: "5px" }}
        >
          Add to cart
        </Button>
      </li>
    </div>
  );
};

export default Cart;
