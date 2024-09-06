import { PixelRatio } from "react-native";

export default function useFontSize(size:number){
    const fontScale = PixelRatio.getFontScale();
    return size / fontScale;
}