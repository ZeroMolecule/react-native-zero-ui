---
id: button
title: Button
---

Component highly inspired by [`Button `](https://react-native-training.github.io/react-native-elements/docs/0.19.0/button.html) component from [`react-native-elements`](https://react-native-training.github.io/react-native-elements/). However, it has no external dependencies, so there is no out-of-the-box support for `Icon` component from [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons)

### Usage


```js
import { Button } from 'react-native-elements';

<Button
  title="My button"
/>

<Button
  title="Loading button"
  loading
  loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
  titleStyle={{ fontWeight: "700" }}
  buttonStyle={{
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }}
  containerStyle={{ marginTop: 20 }}
/>
```

---

### Props

**All properties are optional**

> Also receives all [TouchableNativeFeedback](http://facebook.github.io/react-native/docs/touchablenativefeedback.html#props) (Android) or [TouchableOpacity](http://facebook.github.io/react-native/docs/touchableopacity.html#props) (iOS) props


* [`Component`](#component)
* [`activityIndicatorStyle`](#activityIndicatorStyle)
* [`allowFontScaling`](#allowFontScaling)
* [`background`](#background)
* [`backgroundColor`](#backgroundColor)
* [`borderRadius`](#borderRadius)
* [`buttonStyle`](#buttonStyle)
* [`containerViewStyle`](#containerViewStyle)
* [`color`](#color)
* [`disabled`](#disabled)
* [`disabledStyle`](#disabledStyle)
* [`disabledTextStyle`](#disabledTextStyle)
* [`fontFamily`](#fontFamily)
* [`fontSize`](#fontSize)
* [`fontWeight`](#fontWeight)
* [`icon`](#icon)
* [`iconRight`](#iconRight)
* [`loading`](#loading)
* [`loadingRight`](#loadingRight)
* [`outline`](#outline)
* [`raised`](#raised)
* [`rounded`](#rounded)
* [`textEllipsizeMode`](#textEllipsizeMode)
* [`textNumberOfLines`](#textNumberOfLines)
* [`textStyle`](#textStyle)
* [`title`](#title)
* [`transparent`](#transparent)
* [`underlayColor`](#underlayColor)

---

# Reference

### `Component`

component for user interaction

|        Type         |                           Default                           |
| :-----------------: | :---------------------------------------------------------: |
| Touchable Component |`TouchableHighlight ` (ios) or `TouchableNativeFeedback ` (android) |

---

### `activityIndicatorStyle`

add additional styling for ActivityIndicator component used for displaying loading state of the button (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  `undefined`   |

---

### `allowFontScaling`

flag that disables or enables font scaling for the button title

|      Type      | Default |
| :------------: | :-----: |
| boolean |  `false`   |

---

### `background`

prop used for `TouchableNativeFeedback`

|      Type      | Default |
| :------------: | :-----: |
| object |  ripple (android API >= 21) or selectable background (API < 21) |

---

### `backgroundColor`

color used for buttons background. 

**It is recommended to use this prop for configuring background color instead of doing it through styles**

|      Type      | Default |
| :------------: | :-----: |
| color | `undefined` |

---

### `borderRadius`

radius used for button border

**It is recommended to use this prop instead going through usual styling, because this way shadow and highlight / ripple will be styled as well**

|      Type      | Default |
| :------------: | :-----: |
| number |  `0`   |

---

### `buttonStyle`

additional styling for button component

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `color`

color used for buttons text and loading indicator. 

**It is recommended to use this prop for configuring color instead of doing it through styles**

|      Type      | Default |
| :------------: | :-----: |
| color | `#ffffff` |

---

### `containerViewStyle`

additional styling for button container component

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  `undefined`   |

---

### `disabledStyle`

additional styling for button component in disabled state

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  `undefined`   |

---

### `disabledTextStyle`

additional styling for button text in disabled state

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  `undefined`   |

---

### `fontFamily`

font family used for button text

**It is recommended to use this prop for configuring font family instead of doing it through styles**

|      Type      | Default |
| :------------: | :-----: |
| string |  `undefined`   |

---

### `fontSize`

font size used for button text

**It is recommended to use this prop for configuring font family instead of doing it through styles**

|      Type      | Default |
| :------------: | :-----: |
| number |  `16`   |

---

### `fontWeight`

font weight used for button text

**It is recommended to use this prop for configuring font weight instead of doing it through styles**

|      Type      | Default |
| :------------: | :-----: |
| string |  `undefined`   |

---

### `icon`

component used for displaying icon in button


|      Type      | Default |
| :------------: | :-----: |
| Component |  `undefined`   |

---

### `iconRight`

component used for displaying right icon in button


|      Type      | Default |
| :------------: | :-----: |
| Component |  `undefined`   |

---

### `large`

flag that determines if button has bigger height and extra padding


|      Type      | Default |
| :------------: | :-----: |
| boolean |  `false`   |

---


### `loading`

prop to display a loading spinner

|  Type   | Default |
| :-----: | :-----: |
| boolean |  `false`   |

---

### `loadingRight`

prop to display a loading spinner on right size

|      Type      | Default |
| :------------: | :-----: |
| boolean |  `false`   |

---

### `outline`

flag that determines if button has any outline

|      Type      | Default |
| :------------: | :-----: |
| boolean |  `false`   |

---

### `raised`

flag that determines if button is displayed as raised (has shadow / elevation)

**It is recommended to use this prop for displaying shadow instead of 
doing it through styles. However, if you need any further customization of the shadow, you need to do it manually**

|      Type      | Default |
| :------------: | :-----: |
| boolean |  `false`   |

---

### `title`

button title (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `transparent`

flag that removes background from button

|  Type  | Default |
| :----: | :-----: |
| boolean |  `false`  |

---

### `underlayColor`

same prop from `TouchableHighlight` with overriden default value

|  Type  | Default |
| :----: | :-----: |
| color |  `transparent`  |

---