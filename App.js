import React from 'react';
import { LogBox } from 'react-native';
import RootStack from './navigators/RootStack';
import ListCategory from './screens/test'
//const {_v, _id, avata, description, name} = route.params.item
// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

export default function App() {
  return <RootStack/>
}
