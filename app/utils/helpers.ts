import moment from 'moment';

// export const generateId = () => Date.now().toString();


export const generateId = () => moment().format("YYYYMMDDHHmmssSSS");


import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions';

export { hp, wp, fp };

