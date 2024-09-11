import { Image } from "react-native";

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  url: string;
  size: number;
}

export default function Avatar(props: AvatarProps) {
  const { className, url, size } = props;
  return (
    <Image
      source={{ uri: url }}
      width={size}
      height={size}
      className={`rounded-full ${className}`}
    />
  );
}
