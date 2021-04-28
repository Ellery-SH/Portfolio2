import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home.js'
import eightiesMusic from './screens/eightiesMusic.js'
import Geography from './screens/Geography'
import Movies from './screens/Movies.js'
import Mythology from './screens/Mythology.js'
import Sports from './screens/Sports.js'





const HomeStack = createStackNavigator();
export default function App(){
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={Home}/>
                <HomeStack.Screen name="eightiesMusic" component={eightiesMusic} />
                <HomeStack.Screen name="Geography" component={Geography} key="Geography" />
                <HomeStack.Screen name="Movies" component={Movies} key="Movies"/>
                <HomeStack.Screen name="Mythology" component={Mythology} key="Mythology"/>
                <HomeStack.Screen name="Sports" component={Sports} key="Sports"/>

            </HomeStack.Navigator>
            </NavigationContainer>




    )
}

