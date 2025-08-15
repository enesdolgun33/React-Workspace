import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'
import useCopyToClipboard from './hooks/useCopyToClipboard'

function App() {

  const { count, increase, decrease } = useCounter();


  const { open, change } = useToggle(); // obje olarak return edıldıklerı ıcın object destructuring


  const [copied, copy] = useCopyToClipboard("Pes etme çalış"); //array olarak dondugumuz ıcın array olarak destructuring ettik

  return (
    // useCounter hook :

    // <div style={{ textAlign: 'center', justifyContent: 'center' }}>
    //   <div>
    //     {count}
    //   </div>
    //   <button onClick={increase} >Arttır</button>
    //   <button onClick={decrease}>Azalt</button>
    // </div>

    // useToggle hook:
    // <div>
    //   {open && <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>kutu</div>}
    //   <br />
    //   <button onClick={change} >{open ? 'Gizle' : 'Göster'}</button>
    // </div>

    // useCopyToClipboard hook:
    <div>
      {copied && 'kopyalandı'}
      <button onClick={copy}>Kopyala</button>
    </div>
  )
}

export default App
