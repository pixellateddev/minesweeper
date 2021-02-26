class ObjectSet extends Set{
    add(elem){
      return super.add(typeof elem === 'object' ? JSON.stringify(elem) : elem);
    }
    has(elem){
      return super.has(typeof elem === 'object' ? JSON.stringify(elem) : elem);
    }
  }


export const generateGrid = (gridSize, mines) => {
    const grid = []
    for (let i = 0; i < gridSize; i++) {
        let row = []
        for (let j = 0; j < gridSize; j++) {
            row.push({
                isMine: false,
            })
        }
        grid.push(row)
    }
    
    for (let i = 0; i < mines; i++) {
        placeMine(grid, gridSize);
    }
    return grid;
}

const placeMine = (grid, gridSize) => {
    let [x, y] = generateRandomLocation(gridSize)

    while(!isSafeToPlaceMine(grid, gridSize, x, y)) {
        [x, y] = generateRandomLocation(gridSize)
    }
    grid[x][y].isMine = true
        
}



const isSafeToPlaceMine = (grid, gridSize, x, y) => {
    if(isMine(grid, gridSize, x, y)) {
        return false
    }
    return countAdjacentMines(grid, gridSize, x, y) !== 8;
}


export const countAdjacentMines = (grid, gridSize, x, y) => {
    return [
        isMine(grid, gridSize, x + 1, y),
        isMine(grid, gridSize, x - 1, y),
        isMine(grid, gridSize, x, y + 1),
        isMine(grid, gridSize, x, y - 1),
        isMine(grid, gridSize, x - 1, y - 1),
        isMine(grid, gridSize, x - 1, y + 1),
        isMine(grid, gridSize, x + 1, y - 1),
        isMine(grid, gridSize, x + 1, y  + 1)
    ].filter(val => val).length
}

export const isMine = (minesboard, gridSize, x, y) => {
    if(x < 0 || x >= gridSize || y < 0 || y >= gridSize) {
        return false;
    }

    return minesboard[x][y].isMine
}

const generateRandomLocation = gridSize => [
    Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize)]


export const expandMinesBoard = (minesboard, gridSize, x, y) => {
    let set = new ObjectSet()
    set.add([x, y])
    minesboard[x][y].value = 0
    minesboard[x][y].shown = true
    
    expandMinesBoardUtil(minesboard, gridSize, x + 1, y - 1, set)
    expandMinesBoardUtil(minesboard, gridSize, x + 1, y, set)
    expandMinesBoardUtil(minesboard, gridSize, x + 1, y + 1, set)
    expandMinesBoardUtil(minesboard, gridSize, x - 1, y - 1, set)
    expandMinesBoardUtil(minesboard, gridSize, x - 1, y, set)
    expandMinesBoardUtil(minesboard, gridSize, x - 1, y + 1, set)
    expandMinesBoardUtil(minesboard, gridSize, x, y - 1, set)
    expandMinesBoardUtil(minesboard, gridSize, x, y + 1, set)

    return Array.from(minesboard)

}

const expandMinesBoardUtil = (minesboard, gridSize, x, y, set) => {
    if(x < 0 || x >= gridSize || y < 0 || y >= gridSize) {
        return
    }

    if(set.has([x, y])) {
        return;
    }

    set.add([x, y])

    const adjacentMines = countAdjacentMines(minesboard, gridSize, x, y)
    minesboard[x][y].value = adjacentMines
    minesboard[x][y].shown = true

    if(minesboard[x][y].value === 0) {
        expandMinesBoardUtil(minesboard, gridSize, x + 1, y - 1, set)
        expandMinesBoardUtil(minesboard, gridSize, x + 1, y, set)
        expandMinesBoardUtil(minesboard, gridSize, x + 1, y + 1, set)
        expandMinesBoardUtil(minesboard, gridSize, x - 1, y - 1, set)
        expandMinesBoardUtil(minesboard, gridSize, x - 1, y, set)
        expandMinesBoardUtil(minesboard, gridSize, x - 1, y + 1, set)
        expandMinesBoardUtil(minesboard, gridSize, x, y - 1, set)
        expandMinesBoardUtil(minesboard, gridSize, x, y + 1, set)
    }
    return;
}

export const clearField = (minesboard, size, x, y) => {
    const adjacentMines = countAdjacentMines(minesboard, size, x, y)
    let newBoard;

    if(adjacentMines) {
        newBoard = minesboard.map((row, rid) => {
            if(rid !== x) {
                return row;
            }
            return row.map((cell, cid) => {
                if(cid !== y) {
                    return cell
                }
                return {
                    ...cell,
                    shown: true,
                    value: adjacentMines
                }
            })
        })
    } else {
        newBoard = expandMinesBoard(minesboard, size, x, y)
    }
    return newBoard
}

export const markField = (minesboard, marked, actualMark, x, y) => {
    return [minesboard.map((row, rid) => {
        if(rid !== x) {
            return row;
        }
        return row.map((cell, cid) => {
            if(cid !== y) {
                return cell
            }
            cell.isMarked ? marked-- : marked++
            if(cell.isMine) {
                if(cell.isMarked) {
                    actualMark--
                }
                actualMark++
            }
            return {
                ...cell,
                isMarked: !cell.isMarked
            }
        })
    }), marked, actualMark]
}

export const getMinesCount = size => Math.floor(size * size * 0.15) 


export const formatTime = time => {
    if(!time) {
        return '0 Second'
    }

    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    let minutesText = ''
    let secondsText = ''
    if(minutes) {
        minutesText = minutes === 1 ? '1 Minute' : `${minutes} Minutes`
        minutesText += ' and '
    }

    if(seconds) {
        secondsText = seconds === 1 ? '1 Second': `${seconds} Seconds`
    }

    return minutesText + secondsText
}