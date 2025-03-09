import { useState } from "react"
import styles from "./User.module.scss"
import axios from "axios"
// import { userDto } from "@constants/userDto"
import Loading from "@components/loading/Loading"
import { useUserStore } from "@store/usUserStore"

function User() {
  //const [user, setUser] = useState<userDto>()
  const user = useUserStore((state) => state.user)
  const setUser = useUserStore((state) => state.actions.setUser)
  const [loading, setLoading] = useState<boolean>(false)

  const handelUser = async () => {
    setLoading(true)
    try {
      const url = "https://randomuser.me/api/"
      const res = await axios({ url, method: "GET" })
      setLoading(false)
      setUser(res.data.results[0])
      console.log(res.data.results[0])
    } catch (error: unknown) {
      console.log(error)
    }
  }
  return (
    <main className={styles.main}>
      <div className={styles.main__wrap}>
        <h2 className={styles.main__wrap__tit}>랜덤 유저 정보 API</h2>
        <a
          href="https://randomuser.me/"
          target="_blank"
          className={styles.main__wrap__link}
        >
          https://randomuser.me/
        </a>
      </div>
      <button
        type="button"
        onClick={handelUser}
        className={styles.btn__default}
      >
        {user == null ? "불러오기" : "새로 불러오기"}
      </button>
      {loading && <Loading />}
      {user && (
        <div className={styles.user}>
          <div className={styles.user__img}>
            <figure className={styles.user__img__box}>
              <img
                src={user.picture.large}
                alt={`${user.name.last} ${user.name.first}`}
              />
            </figure>
          </div>
          <ul className={styles.user__info}>
            <li>
              <p className={styles.user__info__tit}>이름</p>
              <p className={styles.user__info__desc}>
                {user.name.last} {user.name.first}
              </p>
            </li>
            <li>
              <p className={styles.user__info__tit}>생년월일(나이)</p>
              <p className={styles.user__info__desc}>
                {user.dob.date.split("T")[0]}({user.dob.age})
              </p>
            </li>
            <li>
              <p className={styles.user__info__tit}>핸드폰 번호</p>
              <p className={styles.user__info__desc}>{user.phone}</p>
            </li>
            <li>
              <p className={styles.user__info__tit}>가입일</p>
              <p className={styles.user__info__desc}>
                {user.registered.date.split("T")[0]}
              </p>
            </li>
            <li>
              <p className={styles.user__info__tit}>성별</p>
              <p className={styles.user__info__desc}>
                {user.gender == "female" ? "여자" : "남자"}
              </p>
            </li>
            <li>
              <p className={styles.user__info__tit}>국가코드</p>
              <p className={styles.user__info__desc}>{user.nat}</p>
            </li>
            <li>
              <p className={styles.user__info__tit}>주소</p>
              <p className={styles.user__info__desc}>
                {user.location.street.number}&nbsp;
                {user.location.street.name}&nbsp;
                {user.location.city}&nbsp;
                {user.location.state}&nbsp;
                {user.location.contry}&nbsp;({user.location.postcode})
              </p>
            </li>
            {/* <li>
              <p className={styles.user__info__tit}></p>
              <p className={styles.user__info__desc}></p>
            </li> */}
          </ul>
        </div>
      )}
    </main>
  )
}

export default User
