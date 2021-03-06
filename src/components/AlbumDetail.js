import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Destructuring props.
const AlbumDetail = ({ album }) => {
    // Further destructuring props.
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailContainerStyle, 
        headerTextStyle, 
        imageStyle 
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    {/* We put an object in here with an object, uri. */}
                    <Image 
                        style={thumbnailStyle} 
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Purchase
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        // Ensures stretching the entire width.
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
