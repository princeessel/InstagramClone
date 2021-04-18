import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeScreen } from "../screens/HomeScreen";


const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Instagram',
                    headerLeftContainerStyle: {
                        marginLeft: 10
                    },
                    headerRightContainerStyle: {
                        marginRight: 10
                    },
                    headerTitle: () => {
                        return (
                            <Image
                                source={require("../assets/images/logo.png")}
                                resizeMode="contain"
                                style={{ width: 130 }}
                            />
                        )

                    },
                    headerLeft: () => (
                        <Feather name='camera' size={25} color={'#000'} />
                    ),
                    headerRight: () => (
                        <Ionicons name='paper-plane-outline' size={25} color={'#000'} />
                    )
                }
                }
            />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;
