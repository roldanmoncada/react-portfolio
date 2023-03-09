import React from "react";
import "./style.css"

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <nav>
        <label className="logo">Roldan Navarrete </label>
        <ul className="ul">
          <li>
            <a
              href="#About"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }>
              About
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "projects" ? "nav-link active" : "nav-link"
              }>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }>
              Contact
            </a>
          </li>
          🏀 
        </ul>
      </nav>
    </>
  );
}

export default Header;