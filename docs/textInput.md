---
id: textInput
title: textInput
---

Just an extension to standard [TextInput](https://facebook.github.io/react-native/docs/textinput.html) component from [react-native](https://facebook.github.io/react-native/) with added support to styling through themes



### Usage


```jsx
import { TextInput } from 'react-native-zero-ui';

<TextInput
  value={this.state.something}
  placeholder="Write something here"
/>
```

---





## Predefined styles

No are predefined within the plugin. You can add your in your own theme file. Only thing you need is to extend it through `zero.ui.TextInput` key



### Usage

```js
const theme = {
    'zero.ui.TextInput': {
        // my global custom styling for TextInput
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
<TextInput styleName="myStyle" />
```



### List of styles

> No predefined styles are available at the moment



## Props

> All properties are identical to those from [Text](http://facebook.github.io/react-native/docs/text.html#props) component within [react-native](http://facebook.github.io/react-native)


