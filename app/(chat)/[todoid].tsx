import AvatarGroup from "@/components/AvatarGroup";
import CategoryTag from "@/components/Category";
import useFontSize from "@/hooks/useFontSize";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ChatToDo() {
  const local = useLocalSearchParams();
  const router = useRouter();
  return (
    <View className="p-4 gap-3">
      <View className="flex-row items-center gap-8">
        <TouchableOpacity onPress={() => router.back()}>
          <View className="shadow-2xl shadow-black bg-white w-fit h-fit p-4 rounded-full">
            <Ionicons name="arrow-back" size={28} />
          </View>
        </TouchableOpacity>
        <Text className="font-juraBold" style={{ fontSize: useFontSize(22) }}>
          Detalles
        </Text>
      </View>
      <View className="flex-row">
        <View className="bg-teal-200 rounded-full flex-row w-fit px-4 py-2 items-center justify-center">
          <Text className="font-juraMedium">En progreso</Text>
        </View>
      </View>
      <View>
        <Text className="font-juraBold" style={{ fontSize: useFontSize(38) }}>
          Reunion con Cliente
        </Text>
        <Text
          className="font-juraRegular text-slate-500"
          style={{ fontSize: useFontSize(15) }}
        >
          Afinar detalles sobre lo que se tiene que lograr
        </Text>
        <View className="flex-row items-center justify-between mt-5">
          <CategoryTag color="black" />
          <AvatarGroup
            size={46}
            participants={[
              {
                displayName: "",
                email: "",
                uid: "",
                photoUrl:
                  "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                displayName: "",
                email: "",
                uid: "1",
                photoUrl:
                  "https://images.pexels.com/photos/3754208/pexels-photo-3754208.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
}
