import React, { Component } from 'react';
import {Link} from '@reach/router'
import { SiDatadog } from "react-icons/si";
import { ImDatabase } from "react-icons/im";


class Navigation extends Component {
  render() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Main navigation">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <SiDatadog /><ImDatabase /> Datawatcher Application
              </Link>
              <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/datawatchertypes" className="nav-item nav-link">
                            Datawatcher Type
                        </Link>
                    </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
        </nav>
      
    );
  }
}

export default Navigation;