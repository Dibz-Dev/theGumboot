import { useState } from 'react'

const ReviewList = ({ reviews }) => {

     const [ number, setNumber] = useState(0);
     const length = reviews.length;


const arrowClickRight = () => {

    setNumber(number === length - 1 ? 0 : number + 1)

}
    
const arrowClickLeft = () => {

    setNumber(number === 0 ? length -1 : number - 1)
    
}


    return ( 

        <div className="review-wrapper">
             <div className="review-ind">
                <h2 className="title">{ reviews[number].title}</h2>
                <h6 className="date">({ reviews[number].date })</h6>
                <img className="reviewArrowLeft" style={{ transform: 'rotate(180deg)'}} onClick={arrowClickLeft} src="./svgs/altArrow.svg" alt="" />
                    <div className='review-box'>
                        
                        <p className="body">{ reviews[number].body }  <br/> 
                        <span className="name"> - { reviews[number].name}</span></p>
                        
                    </div>
                    <img className="reviewArrowRight" onClick={arrowClickRight} src="./svgs/altArrow.svg" alt="" />
                    
                   
            </div>
        </div>
     );
}
 
export default ReviewList;