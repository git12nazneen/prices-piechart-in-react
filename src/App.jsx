import './App.css'
import Banner from './assets/component/Banner/Banner'

import Navbar from './assets/component/Navbar/Navbar'
import Price from './assets/component/Price/Price'
import Linechart from './assets/component/lineChart/Linechart'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Price></Price>
    {/* <Header></Header> */}
   <div className='flex'>
   <div className='flex-1'>
   <Linechart></Linechart>
   </div>
   <div className='flex-1'>
    
   </div>
   </div>
    </>
  )
}

export default App
