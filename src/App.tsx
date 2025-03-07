import Header from "@components/header/Header"
import Maps from "@pages/maps/Maps"
import Photo from "@pages/photo/Photo"
import { Analytics } from "@vercel/analytics/react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/" element={<Maps />}></Route>
        <Route path="/photo" element={<Photo />}></Route>
      </Routes>
      <Analytics />
    </Router>
  )
}

export default App
