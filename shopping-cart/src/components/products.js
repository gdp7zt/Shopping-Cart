import React, { useState } from "react";
import './products.css';
import meyersDog from '../imgs/meyersDog.jpeg';
import catBee from '../imgs/catBee.jpeg';
import dogBanana from '../imgs/dogBanana.jpeg';
import dogHotdog from '../imgs/dogHotdog.jpeg';
import dogMinion from '../imgs/dogMinion.jpeg';
import frogDog from '../imgs/frogDog.jpeg';
import jailDog from '../imgs/jailDog.jpeg';
import sharkDog from '../imgs/sharkDog.jpeg';
import sheriffCat from '../imgs/sheriffCat.jpeg';
import tacoDog from '../imgs/tacoDog.jpeg';
import github from '../imgs/GitHub-Mark-32px.png';
import { v4 as uuidv4 } from 'uuid';
import { isCompositeComponent } from "react-dom/test-utils";

const Products = (props) => {
    const [products, setProducts] = useState([
        {name: 'Scary Dog', img: meyersDog, price:'$15.99', realPrice:'15.99', id:uuidv4()},
        {name: 'Bee Cat', img: catBee, price:'$13.99', realPrice:'13.99',id:uuidv4()},
        {name: 'Banana Dog', img: dogBanana, price:'$13.99', realPrice:'13.99',id:uuidv4()},
        {name: 'Hotdog Dog', img: dogHotdog, price:'$14.99', realPrice:'14.99',id:uuidv4()},
        {name: 'Minion Dog', img: dogMinion, price:'$20.99', realPrice:'20.99',id:uuidv4()},
        {name: 'Frog Dog', img: frogDog, price:'$10.99', realPrice:'10.99',id:uuidv4()},
        {name: 'Prison Dog', img: jailDog, price:'$25.99', realPrice:'25.99',id:uuidv4()},
        {name: 'Shark Dog', img: sharkDog, price:'$12.99', realPrice:'12.99',id:uuidv4()},
        {name: 'Sheriff Cat', img: sheriffCat, price:'$19.99', realPrice:'19.99',id:uuidv4()},
        {name: 'Taco Dog', img: tacoDog, price:'$8.99', realPrice:'8.99',id:uuidv4()}
    ]);

    function addToCart(id){
        products.forEach((product) => {
            if(product.id === id){
                let updatedProduct = {...product};
                props.cart.forEach((cartProduct) => {
                    if(cartProduct.id === id){
                        updatedProduct = {...cartProduct};
                    }
                })
                if(updatedProduct.quantity) updatedProduct.quantity += 1;
                else updatedProduct.quantity = 1;
            
                const updatedCart = [...props.cart]
                let foundProduct = false;
                updatedCart.forEach((productFind) => {
                    if(productFind.id === id){
                        foundProduct = true;
                        productFind.quantity = updatedProduct.quantity
                    }
                })
                if(!foundProduct) updatedCart.push(updatedProduct)
                props.setCart(updatedCart);
            }
        })
    }

    return(
        <div className='backgroundColor'>
            <div className="productContainer">
                {products.map((product, index) => (
                    <div className='productCard' key={product.id}>
                        <div className="productPhoto"><img height='150px'src={product.img}></img></div>
                        <div className='productName'>{product.name}</div>
                        <div className='productPrice'>{product.price}</div>
                        <button className='addToCart' onClick={() => addToCart(product.id)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <footer className='footer'>
                <h4>Copyright 2022 gdp7zt
                    <a href="https://github.com/gdp7zt/Shopping-Cart" target="_blank">
                        <img src={github} alt="Github Logo" className='gitHubImage'></img>
                    </a>
                </h4>
            </footer>
        </div>
    )
}

export default Products;