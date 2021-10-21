// import { useState } from 'react';
import Gallery from './Reusables/Gallery';
import Modal from './Reusables/Modal'
import ImageData from '../../PageData/image-data';

const ImagePane = ({ gallery, sm}) => {

    const showGallery = true;

     if(sm === false) {

        return (

            <div className="content-container">
                         <div className="image-container">
                                    <img className="img-smaller" src={ImageData[0]} alt="" />
                                    <img className="img1" src={ImageData[1]} alt="" />
                                    <img className="img3" src={ImageData[2]} alt="" />
                                    <div className="gallery-img"> <button onClick={gallery} className="gallery-btn" >Click here to see <br /> more pics..</button></div>
                                    <div className="overlay-background"></div>
                               <div>
                                  
                               </div>
                         </div>
            </div>
        )
     } else {
        return (
            <div>
                    {showGallery ? <Gallery /> : null}
                    {sm ? <Modal closeModal={gallery} /> : null}
           </div>
        )}
   

   
   
}

 
export default ImagePane;