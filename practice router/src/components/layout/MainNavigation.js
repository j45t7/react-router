import React from 'react'
import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes'>All Quotes</NavLink>
          </li>
          <li>
            <NavLink to='/new-quote'>Add Quotes</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
