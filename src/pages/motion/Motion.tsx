import styles from "./Motion.module.scss"
import CheckItem from "@components/motionItems/checkItem"
import MotionApply from "@components/motionItems/MotionApply"
import { useState } from "react"

function Motion() {
  const [tabIdx, setTabIdx] = useState(0)
  return (
    <div className={styles.motion}>
      <ul className={styles.tab}>
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
            적용버전
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
            기본버전
          </button>
        </li>
      </ul>
      <div>
        {tabIdx == 0 && <MotionApply />}
        {tabIdx == 1 && <CheckItem />}
      </div>
    </div>
  )
}

export default Motion
