import React from "react";
import { Text, View } from "react-native";
import { Feed } from "../../components/Feed";
import { Stories } from "../../components/Stories";


const ProfileScreen: React.FC = () => {

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'}}>
            <Text>ProfileScreen</Text>
        </View>
    );
}

export default React.memo(ProfileScreen);
