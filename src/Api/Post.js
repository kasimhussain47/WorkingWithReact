import { Button, Input } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Post = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  const handleClick = async (e) => {
    let response = await axios(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method:'POST',                            //not needed here declare above
        headers: {
          "Content-Type": "application/json",
        },
        data: { ...data },                      // <------use this type in axios
        // data: JSON.stringify({ ...data }) ,             //<----JSON.stringify use fetch
      }
    );
    // const result = await response.json();             //<----JSON.stringify use fetch
    console.log(response);
  };
  return (
    <div>
      <Input
        placeholder="Username"
        onChange={handleChange}
        value={data.username}
        name="username"
      />
      <Input
        placeholder="Password"
        onChange={handleChange}
        value={data.password}
        name="password"
      />
      <Button onClick={handleClick}>submit</Button>
    </div>
  );
};

export default Post;
