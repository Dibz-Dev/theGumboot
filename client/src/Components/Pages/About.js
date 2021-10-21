import AboutData from '../../PageData/about-data';

const About = () => {

    const title = 'About Us';

    return ( 

        
            
        <div id="About" className="content-container about">
                
                <div className="content-paragraph-box">
                <h2 className="content-header">{title}</h2>

                    <p className="para-about-us"> {AboutData.paraOne} </p>
                    <div className="img-decor-wrapper">
                        <img className="about-img-decor" src="./images/cafedecor.jpg" alt="inside cafe" />
                        <img className="img-smaller img-14" src="./images/coffees.jpg" alt="coffees" />
                    </div><br /><br />
                    <p style={{ width: "95%"}}> {AboutData.paraTwo} </p>
                    
                    <p style={{  width: "95%"}}> {AboutData.paraThree} </p>
                </div>

        </div>
    
     );
}
 
export default About;