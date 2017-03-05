// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    borderTopColor: Colors.primary,
    borderBottomColor: Colors.primary,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.primary
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
})
