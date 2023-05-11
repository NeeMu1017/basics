import React from 'react'
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div >
        <nav className={styles.navabr}>
            <Link to={"/"}>
            <div className={styles.navbar_logo}>
                Basics
            </div>
            </Link>
            <div >
                <ul className={styles.navbar_item}>
                    <li className={styles.navbar_item_li}>home</li>
                    <li className={styles.navbar_item_li}>home</li>
                    <li className={styles.navbar_item_li}>home</li>
                    <li className={styles.navbar_item_li}>home</li>
                    
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar