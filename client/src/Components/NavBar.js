import BurgerMenu from "./Pages/Reusables/BurgerMenu";


const NavBar = ({ onClick, onFood, onDrinks, openBurger, fb, cc, hb }) => {

  

   return (  

        <nav id="sideNav" className={hb ? 'sideNav active' : 'sideNav'}>
              <a href="/"><img className="gumboot-logo" src="./svgs/gumbootLogo.svg" alt="gumboot logo" /></a>
                     <BurgerMenu openBurger={openBurger} hb={hb}/>
                <ul className={hb ? 'sideNav-menu active' : 'sideNav-menu'}>
                    <li id="About" className="about-lk" onClick={onClick} >
                        {cc === "About" ? <img className="cup about-cup" src="./svgs/myCoff.svg" alt="coffee" /> : null }About</li>
                    <li id="Menu" className="menu-lk" onClick={onClick}>{cc === "Menu" ? <img className="cup menu-cup" src="./svgs/myCoff.svg" alt="coffee" /> : null } Menu</li>
                    <li id="Review" className="review-lk" onClick={onClick}>{cc === "Reviews" ? <img className="cup review-cup" src="./svgs/myCoff.svg" alt="coffee" /> : null } Reviews</li>
                    <li id="Reservations" className="reservations-lk" onClick={onClick}>{cc === "Reservations" ?<img className="cup reservations-cup" src="./svgs/myCoff.svg" alt="coffee" /> : null}Reservations</li>
                    <li id="Contact" className="contact-lk" onClick={onClick}>{cc === "Contact" ? <img className="cup contact-cup" src="../svgs/myCoff.svg" alt="coffee" /> : null}Contact</li>

                </ul>

        </nav>


    );
}
 
export default NavBar;