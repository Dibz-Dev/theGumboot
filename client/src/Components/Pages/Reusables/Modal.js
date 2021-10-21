

const Modal = ({ closeModal } ) => {
    return ( 

        <div>
          <div className="modal-overlay"></div>
             <span onClick={closeModal} className="modal-close">&times;</span>
        </div>
     );
}
 
export default Modal;