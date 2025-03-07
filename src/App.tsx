import Header from "@components/header/Header"
import Main from "@pages/main/Main"
import Photo from "@pages/photo/Photo"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/" element={<Main />}></Route>
        <Route path="/photo" element={<Photo />}></Route>
      </Routes>
    </Router>
  )
}

export default App
