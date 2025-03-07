import styles from "./Maps.module.scss"
import Search from "@components/search/Search"
import { useState } from "react"
import { Map, MapMarker } from "react-kakao-maps-sdk"
interface Location {
  lat: number
  lng: number
}

function Maps() {
  const [address, setAddress] = useState("")
  const [location, setLocation] = useState({ lat: 33.450701, lng: 126.570667 })

  // 카카오 Geocoder를 사용해 주소를 좌표로 변환
  const handleSearch = () => {
    const geocoder = new kakao.maps.services.Geocoder()

    geocoder.addressSearch(address, function (result, status) {
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
    setAddress(e.target.value)
  }
  const keyDownEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code == "Enter") {
      handleSearch()
    }
  }

  return (
    <main className={styles.main}>
      {/* <input
        type="text"
        placeholder="주소를 입력하세요"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        onKeyDown={keyDownEvent}
      />
      <button onClick={handleSearch}>주소 검색</button> */}
      <Search
        address={address}
        onChange={handleChange}
        onKeyDown={keyDownEvent}
        onClick={handleSearch}
      />
      <Map
        center={location}
        style={{ width: "100%", height: "60vh" }}
        level={3}
      >
        <MapMarker position={location} />
      </Map>
    </main>
  )
}

export default Maps
