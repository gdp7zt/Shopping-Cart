import './App.css';
import RouteSwitch from './components/RouteSwitch';
import React, {useEffect, useState} from 'react';

function App() {
  const [cart, setCart] = useState([]);

  function findTotal(){
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += parseFloat(product.realPrice) * product.quantity;
    })
    return Math.round(totalPrice*100)/100;
  }

  function findNumberItems(){
    let number = 0;
    cart.forEach((product) => {
      number += product.quantity;
    })

    return number;
  }

  return (
    <div>
      <RouteSwitch cart={cart} setCart={setCart} number = {findNumberItems}/>
      <div className='cartScreen cartScreenClosed'>
          <div className='cartTitle'>Your Shopping Cart</div>
          <div className='cartItems'>
            {cart.map((product, index) => (
              <div key={index} className='cartProduct'>
                <img src={product.img}></img>
                <div className='cartItemInfo'> 
                  <div className='cartItemName'>{product.name}</div>
                  <div className='cartItemPrice'>{product.price}</div>
                  <div className='adjustQuantity'>
                    <button className='minusButton' onClick = {() => {
                      const temp = cart.map(findProduct => {
                        if(findProduct === product){
                          if(findProduct.quantity === 1){
                            return;
                          }
                          findProduct.quantity -=1;
                        }
                        return findProduct
                      });

                      setCart(temp.filter(product => product));
                    }}>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                    </button>
                    <div>{product.quantity}</div>
                    <button className='addButton' onClick = {() => {
                      const temp = [...cart];
                      temp.forEach((findProduct) => {
                        if(findProduct === product){
                          findProduct.quantity += 1;
                        }
                      })
                      setCart(temp);
                    }}>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='totalPrice'>
            Total: ${findTotal()}
          </div>
          <button className='checkoutButton'>Checkout</button>
          <button className='closeButton' onClick={() => {
            document.querySelector('.cartScreen').classList.remove('cartOpen');
            document.querySelector('.cartScreen').classList.add('cartScreenClosed');
            document.querySelector('.cartBackground').classList.add('cartBackgroundClosed');
            document.querySelector('.cartBackground').classList.remove('cartOpenBackground');
          }}>Close</button>
        </div>
        <div className='cartBackground cartBackgroundClosed' onClick={() => {
          document.querySelector('.cartScreen').classList.remove('cartOpen');
          document.querySelector('.cartScreen').classList.add('cartScreenClosed');
          document.querySelector('.cartBackground').classList.add('cartBackgroundClosed');
          document.querySelector('.cartBackground').classList.remove('cartOpenBackground');
        }}></div>
    </div>
  );
}

export default App;
