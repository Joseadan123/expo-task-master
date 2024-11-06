import AvatarGroup from "@/components/AvatarGroup";
import CategoryTag from "@/components/Category";
import Message, { IMessage } from "@/components/Message";
import { db } from "@/db/firebase";
import { createMessage, MessageProps } from "@/db/messages";
import useFontSize from "@/hooks/useFontSize";
import useUser from "@/hooks/useUser";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { User } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableWithoutFeedback } from "react-native";

export default function ChatToDo() {
  const { todoid } = useLocalSearchParams();
  const { user } = useUser();
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getMessages = async () => {
      const col = collection(db, "todo", todoid as string, "messages");
      onSnapshot(col, (d) => {
        const messages = d.docs
          .sort((a, b) => {
            return a.data().created_at - b.data().created_at;
          })
          .map((doc) => {
            const data = doc.data() as IMessage;
            return data;
          });
        setMessages(messages);
      });
    };

    getMessages();
  }, []);

  const handleCreate = async () => {
    if (!content) return;
    await createMessage({
      content,
      created_by: user as User,
      todoid: todoid as string,
    });
    setContent("");
  };

  return (
    <View className="p-4 gap-3 h-full">
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
          zs vc Afinar detalles sobre lo que se tiene que lograr
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
              {
                displayName: "",
                email: "",
                uid: "2",
                photoUrl:
                  "https://images.pexels.com/photos/3754208/pexels-photo-3754208.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              },
            ]}
          />
        </View>
      </View>
      <ScrollView className="flex-grow">
        {messages.length
          ? messages.map((message) => (
              <Message
                message={message}
                key={`${message.created_by}-${message.content}-${message.created_at}`}
              />
            ))
          : null}
      </ScrollView>
      <View className="relative flex-row gap-4 items-end">
        <TextInput
          placeholder="Mensaje..."
          multiline
          value={content}
          onChangeText={setContent}
          className="flex-1 bg-white shadow-2xl shadow-black px-5 py-2 rounded-md max-h-20"
        ></TextInput>
        <TouchableOpacity onPress={handleCreate} disabled={!content}>
          <View className="bg-lime-400 p-3 rounded-full shadow-2xl shadow-black">
            <Ionicons name="send" size={18} color={"white"}></Ionicons>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
