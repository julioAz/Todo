import React from 'react'
import Card from '../Card/Card'

function ListItem(props){

    function DoneImg(props){
        if(props.done){
            return <span>Feito</span>
        } else {
            return <span>Não feito</span>
        }
    }

    return( 
        <li >
            <Card className={props.item.done?"done":""}>
                {props.item.text}
                <div>
                    <button 
                        onClick={()=> { props.onDone(props.item )}}>
                        <DoneImg done={ props.item.done }></DoneImg>
                    </button>
                    <button 
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