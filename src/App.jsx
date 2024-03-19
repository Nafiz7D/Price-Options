import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'



function App() {
  return (
    <>

    <Navbar></Navbar>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <Phones></Phones>
    {/* <DaisyNav></DaisyNav> */}
     



    </>
  )
}

export default App
