import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Optional: using FontAwesome icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation-bar">
      {/* Logo */}
      <div className="logo">
        <Link href="/">Musa Jalloh Testing</Link>
      </div>

      {/* Hamburger Icon */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/project">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
