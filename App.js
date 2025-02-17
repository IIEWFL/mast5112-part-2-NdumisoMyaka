import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen'; 
import CoursesScreen from './components/CoursesScreen'
import AboutUsScreen from './components/AboutUsScreen'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CoursesScreen" component={CoursesScreen} />
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
