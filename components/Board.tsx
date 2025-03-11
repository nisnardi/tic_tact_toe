import React from "react";
import { View, StyleSheet } from "react-native";

import { Header } from "@/components/Header";
import { Square } from "@/components/Square";
import { BoardRow } from "@/components/BoardRow";

import { calculateWinner } from "@/utils";

export const Board = ({ xIsNext, squares, onPlay, onRestart }) => {
  const onPressHandler = (index) => () => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Ganador: ${winner}`
    : `Próximo Jugador: ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <Header status={status} onRefreshPress={onRestart} />
      <View style={styles.boardContainer}>
        <BoardRow>
          <Square value={squares[0]} onSquarePress={onPressHandler(0)} />
          <Square value={squares[1]} onSquarePress={onPressHandler(1)} />
          <Square value={squares[2]} onSquarePress={onPressHandler(2)} />
        </BoardRow>
        <BoardRow>
          <Square value={squares[3]} onSquarePress={onPressHandler(3)} />
          <Square value={squares[4]} onSquarePress={onPressHandler(4)} />
          <Square value={squares[5]} onSquarePress={onPressHandler(5)} />
        </BoardRow>
        <BoardRow>
          <Square value={squares[6]} onSquarePress={onPressHandler(6)} />
          <Square value={squares[7]} onSquarePress={onPressHandler(7)} />
          <Square value={squares[8]} onSquarePress={onPressHandler(8)} />
        </BoardRow>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  boardContainer: {
    flex: 0.8,
  },
});
