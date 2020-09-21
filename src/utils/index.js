export const countColorsInTheDirection = (board, currentPlayer, currentPosition, direction) => {
  let [x, y] = currentPosition;
  let [xDirection, yDirection] = direction;

  let colorsInTheRow = 0;
  let iterations = 0;

  while((board[x] && board[x][y]) && colorsInTheRow !== 4 && iterations !== 4) {
    if (currentPlayer === board[x][y]) {
      colorsInTheRow++;
    }
    x = x+xDirection
    y = y+yDirection
    iterations++;
  }
  return {
    colorsInTheRow,
    color: currentPlayer
  }
}

export const checkScore = (board, currentPlayer) => {
  let score;

  for ( let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    const rowValues = board[rowIndex];
    for ( let columnIndex = 0; columnIndex < board.length; columnIndex++) {
      const fieldValue = board[rowIndex][columnIndex];
      const [x, y] = [rowIndex, columnIndex];

      if (board[x][y] !== 0) {
        let direction;
        // check 4 directions diaganal and vertiacl
        // UP
        if ((board[x] && board[x][y-1]) === currentPlayer) {
          direction = [0, -1]
        }

        // DOWN
        if ((board[x] && board[x][y+1]) === currentPlayer) {
          direction = [0, 1]
        }

        // RIGHT
        if ((board[x+1] && board[x+1][y]) === currentPlayer) {
          direction = [1, 0]
        }
        // LEFT
        if ((board[x-1] && board[x-1][y]) === currentPlayer) {
          direction = [-1, 0]
        }

        if (direction) {
          score = countColorsInTheDirection(board, currentPlayer, [x, y], direction)
        }

        if (score && score.colorsInTheRow === 4) {
          return score.color;
        }
      }
    }
  }
}

export const addColorDisc = (board, discColor, currentColumn) => {
  const newBoard = [...board];
  let lastOccupiedIndexPosition = board.length - 1;

  newBoard.find((rowValues, rowIndex) => {
    const currentDisc = newBoard[rowIndex][currentColumn]
    if (currentDisc) {
      return true
    } else {
      lastOccupiedIndexPosition = rowIndex
    }
  })
  newBoard[lastOccupiedIndexPosition][currentColumn] = discColor;

  return newBoard;
}