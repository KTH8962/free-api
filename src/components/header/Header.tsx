import { NavLink, Link } from "react-router-dom"
import styles from "./Header.module.scss"

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>
        <Link to="/">FREE-API</Link>
      </h1>
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
          <li>
            <NavLink
              to="/kakao"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              카카오지도
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
