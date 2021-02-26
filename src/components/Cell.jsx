import { makeStyles, Typography } from "@material-ui/core"
import { useContext } from "react"
import context from "../context"

const getColor = ({cell, isGameOver}) => {
    if(cell.isMine && isGameOver) {
        return '#ff9595'
    }
    if(cell.isMarked) {
        return '#f7bba1'
    }
    if(cell.shown) {
        return '#e7e6f7'
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
    const { isGameOver } = state
    const classes = useStyles({cell, isGameOver})


    const mark = (e) => {
        e.preventDefault()
        markField()
    }
    const showValue = () => {
        if(isGameOver) {
            if(cell.isMine) {
                return '🔴'
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
            <Typography>{showValue()}</Typography>
        </div>
    )
}

export default Cell