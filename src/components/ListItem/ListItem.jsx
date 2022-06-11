import React from 'react'
import Card from '../Card/Card'

function ListItem(props){

    function DoneImg(props){
        if(props.done){
            return <img 
            src="../../../assets/doneIcon.png"
            alt="excluir" />
        } else {
            return <img 
            src="../../../assets/undoneIcon.png"
            alt="excluir" />
        }
    }

    return( 
        <li className="listItem" >
            <Card className={props.item.done?"done":""}>
                {props.item.text}
                <div>
                    <button className="doneButton"
                        onClick={()=> { props.onDone(props.item )}}>
                        <DoneImg done={ props.item.done }></DoneImg>
                    </button>
                    <button className="deleteItem"
                        onClick={()=>{ props.onItemDeleted(props.item) }}>
                        <img 
                        src="../../../assets/trashCan.png"
                        alt="excluir" />
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default ListItem