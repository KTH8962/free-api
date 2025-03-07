import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { fileURLToPath } from "url"

// alias path 를 만들어주는 콜백함수
const getAliasPath = (path: string) => {
  return fileURLToPath(new URL(path, import.meta.url))
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": getAliasPath("./src"),
      "@assets": getAliasPath("./src/assets"),
      "@components": getAliasPath("./src/components"),
      "@pages": getAliasPath("./src/pages"),
      "@store": getAliasPath("./src/store"),
      "@constants": getAliasPath("./src/constants"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@assets/scss/main.scss' as *; @use "@assets/scss/abstracts" as *;`,
      },
    },
  },
})
