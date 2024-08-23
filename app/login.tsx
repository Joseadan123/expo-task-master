import { useRouter } from "expo-router";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View className="justify-center items-center h-full text-black">
        <Text className="text-black">Hola</Text>
        <TouchableOpacity onPress={() => router.replace("/(tabs)/")}>
          <Text>Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
