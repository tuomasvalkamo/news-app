import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { WebView } from 'react-native-webview';

function WebBrowser({ route }) {

  return (
    <View style={styles.container}>
      {route.params.url != null && route.params.url !== '' ?
        <View style={styles.webViewContainer}>
          <WebView
            source={{ uri: route.params.url }}
          />
        </View>
        :
        <View style={styles.noContentContainer}>
          <Text>No article opened.</Text>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  webViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  noContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default WebBrowser
