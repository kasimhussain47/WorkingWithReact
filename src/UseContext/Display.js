import React, { useContext } from 'react'
import { DataContext } from './Main'
import { Button } from '@mui/material';

const Display = () => {
    const {data,setData} =useContext(DataContext);

    function handleClick() {
         setData(data + 1)
    }
  return (
    <div>
      <Button onClick={()=> handleClick()}>Add</Button>
    </div>
  )
}

export default Display
