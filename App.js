import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'

import Frontpage from './screens/Frontpage'
import LatestArticles from './screens/LatestArticles';
import WebBrowser from './screens/WebBrowser';
import Bookmarks from './screens/Bookmarks';
import { colors } from './colors';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'

import { loadBookmarks } from './database/AsyncStorage'

import { Provider, useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { store } from './state/store'
import { actionCreators } from './state/index';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
          <Stack.Screen name="Bookmarks" component={Bookmarks} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function Home() {
  // Redux state management
  const bookmarks = useSelector(state => state.bookmarks)
  const dispatch = useDispatch()
  const { setBookmarksFromDB } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    setBookmarkData()
  }, [])

  const setBookmarkData = async () => {
    // Load bookmarks from AsyncStorage
    const values = await loadBookmarks()
    // Set Redux state to equal AsyncStorage
    setBookmarksFromDB(values)
  }

  // Navigation Icons
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Top stories') {
        iconName = 'md-home-outline';
      } else if (route.name === 'Latest news') {
        iconName = 'md-newspaper-outline';
      } else if (route.name === 'Web browser') {
        iconName = 'md-globe-outline';
      } else if (route.name === 'Bookmarks') {
        iconName = 'bookmarks-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: colors.color1
    },
    headerTitleStyle: {
      color: '#fff'
    },
    tabBarStyle: {
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#dbdbdb'
    },
    tabBarItemStyle: { paddingVertical: 3 },
    tabBarActiveTintColor: colors.color1,
    tabBarInactiveTintColor: '#999'
  });

  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        initialRouteName="Top stories"
        screenOptions={screenOptions}
      >
        <Tab.Screen name="Top stories" component={Frontpage} />
        <Tab.Screen name="Latest news" component={LatestArticles} />
        <Tab.Screen name="Bookmarks" component={Bookmarks} />
        <Tab.Screen name="Web browser" component={WebBrowser} initialParams={{ url: '' }} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color2
  }
})