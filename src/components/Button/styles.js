// @flow
import { StyleSheet } from 'react-native';
import shadow from '../../styling/shadow';

export default StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#42c1ff',
    overflow: 'hidden',
    ...shadow.button,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});
