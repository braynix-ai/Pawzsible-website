import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const nav = useNavigate();
  return (
    <nav className={styles.navigation}>
      <button onClick={() => nav("/")} className={styles.brandName}>
        <img style={{ height: "50px" }} src="logo1.png" alt="logo" />
      </button>
      <button
        className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded
            ? `${styles.navigationMenu} ${styles.expanded}`
            : styles.navigationMenu
        }
      >
        <ul>
          <li>
            <button onClick={() => nav("/aboutUs")}>About Us</button>
          </li>
          <li>
            <button onClick={() => nav("/team")}>Teams</button>
          </li>
          <li>
            <button>Testimonials</button>
          </li>
          <li>
            <button>Groom Your Dog</button>
          </li>
          <li>
            <button>Feed Your Dog</button>
          </li>
          <li>
            <button>Join Us</button>
          </li>
          <li>
            <button>Consult a Vet</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
