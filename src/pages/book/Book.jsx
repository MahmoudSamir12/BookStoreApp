import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {books} from '../../data/books'
import Rating from '../../components/book-slider/Rating'
import './book.css'
import CartContext from '../../context/cartContext'

const Book = () => {

    const {addToCart} = useContext(CartContext);
    const [qty, setQty] = useState(1);

    const {id} = useParams();
    const book = books.find(b => b.id === +id);  //parseInt(id) = +id

    const bookDescription = `Discover a captivating journey within the pages of this book that invites you
    into a world of imagination and insight. Whether you're seeking adventure, 
    knowledge, or inspiration, this narrative offers a blend of engaging storytelling
    and profound themes that resonate with readers from all walks of life. Dive into 
    a richly woven tapestry of characters and experiences, each turning page drawing 
    you deeper into an exploration of the human spirit and the complexities of life. 
    Perfect for lovers of both fiction and non-fiction alike, this book promises to 
    entertain, enlighten, and inspire.`;


    return (
        <div className='book'>
            <div className='book-content'>
                <img src={`/books/${book.image}`} alt={book.title} className='book-content-img' />
                <div className='book-content-info'>
                    <h1 className='book-title'>{book.title}</h1>
                    <div className='book-author'>
                        by <span>{book.author}</span> (Author)
                    </div>
                    <Rating rating={book.rating} reviews={book.reviews} />
                    <div className='book-add-to-cart'>
                        <input type='number'
                                min="1" max="100" 
                                className='book-add-to-cart-input'
                                value={qty}
                                onChange={e => setQty(e.target.value)} 
                        />
                        <Link onClick={()=> addToCart({...book, quantity: qty})} to="/cart" className='book-add-to-cart-btn'>
                            <i className='bi bi-cart-plus'></i>
                            Add to cart
                        </Link>
                    </div>
                </div>
            </div>
            <p className='book-description'>{bookDescription}</p>
            
            <div className="book-icons">
                
            <div className='book-icon'>
                    <small>Print Length</small>
                    <i className='bi bi-file-earmark-break'></i>
                    <b>{book.printLength} Pages </b>
                </div>

                <div className='book-icon'>
                    <small>Language</small>
                    <i className='bi bi-globe'></i>
                    <b>{book.language}</b>
                </div>

                <div className='book-icon'>
                    <small>Publication date</small>
                    <i className='bi bi-calendar3'></i>
                    <b>{book.PublicationDate}</b>
                </div>
            </div>

        </div>
    )
}

export default Book