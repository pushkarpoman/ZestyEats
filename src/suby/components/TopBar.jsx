import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h2>ZestyEats</h2>
            </Link>
        </div>
        <div className="searchBar">
            <input type="text" placeholder='Search...' />
        </div>
        <div className="userAuth">
            <Link to="/login" className="authLink">
                Login
            </Link> 
            / 
            <Link to="/signup" className="authLink">
                SignUp
            </Link>
            </div>
   </section>
  )
}

export default TopBar