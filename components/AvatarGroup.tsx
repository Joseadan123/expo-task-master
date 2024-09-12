import { View } from "react-native";
import Avatar from "./Avatar";
import { MappedUser } from "@/db/users";

export default function AvatarGroup({
  participants,
  size = 28,
}: {
  participants: MappedUser[];
  size?: number;
}) {
  return (
    <View className="items-center justify-center flex-row">
      {participants.map((participant, i) => {
        const isLast = i === participants.length - 1;
        return (
          <Avatar
            key={participant.uid}
            size={size}
            url={participant.photoUrl as string}
            className={`${isLast ? "" : "-mr-5"}`}
          ></Avatar>
        );
      })}
    </View>
  );
}
