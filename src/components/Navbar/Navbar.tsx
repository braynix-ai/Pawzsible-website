import { useState } from "react";
import styles from "./Navbar.module.css";

export default () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={styles.navigation}>
      <a href="/" className={styles.brandName}>
        Pawssible
      </a>
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
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Groom Your Dog</a>
          </li>
          <li>
            <a href="#">Feed Your Dog</a>
          </li>
          <li>
            <a href="#">Join Us</a>
          </li>
          <li>
            <a href="#">Consult a Vet</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
