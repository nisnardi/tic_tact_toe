import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const Header = ({ status, onRefreshPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{status}</Text>
      <TouchableOpacity onPress={onRefreshPress}>
        <MaterialCommunityIcons name="restart" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
