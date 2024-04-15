import { Button, Input } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?=Idname${search}`
      );
      // const jsonData = await response.json();
      setData(response.data.results);
      console.log(response.data.results); //if you are using axios it is compalsary to use data.
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div>
      <Input type="text" onChange={handleChange}></Input>
      <Button onClick={fetchData}>search</Button>
      {data.map((val) => {
        return (
          <>
            <h3>Phone : {val.cell.toLowerCase()}</h3>
            <h3>
              <p>Dob:{val.dob.date}</p>
              <span>Age:{val.dob.age}</span>
            </h3>
            <h3>Email : {val.email.toLowerCase()}</h3>
            <h3> Gender : {val.gender.toLowerCase()}</h3>
            <h3>Idname : {val.id.name.toLowerCase()}</h3>
            <h3>Idvalue : {val.id.value}</h3>
            <h3>City : {val.location.city.toLowerCase()}</h3>
            <h3>Country : {val.location.country.toLowerCase()}</h3>
            <h3> Postcode : {val.location.postcode}</h3>
            <h3>State : {val.location.state.toLowerCase()}</h3>
            <h3>Firstname : {val.name.first.toLowerCase()}</h3>
            <h3>Lastname : {val.name.last.toLowerCase()}</h3>
            <h3>Title : {val.name.title.toLowerCase()}</h3>
          </>
        );
      })}
    </div>
  );
};

export default SearchAPI;
