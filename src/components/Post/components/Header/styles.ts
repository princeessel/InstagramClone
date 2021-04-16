import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftIcon: {
        flexDirection: 'row',
    },
    rightIcon: {
        marginRight: 15,
    },
    name: {
        alignSelf: 'center',
        fontWeight: 'bold'
    }
})
