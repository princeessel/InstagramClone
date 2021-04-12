import React from "react";
import {Image, View} from "react-native";
import { profilePictureStyles } from "./styles"

const ProfilePicture: React.FC<{uri: string, size: number}> = ({uri, size= 70}) => {
     return(
         <View style={ [profilePictureStyles.container, {width: size + 6, height: size + 6}] }>
             <Image
              source={{uri}}
              style={[profilePictureStyles.image, {width: size, height: size}]}
             />
         </View>
     );
}

export default React.memo(ProfilePicture)
