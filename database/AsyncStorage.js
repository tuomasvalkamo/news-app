import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadBookmarks = async () => {
  let keys = []
  let bookmarks

  try {
    // Get everything in storage
    keys = await AsyncStorage.getAllKeys()
    bookmarks = await AsyncStorage.multiGet(keys)

    let bookmarkArray = bookmarks.map(bookmark => JSON.parse(bookmark[1]))

    return bookmarkArray
  } catch (e) {
    console.log(e)
  }
}

export const saveBookmark = async (objectID, title, date, url, formattedUrl) => {
  try {
    const newBookmark = {
      objectID: objectID,
      title: title,
      date: date,
      url: url,
      formattedUrl: formattedUrl
    }

    const jsonValue = JSON.stringify(newBookmark)
    await AsyncStorage.setItem(objectID, jsonValue)
    console.log('Saved bookmark.')
  } catch (e) {
    console.log(e)
  }
}

export const deleteBookmark = async (objectID) => {
  try {
    await AsyncStorage.removeItem(objectID)
    console.log('Removed bookmark.')
  } catch (e) {
    console.log(e)
  }
}