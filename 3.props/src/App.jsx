import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container';

function App() {
 
  const productName="Buzdolabı";

  return (
    <div>
      {/* <Product productName="Çanta" price={3100}/>
      <Product productName="Ayakkabı" price={4000}/>
      <Product productName={productName} price={15000}/> */}
      <Container> {/*Container companentinin içinde product componentini çağırdık */}
        <Product productName="Terlik" price={800}/>
        <Product productName="Tablet" price={9000}/>
        <Product productName="Telefon" price={32000}/>
      </Container>  
    </div>
 )
}

export default App
