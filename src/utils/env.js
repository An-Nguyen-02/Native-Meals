import { Platform } from 'react-native';

const live = 'https://us-central1-nativemeals-2a57b.cloudfunctions.net/';
const local = 'http://localhost:5001/nativemeals-2a57b/us-central1/';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isIOS = Platform.OS === 'ios';
// only work following on IOS since Android dont allow http
export const host = isDevelopment || isIOS ? local : live;

export const isMock = isDevelopment;
