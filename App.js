import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home.js'
import Quiz from './screens/quiz.js'






const HomeStack = createStackNavigator();
export default function App(){
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={Home}/>
                <HomeStack.Screen name="quiz" component={Quiz} options={{ headerLeft: null, title: null}} />

            </HomeStack.Navigator>
            </NavigationContainer>




    )
}

