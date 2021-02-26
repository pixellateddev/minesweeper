import { createContext, useReducer, useCallback, useEffect } from 'react'
import { generateGrid, isMine, clearField, markField, getMinesCount } from './utils';



const context = createContext()

const initialState = {
    minesboard: [],
    size: 20,
    marked: 0,
    time: 0,
    won: false,
    gameOver: false,
    actualMarked: 0,
    mines: getMinesCount(20),
}

const reducer = (state, action) => {
    switch(action.type) {
        case "initialize":
            clearInterval(state.timer)
            return {
                ...initialState,
                size: state.size,
                mines: getMinesCount(state.size),
                minesboard: generateGrid(state.size, getMinesCount(state.size)),

            }
        case "incrementSize":
            return {
                ...state,
                size: state.size + 1,
            }
        case "decrementSize":
            return {
                ...state,
                size: state.size - 1,
            }

        case "updateBoard":
            return {
                ...state,
                minesboard: action.minesboard
            }

        case "updateMark":
            return {
                ...state,
                marked: action.marked,
                actualMarked: action.actualMarked
            }

        case 'gameOver':
            clearInterval(state.timer)
            return {
                ...state,
                gameOver: true
            }
        
        case 'won':
            clearInterval(state.timer)
            return {
                ...state,
                won: true
            }

        case 'started':
            return {
                ...state,
                started: true
            }

        case 'setTimer': 
            return {
                ...state,
                timer: action.timer
            }
        

        case 'tick': 
            return {
                ...state,
                time: state.time + 1
            }

        default:
            return state
    }
}




export const ContextProvider = ({children}) => {


    const [state, dispatch] = useReducer(reducer, initialState)
    const { minesboard, size, started, isGameOver, marked, actualMarked, mines, won } = state
    const actions = {
        incrementSize: () => dispatch({type: 'incrementSize'}),

        decrementSize: () => dispatch({type: 'decrementSize'}),

        initializeMinesField: useCallback(() => dispatch({type: 'initialize'}), []),

        clearField: (x, y) => {
            if(minesboard[x][y].shown || isGameOver || won) {
                return;
            }

            if(isMine(minesboard, size, x, y)) {
                dispatch({type: 'gameOver'})
                return;
            }

            if(!started) {
                dispatch({type: 'started'})
            }
            
            dispatch({
                type: 'updateBoard',
                minesboard: clearField(minesboard, size, x, y)
            })
        },

        markField: (x, y) => {
            if(minesboard[x][y].shown || isGameOver || won) {
                return;
            }
            if(!started) {
                dispatch({type: 'started'})
            }
            const [newBoard, newMarked, newActualMarked] = markField(minesboard, marked, actualMarked, x, y)
            dispatch({
                type: 'updateBoard',
                minesboard: newBoard
            })

            dispatch({
                type: 'updateMark',
                marked: newMarked,
                actualMarked: newActualMarked
            })
        }
    }

    useEffect(() => {
        dispatch({type: 'initialize'})
    }, [size])

    useEffect(() => {
        if(actualMarked === mines) {
            dispatch({type: 'won'})
        }
    }, [actualMarked, mines])

    useEffect(() => {
        if(started) {
            const timer = setInterval(() => dispatch({type: 'tick'}), 1000)
            dispatch({
                type: 'setTimer',
                timer
            })
        }
    }, [started])

    return (
        <context.Provider value={{
            state,
            actions
        }}>
            
            {children}
        </context.Provider>
    )
}
export default context