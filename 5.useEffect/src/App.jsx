import { useEffect, useState } from 'react'
import './App.css'

function App() {

// useEffect : bir sayfa yüklendiğinde bir şeyler yaptırmak için kullanılır (SEKTÖRDE ÇOK KULLANILIR!!)

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');


// ()=>{} : bu yapıya callback fonksiyon denir

  useEffect(()=>{
    console.log("Her zaman çalışır")
  })

  useEffect(()=>{
    console.log("İlk render edildiğinde çalışır")
    // ör : veritabanından ürünleri getir ve listele.
  },[])

  useEffect(()=>{
    console.log("ilk render edildiğinde ve FİRSTNAME state değeri değiştiğinde çalışır")
  },[firstname])
  // istersek birden fazla parametre de verebiliriz şu şekil : [firstname, lastname]

  useEffect(()=>{
    console.log("ilk render edildiğinde ve LASTNAME state değeri değiştiğinde çalışır")
  },[lastname])



  return (
    <div>
      <div><button  onClick={()=>setFirstname("Enes")}>Adı Değiştir</button></div>
      <br />
      <div><button  onClick={()=>setLastname("Dolgun")}>Soyadı Değiştir</button></div>
    </div>
  )
}

export default App
