import ReservationData from '../../PageData/reservation-data';

const Reservations = () => {

    const title = 'Reservations';
    return ( 

        <div id="Reservations" className="content-container reservations">

           
           <div className="content-paragraph-box">
           <h2 className="content-header">{title}</h2>
            <p>{ReservationData.paraOne}<br /><br />
            <div className="line-break"></div>
            <br />
            {ReservationData.paraTwo}
            <br />
            {ReservationData.paraThree}
            </p>
          
            </div>
        </div>
     );
}
 
export default Reservations;