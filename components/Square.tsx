import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Square = ({ value, onSquarePress }) => {
  return (
    <View style={styles.square}>
      <TouchableOpacity style={styles.pressable} onPress={onSquarePress}>
        <Text style={styles.squareText}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#CCC",
    justifyContent: "center",
    alignItems: "center",
    flex: 1 / 3,
  },
  pressable: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  squareText: {
    fontSize: 80,
  },
});
