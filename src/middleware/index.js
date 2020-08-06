// import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
// import DeviceInfo from 'react-native-device-info';

export default () => {
  axios.interceptors.request.use(
    async (config) => {
      const formData = new FormData()
      const token = 'testToken'
      // await AsyncStorage.getItem('token')

      if (token) {
        if (config.data) {
          Object.keys(config.data).forEach((key) => {
            formData.append(key, config.data[key])
          })
        }
        config.headers.post['DEVICE-ID'] = 'testDeviceId'
        // DeviceInfo.getDeviceId();
        config.headers.post['X-API-KEY'] = token
        config.data = formData
      } else {
        if (config.data) {
          Object.keys(config.data).forEach((key) => {
            formData.append(key, config.data[key])
          })
        }
        config.headers.post['device-id'] = 'testDeviceId'
        // DeviceInfo.getDeviceId();
        config.headers.post['device-token'] = 'testDeviceToken'
        config.data = formData
      }
      // console.log('INTERCEPTOR', config.data)
      return config;
    },
    (error) => Promise.reject(error),
  );
};