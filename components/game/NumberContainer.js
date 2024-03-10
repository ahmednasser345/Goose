import { View, Text, StyleSheet } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    margin: 24,

    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "black",
    fontSize: 36,
    fontWeight: "bold",
  },
});
