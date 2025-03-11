import React from "react";
import { View, StyleSheet } from "react-native";

export const BoardRow = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1 / 3,
  },
});
