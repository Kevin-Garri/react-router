import { BrowserRouter, Routes, Route } from "react-router-dom"
//pages
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import ListaPost from "./pages/listaPost"
import PostDetail from "./pages/PostDetailPage"
import creazionePost from "./pages/CreazionePost"
import ErrorPage from "./pages/ErrorPage"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/chi-siamo" Component={ChiSiamo} />
          <Route path="/lista-post" Component={ListaPost} />
          <Route path="/dettaglio-post/:id" Component={PostDetail} />
          <Route path="/nuovo-post" Component={creazionePost} />
          <Route path="*" Component={ErrorPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
