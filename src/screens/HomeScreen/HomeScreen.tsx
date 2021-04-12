import React from "react";
import { View } from "react-native";
import { Feed } from "../../components/Feed";
import { Stories } from "../../components/Stories";


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
