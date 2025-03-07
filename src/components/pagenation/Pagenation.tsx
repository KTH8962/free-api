import { Dispatch, SetStateAction } from "react"
import styles from "./Pagenation.module.scss"

type Props = {
  totalPage: number
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}

function Pagenation({ totalPage, currentPage, setCurrentPage }: Props) {
  return (
    <div className={styles.pagenation}>
      {currentPage > 1 && (
        <button
          type="button"
          className={styles.prev}
          onClick={() => {
            setCurrentPage(currentPage - 1)
          }}
        >
          이전
        </button>
      )}
      {Array.from({ length: totalPage }).map((_, index) => (
        <button
          type="button"
          className={`${styles.num} ${
            currentPage == index + 1 ? styles.active : ""
          }`}
          key={index}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      {currentPage != totalPage && (
        <button
          type="button"
          className={styles.next}
          onClick={() => {
            setCurrentPage(currentPage + 1)
          }}
        >
          다음
        </button>
      )}
    </div>
  )
}

export default Pagenation
