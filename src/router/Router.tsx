import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigatorRoute from "./TabNavigatorRoute";
import { StoryScreen } from "../screens/StoryScreen";

const RootStack = createStackNavigator();

const Router = () => {

    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name={"Home"}
                component={TabNavigatorRoute}
                options={{
                    headerShown: false
                }}
            />
            <RootStack.Screen
                name={"Story"}
                component={StoryScreen}
                options={{
                    headerShown: false
                }}
            />
        </RootStack.Navigator>
    );
}

export default Router;
