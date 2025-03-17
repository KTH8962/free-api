import { catBreeds } from "@constants/catBreeds"
import styles from "./Photo.module.scss"
//import axios from "axios"
import Select from "@components/select/Select"
import Pagenation from "@components/pagenation/Pagenation"
import { usePhotoStore } from "@store/usePhotoStore"
import { motion } from "framer-motion"
import useAxios from "@hooks/useAxios"
import { useEffect } from "react"

// interface PhotoInfo {
//   id: string
//   url: string
//   width: number
//   height: number
// }

function Photo() {
  const catLists = catBreeds
  // 고양이 종류 선택
  const selectedBreed = usePhotoStore((state) => state.selectedBreed)
  const setBreed = usePhotoStore((state) => state.actions.setBreed)
  // const { selectedBreed, setBreed } = usePhotoStore((state) => ({
  //   selectedBreed: state.selectedBreed,
  //   setBreed: state.actions.setBreed,
  // })) set이랑 같이부르면 무한루프 빠짐 state값들만 사용하기로
  // 선택된 고양이 리스트
  //const [photoInfo, setPhotoInfo] = useState<PhotoInfo[]>([])
  const photoInfo = usePhotoStore((state) => state.photoInfo)
  const setPhoto = usePhotoStore((state) => state.actions.setPhoto)
  // 선택된 페이지
  const currentPage = usePhotoStore((state) => state.currentPage)
  const setCurrent = usePhotoStore((state) => state.actions.setCurrent)
  const { data, sendReq } = useAxios()
  const handleSearch = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value

    // 새로 선택 할 경우에만 설정
    if (selectedBreed !== selectedValue) {
      setBreed(selectedValue)
    }
    try {
      // const { data } = await axios.get(
      //   `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${selectedValue},&api_key=${
      //     import.meta.env.VITE_DOG_API_KEY
      //   }`
      // )
      const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${selectedValue},&api_key=${
        import.meta.env.VITE_DOG_API_KEY
      }`
      //const { data } = await axios({ url, method: "GET" })
      await sendReq(url, "GET")
      // 페이지가 1로 설정되지 않으면 설정
      if (currentPage !== 1) {
        setCurrent(1)
      }

      // 사진 정보가 기존과 다르면만 상태 업데이트
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
  useEffect(() => {
    if (data && JSON.stringify(photoInfo) !== JSON.stringify(data)) {
      setPhoto(data)
    }
  }, [data, photoInfo, setPhoto])
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
  const listVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 1,
      },
    }),
  }
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
      <Select
        onChange={handleSearch}
        lists={catLists}
        selected={selectedBreed}
      />
      <ul className={styles.photo__list}>
        {getCurrentPageItems().map((item, i) => {
          return (
            <motion.li
              key={item.id}
              className={styles.photo__list__item}
              initial="hidden"
              animate="visible"
              variants={listVariants}
              custom={i}
            >
              <figure className={styles.photo__list__item__img}>
                <img src={item.url} alt={item.id} />
              </figure>
            </motion.li>
            // <li key={item.id} className={styles.photo__list__item}>
            //   <figure className={styles.photo__list__item__img}>
            //     <img src={item.url} alt={item.id} />
            //   </figure>
            // </li>
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
          setCurrentPage={setCurrent}
        />
      )}
    </main>
  )
}

export default Photo
