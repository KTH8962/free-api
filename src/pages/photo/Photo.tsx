import { useState } from "react"
import styles from "./Photo.module.scss"
import PhotoAxios from "@components/photoDivide/PhotoAxios"
import PhotoReact from "@components/photoDivide/PhotoReact"

function Photo() {
  const [tabIdx, setTabIdx] = useState(0)
  return (
    <main className={`${styles.photo} ${styles.main}`}>
      <div className={styles.main__wrap}>
        <h2 className={styles.main__wrap__tit}>사진 불러오기 API</h2>
        <a
          href="https://thecatapi.com/"
          target="_blank"
          className={styles.main__wrap__link}
        >
          https://thecatapi.com/
        </a>
        <p className={styles.main__wrap__desc}>
          {tabIdx === 0 ? "Zustand 사용" : "Zustand 미사용"}
        </p>
      </div>
      <ul className={`${styles.tab} ${styles.mgb40}`}>
        <li className={styles.tab__box}>
          <button
            className={`${styles.tab__box__btn} ${
              tabIdx == 0 ? styles.active : ""
            }`}
            type="button"
            onClick={() => {
              setTabIdx(0)
            }}
          >
            Axios
          </button>
        </li>
        <li className={styles.tab__box}>
          <button
            className={`${styles.tab__box__btn} ${
              tabIdx == 1 ? styles.active : ""
            }`}
            type="button"
            onClick={() => {
              setTabIdx(1)
            }}
          >
            ReactQuery
          </button>
        </li>
      </ul>
      {tabIdx == 0 && (
        <PhotoAxios
          className={styles.photo__list}
          className2={styles.photo__list__item}
          className3={styles.photo__list__item__img}
        />
      )}
      {tabIdx == 1 && (
        <PhotoReact
          className={styles.photo__list}
          className2={styles.photo__list__item}
          className3={styles.photo__list__item__img}
        />
      )}
    </main>
  )
}

export default Photo
