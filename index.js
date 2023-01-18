/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import DrawerNavigator from './src/navigators/DrawerNavigator';
import StartScreen from './src/screens/StartScreen';
import AuthStack from './src/navigators/AuthStack';
import SearchOptions from './src/screens/GrantSearchScreens/SearchOptions';
import Home from './src/screens/Home';
import WelcomeScreen from './src/screens/AuthanticationScreens/WelcomeScreen';
import Login from './src/screens/AuthanticationScreens/Login';
import CreateAccount from './src/screens/AuthanticationScreens/CreateAccount';
import KeyboardManager from 'react-native-keyboard-manager'
import ImageClick from './src/screens/ImageClick';

LogBox.ignoreAllLogs();
if (Platform.OS === 'ios') {
    KeyboardManager.setToolbarPreviousNextButtonEnable(true);
}
AppRegistry.registerComponent(appName, () => App);
