import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  function handleClick() {
    alert('button clicked');
  }
  // type-2
  const handleClick2 = () => {
    alert('button 2 clicked')
  }


  return (
    <>

      <h1>Hi I am Rasel</h1>
      <button onClick={handleClick}>Click me</button>
      {/* type 2  */}
      <buttton onClick={handleClick2}>Click me 2</buttton>

      {/* type 3   */}
      <button onClick={() => { alert('thard click') }}>thard</button>

    </>
  )
}
function Group() {
  return (
    < div >
      <h1>tui k</h1>

    </div >
  )
}

export default App
