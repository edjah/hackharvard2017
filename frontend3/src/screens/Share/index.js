import React, { Component } from "react"
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Button
} from "react-native"
import PropTypes from "prop-types"
import QRCode from 'react-native-qrcode-svg';

export default class Share extends Component {
  static navigationOptions = {
    title: 'Share',
  }

  constructor(props) {
    super(props);
  }

  onRead = (e) => {
    alert(e);
  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <Text style={styles.header}>{"Hello World Share"}</Text>
        <View style={{width: 1000, height:1000}}>
        <QRCode value="hello world" size={300}/>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 10,
    padding: 20,
    backgroundColor: "#ababab",
  },
})
