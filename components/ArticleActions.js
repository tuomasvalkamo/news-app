import React, { useState, useEffect } from 'react'
import { View, Pressable, StyleSheet, Share } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { saveBookmark, deleteBookmark } from '../database/AsyncStorage';

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

function ArticleActions(props) {
  const [bookmarked, setBookmarked] = useState(false)

  // Redux state management
  const bookmarks = useSelector(state => state.bookmarks)
  const dispatch = useDispatch()
  const { addBookmark, removeBookmark } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    checkIfBookmarked()
  }, [bookmarks])

  const checkIfBookmarked = () => {
    if (bookmarks) {
      bookmarks.forEach(bookmark => {
        if (bookmark.url === props.url) {
          setBookmarked(true)
        }
      })
    }
  }

  const handleBookmarkPress = () => {
    if (!bookmarked) {
      setBookmarked(true)

      const newBookmarkObject = {
        objectID: props.objectID,
        title: props.title,
        date: props.date,
        url: props.url,
        formattedUrl: props.formattedUrl
      }

      // Save bookmark to AsyncStorage
      saveBookmark(props.objectID, props.title, props.date, props.url, props.formattedUrl)
      // Add bookmark to Redux state
      addBookmark(newBookmarkObject)
    } else {
      setBookmarked(false)
      // Delete bookmark from AsyncStorage
      deleteBookmark(props.objectID)
      // Remove bookmark from Redux state
      removeBookmark(props.objectID)
    }
  }

  const shareArticle = async () => {
    try {
      const result = await Share.share({
        message:
          props.url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
      console.log(error)
    }
  };

  return (
    <View style={styles.infoActions}>
      <Pressable
        onPress={() => shareArticle()}
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
