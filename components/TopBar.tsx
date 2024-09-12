import { fonts } from "@/styles/font";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TopBar({ title }: { title: string }) {
  const router = useRouter();
  return (
    <View className="px-4 py-6 bg-white flex-row items-center gap-4">
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={28} />
      </TouchableOpacity>
      <Text style={fonts.topBarText}>{title}</Text>
    </View>
  );
}
