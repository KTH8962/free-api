import axios from "axios"
import { useEffect, useState } from "react"
import { catBreeds } from "@constants/catBreeds"
import { useInfiniteQuery } from "@tanstack/react-query"
import { motion } from "framer-motion"
import Select from "@components/select/Select"
import Pagenation from "@components/pagenation/Pagenation"

interface PhotoClass {
  className: string
  className2: string
  className3: string
}

interface PhotoInfo {
  id: string
  url: string
  width: number
  height: number
}

function PhotoReact({ className, className2, className3 }: PhotoClass) {
  const catLists = catBreeds
  const pageSize = 8
  const [selectedValue, setSelectedValue] = useState<string>("")
  const [breed, setBreed] = useState<string>("")
  const [photoInfo, setPhotoInfo] = useState<PhotoInfo[]>([])
  const [totalPage, setTotalPage] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const handleSearch = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value)
    setBreed(e.target.value)
  }
  const {
    data,
    // isLoading,
    // isFetching,
    // isFetched,
    // hasNextPage,
    // fetchPreviousPage,
    // fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["delay", selectedValue], // 검색어로 쿼리 키 생성!
    queryFn: async () => {
      return axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${selectedValue}&api_key=${
          import.meta.env.VITE_DOG_API_KEY
        }`
      )
    },
    initialPageParam: 1, // 첫 페이지 번호 초기화!
    getNextPageParam: (lastPage, pages) => {
      //setTotalPage(maxPage)

      // // 다음 페이지가 있으면, 다음 페이지 번호 반환!
      // if (pages[0].data.length < maxPage) {
      //   return pages.length + 1
      // }
      // // 다음 페이지가 없으면 undefined | null 반환!
      return undefined
    },
    enabled: true, // 검색어 입력 전까지 대기!
    staleTime: 1000 * 60 * 5, // 5분
  })
  useEffect(() => {
    if (data && JSON.stringify(photoInfo) !== JSON.stringify(data)) {
      setPhotoInfo(data.pages[0].data)
      setTotalPage(Math.ceil(data.pages[0].data.length / pageSize))
      setCurrentPage(1)
    }
  }, [data])
  const getPhotoList = () => {
    const startIdx = (currentPage - 1) * pageSize
    const endIdx = startIdx + pageSize
    return photoInfo.slice(startIdx, endIdx)
  }
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
    <>
      <Select onChange={handleSearch} lists={catLists} selected={breed} />
      <ul className={className}>
        {getPhotoList().map((item, i) => (
          <motion.li
            key={item.id}
            className={className2}
            initial="hidden"
            animate="visible"
            variants={listVariants}
            custom={i}
          >
            <figure className={className3}>
              <img src={item.url} alt={item.id} />
            </figure>
          </motion.li>
        ))}
      </ul>
      {photoInfo?.length > 0 && (
        <Pagenation
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  )
}

export default PhotoReact
