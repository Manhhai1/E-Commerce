import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import start_dull_icon from '../Assets/star_dull_icon.png'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'
export const ProductDisplay = (props) => {
    const { product } = props
    const { addToCart } = useContext(ShopContext)
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>

            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={start_dull_icon} alt="" />(122)

                </div>
                <div className="productdisplay-right-price">
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>

                </div>
                <div className="productdisplay-right-description">

                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size-select">
                        <div className='size'>S</div>
                        <div className='size'>M</div>
                        <div className='size'>L</div>
                        <div className='size'>XL</div>
                        <div className='size'>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }} className=' productdisplay-right-size-btn'>ADD TO CART</button>
                <p className='productdisiplay-right-category'></p>
            </div>
        </div>
    )
}
