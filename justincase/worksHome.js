import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';


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
        <Button title={item.name} onPress={() => {navigation.push(item.screen); key=(item.category);}} ></Button>
    </View>)

    return(
        <View>
            <Text>Home Screen</Text>
            <FlatList data={screens} renderItem={renderButton} key={screens.category}></FlatList>
           
        </View>
    )
}