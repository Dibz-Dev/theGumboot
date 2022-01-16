import Drinks from './Menus/Drinks'
import Food from './Menus/Food'
import Modal from './Reusables/Modal';


const Menu = ({ onFood, onDrinks, fb, gallery, sm }) => {



  
    return ( 
            
        <div id="Menu" >
                     
                
                {fb === "Food" && sm  ? <div className="content-container-menu"><Modal closeModal={gallery} /><Food /></div> : null }
                {fb === "Drinks" && sm ? <div className="content-container"><Modal closeModal={gallery} /> <Drinks /> </div> : null }
                <p className="menu-spec">All you can eat Brunch<br /> EVERY Sunday!!</p>
                  <div className="svg-btn-wrapper">
                     <img className="svg-food" onClick={onFood} src="./svgs/food-btn.svg" alt="food menu button" />
                     <img className="svg-drink" onClick={onDrinks} src="./svgs/drinks-btn.svg" alt="drink menu button" />
                  </div>
                  <p className="menu-spec2">Cocktails for a FIVER<br /> every day after <br />5pm...</p>
                  
           </div>
      
     );
}
 
export default Menu;