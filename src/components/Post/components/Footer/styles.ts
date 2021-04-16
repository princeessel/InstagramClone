import { Dimensions, StyleSheet } from "react-native";

export const footerStyles = StyleSheet.create({
    container: {
        margin: 5
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftIcons: {
        flexDirection: 'row',
        width: 110,
        justifyContent: 'space-between',
        padding: 5
    },
    rightIcons: {
        marginRight: 10
    },
    likes: {
        fontWeight: 'bold',
        margin: 3
    },
    caption: {
        margin: 3
    },
    postedAt: {
        color: 'gray',
        margin: 3
    },
})
