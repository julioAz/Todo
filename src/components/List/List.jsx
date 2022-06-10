import React from 'react'
import Card from '../Card/Card'

function List(props){

    function deleteItem(item){
        console.log(item)
    }

    function DoneImg(props){
        if(props.done){
            return <span>Feito</span>
        } else {
            return <span>Não feito</span>
        }
    }

    return(
        <ul>
            {props.items.map(item => 
                <li key={item.id} >
                    <Card className={item.done?"done":""}>
                        {item.text}
                        <div>
                            <button 
                                onClick={()=> { props.onDone(item )}}>
                                <DoneImg done={item.done}></DoneImg>
                            </button>
                            <button 
                                onClick={()=>{ props.onItemDeleted(item) }}>
                                <img 
                                src="../../../assets/trashCan.png"
                                alt="excluir" />
                            </button>
                        </div>
                    </Card>
                </li>
            )}
        </ul>
    )
}

export default List