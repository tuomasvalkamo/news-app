import React, { useState, useEffect } from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { saveBookmark, deleteBookmark } from './AsyncStorage';

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

function ArticleActions(props) {
  const [bookmarked, setBookmarked] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)

  // Redux state management
  const bookmarks = useSelector(state => state.bookmarks)
  const dispatch = useDispatch()
  const { addBookmark, removeBookmark } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    isDeleted ? '' : checkIfBookmarked()
  }, [bookmarks])

  const checkIfBookmarked = () => {
    if (bookmarks) {
      for (let i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url === props.url) {
          setBookmarked(true)
        }
      }
    }
  }

  const handleBookmarkPress = () => {
    if (!bookmarked) {
      setBookmarked(true)

      // Save bookmark to AsyncStorage
      saveBookmark(props.objectID, props.title, props.date, props.url, props.formattedUrl)

      // Add bookmark to Redux state
      const newBookmarkObject = {
        objectID: props.objectID,
        title: props.title,
        date: props.date,
        url: props.url,
        formattedUrl: props.formattedUrl
      }

      addBookmark(newBookmarkObject)
    } else {
      setIsDeleted(true)
      setBookmarked(false)
      // Delete bookmark from AsyncStorage
      deleteBookmark(props.objectID)
      // Remove bookmark from Redux state
      removeBookmark(props.objectID)
    }
  }

  return (
    <View style={styles.infoActions}>
      <Pressable
        onPress={() => console.log('asd')}
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
