import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, decreaseCount, deleteBasket, setDrawer } from './redux/slices/basketSlice'

function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch(decreaseCount(id));
    dispatch(calculateBasket());

  }

  useEffect(() => {
    dispatch(calculateBasket());
  }, [dispatch])

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer className='drawer' anchor='right' onClose={() => dispatch(setDrawer())} open={drawer} >
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: '20px' }} >
                    <img className='drawer-img' src={product.image} width={50} height={50} />
                    <p className='drawer-title'>{product.title}({product.count})</p>
                    <p className='drawer-price'>{product.price} TL</p>
                    <button
                      onClick={() => handleRemoveProduct(product.id)}
                      className='drawer-button'>Sil</button>
                  </div>

                </div>
              )
            })
          }
          <div className='total-amount'>
            <p>Toplam tutar : {totalAmount} TL</p>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
