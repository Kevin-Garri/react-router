import { BrowserRouter, Routes, Route } from "react-router-dom"
//pages
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import ListaPost from "./pages/listaPost"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/ChiSiamo" Component={ChiSiamo} />
          <Route path="/ListaPost" Component={ListaPost} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
