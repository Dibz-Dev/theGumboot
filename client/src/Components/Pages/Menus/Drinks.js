import DrinksData from '../../../PageData/drinks-data'

const Drinks = () => {
    return ( 

       <div id="Drinks" className="drinks">

        <div className="drink-box">
           
                <div className="drink-square day-start">
                <h3 className="drink-heading day-start-head">Kick start your Day..</h3>
                      <div className="para-description coffee">
                        <p><span className="sub-drink">{DrinksData.section1.item1.heading}</span><br />{DrinksData.section1.item1.para}<span className="price">{DrinksData.section1.item1.price}</span></p>
                         <p><span className="sub-drink">{DrinksData.section1.item2.heading}</span><br />{DrinksData.section1.item2.para}<span className="price">{DrinksData.section1.item2.price}</span><br /><br />
                         <span className="sub-drink">{DrinksData.section1.item3.heading}</span><br />{DrinksData.section1.item3.para}<span className="price">{DrinksData.section1.item3.price}</span>
                         </p>
                      </div>
                      
                      
                </div>
                <div className="drink-square edge-off">
                <h3 className="drink-heading"> Its 12 o'clock Somewhere..</h3>
                <div className="para-description edge">
                        <p><span className="sub-drink">{DrinksData.section2.item1.heading}</span><br />{DrinksData.section2.item1.para}<span className="price">{DrinksData.section2.item1.price}</span><br /><br />
                        <span className="sub-drink">{DrinksData.section2.item2.heading}</span><br />{DrinksData.section2.item2.para}<span className="price">{DrinksData.section2.item2.price}</span></p>
                         <p><span className="sub-drink">{DrinksData.section2.item3.heading}</span><br />{DrinksData.section2.item3.para}<span className="price">{DrinksData.section2.item3.price}</span><br /><br />
                         <span className="sub-drink">{DrinksData.section2.item4.heading}</span><br />{DrinksData.section2.item4.para}
                         </p>
                      </div>
               
                </div>
           <div  className="drink-square cocktails">
                <h3 className="drink-heading harder-stuff"> Harder Stuff..</h3>
                <div className="para-description-cocktails">
                        <p><span className="sub-drink">{DrinksData.section3.item1.heading}</span><br />{DrinksData.section3.item1.para}<span className="price">{DrinksData.section3.item1.price}</span><br />
                        {DrinksData.section3.item2.para}<span className="price">{DrinksData.section3.item2.price}</span>
                        <br /><br />{DrinksData.section3.item3.para}<span className="price">{DrinksData.section3.item3.price}</span>
                         </p>
                       
                </div>
           </div>
           <div className="horiz-line bottom"></div>
                <div  className="drink-square happy-hour">
                
                <h2 className="happy-hour-style">{DrinksData.section4.item1.heading}</h2>
                <img className="cocktail" src="../../svgs/Cocktail.svg" alt="cocktail" /> 
                <h5 className="sub-happy-hour"> {DrinksData.section4.item1.para}</h5>
                </div>
                       
        </div>
        
        
      
</div>

     );
}
 
export default Drinks;