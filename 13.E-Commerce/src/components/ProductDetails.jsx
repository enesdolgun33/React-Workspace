import { useScrollTrigger } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/ProductDetails.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";



function ProductDetails() {

    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { price, image, title, description } = selectedProduct;

    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }

    return (
        <div className='main-div'>
            <div className='image-div'>
                <img className='image' src={image} />
            </div>
            <div>
                <h1 className='title'>{title}</h1>
                <p className='description'>{description}</p>
                <h1 className='price'>{price} ₺</h1>

                <div className='count'>
                    <CiCircleMinus onClick={decrement} className='icons' /><span className='span'>{count}</span><CiCirclePlus onClick={increment} className='icons' />
                </div>

                <div>
                    <button className='add-to-cart-btn'>Sepete Ekle</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails