import { useContext, useEffect } from "react"
import { Button, ButtonGroup, makeStyles, Typography, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@material-ui/core'
import context from "../context"
import MinesBoard from "./MinesBoard"
import { formatTime } from "../utils"

const useStyles = makeStyles({
    minesweeper: {
        display: 'grid',
        width: 800,
        margin: '0 auto',
        gridTemplateColumns: "repeat(2, auto) 200px",
        gridTemplateRows: "20px auto auto 50px auto",
        gap: 20,
        textAlign: 'center',
        gridTemplateAreas:`
        ". . ."
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
    const { size, mines, marked, time, won, started } = state
    return (
        <>
            <Dialog open={won}>
                <DialogTitle>You Won</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Well Done. You won the game in {formatTime(time)}.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="primary" onClick={initializeMinesField}>Restart</Button>
                </DialogActions>
            </Dialog>
            <div className={classes.minesweeper}>
                <Typography className={classes.header} variant="h3">Minesweeper</Typography>
                <ButtonGroup
                    disableElevation 
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
                <Typography className={classes.total}>Total Mines: {mines}</Typography>
                <Typography className={classes.available}>Available Mines: {mines - marked}</Typography>
                <Typography className={classes.time}>
                    {started ? formatTime(time) : 'Click on tile start timer'}
                </Typography>
                <MinesBoard/>
            </div>
        </>
    )
}

export default Minesweeper