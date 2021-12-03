import React, { useState, useEffect } from 'react'
import { View, Pressable, StyleSheet, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { firebaseConfig } from './firebaseConfig'

import { initializeApp } from 'firebase/app'
import { getDatabase, push, ref, onValue } from 'firebase/database'

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function ArticleActions(props) {
  const [bookmarked, setBookmarked] = useState(false)
  const [title, setTitle] = useState(props.title)
  const [date, setDate] = useState(props.date)
  const [url, setUrl] = useState(props.url)
  const [formattedUrl, setFormattedUrl] = useState(props.formattedUrl)
  const [bookmarks, setBookmarks] = useState(props.bookmarks)

  useEffect(() => {
    setBookmarks(props.bookmarks)
  }, [props.bookmarks])

  useEffect(() => {
    checkIfBookmarked()
  }, [bookmarks])

  const checkIfBookmarked = () => {
    if (bookmarks) {
      for (let i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url === url) {
          setBookmarked(true)
        }
      }
    }
  }

  const handleBookmarkPress = () => {
    if (!bookmarked) {
      setBookmarked(true)
      saveBookmark()
    } else {
      setBookmarked(false)
    }
  }

  const saveBookmark = () => {
    push(ref(database, 'bookmarks/'), {
      'title': title, 'created_at': date, 'url': url
    })
      .then(() => {
        console.log('Data saved successfully!')
      })
      .catch((error) => {
        console.log('The write failed... Error message: ' + error)
      })
  }

  const deleteBookmark = () => {

  }

  return (
    <View style={styles.infoActions}>
      <Pressable
        onPress={() => console.log(title + ',,,, ' + url + ',,,, ' + date + ',,,, ' + formattedUrl)}
      >
        <Ionicons name='share-social-outline' size={24} style={styles.share} />
      </Pressable>
      <Pressable
        onPress={() => handleBookmarkPress()}
      >
        <Ionicons name={bookmarked === true ? 'bookmark' : 'bookmark-outline'} size={24} />
      </Pressable>
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
