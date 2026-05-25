import React, { useState } from 'react'

const Column = () => {

    const {state} = useBoard();
    const [showForm, setShowForm] = useState(false);

    const cards = state.cards[Column.id]  || [];
    const cardIds = cards.map((c)=> c.id);

    const {setNodeRef, isOver} = useDropper({id:Column.id});
  return (
    <div style={s.column}>
        <div style={s.header}>
            <div style={s.title}>
               <div style={{...s.colorDot, background: column.color}} />
            
                <h3 style={s.title}>{column.title}</h3>
                <span style={s.count}>{cards.length}</span> 
            </div>
            
            <button style={s.addBtn} onClick={()=>setShowForm(true)} title='Add card'>+</button>
        </div>

        
    </div>
  )
}

export default Column