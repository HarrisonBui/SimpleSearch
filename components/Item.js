import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button, Alert, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class Item extends React.Component {

  render () {
    console.log(this);
    return (
      <View style={{ flex: 1 }}>
      </View>

    );
  };
};

// const Header = (props) => {
//   const { headerTextStyle, viewStyle } = styles;
//
//   return (
//     <View style={viewStyle}>
//       <Text style={headerTextStyle}>{props.headerText}</Text>
//     </View>
//   );
// };
//
// const Card = (props) => {
//   return (
//     <View style={styles.containerStyle}>
//       {props.children}
//     </View>
//   );
// };
//
// const CardSection = (props) => {
//   return (
//     <View style={styles.containerStyle}>
//       {props.children}
//     </View>
//   );
// };
//
// const DisplayContainer = (props) => {
//   return (
//     <View style={styles.displayContainerStyle}>
//       {console.log(props)}
//       {props.children}
//     </View>
//   );
// };
//
// const DisplayTextContainer = (props) => {
//   return (
//     <View style={styles.displayTextContainerStyle}>
//       {props.children}
//     </View>
//   );
// };

// const InputContainer = (props) => {
//   return (
//     <View style={styles.inputContainerStyle}>
//       {props.children}
//     </View>
//   );
// };

const ButtonContainer = (props) => {
  return (
    <View style={styles.buttonContainerStyle}>
      {props.children}
    </View>
  );
};
