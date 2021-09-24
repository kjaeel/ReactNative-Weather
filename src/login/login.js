import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View, 
} from 'react-native';
import styles from "./logincss";


export default class Login extends React.Component {
    constructor(props) {
      super(props);
    
    }


  forgotPassword() {
    this.props.navigation.navigate('home');
  }

  
  render() {
    
    return (
      <View style={styles.container}>
    
    <View style={styles.imgContainer}>
    
          <TouchableOpacity onPress={() => this.forgotPassword()}   style={styles.button}>
       
                <Text style={styles.btnText}>Check Weather ForeCast</Text>
              </TouchableOpacity>
      </View>
      </View>
    );
  }
}
