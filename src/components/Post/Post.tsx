import React from "react";
import { View } from "react-native";
import { TPost } from "../../types/types";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

interface IProps {
    post: TPost
}

const Post: React.FC<IProps> = ({ post }) => {
    return (
        <View>
            <Header
                imageUri={post.user.imageUri}
                name={post.user.name}
            />
            <Body imageUri={post.imageUri} />
            <Footer
                likesCount={post.likesCount}
                caption={post.caption}
                postedAt={post.postedAt}
            />
        </View>
    );
}

export default React.memo(Post)
