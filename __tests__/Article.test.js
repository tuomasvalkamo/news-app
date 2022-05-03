import React from 'react'
import Article from '../components/Article'
import { create, act } from 'react-test-renderer'

const tree = create(
  <Article
    date={'1.1.2022'}
    title={'test title'}
    url={'test url'}
    objectID={'123'}
  />
)

test('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});