import React from 'react'
import { Link } from 'react-router-dom'

const NavBar= () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">LBRARY</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Add</Link>
        <Link className="nav-link" to="/s">Search</Link>
        <Link className="nav-link" to="/d">Delete</Link>
        <Link className="nav-link" to="/v">Viewall</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
