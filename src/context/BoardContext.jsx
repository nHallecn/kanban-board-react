import { useContext, useReducer } from "react";
import { COLUMNS, SEED_CARDS } from "../utils/constants";


function getInitialState(){
    try {
        const saved = localStorage.getItem('kanban-board');
        return saved ? JSON.parse(saved) : {columns: COLUMNS, cards: SEED_CARDS};
    } catch  {
        return {columns: COLUMNS, cards: SEED_CARDS};
    }
}

export function BoardProvider({children}){
    const [state, dispatch] = useReducer(reducer, getInitialState());

    function addCard(columnId, {title, description, priority, label}){
        dispatch({ type:'ADD_CARD', payload: {columnId, title, description, priority, label}});
    }

    function updateCard(columnId, cardId, changes) {
    dispatch({ type: "UPDATE_CARD", payload: { columnId, cardId, changes } });
  }

    function deleteCard(columnId, cardId) {
        dispatch({ type: "DELETE_CARD", payload: { columnId, cardId } });
    }

    function moveCard(fromColumn, toColumn, fromIndex, toIndex) {
        dispatch({ type: "MOVE_CARD", payload: { fromColumn, toColumn, fromIndex, toIndex } });
    }

    return (
        <BoardContext.Provider value={{ state, addCard, updateCard, deleteCard, moveCard }}>
        {children}
        </BoardContext.Provider>
    );
}


export function useBoard(){
    const ctx = useContext(BoardContext);

    if(!ctx) throw new Error('UseBoard must be used inside BoardProvider');

    return ctx;
}