import { Text, View, TextInput, Alert } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { fonts } from "@/styles/font";
import { createTeam } from "@/db/teams";
import useUser from "@/hooks/useUser";

export default function CreateTeamScreen() {
  const [title, setTitle] = useState("");
  const { user } = useUser();

  const handleCreate = async () => {
    const uid = user?.uid as string;
    const { err, message } = await createTeam({
      title,
      createdBy: uid,
      partners: [uid],
    });

    if (err) return Alert.alert("Error", message);
    return Alert.alert("Exito", message);
  };

  return (
    <View className="px-8 py-4 gap-4">
      <View className="gap-4">
        <Text className="font-juraMedium">Nombre del equipo: </Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          className="bg-white px-6 py-3 rounded-full font-juraSemiBold text-lg placeholder:text-gray-500"
          placeholder="Nombre de ejemplo..."
        ></TextInput>
      </View>
      <TouchableOpacity onPress={handleCreate}>
        <View className="bg-lime-300 items-center p-4 rounded-full">
          <Text style={fonts.descriptionCard} className="font-juraBold">
            Crear
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
