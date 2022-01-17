import { StyleSheet } from 'react-native';
import { default as Fonts } from './Fonts';
import Colors from './Colors';

export default StyleSheet.create({
  blueText: {
    color: Colors.PRIMARY,
    fontSize: 20,
    lineHeight: 27,
  },
  errorMsg: {
    color: Colors.ERROR_TEXT,
    fontSize: 14,
    lineHeight: 18,
    marginTop: 15,
    textAlign: 'center',
  },
  fontSize14: {
    fontSize: 14,
  },
  highlight: {
    backgroundColor: Colors.HIGHLIGHT,
  },
  linkText: {
    color: Colors.PRIMARY,
    textDecorationLine: 'underline',
  },
  mainButtonText: {
    fontSize: 18,
  },
  modalText: {
    color: Colors.SECONDARY_TEXT,
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
  },
  paragraph: {
    color: Colors.GRAY_TEXT,
    fontFamily: Fonts.regular,
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 20,
  },
  rowView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text18: {
    fontSize: 18,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  titleText: {
    color: Colors.BLACK,
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
  },
  whiteText: {
    color: Colors.WHITE,
  },
});
