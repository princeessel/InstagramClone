import React from "react"
import { FlatList, View } from "react-native"
import { Story } from "../Story"
import { storyStyles } from "../Story/styles"
import { storiesStyles } from "./styles"

const data = [
    {
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        name: 'Prince',
    },
    {
        imageUri: 'https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg',
        name: 'Fred',
    },
    {
        imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
        name: 'Gyamfua',
    },
    {
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        name: 'Nana',
    },
]

const Stories: React.FC = () => {
    return (
        <FlatList
            style={storiesStyles.container}
            data={data}
            renderItem={({ item }) => <Story imageUri={item.imageUri} name={item.name} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.name}
        />
    );
}

export default React.memo(Stories);