import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
// import Redux from './Components/Redux/Redux'
import { Provider } from 'react-redux'
// import store from './Components/Redux/Store'
import Rtk from './Components/RTK/Rtk'
import store from './Components/RTK/Store'


function App() {

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<><Home/></>}/>
            {/* <Route path='/Redux' element={<><Redux/></>}/> */}
            <Route path='/RTK' element={<><Rtk/></>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
