import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video'

export default class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Video source={{uri: 'https://www.youtube.com/watch?v=dgKSqz3it50'}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
        />
      </View>
    );
  }
}
