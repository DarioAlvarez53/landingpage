import { BrowserRouter, useRoutes } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Home from '../Home'

const AppRoutes = () => {
  let routes = useRoutes([
    //Se generan los paths y elementos que conforman
    { path: '/', element: <Home />}
  ])

  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App