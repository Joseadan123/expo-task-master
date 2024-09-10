import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useUser from "@/hooks/useUser";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const { user, loading } = useUser();

  const [loaded] = useFonts({
    "Jura Regular": require("@/assets/fonts/Jura-Regular.ttf"),
    "Jura Bold": require("@/assets/fonts/Jura-Bold.ttf"),
    "Jura Light": require("@/assets/fonts/Jura-Light.ttf"),
    "Jura Medium": require("@/assets/fonts/Jura-Medium.ttf"),
    "Jura SemiBold": require("@/assets/fonts/Jura-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded && !loading) {
      SplashScreen.hideAsync();
      if (!user) return router.replace("/login");
      router.replace("/(tabs)");
    }
  }, [loaded, loading, user]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="(team)" />
        <Stack.Screen name="register_user" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GestureHandlerRootView>
  );
}
