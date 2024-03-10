import { StyleSheet, View } from "react-native";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",

    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,

    backgroundColor: "#0F52BA",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    marginTop: 100,
  },
});
