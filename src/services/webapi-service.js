import { Platform } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = Platform.OS == 'web' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';
export const BASE_URL_AUTH = Platform.OS == 'web' ? 'http://localhost:3000/660' : 'http://10.0.2.2:3000/660';

const onRequest = async(config) => {
    const token = await AsyncStorage.getItem('@TOKEN_KEY');
    if(token && token != 'undefined'){
      config.headers.Authorization = `Bearer ${token}`;
    }else{console.log('Chamada sem token')}
    return config;
  }
  
  const setupInterceptorsTo = (axiosInstance) => {
    axiosInstance.interceptors.request.use(onRequest);
    return axiosInstance;
  }
  
  const API = axios.create();
  setupInterceptorsTo(API);
  export default API;