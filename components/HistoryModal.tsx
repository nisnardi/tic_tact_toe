import {
  Text,
  Modal,
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

const HistoryButton = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && { backgroundColor: "cornflowerblue" },
      ]}
    >
      {({ pressed }) => (
        <Text style={[styles.buttonText, pressed && { color: "white" }]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export const HistoryModal = ({
  isVisible,
  onClose,
  history,
  onHistoryButtonPress,
}) => {
  const onPressHandler = (move) => () => {
    onHistoryButtonPress(move);
    onClose();
  };

  return (
    <Modal animationType="slide" visible={isVisible}>
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Historial</Text>
          <Pressable onPress={onClose}>
            <AntDesign name="close" size={30} color="black" />
          </Pressable>
        </View>
        <ScrollView style={styles.list}>
          {history.map((_, move) => {
            let description;
            if (move > 0) {
              description = "Ir al movimiento #" + move;
            } else {
              description = "Ir al comienzo del juego";
            }

            return (
              <HistoryButton
                title={description}
                onPress={onPressHandler(move)}
                key={move}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#DDD",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  list: { flex: 1, width: "100%", paddingHorizontal: 40 },
  button: {
    width: "100%",
    backgroundColor: "#DDD",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
