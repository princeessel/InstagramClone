import React from "react";
import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { ProfilePicture } from "../../../ProfilePicture";
import { headerStyles } from "./styles";

const Header: React.FC<{imageUri: string, name: string}> = ({imageUri, name}) => {
    return(
        <View style={headerStyles.container}>
            <View style={headerStyles.leftIcon}>
            <ProfilePicture uri={imageUri} size={40} />
            <Text style={headerStyles.name}>{name}</Text>
        </View>
            <View style={headerStyles.rightIcon}>
                <Icon name="dots-three-vertical" size={16} />
            </View>
        </View>
    );
}

export default React.memo(Header)
