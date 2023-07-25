import { Route, Routes } from 'react-router'
import './App.css'
import Landing from './container/Landing'
import Feed from './container/Feed'

function App() {
  
  return(
    <>
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/feed' element={<Feed/>}></Route>
    </Routes>
    </>
  )
}

export default App
