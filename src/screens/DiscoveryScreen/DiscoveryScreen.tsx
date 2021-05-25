import React from "react";
import { Text, View } from "react-native";


const DiscoveryScreen: React.FC = () => {

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>DiscoveryScreen</Text>
        </View>
    );
}

export default React.memo(DiscoveryScreen);
