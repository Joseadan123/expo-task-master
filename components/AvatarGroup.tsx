import { View } from "react-native";
import Avatar from "./Avatar";
import { MappedUser } from "@/db/users";

export default function AvatarGroup({
  participants,
}: {
  participants: MappedUser[];
}) {
  return (
    <View>
      {participants.map((participant) => (
        <Avatar
          key={participant.uid}
          size={28}
          url={participant.photoUrl as string}
        ></Avatar>
      ))}
    </View>
  );
}
