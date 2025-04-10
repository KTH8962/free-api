import Header from "@components/header/Header"
import Main from "@pages/main/Main"
import Maps from "@pages/maps/Maps"
import Motion from "@pages/motion/Motion"
import Photo from "@pages/photo/Photo"
import User from "@pages/user/User"
import { Analytics } from "@vercel/analytics/react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Main />}></Route>
          <Route index path="/user" element={<User />}></Route>
          <Route index path="/kakao" element={<Maps />}></Route>
          <Route path="/photo" element={<Photo />}></Route>
          <Route path="/motion" element={<Motion />}></Route>
        </Routes>
        <Analytics />
      </Router>
    </QueryClientProvider>
  )
}

export default App
