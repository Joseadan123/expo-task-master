import TopBar from "@/components/TopBar";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LayoutChat() {
  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  );
}
