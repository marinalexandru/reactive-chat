import { Stack, router } from "expo-router";
import { useEffect, useState } from "react";
import { SplashScreen } from "expo-router";
import { useAppFonts } from "../src/hooks/useAppFonts";
import SplashScreenAnimation from "../src/features/splash/components/SplashScreenAnimation";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { fontsLoaded, error } = useAppFonts();
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  useEffect(() => {
    if (animationFinished) {
      router.replace("/(auth)");
    }
  }, [animationFinished]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {!animationFinished ? (
        <SplashScreenAnimation
          onAnimationFinish={() => setAnimationFinished(true)}
        />
      ) : (
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      )}
    </>
  );
}
