

//import Home from './Components/Home';

import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"


function App() {
 


  return (
    <>
  <Navbar></Navbar>
  <Outlet></Outlet>
    </>
  )
}

export default App
