import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Jsx : {}
  //Javascipt kodları buraya
  //
  //kodlar
  //
  
  let a=15;
  const firstname ="Enes";

  let vize1 = 10
  let vize2 = 80;

  let sonuc = false;

  let isimler = [
    "Enes",
    "Arda",
    "İshak",
    "Osman"
  ]

  return(
    //Html kodları yazılır
    <div>
      {/* CTRL+Ö yorum satırı yapar 
      <p>a değişkeninin değeri : {a}</p>
      <p>Müşterinin adı : {firstname}</p> */}
      {/* <p>Ortalama : {(vize1+vize2)/2}</p> */}
      {/* {sonuc ? <p>Ehliyeti alabilirsin</p> : <p>Ehliyeti alamazsın, kaybol!</p>} */}
      {/* {
        (vize1+vize2)/2 >= 50 ? <p>Dersten gectın afferın</p> : <p>Kaldın geçmiş olsun !</p>
      } */}

      {
        isimler.map((isim, index)=>(
          <div style={{
            background:'orange',
            border: '1px solid black'
          }} key={index}>{isim}</div>
        ))
      }

    </div>
  )
}
export default App
