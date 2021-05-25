import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, TouchableOpacity } from "react-native";
import { ProfilePicture } from "../ProfilePicture";
import { storyStyles } from "./styles";
import { TStory } from "../../types/types";


interface IProps {
    story: TStory
}

const Story: React.FC<IProps> = ({ story }) => {
    const navgation = useNavigation();

    const {
        user: {
            id,
            imageUri,
            name,
        }
    } = story;

    const onPress = () => {
        navgation.navigate('Story', { userId: id });
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <ProfilePicture uri={imageUri} />
            <Text style={storyStyles.name}>{name}</Text>
        </TouchableOpacity>
    );
}

export default React.memo(Story)
