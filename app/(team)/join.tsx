import { joinTeam } from "@/db/teams";
import useUser from "@/hooks/useUser";
import { fonts } from "@/styles/font";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function JoinTeam() {
  const [code, setCode] = useState("");
  const { user } = useUser();
  const router = useRouter();

  const handleCreate = async () => {
    const uid = user?.uid as string;
    const { err, message } = await joinTeam(uid, code);

    if (err) return Alert.alert("Error", message);
    router.replace("/(tabs)/team");
    return Alert.alert("Exito", message);
  };
  return (
    <View className="p-8 gap-4">
      <View className="gap-4">
        <Text className="font-juraMedium">Codigo del equipo: </Text>
        <TextInput
          value={code}
          onChangeText={setCode}
          className="bg-white px-6 py-3 rounded-full font-juraSemiBold text-lg placeholder:text-gray-500"
          placeholder="Codigo del equipo..."
        ></TextInput>
      </View>
      <TouchableOpacity onPress={handleCreate}>
        <View className="bg-lime-300 items-center p-4 rounded-full">
          <Text style={fonts.descriptionCard} className="font-juraBold">
            Unirme
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
