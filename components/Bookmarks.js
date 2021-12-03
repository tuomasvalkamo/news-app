import React, { useState, useEffect } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Articles from './Articles'
import { firebaseConfig } from './firebaseConfig'

import { initializeApp } from 'firebase/app'
import { getDatabase, push, ref, onValue } from 'firebase/database'

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState()

  // Listen for DB updates
  useEffect(() => {
    const bookmarksRef = ref(database, 'bookmarks/')
    onValue(bookmarksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setBookmarks(Object.values(data));
      }
    })
  }, []);

  //<Articles articles={bookmarks} bookmarks={bookmarks} />

  return (
    <ScrollView style={styles.container}>
      <Articles articles={bookmarks} bookmarks={bookmarks} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

export default Bookmarks
