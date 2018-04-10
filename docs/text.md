---
id: text
title: text
---

Just an extension to standard [Text](https://facebook.github.io/react-native/docs/text.html) component from [react-native](https://facebook.github.io/react-native/) with added support to styling through themes



### Usage


```jsx
import { Text } from 'react-native-zero-ui';

<Text style={styles.spacingVertical} styleName="h1 center">
  Zero UI
</Text>

<Text styleName="h5 center">
  Really great component kit
</Text>

<Text styleName="center" style={styles.spacingVertical}>
  But it can always be better
</Text>
```

---





## Predefined styles

Some styles are predefined within the plugin. You can add your in your own theme file. Only thing you need is to extend it through `zero.ui.Text` key



### Usage

```js
const theme = {
    'zero.ui.Text': {
        // my global custom styling for Text
        '.myStyle': {
            // custom styling for myStyle class
        },
        defaultProps: {
            // my default props
        }
    }
}
```

```jsx
<Text styleName="myStyle" />
```



### List of styles

- [`h1`](#h1)
- [`h2`](#h2)
- [`h3`](#h3)
- [`h4`](#h4)
- [`h5`](#h5)
- [`h6`](#h6)
- [`center`](#center)




#### `h1`

Defines font size of 36

```javascript
fontSize: 36
```



#### `h2`

Defines font size of 28

```javascript
fontSize: 28
```



#### `h3`

Defines font size of 24

```javascript
fontSize: 24
```



#### `h4`

Defines font size of 20

```javascript
fontSize: 20
```



#### `h5`

Defines font size of 18

```javascript
fontSize: 18
```



#### `h6`

Defines font size of 16

```javascript
fontSize: 16
```



#### `center`

Makes text vertical alignment to be centered

```javascript
textAlign: 'center'
```



## Props

> All properties are identical to those from [Text](http://facebook.github.io/react-native/docs/text.html#props) component within [react-native](http://facebook.github.io/react-native)


