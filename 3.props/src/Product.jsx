import React from 'react'

function Product(props) { // Product({productname, price}) -> şeklinde yaparsak 5. satıra gerek kalmaz
    
    const {productName,price} = props;
  
    return (
    <div>
        <div>ÜRÜN BİLGİLERİ</div>
        <br />
        <div>
            <div>İsim : {productName}</div>
            <div>Fiyat : {price} TL</div>
        </div>
       <hr />

    </div>
  )
}

export default Product