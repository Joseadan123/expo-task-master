import { fonts } from "@/styles/font";
import { Ionicons } from "@expo/vector-icons";
import { Slot, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LayoutTeam() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View className="px-4 py-6 bg-white flex-row items-center gap-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} />
        </TouchableOpacity>
        <Text style={fonts.topBarText}>Crear equipo</Text>
      </View>
      <Slot />
    </SafeAreaView>
  );
}
