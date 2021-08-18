<h1 align="center">Random User Generator</h1>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="https://github.com/khushal87" target="_blank">Author</a>
</p>

<br>

## :dart: About

This Project is a part of the assignment given by the company **Stream**. This is to be built on React Native.

## :sparkles: Features

### 🥅 Basic features

- Fetching all the random users on real-time using the API https://randomuser.me/api?results=20
- Pagination on scroll. This is implemented within Flatlist.
- The users are presented in the form of Card showing the essential details such as _Name, Avatar/Image, Phone number_.
- When we long press a card, a overlay/modal opens up showing the detailed view of a User. The background is transluscent.
- This is implemented without using any external library. The Modal opens up `onLongPress` event of the Pressable which is wrapped over the user.
- As long as the user is pressing on the screen, the modal stays active. Once released, `onPressOut` event is called and the modal closes.
- The application is built considering the latest standards of both **React and React Native**.
- The logic of the component is built over **React hooks**.

## :rocket: Technologies

The following tools were used in this project:

- [React Native](https://reactnative.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/khushal87/StreamInterviewReactNativeApp

# Access
$ cd StreamInterviewReactNativeApp

# Install dependencies
$ yarn

# Run the project
$ yarn start

# To run on android
$ yarn run android

# TO run on IOS
$ yarn run ios
```

<a href="#top">Back to top</a>
