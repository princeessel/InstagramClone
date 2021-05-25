import React from "react"
import { FlatList, View } from "react-native"
import stories from "../../data/stories"
import { Story } from "../UserStoryPreview"
import { storiesStyles } from "./styles"

const data = stories;

const Stories: React.FC = () => {
    return (
        <FlatList
            style={storiesStyles.container}
            data={data}
            renderItem={({ item }) => <Story story={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={({user: {id}}) => id}
        />
    );
}

export default React.memo(Stories);