import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ArticleActions from './ArticleActions';

function Article({ date, title, url, objectID }) {
  const navigation = useNavigation();

  const parseDate = (d) => {
    const date = new Date(d)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hour = date.getHours()
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

    return `${day}.${month}.${year} - ${hour}.${minutes}`
  }

  // Strip url down to barebones e.g google.com
  const formatUrl = (url) => {
    if (url) {
      const start = url.indexOf('//') + 2
      const end = url.indexOf('/', (start))

      const formattedUrl = url.slice(start, end)

      if (formattedUrl.slice(0, 3) === 'www') {
        return formattedUrl.slice(4)
      } else {
        return formattedUrl
      }
    }
  }

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Web browser', {
          url: url
        })
      }}
      style={styles.article}
    >
      <Text>{title}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoDetails}>
          <Text style={styles.lightText}>{formatUrl(url)}</Text>
          <Text style={[styles.date, styles.lightText]}>{parseDate(date)}</Text>
        </View>
        <ArticleActions
          objectID={objectID}
          title={title}
          url={url}
          date={date}
          formattedUrl={formatUrl(url)}
        />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  article: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginBottom: 20
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  lightText: {
    color: '#666',
    fontSize: 12
  },
  date: {
    marginRight: 5,
  }
})

export default Article
