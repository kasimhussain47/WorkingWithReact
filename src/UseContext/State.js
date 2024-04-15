import React, { useContext } from 'react'
import { DataContext } from './Main'


const State = () => {
    const {data,setData} =useContext(DataContext);

  return (
    <div>
      {data}
    </div>
  )
}

export default State
