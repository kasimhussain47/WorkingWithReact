import "./App.css";

import React from "react";

import Todo from "./Todo";
import Header from "./Header";
import Context from "./Context";
import { Link, Route, Routes, Switch } from "react-router-dom";
import IncrementNum from "./IncrementNum";
import TodoList from "./Todo/TodoList";
import SignUp from "./Register/SignUp";
import SignIn from "./Register/SignIn";
import AdminDashboard from "./Register/AdminDashboard";
import UserDashboard from "./Register/UserDashboard";
import Main from "./UseContext/Main";
import Get from "./Api/Get";
import SearchAPI from "./Api/SearchAPI";
import Axios from "./Api/Axios";
import Post from "./Api/Post";
import Product from "./Api/Categories/Product";
import Cart from "./Api/Categories/Cart";
import Addtocart from "./Api/Categories/Addtocart";
import SignUp1 from "./Api/Categories/Admin/SignUp1";
import SignIn1 from "./Api/Categories/Admin/SignIn1";
import Admin from "./Api/Categories/Admin/Admin";
import AdminProtected from "./Api/Categories/AdminProtected";
import UserProtected from "./Api/Categories/UserProtected";

// don't remove the export keyword here!
export const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

// don't change the Component name "App"
export default function App() {
  const adminlogin = JSON.parse(localStorage.getItem("adminlog"));
  const userlogin = JSON.parse(localStorage.getItem("userlog"));

  return (
    <>
      {/* <Routes>
      <Route path="/" element={<ul>
   { DUMMY_TODOS.map((todo) => {
        return <Todo text={todo}/>
    })} 
    </ul>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/context" element={<Context/>}/>
    </Routes> */}

      {/* <IncrementNum/> */}
      {/* <TodoList/> */}

      {/* <Routes>
    <Route path="/signin" element={<SignIn/>}/>
      <Route path="/" element={<SignUp/>}/>
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/user" element={<UserDashboard/>} />
    </Routes> */}
      {/* <Main/>     */}
      {/* <Get/> */}
      {/* <SearchAPI/> */}
      {/* <Axios/> */}
      {/* <Post/> */}
      <Routes>
        <Route path="/" element={<SignUp1 />} />
        <Route path="/signin" element={<SignIn1 />} />
        <Route path="/admin" element={<AdminProtected />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/user" element={<UserProtected />}>
          <Route
            path="/user/product"
            element={<Product/>}
          />
          <Route
            path="/user/cart/:id"
            element={<Cart/>}
          />
          <Route
            path="/user/addtocart"
            element={<Addtocart/>}
          />
        </Route>
      </Routes>
    </>
  );
}
