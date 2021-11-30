import React, { useState, useEffect } from 'react'
import { View, Pressable, StyleSheet, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { firebaseConfig } from './firebaseConfig'
/*
import { initializeApp } from 'firebase/app'
import { getDatabase, push, ref, onValue } from 'firebase/database'

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
*/
function ArticleActions(props) {
  const [bookmarked, setBookmarked] = useState(false)
  const [bookmarkIcon, setBookmarkIcon] = useState('bookmark-outline')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [date, setDate] = useState('')
  const [bookmarks, setBookmarks] = useState([])

  const handleBookmarkPress = () => {
    if (!bookmarked) {
      setBookmarkIcon('bookmark')
    } else {
      setBookmarkIcon('bookmark-outline')
    }
  }

  return (
    <View style={styles.infoActions}>
      <Pressable
        onPress={() => console.log(title + ', ' + url + ', ' + date)}
      >
        <Ionicons name='share-social-outline' size={24} style={styles.share} />
      </Pressable>
      <Pressable
        onPress={() => handleBookmarkPress()}
      >
        <Ionicons name={bookmarkIcon} size={24} />
      </Pressable>

      <Button title="cl" onPress={() => console.log(bookmarks)} />
    </View>
  )
}

const styles = StyleSheet.create({
  infoActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  share: {
    marginRight: 5
  }
})

export default ArticleActions
