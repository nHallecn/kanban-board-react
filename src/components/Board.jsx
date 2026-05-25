import React, { useState } from 'react'

const Board = () => {
    const {state, moveCard} = useBoard();

    const [activeCard, setActiveCard] = useState(null);
    const [activeColId, setActiveColId] = useState(null);

    const [modalCard, setModalCard] = useState(null);
    const [modalColId, setModalColId] = useState(null);

  return (
    <div>

    </div>
  )
}

export default Board