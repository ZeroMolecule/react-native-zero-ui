## Get Started

### Installation
**Note:** Version 0.5 brought major changes so please make sure you've read and understood the documentation before proceeding with updating the old one

If you want just the components, you need to add the plugin using 

  ```bash
  npm install react-native-zero-ui --save
  ```

   or 

  ```bash
  yarn add react-native-zero-ui
  ```
<br />
<br />

### Theme support 
Latest version of React Native Zero UI has simplified, standalone and [Context API](https://reactjs.org/docs/context.html) supported theming for your components.

We've decided to remove `styleName` way of styling components because it is not really "react native like". However, providing default styles for any of the components is enabled. You can even add custom named styling properties such as `titleStyle` in `<Button />` by prefixing it's key with `_` symbol within the theme. For example:

```ecmascript 6
const theme = {
  '#Button': {
    _titleStyle: { color: 'white' },
    backgroundColor: 'cyan',
  },
};
  ```

<br />
<br />

## Components Included

- [x] [Button](https://zeromolecule.github.io/react-native-zero-ui/button)
- [x] [ImageButton](https://zeromolecule.github.io/react-native-zero-ui/imageButton)
- [x] [Touchable](https://zeromolecule.github.io/react-native-zero-ui/touchable)

## Theme elements
- [x] [Theme](https://zeromolecule.github.io/react-native-zero-ui/theme)
- [x] [withTheme](https://zeromolecule.github.io/react-native-zero-ui/withTheme)

## Documentation

[View the full docs here](https://zeromolecule.github.io/react-native-zero-ui)

## Demo App

<!--Checkout the official [Zero UI App](https://expo.io/@dmacan/react-native-zero-ui-app) on Expo which uses all of the React Native Zero UI components.--> 

Additionally, take a look at the [example/](https://github.com/ZeroMolecule/react-native-zero-ui/tree/master/example) folder to view the implementation & run the RNE expo app locally.
