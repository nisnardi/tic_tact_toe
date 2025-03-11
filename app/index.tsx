import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { Footer } from "@/components/Footer";
import { Board } from "@/components/Board";
import { HistoryModal } from "@/components/HistoryModal";
import { Square } from "@/components/Square";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const onRestartHandler = () => {
    setCurrentMove(0);
    setHistory([Array(9).fill(null)]);
  };

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const onShowHistoryModal = () => {
    setIsModalVisible(true);
  };

  const onHideHistoryModal = () => {
    setIsModalVisible(false);
  };

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Board
        xIsNext={xIsNext}
        squares={currentSquares}
        onRestart={onRestartHandler}
        onPlay={handlePlay}
      />
      <Footer onShowHistory={onShowHistoryModal} />
      <HistoryModal
        isVisible={isModalVisible}
        onClose={onHideHistoryModal}
        history={history}
        onHistoryButtonPress={jumpTo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
