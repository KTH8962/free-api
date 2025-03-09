import { Link } from "react-router-dom"
import styles from "./Main.module.scss"

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.main__wrap}>
        <h2 className={styles.main__wrap__tit}>FREE-API LIST</h2>
        <div className={styles.flex}>
          <div className={styles.flex__wrap}>
            <p className={styles.main__wrap__desc}>사용 중인기술</p>
            <table className={styles.table}>
              <colgroup>
                <col style={{ width: "30%" }}></col>
                <col style={{ width: "70%" }}></col>
              </colgroup>
              <tbody>
                <tr>
                  <th>API 연결</th>
                  <td>Axios</td>
                </tr>
                <tr>
                  <th>전역 관리</th>
                  <td>Zustand</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.flex__wrap}>
            <p className={styles.main__wrap__desc}>업데이트 예정 기술</p>
            <table className={styles.table}>
              <colgroup>
                <col style={{ width: "30%" }}></col>
                <col style={{ width: "70%" }}></col>
              </colgroup>
              <tbody>
                <tr>
                  <th>업데이트 예정1</th>
                  <td>TanStack Query(React Query)</td>
                </tr>
                <tr>
                  <th>업데이트 예정2</th>
                  <td>Vitest(테스트 환경)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.flexTable}>
          <div className={styles.thead}>
            <div className={styles.tr}>
              <div className={styles.th}>제목</div>
              <div className={styles.th}>내용</div>
              <div className={styles.th}>주소</div>
            </div>
          </div>
          <div className={styles.tbody}>
            <div className={styles.tr}>
              <div className={styles.td}>사진 API</div>
              <div className={styles.td}>
                The Cat API를 이용한 사진 불러오기
              </div>
              <div className={styles.td}>
                <Link to="/photo">보러가기</Link>
              </div>
            </div>
            <div className={styles.tr}>
              <div className={styles.td}>랜덤 유저 정보</div>
              <div className={styles.td}>
                랜덤으로 제공되는 유저 정보 불러오기
              </div>
              <div className={styles.td}>
                <Link to="/user">보러가기</Link>
              </div>
            </div>
            <div className={styles.tr}>
              <div className={styles.td}>카카오 지도</div>
              <div className={styles.td}>카카오맵 API를 이용한 지도 검색</div>
              <div className={styles.td}>
                <Link to="/kakao">보러가기</Link>
              </div>
            </div>
            {/* <div className={styles.tr}>
              <div className={styles.td}></div>
              <div className={styles.td}></div>
              <div className={styles.td}>
                <Link to="/photo">보러가기</Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
