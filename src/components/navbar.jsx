import React, { Component } from 'react';

const NavBar = (props) => {
    return (<nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar <span className='badge badge-bill badge-secondary'> {props.counters.filter(c=>c.value>0).length}</span></a>
  </nav>);
}
 
 
export default NavBar;
