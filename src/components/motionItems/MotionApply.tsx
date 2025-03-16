import styles from "./MotionApply.module.scss"

function MotionApply() {
  return (
    <div className={styles.motion}>
      <div className={styles.motion__box}>
        <ul className={styles.motion__list}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div className={styles.motion__box}>2</div>
      <div className={styles.motion__box}>3</div>
    </div>
  )
}

export default MotionApply
