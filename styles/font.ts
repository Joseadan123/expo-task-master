import useFontSize from "@/hooks/useFontSize";
import { StyleSheet } from "react-native";

export const fonts = StyleSheet.create({
    title:{
        fontFamily:"Jura Bold",
        fontSize: useFontSize(38)
    }
})