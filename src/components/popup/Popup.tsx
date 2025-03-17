import styles from "./Popup.module.scss"

function Popup() {
  return (
    <div className={styles.popup}>
      <div className={styles.popup__box}>
        <h2 className={styles.popup__box__tit}>tit</h2>
        <button type="button" className={styles.popup__box__close}>
          닫기
        </button>
        <div className={styles.popup__box__content}>
          <div className={styles.popup__box__content__desc}>123</div>
        </div>
      </div>
    </div>
  )
}

export default Popup
