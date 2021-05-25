import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { ActivityIndicator, Dimensions, ImageBackground, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ProfilePicture } from "../../components/ProfilePicture";
import stories from "../../data/stories";
import { styles } from "./styles";


const StoryScreen: React.FC = () => {
    const [userStories, setUserStories] = useState<any>(null)
    const [activeStoryIndex, setActiveStoryIndex] = useState<any>(null)

    const route = useRoute();
    const navigation = useNavigation();

    const params: any = route.params
    const userId = params.userId

    useEffect(() => {
        const userStories = stories.find(storyData => storyData.user.id === userId);
        setUserStories(userStories)
        setActiveStoryIndex(0);
    }, [])

    useEffect(() => {
        if (!userStories) {
            return;
        }
        if (activeStoryIndex < 0) {
            setActiveStoryIndex(0);
            return;
        }

        if (activeStoryIndex >= userStories.stories.length) {
            setActiveStoryIndex(userStories.stories.length - 1)
        }
    }, [activeStoryIndex]);

    const navigateToNextUser = () => {
        navigation.navigate('Story', { userId: (parseInt(userId) + 1).toString() });
    }

    const navigateToPrevUser = () => {
        navigation.navigate('Story', { userId: (parseInt(userId) - 1).toString() });
    }

    const handlePress = (evt: any) => {
        const x = evt.nativeEvent.locationX;
        const screenWidth = Dimensions.get('window').width;

        if (x < screenWidth / 2) {
            handlePrevStory();
        } else {
            handleNextStory();
        }
    }

    const handleNextStory = () => {
        if (activeStoryIndex >= userStories.stories.length - 1) {
            navigateToNextUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex + 1)

    }

    const handlePrevStory = () => {
        if (activeStoryIndex <= 0) {
            navigateToPrevUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex - 1)
    }

    if (!userStories) {
        return (
            <SafeAreaView>
                <ActivityIndicator style={styles.indicator} />
            </SafeAreaView>
        )
    }

    const activeStory = userStories.stories[activeStoryIndex];

    return (
        <SafeAreaView style={styles.container}>

            <TouchableWithoutFeedback onPress={handlePress}>
                <ImageBackground source={{ uri: activeStory.imageUri }} style={styles.image}>
                    <View style={styles.userInfo}>
                        <ProfilePicture uri={userStories.user.imageUri} size={50} />
                        <Text style={styles.userName}>{userStories.user.name}</Text>
                        <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.cameraButton}>
                            <Feather name='camera' size={25} color={'#ffffff'} />
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                editable
                                placeholder='Send Mesage'
                                placeholderTextColor='white'
                            />
                        </View>
                        <View style={styles.messageButton}>
                            <Ionicons name='paper-plane-outline' size={25} color={'#ffffff'} />
                        </View>
                    </View>

                </ImageBackground>
            </TouchableWithoutFeedback>

        </SafeAreaView>


    );
}

export default React.memo(StoryScreen)
