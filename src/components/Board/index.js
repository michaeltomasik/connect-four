import React, { useState } from 'react';
import ConnectFourField from '../ConnectFourField';

import { COLORS, INITIALIZED_BOARD } from '../../constants'
import { countColorsInTheDirection, checkScore, addColorDisc } from '../../utils'

import './Board.css';

const Board = () => {
  const [boardState, setBoardState] = useState(INITIALIZED_BOARD);
  const [currentPlayer, setCurrentPlayer] = useState(2);
  const [winner, setWinner] = useState(0);

  
  const makeMove = (currentColumn) => {
    const newBoard = addColorDisc(boardState, currentPlayer, currentColumn)
    setBoardState(newBoard)

    const score = checkScore(newBoard, currentPlayer)
    if (score) {
      setWinner(score)
    } else {
      const nextPlayer = 2 === currentPlayer ? 1 : 2;
      setCurrentPlayer(nextPlayer);
    }
  }

  if (winner) {
    return <div>The winner is {Object.values(COLORS).find(x => x.value === winner).label}</div>
  }

  return (
    <div className="Board">
      {boardState.map((rowValues, rowIndex) =>
        <div className="Board__row">
          {rowValues.map((fieldValue, columnIndex) =>
            <div onClick={() => makeMove(columnIndex)}>
              <ConnectFourField
                fieldValue={Object.values(COLORS).find(x => x.value === fieldValue)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Board;
