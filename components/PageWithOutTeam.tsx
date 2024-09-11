import useFontSize from "@/hooks/useFontSize";
import { fonts } from "@/styles/font";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PageWithOutTeam() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View className="items-center justify-center h-full gap-16 p-1">
        <Text
          className="font-juraSemiBold text-center uppercase"
          style={fonts.title}
        >
          ¿Aun no tienes un equipo?
        </Text>
        <View className="items-center gap-4">
          <TouchableOpacity onPress={() => router.push("/(team)/create")}>
            <View className="bg-lime-300 px-6 py-4 rounded-full">
              <Text
                className="font-juraBold"
                style={{ fontSize: useFontSize(16) }}
              >
                Crea uno
              </Text>
            </View>
          </TouchableOpacity>
          <Text className="font-juraMedium">O</Text>
          <TouchableOpacity onPress={() => router.push("/(team)/join")}>
            <View className="bg-black px-6 py-4 rounded-full">
              <Text
                className="text-white font-juraBold"
                style={{ fontSize: useFontSize(16) }}
              >
                Unete a uno
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
