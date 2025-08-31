import { Stack, router } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { SplashScreen } from "expo-router";
import LottieView from "lottie-react-native";
import { View, Text } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'regular': require('../assets/fonts/Roboto-Regular.ttf'),
  });
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      // @ts-ignore
      Text.defaultProps = Text.defaultProps || {};
      // @ts-ignore
      Text.defaultProps.style = { fontFamily: 'regular' };
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  useEffect(() => {
    if (animationFinished) {
      setTimeout(() => {
        router.replace("/(auth)");
      }, 2000);
    }
  }, [animationFinished]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {!animationFinished ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <LottieView
            source={require("../assets/loading-animation.json")}
            autoPlay
            loop={false}
            onAnimationFinish={() => setAnimationFinished(true)}
            style={{ width: 200, height: 200 }}
          />
        </View>
      ) : (
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      )}
    </>
  );
}
