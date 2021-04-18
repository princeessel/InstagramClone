import React from "react";
import { Text, View } from "react-native";


const CreatePostScreen: React.FC = () => {

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue'}}>
            <Text>PostScreen</Text>
        </View>
    );
}

export default React.memo(CreatePostScreen);
