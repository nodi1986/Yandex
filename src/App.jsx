import React, { useState } from 'react'
import Header from './assets/Components/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  const [search, setSearch] = useState("") 
  const [cart, setCart] = useState([]) 

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <Outlet context={{ search, cart, setCart }} />
    </div>
  )
}

export default App
