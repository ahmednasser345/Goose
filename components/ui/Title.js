import { Text, StyleSheet } from "react-native";
function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    textShadowRadius: 11,
    textDecorationStyle: "double",
    textDecorationColor: "black",
    textShadowColor: "white",
    marginTop: 150,
  },
});
