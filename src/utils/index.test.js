import { INITIALIZED_BOARD, COLORS } from '../constants'
import { addColorDisc, checkScore, countColorsInTheDirection } from './index'

test('addColorDisc function', () => {
  let initBoard = [...INITIALIZED_BOARD];
  const expectedResult = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,1,0],
    [0,1,2,1,0],
    [1,2,2,1,2]
  ]
  initBoard = addColorDisc(initBoard, COLORS.RED.value, 0)
  initBoard = addColorDisc(initBoard, COLORS.BLUE.value, 1)
  initBoard = addColorDisc(initBoard, COLORS.RED.value, 1)
  initBoard = addColorDisc(initBoard, COLORS.BLUE.value, 2)
  initBoard = addColorDisc(initBoard, COLORS.RED.value, 3)
  initBoard = addColorDisc(initBoard, COLORS.BLUE.value, 2)
  initBoard = addColorDisc(initBoard, COLORS.RED.value, 3)
  initBoard = addColorDisc(initBoard, COLORS.BLUE.value, 4)
  initBoard = addColorDisc(initBoard, COLORS.RED.value, 3)

  expect(initBoard).toEqual(expectedResult);
});

test('checkScore function for winning scenario diagonal', () => {
  const board = [
    [0,0,0,0,0],
    [0,0,0,1,0],
    [0,0,0,1,0],
    [0,1,2,1,2],
    [1,2,2,1,2]
  ]
  const currentPlayer = COLORS.RED.value
  const expectedOutput = COLORS.RED.value

  expect(checkScore(board, currentPlayer)).toEqual(expectedOutput);
});

test('checkScore function for winning scenario verticle', () => {
  const board = [
    [0,0,0,0,0],
    [0,0,0,1,0],
    [0,1,0,1,0],
    [0,2,2,2,2],
    [1,1,2,1,2]
  ]
  const currentPlayer = COLORS.BLUE.value
  const expectedOutput = COLORS.BLUE.value

  expect(checkScore(board, currentPlayer)).toEqual(expectedOutput);
});

test('checkScore function for draw scenario', () => {
  const board = [
    [0,0,0,0,0],
    [0,0,0,1,0],
    [0,1,0,1,0],
    [0,2,1,2,2],
    [1,1,2,2,2]
  ]
  const currentPlayer = COLORS.BLUE.value
  const expectedOutput = undefined

  expect(checkScore(board, currentPlayer)).toEqual(expectedOutput);
});

test('countColorsInTheDirection function', () => {
  const board = [
    [0,0,0,1,0],
    [0,0,0,1,0],
    [0,1,0,1,0],
    [0,2,2,2,2],
    [1,1,2,1,2]
  ]
  const currentPlayer = COLORS.RED.value
  const expectedOutput = {
    colorsInTheRow: 3,
    color: currentPlayer
  }
  const currentPosition = [0, 3];
  const direction = [1, 0];
  const result = countColorsInTheDirection(board, currentPlayer, currentPosition, direction)
  expect(result).toEqual(expectedOutput);
});
