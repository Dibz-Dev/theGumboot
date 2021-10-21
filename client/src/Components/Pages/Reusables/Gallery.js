import { useState } from 'react';
import ImageData from '../../../PageData/image-data';

const Gallery = () => {


const [slider, setSlider] = useState(0)
const length = ImageData.length;


const arrowClickRight = () => {

    setSlider(slider === length - 1 ? 0 : slider + 1)

}
    
const arrowClickLeft = () => {

    setSlider(slider === 0 ? length -1 : slider - 1)
    
}


    return ( 
         <div>
            <section className="gallery-wrapper">
                         <div className="gallery-slide" >
                         <img onClick={arrowClickLeft} className="arrow-left" src="./svgs/altArrow.svg" alt="Arrow" />
                         {/* <div className> */}
                         <img className={"img-slide"} src={ImageData[slider]} alt="" />
                         {/* </div> */}
                         <img onClick={arrowClickRight}  className="arrow-right" src="./svgs/altArrow.svg" alt="Arrow" />
                     </div>
                    
            </section>
         </div>

     );
}
 
export default Gallery;