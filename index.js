/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Config from 'react-native-config';
import StorybookUI from './storybook';

AppRegistry.registerComponent(appName, () =>
  Config.LOAD_STORYBOOK === 'true' ? StorybookUI : App,
);
