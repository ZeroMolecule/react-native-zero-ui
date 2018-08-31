// @flow
import shadow from '../../styling/shadow';

export default {
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#42c1ff',
    overflow: 'hidden',
    ...shadow.button,
  },
  title: {
    fontSize: 16,
    color: '#fff',
  },
};
