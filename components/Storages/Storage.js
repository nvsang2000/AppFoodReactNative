import AsyncStorage from '@react-native-async-storage/async-storage';
export const setData = async (_id, createdAt, email, password, username) => {
    try {
      await AsyncStorage.setItem('iduser', _id)
      await AsyncStorage.setItem('createdAt', createdAt)
      await AsyncStorage.setItem('email', email)
      await AsyncStorage.setItem('password', password)
      await AsyncStorage.setItem('username', username)
      // await AsyncStorage.setItem('access_token', accessToken)
      
    } catch(e) {
      console.log('fail save')
    }
}
export const accessToken = async (token) =>{
  try {
    await AsyncStorage.setItem('access_token', token)
    
  } catch(e) {
    console.log('fail save token')
  }
}

export const removeToken  = async()=>{
    try {
        await AsyncStorage.removeItem('access_token');
        return true;
    }
    catch(exception) {
        return false;
    }
}