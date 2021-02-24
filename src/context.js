import { createContext, useReducer, useCallback } from 'react'
import { generateGrid, isMine, clearField, markField } from './utils';


const mines=60;

const context = createContext()

const initialState = {
    minesboard: [],
    size: 20,
}

const reducer = (state, action) => {
    switch(action.type) {
        case "initialize":
            return {
                ...initialState,
                size: state.size,
                minesboard: generateGrid(state.size, mines)
            }
        case "incrementSize":
            return {
                ...state,
                size: state.size + 1,
                minesboard: generateGrid(state.size + 1, mines)
            }
        case "decrementSize":
            return {
                ...state,
                size: state.size - 1,
                minesboard: generateGrid(state.size - 1, mines)
            }

        case "updateBoard":
            return {
                ...state,
                minesboard: action.minesboard
            }

        case 'gameOver':
            return {
                ...state,
                isGameOver: true
            }

        case 'started':
            return {
                ...state,
                started: true
            }

        default:
            return state
    }
}




export const ContextProvider = ({children}) => {


    const [state, dispatch] = useReducer(reducer, initialState)
    const { minesboard, size, started, isGameOver } = state
    const actions = {
        incrementSize: () => dispatch({type: 'incrementSize'}),

        decrementSize: () => dispatch({type: 'decrementSize'}),

        initializeMinesField: useCallback(() => dispatch({type: 'initialize'}), []),

        clearField: (x, y) => {
            if(minesboard[x][y].shown || isGameOver) {
                return;
            }
            if(!started) {
                dispatch({
                    action: 'started'
                })
            }
            if(isMine(minesboard, size, x, y)) {
                dispatch({type: 'gameOver'})
                alert('You have stepped on a mine')
                return;
            }

            dispatch({
                type: 'updateBoard',
                minesboard: clearField(minesboard, size, x, y)
            })
        },

        markField: (x, y) => {
            if(minesboard[x][y].shown || isGameOver) {
                return;
            }
            dispatch({
                type: 'updateBoard',
                minesboard: markField(minesboard, size, x, y)
            })
        }


    }


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