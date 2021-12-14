const reducer = (state = [], action) => {
  switch (action.type) {
    case "SET_BOOKMARKS_FROM_DB":
      return action.payload.bookmarks
    case "ADD_BOOKMARK":
      return [
        ...state,
        {
          objectID: action.payload.objectID,
          title: action.payload.title,
          date: action.payload.date,
          url: action.payload.url,
          formattedUrl: action.payload.formattedUrl,
        }
      ]
    case "REMOVE_BOOKMARK":
      return state.filter(bookmark => bookmark.objectID !== action.payload.objectID)
    default:
      return state
  }
}

export default reducer