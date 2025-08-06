import React from 'react'
import '../css/Product.css'


function Product({product}) {

    const {id, price, image, title, description} = product;

    console.log(title)

    return (
        <div className='card'>
            <img className='card-img' src={image} />
            <div>
                <p className='card-title'>{title}</p>
                <h3 className='card-price'>{price}₺</h3>
            </div>

            <div className='flex-row'>
                <button className='card-button'>Detayına git</button>
            </div>
        </div>
    )
}

export default Product