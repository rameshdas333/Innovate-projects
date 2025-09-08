import React from 'react';
import Container from './Container';
import customerImage from '../assets/customerImg.png'

const ReviewPartImg = ({children}) => {
    return (
        <div>
           <Container>
             <img src={customerImage} alt="" />
            {children}
           </Container>
        </div>
    );
};

export default ReviewPartImg;