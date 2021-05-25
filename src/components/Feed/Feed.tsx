import React from "react";
import { FlatList } from "react-native";
import { Post } from "../Post";
import { Stories } from "../UserStoriesPreview";


const data = [
    {
        user: {
            imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
            name: 'Prince'
        },
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        caption: 'Another interesting image',
        likesCount: 23456,
        postedAt: '10 minutes ago'
    },
    {
        user: {
            imageUri: 'https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg',
            name: 'Fred'
        },
        imageUri: 'https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg',
        caption: 'Another interesting image',
        likesCount: 23456,
        postedAt: '10 minutes ago'
    },
    {
        user: {
            imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
            name: 'Gyamfua'
        },
        imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
        caption: 'Another interesting image',
        likesCount: 23456,
        postedAt: '10 minutes ago'
    },
    {
        user: {
            imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
            name: 'Nana Sarpong'
        },
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        caption: 'Another interesting image',
        likesCount: 23456,
        postedAt: '10 minutes ago'
    }
]

const Feed: React.FC = () => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Post post={item} />}
            showsVerticalScrollIndicator= {false}
            keyExtractor={item => item.user.name}
            ListHeaderComponent={Stories}
        />
    );
}

export default React.memo(Feed);
