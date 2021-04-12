import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../../../../screens/HomeScreen/styles";
import { bodyStyles } from "./styles";

const Body: React.FC<{imageUri: string}> = ({imageUri}) => {
    return (
        <View>
            <Image
              style={bodyStyles.image}
              source={{uri: imageUri}}
            />
        </View>
    );
}

export default React.memo(Body)
