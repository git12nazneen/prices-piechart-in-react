import './App.css'

import Navbar from './assets/component/Navbar/Navbar'
import Price from './assets/component/Price/Price'
import Linechart from './assets/component/lineChart/Linechart'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Price></Price>
    {/* <Header></Header> */}
    <Linechart></Linechart>
    </>
  )
}

export default App
