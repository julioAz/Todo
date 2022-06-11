import React from 'react'
import Card from '../Card/Card'

function Modal(props){

    function hideModal(e){
        let target = e.target;
        if(target.id === 'modal'){
            props.onHideModal();
        }
    }

    return(
        <div id="modal" onClick={hideModal} className={props.show?"modal": "modal hide"}>
            {props.children}
        </div>
    )
}

export default Modal