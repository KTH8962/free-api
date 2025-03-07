import Header from "@components/header/Header"
import Main from "@pages/main/Main"
import Photo from "@pages/photo/Photo"
import { Analytics } from "@vercel/analytics/react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/" element={<Main />}></Route>
        <Route path="/photo" element={<Photo />}></Route>
      </Routes>
      <Analytics />
    </Router>
  )
}

export default App
