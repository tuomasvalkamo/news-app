export const addBookmark = (bookmark) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_BOOKMARK",
      payload: {
        objectID: bookmark.objectID,
        title: bookmark.title,
        date: bookmark.date,
        url: bookmark.url,
        formattedUrl: bookmark.formattedUrl
      }
    })
  }
}

export const removeBookmark = (objectID) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_BOOKMARK",
      payload: {
        objectID: objectID
      }
    })
  }
}

export const setBookmarksFromDB = (bookmarks) => {
  return (dispatch) => {
    dispatch({
      type: "SET_BOOKMARKS_FROM_DB",
      payload: {
        bookmarks: bookmarks
      }
    })
  }
}