import { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function ImageSlider({ slideItems }) {
const [current, setCurrent] = useState(0);
const length = slideItems.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

if (!Array.isArray(slideItems) || slideItems.length <= 0) {
    return null
}
    
    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                {SliderData.map((slideItem, index) => {
                    return (
                        <div className={index === current ? 'slideItem active' : 'slideItem'} key={index}>
                            {index === current && (<img src={slideItem.image} alt='travel' className="image" />)}
                        </div>
                    )
                })}   
        </section>
    )
}

export default ImageSlider
