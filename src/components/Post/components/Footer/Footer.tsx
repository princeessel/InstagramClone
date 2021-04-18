import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, TouchableOpacityBase, View } from "react-native";
import ADIcon from "react-native-vector-icons/AntDesign";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FAIcon from "react-native-vector-icons/FontAwesome";



import { footerStyles } from "./styles";

interface IProps {
    likesCount: number,
    caption: string,
    postedAt: string
}

const Footer: React.FC<IProps> = ({ likesCount: likesCountProp, caption, postedAt }) => {
    const [likesCount, setLikesCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleHeartPress = () => {
        const amount = isLiked ? -1 : 1
        setLikesCount(likesCount + amount);
        setIsLiked(!isLiked);
    }

    useEffect(() => {
        setLikesCount(likesCountProp)
    }, [])


    return (
        <View style={footerStyles.container}>
            <View style={footerStyles.iconsContainer}>
                <View style={footerStyles.leftIcons}>
                    <TouchableOpacity onPress={handleHeartPress}>
                        {isLiked ? <ADIcon name="heart" size={25} color={"#c30000"} /> :
                            <ADIcon name="hearto" size={25} color={"#545454"} />}
                    </TouchableOpacity>
                    <FontistoIcon name="comment" size={25} />
                    <IoniconsIcon name="paper-plane-outline" size={25} />
                </View>
                <FAIcon name="bookmark-o" size={25} />
            </View>


            <Text style={footerStyles.likes}>{likesCount} likes</Text>
            <Text style={footerStyles.caption}>{caption}</Text>
            <Text style={footerStyles.postedAt}>{postedAt}</Text>
        </View>
    );
}

export default React.memo(Footer)
