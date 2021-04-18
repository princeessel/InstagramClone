import React from "react";
import { View } from "react-native";
import { Feed } from "../../components/Feed";


const HomeScreen: React.FC = () => {

    return (
        <View>
            <>
                <Feed />
            </>
        </View>
    );
}

export default React.memo(HomeScreen);
