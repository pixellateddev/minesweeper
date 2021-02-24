import { useContext, useEffect } from "react"
import { Button, ButtonGroup, makeStyles, Typography } from '@material-ui/core'
import context from "../context"
import MinesBoard from "./MinesBoard"

const useStyles = makeStyles({
    minesweeper: {
        display: 'grid',
        width: 800,
        margin: '0 auto',
        gridTemplateColumns: "repeat(3, auto)",
        gap: 20,
        textAlign: 'center',
        gridTemplateAreas:`
        ". header ."
        ". options restart"
        "total available time"
        "minesboard minesboard minesboard"
        `

    },

    header: {
        gridArea: 'header'
    },

    options: {
        gridArea: 'options',
    },

    time: {
        gridArea: 'time',
        justifyItem: 'center'
    },

    restart: {
        gridArea: 'restart'
    },

    total: {
        gridArea: 'total'
    },

    available: {
        gridArea: 'available'
    }
})

const Minesweeper = () => {
    const {actions, state} = useContext(context)

    const { incrementSize, decrementSize, initializeMinesField } = actions
    useEffect(initializeMinesField, [initializeMinesField])
    const classes = useStyles()
    const { size } = state
    return (
        <div className={classes.minesweeper}>
            <Typography className={classes.header} variant="h3">Minesweeper</Typography>
            <ButtonGroup 
                fullWidth
                className={classes.options} 
                variant="contained" 
                color="primary" 
            >
                <Button onClick={incrementSize}>+</Button>
                <Button >{size} X {size}</Button>
                <Button onClick={decrementSize}>-</Button>
            </ButtonGroup>

            <Button 
                fullWidth
                className={classes.restart} 
                variant="outlined" 
                color="primary" 
                onClick={initializeMinesField}>Restart</Button>
            <Typography className={classes.total}>Total Mines: </Typography>
            <Typography className={classes.available}>Available Mines</Typography>
            <Typography className={classes.time}></Typography>
            <MinesBoard/>
        </div>
    )
}

export default Minesweeper