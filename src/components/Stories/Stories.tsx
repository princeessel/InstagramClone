import React from "react"
import { FlatList, View } from "react-native"
import { Story } from "../Story"

const data = [
    {
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        name: 'Prince',
    },
    {
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        name: 'Fred',
    },
    {
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        name: 'Gyamfua',
    },
    {
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        name: 'Nana',
    },
]

const Stories: React.FC = () => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Story imageUri={item.imageUri} name={item.name} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item  => item.name}
        />
    );
}

export default React.memo(Stories);