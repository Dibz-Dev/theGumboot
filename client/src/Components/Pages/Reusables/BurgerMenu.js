const BurgerMenu = ({ openBurger, hb }) => {


    if(hb === false) {
        return ( 
        <div id="burger-box" className="burger-box" onClick={openBurger}>
            <div className="burger-t"></div>
            <div className="burger-m "></div>
            <div className="burger-b "></div>
        </div>
        )} else {
            return (
            <div id="burger-box" className="burger-box-active" onClick={openBurger}>
            <div className="burger-t active"></div>
            <div className="burger-m active"></div>
            <div className="burger-b active"></div>
        </div>
            )}
}
 
export default BurgerMenu;

