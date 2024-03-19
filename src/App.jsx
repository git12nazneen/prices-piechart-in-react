import './App.css'
import Banner from './assets/component/Banner/Banner'
import Footer from './assets/component/Footer/Footer'
import Navbar from './assets/component/Navbar/Navbar'
import Piecahrt from './assets/component/Piechart/Piecahrt'
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
    <Piecahrt></Piecahrt>
   </div>
   </div>
   <Footer></Footer>
    </>
  )
}

export default App
