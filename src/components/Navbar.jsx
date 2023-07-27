import React from 'react'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
 

  return (
    <nav id="menu3" className="fixed-top navbar navbar-expand-sm navbar-dark">          
              <div className="container-fluid">
              <div className="container">
                <div className="row py-4 ps-3">
                  <div className="col-md-12">
                    <h1
                      style={{
                        color: "#ce413c",
                        fontFamily: '"Arial Black", Gadget, sans-serif',
                        background:"rgba(255,255,255,0.8)",
                        padding:"10px"
                      }}
                      className="float-start"
                    >
                      Website Name1
                    </h1>
                    <button
                      className="navbar-toggler float-end text-end bg-dark"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsibleNavbar"
                    >
                      <span className="navbar-toggler-icon " />
                    </button>
                    <div className="collapse navbar-collapse float-end"   id="collapsibleNavbar">
                      <ul className="navbar-nav d-flex  text-dark ">
                        <li className="nav-item">
                          <NavLink className="nav-link" activeClassName="active"  to="/">
                            Home
                          </NavLink>
                        </li>
                        <li  className="nav-item">
                          <NavLink className="nav-link"  activeClassName="active" to="/about">
                            About Us
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link"  activeClassName="active" to="/privacy-policy">
                            Privacy Policy
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link"  activeClassName="active" to="/unsubscribe">
                            Unsubscribe
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link "  activeClassName="active" to="/contact-us">
                            Contact
                          </NavLink>
                        </li>
                        {/* <li className="nav-item">
                          <NavLink className="nav-link "  activeClassName="active" to="/blog">
                            Blog
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link "  activeClassName="active"  to="/avbcd">
                            Extra
                          </NavLink> 
                        </li>*/}
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </nav> 
 

  )
}
