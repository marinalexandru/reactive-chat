import { View, Button } from "react-native";
import { router } from "expo-router";

export default function Login() {
  const handleLogin = () => {
    router.replace("/(tabs)");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
