import React from "react";

const button = document.querySelector('.menu');
const navLinks = document.querySelector('.nav__bar');
const links = document.querySelectorAll('nav__links li');


const Navbar = button.addEventListener("click", () => {
  navLinks.classList.toggle('open');
})

export default Navbar;