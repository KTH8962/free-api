import { motion } from "framer-motion"
import { popupInfo } from "@constants/popupInfo"
import styles from "./Popup.module.scss"

interface Props {
  infos: popupInfo | null | undefined
  setIsPopup: (value: boolean) => void
}

function Popup({ infos, setIsPopup }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={styles.popup}
    >
      <div className={styles.popup__box}>
        <h2 className={styles.popup__box__tit}>{infos?.name}</h2>
        <button
          type="button"
          className={styles.popup__box__close}
          onClick={() => setIsPopup(false)}
        >
          닫기
        </button>
        <div className={styles.popup__box__content}>
          <figure className={styles.popup__box__content__img}>
            <img src={infos?.src} alt={`${infos?.name} 이미지`} />
          </figure>
          <div className={styles.popup__box__content__desc}>{infos?.desc}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default Popup
