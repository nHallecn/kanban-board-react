import React, { useState } from 'react'
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";

const Board = () => {
    const {state, moveCard} = useBoard();

    const [activeCard, setActiveCard] = useState(null);
    const [activeColId, setActiveColId] = useState(null);
    const [modalCard, setModalCard] = useState(null);
    const [modalColId, setModalColId] = useState(null);

    const sensors  =useSensors(
        useSensor(PointerSensor, {activationConstaint: {distance: 8}
        })
    );



  return (
    <>
        <DndContext>
            <div style={sensors.board}>

            </div>

            <DragOverlay>

            </DragOverlay>
        </DndContext>

        
    </>
  )
}

export default Board