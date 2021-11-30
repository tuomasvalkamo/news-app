import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'
import Frontpage from './components/Frontpage'
import LatestArticles from './components/LatestArticles';
import WebBrowser from './components/WebBrowser';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Web browser" component={WebBrowser} initialParams={{ url: '' }} />
        <Stack.Screen name="Frontpage" component={Frontpage} />
        <Stack.Screen name="Latest news" component={LatestArticles} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  // Navigation Icons
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Frontpage') {
        iconName = 'md-home-outline';
      } else if (route.name === 'Latest news') {
        iconName = 'md-newspaper-outline';
      } else if (route.name === 'Web browser') {
        iconName = 'md-globe-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        initialRouteName="Frontpage"
        screenOptions={screenOptions}
      >
        <Tab.Screen name="Frontpage" component={Frontpage} />
        <Tab.Screen name="Latest news" component={LatestArticles} />
        <Tab.Screen name="Web browser" component={WebBrowser} initialParams={{ url: '' }} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb'
  }
})