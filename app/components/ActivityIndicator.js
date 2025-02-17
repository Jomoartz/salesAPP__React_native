import React from 'react';
import LottieView from 'lottie-react-native';

function ActivityIndicator({visible=false}) {
    console.log('ActivityIndicator visible:', visible); 

    if (!visible) return null;

    return (
        <LottieView
            autoPlay
            loop
            style={{flex:1,}}
            source={require('../assets/animations/loader.json')}
        />
    );
}

export default ActivityIndicator;
