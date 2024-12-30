import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      홈페이지
      <Link to="/login">Go to login page.</Link>
    </div>
  )
}

export default Homepage
