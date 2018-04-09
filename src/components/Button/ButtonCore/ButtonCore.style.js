import { Platform, StyleSheet } from 'react-native';
import colors from '../../../styling/colors';

export const stylesObject = {
  container: {
    marginLeft: 15,
    marginRight: 15,
  },
  button: {
    padding: 19,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
  small: {
    padding: 12,
  },
  smallFont: {
    fontSize: 14,
  },
  activityIndicatorStyle: {
    marginHorizontal: 10,
    height: 0,
  },
  raised: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {
          height: 1,
          width: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        backgroundColor: '#fff',
        elevation: 2,
      },
    }),
  },
};

export default StyleSheet.create(stylesObject);
