import { NavLink } from "react-router-dom"
import styles from "./Header.module.scss"

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>FREE-API</h1>
      <nav className={styles.header__nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              메인
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/photo"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              사진
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
