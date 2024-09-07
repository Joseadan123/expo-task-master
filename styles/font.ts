import useFontSize from "@/hooks/useFontSize";
import { StyleSheet } from "react-native";

export const fonts = StyleSheet.create({
    title:{
        fontFamily:"Jura Bold",
        fontSize: useFontSize(38)
    },
    titleCard:{
        fontFamily: "Jura Medium",
        fontSize: useFontSize(20)
    },
    descriptionCard:{
        fontFamily: "Jura Medium",
        fontSize: useFontSize(15)
    },
    buttonCard:{
        fontFamily: "Jura Bold",
        fontSize: useFontSize(10)
    }

})