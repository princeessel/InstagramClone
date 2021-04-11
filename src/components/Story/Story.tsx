import React from "react";
import { Image, Text, View } from "react-native";
import { ProfilePicture } from "../ProfilePicture";
import { storyStyles } from "./styles";

const Story: React.FC<{ imageUri: string, name: string }> = ({ imageUri, name }) => {
    return (
        <View>
            <ProfilePicture uri={imageUri} />
            <Text style={storyStyles.name}>{name}</Text>
        </View>
    );
}

export default React.memo(Story)
