<h1 align="center">Hacker News Reader<p align="center"> <a href="https://github.com/tuomasvalkamo/news-app/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="github" width="40" height="40"/> </a> <a href="https://news.ycombinator.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/ycombinator/ycombinator-tile.svg" alt="heroku" width="40" height="40"/> </a> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> </p> </h1>

<h2>Available <a href="https://expo.dev/@tuomasvalkamo/news-app" target="_blank" rel="noreferrer">here.</a> No download needed!</h2>

## Project description

* Mobile application for reading Hacker News by Y Combinator
* Made with React Native using Expo
* Project assignment for Mobile Programming course, Business Information Technology degree programme at Haaga-Helia University of Applied Sciences, in autumn of 2021

## User interface & functionality

The application consists of four different views. Below I have showcased three of them. (Captured on Android, from left to right):

1. **Top stories tab:** Todays most upvoted stories from Hacker News. You can also search stories by title keyword or by site url.
2. **Bookmarks tab:** Your saved bookmarks. You can bookmark any article you find to add it here.
3. **Web browser tab:** Any article you click will be opened here. You can hop between different tabs and your article won't go anywhere.

<p align="center">
<a href="https://imgbb.com/"><img src="https://i.ibb.co/SxxHWJ9/Screenshot-20211214-211816-Expo-Go.jpg" alt="top stories screen" border="0" width="30%" />&nbsp;</a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/DRLS09h/Screenshot-20211214-211904-Expo-Go.jpg" alt="bookmarks screen" border="0" width="30%" />&nbsp;</a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/71GzBcd/Screenshot-20211214-211924-Expo-Go.jpg" alt="browser screen" border="0" width="30%" /></a>
</p>

## Technologies & libraries

* [React Native](https://reactnative.dev/), JavaScript framework for mobile app development
* [Expo](https://expo.dev/), framework & platform for universal React apps
* [HN Search powered by Algolia](https://hn.algolia.com/api), API for searching [HackerNews](https://news.ycombinator.com/) community site
* React state management: [Redux](https://redux.js.org/) and [React Redux](https://react-redux.js.org/)
* Using web browser in-app: [React Native WebView](https://www.npmjs.com/package/react-native-webview)
* User interface navigation: [React Navigation](https://reactnavigation.org/)
* Some UI components: [React Native Paper](https://callstack.github.io/react-native-paper/)

## Known bugs

* After deleting bookmark in the bookmark tab the other tabs still show the article as bookmarked. Component not re-rendering after state change.

## License

[MIT License](https://github.com/tuomasvalkamo/news-app/blob/main/LICENSE)
