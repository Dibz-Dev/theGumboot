import Images from './Pages/Images';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Reservations from './Pages/Reservations';
import Contact from './Pages/Contact';
import NavBar from './NavBar';
import Footer from './Pages/Reusables/Footer';

import { useState } from 'react';
import Reviews from './Pages/Reviews';


const Content = () => {

    const [whichComponent, setChange] = useState("");
    const [showMenu, setMenu] = useState("");
    const [burger, setBurger] = useState(false);

    const [showModal, setModal] = useState(false);

        const galleryClick = () => {

        showModal === false ? setModal(true) : setModal(false);
        
        }
        const closeNav = () => {
            setBurger(false)
        }
    
        const openNav = () => {
            setBurger(true)
        }

        const changeFood = (e) => {

            setModal(true)
            setMenu("Food");
          
        }
        const changeDrinks = (e) => {
    
            setModal(true)
            setMenu("Drinks");
            
        }
    
        const burgerClick = (e) => {
                if( !burger ) {
                      openNav()
                  } else if( burger ) {
                      closeNav()
                  }
        
        }

        const onClick = (e) => {
    
            if(e.target.classList.contains('about-lk')) {
                setChange("About")
                window.scrollTo(0, 0)
                closeNav()
    
            } else if (e.target.classList.contains('menu-lk')) {
                setChange("Menu")
                window.scrollTo(0, 0)      
                closeNav()
    
            }  else if (e.target.classList.contains('review-lk')) {
                setChange("Reviews")
                window.scrollTo(0, 0)      
                closeNav()
    
            } else if(e.target.classList.contains('reservations-lk')) {
                setChange("Reservations")
                window.scrollTo(0, 0)        
                closeNav()
    
            } else if(e.target.classList.contains('contact-lk')) {
                
                setChange("Contact")
                window.scrollTo(0, 0)
                closeNav()
                
            } else {
                console.log('error')
            }
        }
    
        
    return (

        <div id="content" className="page-wrapper">
            <div>
                <NavBar openBurger={burgerClick} onClick={onClick} onFood={changeFood} onDrinks={changeDrinks} fb={showMenu} cc={whichComponent} hb={burger} gallery={galleryClick}/>
            </div>
        <div className="content-page-style">
        {burger  ? <div className="nav-overlay"></div> : null}
        { whichComponent === "" && <Images gallery={galleryClick} sm={showModal} /> }
        { whichComponent === "About" ? <About /> : null }
        { whichComponent === "Reviews" ? <Reviews /> : null}
        { whichComponent === "Menu" ? <Menu onFood={changeFood} onDrinks={changeDrinks}  fb={showMenu} sm=  {showModal} gallery={galleryClick} /> : null }
        { whichComponent === "Reservations" ? <Reservations /> : null }
        { whichComponent === "Contact" ? <Contact /> : null }
        </div>
        
        <Footer />
        </div>
    )


  
}

export default Content;

  

   

   
    
   

    









