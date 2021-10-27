import ContactData from '../../PageData/contact-data';



const Contact = () => {

    
    const weekdays =  'Tuesday - Saturday';
    const sundays = 'Sunday';
    return ( 

        <div id="Contact" className="content-container contact-wrapper">
            <section className="contact-info-wrapper">

            <div className="contact">
                <h3 className="contact-header">{ContactData.contactInfo.header}</h3>
                    <p className="contact-info">{ContactData.contactInfo.phone}</p>
                    <p className="contact-info">{ContactData.contactInfo.email} </p>
            </div>
            <div className="location">
                    <h3 className="contact-header">{ContactData.locationInfo.header}</h3>
                    <p className="hours-info ">{ContactData.locationInfo.address} </p>
                    <p className="hours-info">{weekdays}<span className="price">{ContactData.hoursInfo.weekdays}</span></p>
                    <p className="hours-info">{sundays}<span className="price">{ContactData.hoursInfo.sundays}</span>  </p>
                   <button className="google-btn"><a className="google-link"href={ContactData.btnLink.link}>Click here to find us on Google Maps</a></button>
            </div>
     
        </section>
    </div>
     );
}
 
export default Contact;