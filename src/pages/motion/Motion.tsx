import styles from "./Motion.module.scss"
import CheckItem from "@components/motionItems/CheckItem"
import MotionApply from "@components/motionItems/MotionApply"
import { useState } from "react"
import { motion, useScroll } from "framer-motion"

function Motion() {
  const [tabIdx, setTabIdx] = useState(0)
  const { scrollYProgress } = useScroll()
  return (
    <div className={styles.motion}>
      <motion.div className={styles.bar} style={{ scaleX: scrollYProgress }} />
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
