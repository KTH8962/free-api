import styles from "./Maps.module.scss"
import Search from "@components/search/Search"
import { useMapStore } from "@store/useMapStore"
import { Map, MapMarker } from "react-kakao-maps-sdk"
interface Location {
  lat: number
  lng: number
}

function Maps() {
  //const [address, setAddress] = useState("")
  const searchWord = useMapStore((state) => state.searchWord)
  const setSearch = useMapStore((state) => state.actions.setSearch)

  // const [location, setLocation] = useState({
  //   lat: 37.5035117792843,
  //   lng: 126.766038450927,
  // })

  const location = useMapStore((state) => state.location)
  const setLocation = useMapStore((state) => state.actions.setLocation)

  // 카카오 Geocoder를 사용해 주소를 좌표로 변환
  const handleSearch = () => {
    const geocoder = new kakao.maps.services.Geocoder()

    geocoder.addressSearch(searchWord, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const newLocation: Location = {
          lat: parseFloat(result[0].y),
          lng: parseFloat(result[0].x),
        }
        setLocation(newLocation) // 주소에 맞는 좌표로 이동
      } else {
        alert("주소를 찾을 수 없습니다.")
      }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const keyDownEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code == "Enter") {
      handleSearch()
    }
  }

  return (
    <main className={`${styles.map} ${styles.main}`}>
      {/* <input
        type="text"
        placeholder="주소를 입력하세요"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        onKeyDown={keyDownEvent}
      />
      <button onClick={handleSearch}>주소 검색</button> */}
      <div className={styles.main__wrap}>
        <h2 className={styles.main__wrap__tit}>카카오 지도 API</h2>
        <a
          href="https://apis.map.kakao.com/"
          target="_blank"
          className={styles.main__wrap__link}
        >
          https://apis.map.kakao.com/
        </a>
      </div>
      <Search
        address={searchWord}
        onChange={handleChange}
        onKeyDown={keyDownEvent}
        onClick={handleSearch}
      />
      <div className={styles.map__wrap}>
        <Map
          center={location}
          style={{ width: "100%", height: "60vh" }}
          level={3}
        >
          <MapMarker position={location} />
        </Map>
      </div>
    </main>
  )
}

export default Maps
