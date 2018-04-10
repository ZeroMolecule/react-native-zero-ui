---
id: view
title: view
---

Just an extension to standard [Text](https://facebook.github.io/react-native/docs/text.html) component from [react-native](https://facebook.github.io/react-native/) with added support to styling through themes



### Usage


```jsx
import { View } from 'react-native-zero-ui';

<View styleName="flex center horizontal">
    <View styleName="flex"/> 
    <View styleName="flex"/>
</View>
```

---





## Predefined styles

Some styles are predefined within the plugin. You can add your in your own theme file. Only thing you need is to extend it through `zero.ui.View` key



### Usage

```js
const theme = {
    'zero.ui.View': {
        // my global custom styling for View
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
<View styleName="myStyle" />
```



### List of styles

- [`horizontal`](#horizontal)

- [`vertical`](#vertical)

- [`flex`](#flex)

- [`center`](#center)

- [`center-content`](#center-content)

- [`center-items`](#center-items)

- [`end-content`](#end-content)

- [`end-items`](#end-items)

- [`start-content`](#start-content)

- [`start-items`](#start-items)

- [`fill-width`](#fill-width)

- [`fill-height`](#fill-height)

  ​




#### `horizontal`

Makes child components distribute horizontally (flexbox row)

```javascript
flexDirection: 'row'
```



#### `vertical`

Makes child components distribute vertically (flexbox column)

```javascript
flexDirection: 'column'
```



#### `flex`

Fills parent flexbox with flex 1

```javascript
flex: 1
```



#### `center`

Centers child components (horizontally and vertically)

```javascript
justifyContent: 'center',
alignItems: 'center'
```



#### `center-content`

Makes child components center horizontally (flexbox row) or vertically (flexbox column)

```javascript
justifyContent: 'center'
```



#### `center-items`

Makes child components center vertically (flexbox row) or horizontally (flexbox column)

```javascript
alignItems: 'center'
```



#### `end-content`

Makes child components align right (flexbox row) or bottom (flexbox column)

```javascript
justifyContent: 'end'
```



#### `end-items`

Makes child components align bottom (flexbox row) or right (flexbox column)

```javascript
alignItems: 'end'
```



#### `start-content`

Makes child components align left (flexbox row) or top (flexbox column)

```javascript
justifyContent: 'start'
```



#### `start-items`

Makes child components align top (flexbox row) or left (flexbox column)

```javascript
alignItems: 'start'
```



#### `fill-width`

Makes component fill width of the parent component as much as possible

```javascript
width: '100%'
```



#### `fill-height`

Makes component fill height of the parent component as much as possible

```javascript
height: '100%'
```





## Props

> All properties are identical to those from [View](http://facebook.github.io/react-native/docs/view.html#props) component within [react-native](http://facebook.github.io/react-native)


