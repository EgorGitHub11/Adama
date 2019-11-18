import {Dimensions, Linking} from 'react-native'
import call from 'react-native-phone-call'

const win = Dimensions.get('window')
export const h = win.height
export const w = win.width

export const openWhatsApp = (url,celNumber,playMarketUrl) => {
    celNumber = '+972585648883'
    playMarketUrl = "market://details?id=com.whatsapp" 
    url = `whatsapp://send?phone= ${celNumber}`;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
          Linking.openURL(url);
      } else {
        Linking.openURL(playMarketUrl);
      }
  });
  }
  
export  const openPhoneNumber = (args) => {
    args = {
      number: '077-9985020',
      prompt: false 
    }
    return( 
      call(args).catch(console.error)
    )
  }