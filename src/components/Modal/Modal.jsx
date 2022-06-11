import React from 'react'
import Card from '../Card/Card'

function Modal(props){

    function hideModal(e){
        let target = e.target;
        if(target.id === Modal){
            props.onHideModal();
        }
    }

    return(
        <div id="modal" onClick={hideModal} className={props.show?"modal": "modal hide"}>
            <Card>
                {props.children}
            </Card>
        </div>
    )
}

export default Modal