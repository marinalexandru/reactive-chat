import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function LoginScreen() {
  const handleLogin = () => {
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontFamily: "regular",
    fontSize: 16,
  },
});
