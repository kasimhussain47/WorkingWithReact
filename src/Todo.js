import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Todo(props) {

    const navigate = useNavigate;
     function handleClick()  {
        navigator("/");
    }
    return (
        <>
    <li>{props.text}</li>
    <div>
        <button onClick={() => handleClick}>

    <Link to="/header">
      <h1>Todo</h1>
        </Link>
        </button>
    </div>
        </>
    )
    
}