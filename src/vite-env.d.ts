/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_DOG_API_KEY: string
  readonly VITE_KAKAO_API_KEY: string
  // 필요한 다른 환경 변수를 추가할 수 있습니다.
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
