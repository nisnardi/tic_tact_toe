import React from "react";
import { StyleSheet, View, Button } from "react-native";

export const Footer = ({ onShowHistory }) => {
  return (
    <View style={styles.footer}>
      <Button title="Mostrar Historial" onPress={onShowHistory} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 0.1,
    justifyContent: "center",
  },
});
