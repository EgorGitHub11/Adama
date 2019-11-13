import {AppRegistry} from 'react-native';
// import App from './App'
import App from './src/components/screenSplash/index'
// import App from './src/components/uikit/Video'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
