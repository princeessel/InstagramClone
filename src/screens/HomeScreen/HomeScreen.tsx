import React from "react";
import { Text, View } from "react-native";
import { ProfilePicture } from "../../components/ProfilePicture";
import { Stories } from "../../components/Stories";

const HomeScreen: React.FC = () => {

    return (
        <View>
            <>
                <Stories />
            </>
        </View>
    );
}

export default React.memo(HomeScreen)
