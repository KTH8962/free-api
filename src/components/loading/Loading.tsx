import styles from "./Loading.module.scss"

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__wrap}>
        <em></em>
        <em></em>
        <em></em>
        <em></em>
      </div>
    </div>
  )
}

export default Loading
