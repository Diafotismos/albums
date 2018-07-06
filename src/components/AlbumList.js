import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

/**
 * We used class-based components for fetching data and (assuming) asynchronous tasks.
 * Functional components are mostly for static displays.
 */
class AlbumList extends Component {
    // Class-level property. Initial state.
    state = { albums: [] };

    // This method will automatically be executed when about to be rendered.
    componentWillMount() {
        // This is a promise-based request (asynchronous operation).
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        // Note: we always modify state with this.setState. Not this.state = ...
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        /**
         * The way map() works: we pass in an arrow function.
         * That function is called every single time we iterate through the list.
         * 
         * Also, each component in the array must have an associated key property.
         * This is for performance (rendering a particular component).
         * 
         * Requirements for keys: must be unique against all other elements in array
         * and it is the same value across all renders of the list.
         */
        return this.state.albums.map(album => 
            // Name of the props is arbitrary. E.g. data={album} is fine.
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
