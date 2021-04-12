import React from "react";
import {Text, View} from "react-native";
import { footerStyles } from "./styles";

interface IProps {
    likesCount: number,
    caption: string,
    postedAt: string
}

const Footer: React.FC<IProps> = ({likesCount, caption, postedAt}) => {
     return(
         <View style={footerStyles.container}>
             <Text style={footerStyles.likes}>{likesCount} likes</Text>
             <Text style={footerStyles.caption}>{caption}</Text>
             <Text style={footerStyles.postedAt}>{postedAt}</Text>
         </View>
     );
}

export default React.memo(Footer)
