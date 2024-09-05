import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Ionicons } from "@expo/vector-icons";
import GoogleSignIn from "@/db/signin";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";

export default function LoginScreen() {
  const router = useRouter();

  const handleClick = () => {
    GoogleSignIn().then((res) => {
      if (res.error) {
        return;
      }
      router.replace("/register_user");
    });
  };

  return (
    <SafeAreaView>
      <View className="justify-center items-center h-full text-black gap-12">
        <View className="relative">
          <Text className="text-4xl font-bold text-center text-balance relative z-10">
            Reunete con tu equipo, organizate y progresa!
          </Text>
          <View className="bg-lime-300 h-48 aspect-square rounded-full absolute -top-24 -left-12" />
          <View className="bg-lime-300 h-20 aspect-square rounded-full absolute -bottom-8 right-2" />
        </View>
        <TouchableOpacity onPress={handleClick}>
          <View className="bg-lime-400 flex-row items-center p-3 rounded-xl gap-2">
            <Ionicons color={"white"} name="logo-google" size={24} />
            <Text className="flex-row rounded-lg text-white">
              Iniciar Sesion
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
