import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';


function Product({ product }) {

    const { id, price, image, title, description } = product;

    const navigate = useNavigate();

    return (
        <div className='card'>
            <img className='card-img' src={image} />
            <div>
                <p className='card-title'>{title}</p>
                <h3 className='card-price'>{price} ₺</h3>
            </div>

            <div className='flex-row'>
                <button onClick={() => navigate("/product-details/" + id)} className='card-button'>Detayına git</button>
            </div>
        </div>
    )
}

export default Product