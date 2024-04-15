import { Button, CircularProgress, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SHOW_LOADER, HIDE_LOADER } from "./Action";
import Card0 from "./Card0";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";

const Product = () => {
  const [search, setSearch] = useState("");
  const [productCounts, setProductCounts] = useState({});

  const navigate = useNavigate();

  const loaderState = useSelector((state) => state.loaderState);
  console.log(loaderState.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SHOW_LOADER());
    setTimeout(() => {
      dispatch(HIDE_LOADER());
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          // console.log(res);
        });
    }, 2000);
  }, []);

  const [data, setData] = useState([]);
  const [updatedata, setupdateData] = useState([]);
  // const [cart, setCart] = useState([]);

  function handleClickJewelery() {
    setTimeout(() => {
      dispatch(HIDE_LOADER());
      fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          // console.log(res);
        });
    }, 1000);
    dispatch(SHOW_LOADER());
  }
  function handleClickCarts() {
    setTimeout(() => {
      dispatch(HIDE_LOADER());
      fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          // console.log(res);
        });
    }, 1000);
    dispatch(SHOW_LOADER());
  }
  // console.log(data)
  const addToCart = (id) => {
    // Check if the item is already in the cart
    // const index = data.filter((cartItem) => cartItem.id === id);
    // const cart = index;
    // if (cart !== -1) {
    // If item is already in the cart, update its quantity
    // const updatedCart = [...cart];
    // updatedCart[index].quantity += quantity;
    // setCart(updatedCart);
    // } else {
    // If item is not in the cart, add it
    // setCart([...cart, { id }]);
    // }
    navigate(`/cart/${id}`);
    // console.log(cart)
  };

  // console.log(titleData)
  function handleChange(e) {
    setSearch(e.target.value);
    if (data.length === 0) {
      return [];
    }
    const searchData = data.filter((val) => {
      return val.title.toLowerCase().includes(search.toLowerCase());
    });
    console.log(searchData, "kkkk");
    setupdateData(searchData);
  }

  function Logoutbutton() {
    navigate("/signin");
  }

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('values');

    if (storedData) {
      // Parse the data into a JavaScript object
      const parsedData = JSON.parse(storedData);

      // Calculate product counts for each type
      const counts = {};

      parsedData.forEach(product => {
        if (counts[product.type]) {
          counts[product.type]++;
        } else {
          counts[product.type] = 1;
        }
      });

      // Update state with product counts
      setProductCounts(counts);
      console.log(counts)
    }
  }, []);

  const tocart = () => {
    navigate("/addtocart")
  }

  return (
    <>
      <nav class="navbar navbar-light bg-light" >
        <div class="container-fluid" 
        style={{display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr"}}
        >
          <a class="navbar-brand">
            Navbar
          </a>
          <div
            style={{
              justifyContent: 'center',
              display: "flex",
              alignItems: "center",

            }}
          >
            <TextField
              type="text"
              value={search}
              placeholder="search product here"
              onChange={handleChange}
            ></TextField>
            <span style={{ paddingLeft: "10px" }}>search</span>
          </div>
          <div style={{
              justifyContent: 'right',
              display: "flex",
              alignItems: "center",
            }}>
          <Button onClick={handleClickJewelery}>Jewelery</Button>
          <Button onClick={handleClickCarts}>Men's clothing</Button>
          <Button onClick={Logoutbutton}>log out</Button>
          
          {Object.entries(productCounts).map(([type, count]) => (
          // <li >{`${type}: ${count}`}</li>
          <Badge key={type} color="secondary" badgeContent={count}>
            <ShoppingCartIcon onClick={tocart}/>
          </Badge>
        ))}
        </div>
        </div>
      </nav>
      <div>
        {loaderState.isLoading === true ? (
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "20%",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          // "Content is loaded"
          <div>
            <Grid
              container
              // spacing={0}
              style={{
                marginTop: "20px",
                gap: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {!search
                ? data.map((val) => {
                    return <Card0 val={val} onSelect={addToCart} />;
                  })
                : updatedata.map((val) => {
                    return <Card0 val={val} onSelect={addToCart} />;
                  })}
            </Grid>
            {updatedata.length === 0 && search !== "" && (
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  marginTop: "18%",
                }}
              >
                No product found
              </div>
            )}

            {/* <>
          <h2>Cart</h2>
          <ul>
            {cart.map((val, index) => (
              <li key={index}>
                <img style={{ width: "200px" }} src={val.image}></img>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
                <h4>M.R.P {val.price}$</h4>
              </li>
            ))}
          </ul>
        </> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
