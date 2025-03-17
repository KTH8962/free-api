import axios from "axios"
import { useCallback, useState } from "react"

function useAxios() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("null")
  const [data, setData] = useState(null)
  const sendReq = useCallback(
    async (url: string, method: string, body = null, headers = {}) => {
      setLoading(true)
      setError("null")
      try {
        const response = await axios({ url, method, data: body, headers })
        //console.log(response.data)

        setData(response.data)
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          // AxiosError일 경우에는 message나 다른 속성에 안전하게 접근 가능
          setError(error.message || "에러확인")
        } else {
          // AxiosError가 아닐 경우 일반적인 오류 처리
          setError("알 수 없는 에러 발생")
        }
      } finally {
        setLoading(false)
      }
    },
    []
  )
  // useEffect(() => {
  //   if (data) {
  //     console.log("데이터가 변경되었습니다: ", data)
  //   }
  // }, [data])
  return { loading, error, data, sendReq }
}

export default useAxios
