import React from "react";
import { Text, View } from "react-native";


const NotificationsScreen: React.FC = () => {

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'}}>
            <Text>NotificationsScreen</Text>
        </View>
    );
}

export default React.memo(NotificationsScreen);
