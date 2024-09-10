import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { TouchableOpacity, View } from "react-native";
import { auth, storage } from "@/db/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import useUser from "@/hooks/useUser";
import { useUserStore } from "@/stores/useUserStore";
import * as SecureStore from "expo-secure-store";
import { updateCurrentUser, User } from "firebase/auth";

export default function ChangeAvatar({ image }: { image: string }) {
  const { user } = useUser();
  const { setUser } = useUserStore();
  async function selectImage() {
    const result = await requestMediaLibraryPermissionsAsync();
    if (result.granted) {
      const { assets } = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images,
      });
      if (assets === null) return;
      const image = assets[0].uri;
      const respons = await fetch(image);
      const blobImage = await respons.blob();
      const storageRef = ref(storage, `profilePictures/${user?.uid}`);
      const snapshot = await uploadBytes(storageRef, blobImage);
      // Obtener la URL de la imagen subida
      const photoURL = await getDownloadURL(snapshot.ref);
      setUser({ ...(user as User), photoURL });
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
