import React from 'react';
import { LogBox } from 'react-native';
import RootStack from './navigators/RootStack';
import TabProfile from './screens/HomeScreen/TabProfile'


// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

export default function App() {
  return <RootStack/>
}
