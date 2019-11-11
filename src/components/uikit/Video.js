import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import {YouTubeStandaloneAndroid} from 'react-native-youtube'

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.youtube = this.youtube.bind(this)
    this.state = {
    };
  }

  youtube = () => {
    YouTubeStandaloneAndroid.playVideo({
      apiKey: 'YOUR_API_KEY', // Your YouTube Developer API Key
      videoId: 'KVZ-P-ZI6W4', // YouTube video ID
      autoplay: true, // Autoplay the video
      startTime: 120, // Starting point of video (in seconds)
    })
      .then(() => console.log('Standalone Player Exited'))
      .catch(errorMessage => console.error(errorMessage));
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}
