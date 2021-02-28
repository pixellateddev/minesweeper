import { makeStyles, Typography } from "@material-ui/core"
import { useContext } from "react"
import context from "../context"

const getColor = ({cell, gameOver}) => {
    if(cell.isMine && gameOver) {
        return '#ff9595'
    }
    if(cell.isMarked) {
        return '#f7bba1'
    }
    if(cell.shown) {
        return '#f3f2fa'
    }
    return '#dbdaf7'
}

const useStyles = makeStyles({
    cell: {
        height: 25,
        width: 25,
        border: '1px solid gray',   
        backgroundColor: getColor
    },
})

const Cell = ({cell, clearField, markField}) => {
    const { state } = useContext(context)
    const { gameOver } = state
    const classes = useStyles({cell, gameOver})


    const mark = (e) => {
        e.preventDefault()
        markField()
    }
    const showValue = () => {
        if(gameOver) {
            if(cell.isMine && cell.isMarked) {
                return '🚩'
            }
            else if(cell.isMine) {
                return '🧨'
            }
        }
        if(cell.isMarked) {
            return '🚩'
        }
        if(cell.value === 0) {
            return ''
        }
        return cell.value
    }

    return (
        <div className={classes.cell} onClick={clearField} onContextMenu={mark}>
            <Typography variant="caption">{showValue()}</Typography>
        </div>
    )
}

export default Cell