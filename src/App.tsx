import { BrowserRouter as Router, Routes, Route, RouterProvider, BrowserRouter } from 'react-router-dom'
import './App.css'
import * as G from './styles/global'
import Footer from './components/Footer'
import Header from './components/Header'
import { authRoutes, publicRoutes } from './routes'
import { Loader } from './components/Loader/style'
import { useAuth } from './store/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isAuth = localStorage.getItem("token")
  const { mode, setMode } = useAuth((state) => state)

  return (
    <BrowserRouter>
      <Header/>
      <G.Main>
      <ToastContainer/>
        <Routes>
          {!isAuth ? (
            authRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} loader={Loader}/>
            ))
          ) : (
            publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} loader={Loader}/>
            ))
          )}
        </Routes>
      </G.Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
