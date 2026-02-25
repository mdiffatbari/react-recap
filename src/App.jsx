import './App.css'
import Countries from './Components/Countries/Countries'

const countriesData = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {


  return (

    <>
      <Countries countriesData= {countriesData}></Countries>
    </>
  )
}

export default App
