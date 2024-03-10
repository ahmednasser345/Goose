import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.screen}>
      <Title style={{ color: "white" }}>GAME OVER!</Title>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start a new game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 150,
  },

  imageContainer: {
    borderRadius: 100,
    width: 200,
    height: 200,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    color: "white",
    fontSize: 19,
    textAlign: "center",
    marginVertical: 24,
    textDecorationStyle: "double",
  },
  highlight: {
    color: "red",
  },
});
