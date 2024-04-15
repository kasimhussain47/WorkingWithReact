import React, { useState } from 'react'
import Display from './Display';
import State from './State';
export const DataContext  = React.createContext();

const Main = ({children}) => {
    const [data,setData] =useState(0);
  return (
    <div>
        <DataContext.Provider value={{data,setData}}>
        <Display/>
        <State/>
        </DataContext.Provider>
    </div>
  )
}

export default Main
