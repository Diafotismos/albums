// Import statements.
import React from 'react';
import { Text, View } from 'react-native';

/**
 * Component. As a rule of thumb, component name is the same as file name.
 * Destructuring reference style.
 * Whenever making reference to a javscript variable within JSX, use curly braces.
 */
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// Not CSS -- Javascript.
// Camelcase instead of dash-casing.
const styles = {

    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0.2,
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
    }
};

// Make component available to other parts of the app.
export default Header;
