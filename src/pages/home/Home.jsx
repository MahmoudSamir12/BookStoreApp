import React from "react";
import Slider1 from '../../components/slider/Slider1';
import Services from '../../components/services/Services';
import BookSlider from '../../components/book-slider/BookSlider';
import HeadingTitle from '../../components/heading-title/HeadingTitle';
import {books} from '../../data/books';

const Home = () => {
    return (
        <div className="home">
            <Slider1 />
            <Services />
            <HeadingTitle title="Most Gifted" />
            <BookSlider data={books} />
            <HeadingTitle title="Best Seller" />
            <BookSlider data={books} />
            <HeadingTitle title="Most Wished For" />
            <BookSlider data={books} />
        </div>
    );    
};

export default Home;
