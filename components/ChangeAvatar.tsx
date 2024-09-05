import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { TouchableOpacity, View } from "react-native";

export default function ChangeAvatar({ image }: { image: string }) {
  async function selectImage() {
    const result = await requestMediaLibraryPermissionsAsync();
    if (result.granted) {
      const { assets } = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images,
      });
      if (assets === null) return;
    }
  }
  return (
    <TouchableOpacity onPress={selectImage}>
      <Image source={{ uri: image }} className="w-32 h-32 rounded-full"></Image>
      <View className="absolute top-0 right-0 bottom-0 left-0 justify-center items-center bg-black/40 rounded-full">
        <Ionicons name="image" size={32} color="white"></Ionicons>
      </View>
    </TouchableOpacity>
  );
}
