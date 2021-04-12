import { Dimensions, StyleSheet } from "react-native";

export const bodyStyles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        backgroundColor: 'yellow'      
    },
})
