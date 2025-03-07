import { catBreeds } from "@constants/catBreeds"
import styles from "./Photo.module.scss"
import axios from "axios"
import { useState } from "react"
import Select from "@components/select/Select"
import Pagenation from "@components/pagenation/Pagenation"

interface PhotoInfo {
  id: string
  url: string
  width: number
  height: number
}

function Photo() {
  const catLists = catBreeds
  const [photoInfo, setPhotoInfo] = useState<PhotoInfo[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const handleSearch = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    try {
      const { data } = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${selectedValue},&api_key=${
          import.meta.env.VITE_DOG_API_KEY
        }`
      )
      setCurrentPage(1)
      setPhotoInfo(data)
    } catch (error) {
      console.error("에러", error)
    }
  }

  const pageSize = 8
  const totalPage = Math.ceil(photoInfo.length / pageSize)
  const getCurrentPageItems = () => {
    const startIdx = (currentPage - 1) * pageSize
    const endIdx = startIdx + pageSize
    return photoInfo.slice(startIdx, endIdx)
  }

  // interface CatType {
  //   id: string
  // }
  // const [catList, setCatList] = useState<string[]>([])
  // const fetchCatData = async () => {
  //   const { data } = await axios.get("https://api.thecatapi.com/v1/breeds")
  //   console.log(data)
  //   const catIds = data.map((item: CatType) => item.id)
  //   setCatList(catIds)
  // }

  // if (catList.length === 0) {
  //   fetchCatData()
  // }
  return (
    <main className={`${styles.photo} ${styles.main}`}>
      <div className={styles.main__wrap}>
        <h2 className={styles.main__wrap__tit}>사진 불러오기 API</h2>
        <a
          href="https://thecatapi.com/"
          target="_blank"
          className={styles.main__wrap__link}
        >
          https://thecatapi.com/
        </a>
      </div>
      {/* <select onChange={handleSearch}>
        <option value="">선택하세요</option>
        {catLists.length > 0 &&
          catLists
            .sort((a, b) => a.kor.localeCompare(b.kor))
            .map((item) => (
              <option key={item.eng} value={item.eng}>
                {item.kor}
              </option>
            ))}
      </select> */}
      <Select onChange={handleSearch} lists={catLists} />
      <ul className={styles.photo__list}>
        {getCurrentPageItems().map((item) => {
          return (
            <li key={item.id} className={styles.photo__list__item}>
              <figure className={styles.photo__list__item__img}>
                <img src={item.url} alt={item.id} />
              </figure>
            </li>
          )
        })}
        {/* {photoInfo.map((item) => {
          return (
            <li key={item.id} className={styles.photo__list__item}>
              <figure className={styles.photo__list__item__img}>
                <img src={item.url} alt={item.id} />
              </figure>
            </li>
          )
        })} */}
      </ul>
      {photoInfo?.length > 0 && (
        <Pagenation
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </main>
  )
}

export default Photo
