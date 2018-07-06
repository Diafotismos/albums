// Import a library to help create a component.
import React from 'react';
// The curly braces signify that you don't want the whole library, just what's within.
import { AppRegistry, View } from 'react-native';
// Don't need .js if javascript file.
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


/**
 * Create a component. A component is a "thing" that creates content that appears on 
 * the device based on the returned JSX.
 * 
 * This is a function that defines the component. Must return an object that describes
 * what it should look like on the device.
 * 
 * JSX: looks like HTML, but still Javascript.
 * Note: there must always be a single top-level tag. Wrap in a View if necessary.
 */
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render it to the device. We have to be very specific as to when to display 
// components to the device.
// Note: fat arrow function without curly braces there is an implicit return of App.
// First argument must match the project name.
// Second argument returns the first component to render for our application.
AppRegistry.registerComponent('albums', () => App);

/** @format */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
