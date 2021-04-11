import React from "react";
import {Image, View} from "react-native";
import { profilePictureStyles } from "./styles"

const ProfilePicture: React.FC<{uri: string}> = ({uri}) => {
     return(
         <View style={profilePictureStyles.container}>
             <Image
              source={{uri}}
              style={profilePictureStyles.image}
             />
         </View>
     );
}

export default React.memo(ProfilePicture)
