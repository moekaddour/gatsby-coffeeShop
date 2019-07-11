import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"
import CartLogo from "../images/cart.svg"
import "./bootstrap.min.css"
export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/about",
        text: "About",
      },
      {
        id: 3,
        path: "/contact",
        text: "Contact Us",
      },
    ],
  }
  navBarHandler = () => {
    this.state.navbarOpen?this.setState({navbarOpen:false, css: "collapse navbar-collapse"}):this.setState({navbarOpen:true, css: "collapse navbar-collapse show"})
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          Coffe Shop
        </Link>
        <button
          onClick={this.navBarHandler}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.css} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item active">
                  <Link className="nav-link" to={link.path}>
                    {link.text} <span className="sr-only">(current)</span>
                  </Link>
                </li>
              )
            })}
            <li className="nav-item active">
                 <img src={CartLogo} width="20"
            height="20"
            className="d-inline-block align-top mt-2 ml-5 cart-icon"
            alt="Cart Icon"/>
                </li>
          </ul>
        </div>
      </nav>
    )
  }
}
