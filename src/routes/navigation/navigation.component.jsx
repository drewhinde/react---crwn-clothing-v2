import React from 'react'
import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'


// Fragment renders nothing and is a good way of getting aroud the single parent element restrictions of react
const Navigation = () => {
  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                {/* Link is an anchor tag* 'to' matches the string of where we want to go. if route is defined in app.js it will
                render the shop componenet */}
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/signin'>
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet />
    </ Fragment>
  )
}

export default Navigation
