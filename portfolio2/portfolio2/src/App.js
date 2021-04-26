// The following line HAS to be used first!

import * as React from 'react';
import { useState } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, FlatList, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Quiz1 from './components/Quiz1.js'

const exercisesDefault =[
  {
    name: "Situps",
    details: "Lay on your back with your knees bent and move you chest twards your thighs. Make sure to keep your core tight and don't arch your back.",
    key: "1"
  },
    {
    name: "Pushups",
    details: "Lay on your back with your knees bent and move you chest twards your thighs. Make sure to keep your core tight and don't arch your back.",
    key: "2"
  },
    {
    name: "Squats",
    details: "Lay on your back with your knees bent and move you chest twards your thighs. Make sure to keep your core tight and don't arch your back.",
    key: "3"
  }

]

const styles = StyleSheet.create({
  rowStyle: {
    flex: 1,
     flexDirection: "row",
    alignItems: "center"

  },
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center"
  },
  buttonstyle: {
    flex: 1,
    padding: 20
  },
  headerSyle: {
    fontSize: 40
  },
  repCount: {
    fontSize: 30,
    padding: 5
  }
});

function HomeScreen({navigation}) {
  let [exercises, setExercises] = useState(exercisesDefault)
  let renderButton = ({ item })=> (<View style={styles.rowStyle}>
  <Button  title="Complete" style={styles.buttonstyle}
        onPress={() => navigation.push('Details', {item: item, items: exercises})}
      ></Button >
      <Text>{item.name}</Text>
  </View>
  )

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.headerSyle}>Get Up and Do Something!</Text>
      <FlatList data={exercises} renderItem={renderButton}></FlatList>
       <Button
        title="Go to Details 2"
        onPress={() => navigation.push('Details' , {title: "Details 2 "})}
      />
    </View>
  );
}

function Quiz1Screen( {navigation, route }) {
  <Quiz1>
     
       <Button style={{padding: 10}}
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
      </Quiz1>
    
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz1" component={Quiz1Screen} 
        options={({ route }) => ({ title: route.params.item.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
