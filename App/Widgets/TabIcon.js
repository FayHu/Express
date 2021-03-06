import React, {
  PropTypes,
} from 'react';
import {
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors, Metrics,Fonts } from '../Themes/'
const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  iconName:PropTypes.string
};

const TabIcon = (props) => (
  <View style={{flexDirection:'column',justifyContent:'center'}}>
    <Icon name={props.iconName} size={Metrics.icons.small} style={{ color: props.selected ? Colors.primary : Colors.white,textAlign:'center'}}/>
    <Text
      style={[{color: props.selected ? Colors.primary : Colors.white,textAlign:'center'},Fonts.style.small]}>
      {props.title}
    </Text>
  </View>
);

TabIcon.propTypes = propTypes;

export default TabIcon;
