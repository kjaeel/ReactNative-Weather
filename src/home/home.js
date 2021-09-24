import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,

} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from "./homecss";


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feels: [],
      humidity: [],
      city: [],
      icon: [],
      desciption: []

    }

  }

  componentDidMount() {
    // this.fetchweather()
    fetch('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=a76804ed884d453c2c13d7d14ddc96c4')
      .then(response => response.json())
      .then(data => this.setState({
        feels: data.main.feels_like,
        humidity: data.main.humidity,
        city: data.name,
        icon: data.weather[0].icon,
        desciption: data.weather[0].description
      }));


  }


  // {"base": "stations", "clouds": {"all": 81}, "cod": 200, "coord": {"lat": 18.5196, "lon": 73.8553}, "dt": 1632453975, "id": 1259229, "main": {"feels_like": 297.35, "grnd_level": 948, "humidity": 79, "pressure": 1010, "sea_level": 1010, "temp": 296.86, "temp_max": 296.86, "temp_min": 296.86}, "name": "Pune", "sys": {"country": "IN", "sunrise": 1632444826, "sunset": 1632488372}, "timezone": 19800, "visibility": 10000, "weather": [{"description": "broken clouds", "icon": "04d", "id": 803, "main": "Clouds"}], "wind": {"deg": 261, "gust": 2.98, "speed": 2.19}}



  render() {

   
    return (
      <ScrollView>
      <View style={styles.container}>
    

        <Text style={styles.container}>

          Feels Like - {this.state.feels}

        </Text>

        <Text style={styles.container}>

          Humidity Is - {this.state.humidity}

        </Text>

        <Text style={styles.container}>

          Location is - {this.state.city}

        </Text>
        {console.log(this.state.icon)}

        <View style={styles.imgContainer}>
          <Image
           style={styles.img}
            source={{ uri: "http://openweathermap.org/img/w/" + this.state.icon + ".png" }}

          />
        </View>

        <Text style={styles.container}>

          Description - {this.state.desciption}

        </Text>

      </View>
      </ScrollView>
    );
  }
}
