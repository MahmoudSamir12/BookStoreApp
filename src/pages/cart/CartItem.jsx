import React from 'react'

const CartItem = ({item, removeFromCart, addToCart}) => {

    const {id, image, title, author, quantity, price} = item;

    return (
        <div className='cart-item'>
            <img src={`/books/${image}`} alt={title} className='cart-item-img' />
            <div className='cart-item-info'>
                
                <div>
                    <div className='cart-item-book-title'>
                    <b>Title: </b> {title}
                    </div>
                    <div className='cart-item-author'>
                    <b>Author: </b> {author} (Author)
                    </div>
                </div>
                
                <div>
                    <div className='cart-item-quantity'>
                        <button onClick={() => addToCart({...item, quantity: item.quantity + 1})}>
                            <i className='bi bi-plus-lg'></i>
                        </button>
                        <b>{quantity}</b>

                        {/*
                        <button onClick={() => addToCart({...item, quantity: item.quantity - 1})}>
                            <i className='bi bi-dash-lg'></i>
                        </button>
                        */}
                        <button
                            onClick={() => item.quantity > 0 && addToCart({ ...item, quantity: item.quantity - 1 })}
                                disabled={item.quantity <= 1}>
                            <i className='bi bi-dash-lg'></i>
                        </button>
                        
                    </div>
                    <div className='cart-items-price'> 
                        ${(price * quantity).toFixed(2)}
                    </div>
                    <i onClick={()=> removeFromCart(id)} className='bi bi-trash-fill' ></i>
                </div>

            </div>
        </div>  
    )
}

export default CartItem
