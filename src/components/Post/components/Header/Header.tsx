import React from "react";
import {Text, View} from "react-native";
import { ProfilePicture } from "../../../ProfilePicture";
import { headerStyles } from "./styles";

const Header: React.FC<{imageUri: string, name: string}> = ({imageUri, name}) => {
    return(
        <View style={headerStyles.container}>
            <ProfilePicture uri={imageUri} size={ 40 }/>
            <Text style={headerStyles.name}>{name}</Text>
        </View>
    );
}

export default React.memo(Header)
