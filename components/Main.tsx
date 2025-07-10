import { useState } from "react"
import Home from "./Home"
import Navbar from "./NavBar"

const Main = () => {

  const [search,setSearch] = useState("")
  const [menu, setMenu] = useState("");

  return (
    <>
    <div className="h-screen w-screen">
    <Navbar setSearch={setSearch}/>
    <Home search={search}/>
    </div>
    </>
  )
}

export default Main