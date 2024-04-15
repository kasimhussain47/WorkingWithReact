import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to="/context">
      <h1>Header</h1>
        </Link>
      <p>Header content is here</p>
    </div>
  )
}

export default Header;
