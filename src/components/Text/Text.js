import React from 'react';
import { Text } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import styles from './Text.style';

const ZeroText = (props) => (<Text {...props}/>);

export default connectStyle('zero.ui.Text', styles)(ZeroText);