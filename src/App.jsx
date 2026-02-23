import { useState } from 'react';
import './App.css'


function App() {

  const [score, setScore] = useState(0);
  const [fours, setFours] = useState(0);

  // const totalFour = () => {
  //   const newFourCount = fours + 1;
  //   setFours(newFourCount)
  // }
  const handleSingle = () => {
    const newRun = score + 1;
    setScore(newRun)
  };
  const handleFour = () => {
    const newRun = score + 4;
    const newFourCount = fours + 1;
    setScore(newRun)
    setFours(newFourCount)
  };
  const handleSix = () => {
    const newRun = score + 6;
    setScore(newRun)
  };


  return (
    <>
      <h1>🏏Score: {score}</h1>
      <h3>Total Four: {fours}</h3>
      {
        score >= 50 && <p>You got halt sentuary🫶</p>
      }
      {
        score >= 100 && <h3>You Got Sentuary🔥</h3>
      }
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>

    </>
  )
}

export default App
