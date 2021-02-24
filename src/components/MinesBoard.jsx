import { makeStyles } from "@material-ui/styles";
import { useContext } from "react";
import context from "../context";
import Cell from "./Cell";

const useStyles = makeStyles({
    minesboard: {
        margin: '0 auto',
        gridArea:'minesboard',
        height: ({size}) => size * 25 + 2,
        width: ({size}) => size * 25 + 2,
        border: '1px solid black',
        display: 'grid',
        gridTemplateColumns: ({size}) => `repeat(${size}, auto)`
    }
})

const MinesBoard = () => {
    const { state, actions } = useContext(context)
    const { minesboard, size } = state
    const { clearField, markField } = actions
    const createCells = () => {
        return minesboard.map((row, rid) => {
            return row.map((cell, cid) => (
                <Cell 
                    key={`cell-${rid}-${cid}`} 
                    cell={cell} 
                    clearField={() => clearField(rid, cid)} 
                    markField={() => markField(rid, cid)}/>
            ))
        })
    }
    const classes = useStyles({size})
    return (
        <div className={classes.minesboard}>
            {createCells()}
        </div>
    )
}

export default MinesBoard;