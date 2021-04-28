import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import {AppButton} from '../components/button.js'
import { styles } from '../components/styles.js';


 const screenList =[
    {
      name: "Geography",
      screen: 'Geography',
      category: 'Geography',
    },
      {
      name: "Movies",
      screen: 'Movies',
      category: 'Movies',
    },
      {
      name: "Eighties Music",
      screen: 'eightiesMusic',
      category: 'eightiesMusic',
    },
    {
        name: "Sports",
        screen: 'Sports',
        category: 'Sports',
      },
      {
        name: "Mythology",
        screen: 'Mythology',
        category: 'Mythology',
      }
  
  ]


export default function Home({ navigation }) {
    let [screens, setScreens] = useState(screenList)
    let renderButton = ({ item }) => (<View>
        <AppButton key={item.category} title={item.name} onPress={() => {navigation.push(item.screen)}} ></AppButton>
    </View>)

    return(
        <View style={styles.appButtonView}>
            <Text style={styles.appheadertext}>Choose a Category</Text>
            <FlatList data={screens} renderItem={renderButton} key={screens.category}></FlatList>
           
        </View>
    )
}
   