import React from "react";
import "../App.css";
import {
  Link
} from "react-router-dom";




function Header(props){
  return (
    <>
      <nav className="navbar bg-purple-300 pl-5 pr-5 w- sm:max-w-screen-2xl md:w-screen xl:w-screen 2xl:max-w-screen-2xl">
        <div className="flex ">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <div className="content-center sm:justify-items-center">
            <ul className="flex ">
              <li className="nav-item">
                <a
                  className="ml-5 mr-5 hover:border-b-2 nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/basicCalc">
                      Basic Calculator
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/dowryCalc">
                      Dowry Calculator
                    </a>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/financeCalc">
                      Finance Calculator
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="ml-5 mr-5 hover:border-b-2 nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
