import './App.css'
import Header from "./components/Headers/header";
import { Outlet } from 'react-router';

const App = () => {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
