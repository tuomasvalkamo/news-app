import React from 'react'
import { create, act } from 'react-test-renderer'
import ArticleActions from '../components/ArticleActions'
import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'
import reducers from '../state/reducers/index'
import thunk from 'redux-thunk'
import { actionCreators } from '../state/index';

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)

const tree = create(
  <Provider store={store}>
    <ArticleActions />
  </Provider>
)

test('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});
/*
test('bookmark is added to redux', async () => {
  // press button
  const bookmarkPressable =
    tree.root.findByProps({ testID: 'sharePressable' }).props;
  act(() => bookmarkPressable.onPress())
  // expect redux storage to have bookmark
  console.log(store.getState())
  expect(store.getState().bookmarks.length).toEqual(1)
})*/