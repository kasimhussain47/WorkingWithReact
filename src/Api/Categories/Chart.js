import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CART_DATA } from "./Action";
import { BarChart } from '@mui/x-charts/BarChart';


const Chart = () => {
  const cartState = useSelector((state) => state.cartState);
  // console.log(cartState.cart);
  const cartState1 = cartState.cart;
  // const dispatch = useDispatch();

  const cartproduct = cartState1.filter((val) => {
    return val.category === "men's clothing" || val.category === "women's clothing";
  });
  const cartproduct1 = cartState1.filter((val) => {
    return val.category === "jewelery";
  });
  const cartproduct2 = cartState1.filter((val) => {
    return val.category === "electronics";
  });
  console.log(cartproduct.length);
  let clothing = cartproduct.length
  let jewelery = cartproduct1.length
  let electronics = cartproduct2.length

  return <div><BarChart
  xAxis={[{ scaleType: 'band', data: ['group A'] }]}
  series={[{ data: [clothing] ,label: 'clothing' },{ data: [jewelery] ,label: 'jewelery'},{ data: [electronics] ,label: 'electronics'}] }
  width={500}
  height={300}
/></div>;
};

export default Chart;
