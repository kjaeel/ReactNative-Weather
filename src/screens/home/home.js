/* eslint-disable react-native/no-inline-styles */
/*
 * Login page that allows user to login using email and password or a social provider
 */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,

  ScrollView, Dimensions,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import HomeNewsCard from '../../components/homeNewsCard';
import { HomeNewsText } from '../../components/homeNewsText';
import { TopBar } from '../../components/TopBar'
import Feather from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get('window');
import { UserContext } from '../../context';
import { AdBanner } from '../../components/adBanner';
export const Home = ({ navigation }) => {

  const [topMessage, setTopMessage] = useState('');
  const logo = require('../../assets/spash.png');
  const { user, setUser } = React.useContext(UserContext);
  const [deviceWidthCheck, setDeviceWidthCheck] = useState(400);

  const efile = require('../../assets/efile.png');
  const course = require('../../assets/course.png');
  const legal = require('../../assets/legal.png');
  const know = require('../../assets/know.png');
  const hero = require('../../assets/slider2.png');

  let array = {
    array: [
      {
        key: '1',
        // func: () => callSpecificFeature('Cheap'),
        image: "require('../../assets/slider2.png')",
        name: 'Home',
        text: 'Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'


      },
      {
        key: '2',
        // func: () => callSpecificFeature('London'),
        image: "require('../../assets/slider2.png')",
        name: 'Top News',
        text: 'Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '3',
        // func: () => callSpecificFeature('City'),
        image: require('../../assets/slider2.png'),
        name: 'Videos',
        text: 'Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },

      {
        key: '4',
        // func: () => callSpecificFeature('Wellness'),
        image: require('../../assets/slider2.png'),
        name: 'Education',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '5',
        // func: () => callSpecificFeature('N'),
        image: require('../../assets/slider2.png'),
        name: 'Interviews',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },

      {
        key: '5',
        // func: () => callSpecificFeature('N'),
        image: require('../../assets/slider2.png'),
        name: 'Interviews',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },

      {
        key: '5',
        // func: () => callSpecificFeature('N'),
        image: require('../../assets/slider2.png'),
        name: 'Interviews',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '5',
        // func: () => callSpecificFeature('N'),
        image: require('../../assets/slider2.png'),
        name: 'Interviews',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '5',
        // func: () => callSpecificFeature('N'),
        image: require('../../assets/slider2.png'),
        name: 'Interviews',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
      {
        key: '5',
        // func: () => callSpecificFeature('N'),
        image: require('../../assets/slider2.png'),
        name: 'Interviews',
        text: ' Budget 2023| India’s G-20 presidency unique opportunity to strengthen its role in world  economic order: Nirmala Sitharaman'
      },
    ],
  };



  useEffect(() => {
    // fetchUserBalances();

    console.log('DEVICE WIDTH', width);
    if (width === 360) {
      // console.log('XR');
      setDeviceWidthCheck(600);
    } else {
      // console.log('12');
      setDeviceWidthCheck(650);
    }

    console.log(user)
  }, []);

  return (

    <ScrollView style={styles.centered}>
      <TopBar />

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.hText}

      >

        {array.array.map(info => {

          return (
            // <HomeCategories
            //   key={info.key}
            //   onPressFunc={info.func}
            //   image={info.image}
            //   name={info.name}
            // />
            <Text style={styles.scrollText}>
              {info.name}

            </Text>
          );
        })}





      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5, height: 40,  marginRight: 4}}>
        <Text style={styles.staticText}>
          SUPREME COURT
        </Text>

{/* 
        <TouchableOpacity style={{ marginLeft: 13, backgroundColor: '#2D4191', borderRadius: 20, }}>
          <Image source={efile} />
        </TouchableOpacity> */}
         <Pressable style={styles.button} onPress={() => console.log('here')}>
      <Text style={styles.text}>e-Filing</Text>
    </Pressable>

    <Pressable style={styles.button} >
      <Text style={styles.text}>Legal Database</Text>
    </Pressable>

    <Pressable style={styles.button} >
      <Text style={styles.text}>Course</Text>
    </Pressable>

    <Pressable style={styles.button} >
      <Text style={styles.text}>Know the Law</Text>
    </Pressable>
        {/* <TouchableOpacity style={{ marginLeft: 13, backgroundColor: '#2D4191', borderRadius: 20, }}>
          <Image source={course} />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 13, backgroundColor: '#2D4191', borderRadius: 20, }}>
          <Image source={legal} />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 13, backgroundColor: '#2D4191', borderRadius: 20, }}>
          <Image source={know} />
        </TouchableOpacity> */}
      </ScrollView>


      {/* <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
          
                style={{marginTop: -10, height: deviceWidthCheck }}
               >
                { (
                  array.array.map(info => {
                    return (
                      <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
                        <HomeNewsCard
                          // flag={true}
                          key={info.name}
                          image={logo}
                          text={'info.Nameinfo.Nameinfo.Nameinfo.Nameinfo.Nameinfo.Nameinfo.Nameinfo.Name'}
                         
                        />
                      </TouchableOpacity>
                    );
                  })
           
                )}
              </ScrollView> */}

      <View>

        <Image source={hero} resizeMode="cover" style={{ width: widthPercentageToDP('100'), marginTop: -5 }} />


        <Text style={{ color: '#272727', fontFamily: 'Roboto-Bold', fontSize: 19, margin: 5, marginLeft: 12 }}
        numberOfLines={2}
        >
          Supreme Court Turns Down Plea for Uniform
          Age of Marriage, Advocates for Legislative
          Reform Instead
        </Text>



        <View style={{ flexDirection: 'row', marginLeft: 12, marginBottom: 10 }}>

          <View style={{ flex: 9, marginTop: 5, }}>
            <Text style={{ color: '#1E1E1E80', fontFamily: 'Roboto-Medium', fontSize: 10, }} >
              2 min read | 7 minutes age
            </Text>
          </View>

          <View style={{ flex: 3, flexDirection: 'row', marginTop: 2, }}>
            <TouchableOpacity>
              <Feather name="bookmark" size={25} color={'#000'} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Feather name="share-2" size={25} color={'#000'} style={{ marginLeft: 20 }} />
            </TouchableOpacity>

          </View>

        </View>

      </View>




      <ScrollView
        style={{ marginBottom: 10, marginTop: 10 }}
        contentContainerStyle={{ flexGrow: 1, }}
        horizontal={false}
      >
        {(
          array.array.map(info => {
            return (


              <HomeNewsText
                key={info.name}
                image={logo}
                text={info.text}
                // onPressNavigateFunc={() =>navigation.navigate('DetailsScreen')}
                onPressNavigateFunc={() => navigation.navigate('DetailsScreen')}
              />

            );
          })

        )}

      </ScrollView>
 
          <AdBanner />
   
      


    </ScrollView>
  );
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    //  justifyContent: 'center',
    //  alignContent: 'center',
    //   alignItems: 'center',
    zIndex: 1,
    backgroundColor: '#fff'
  },
  hText: {
    marginLeft: 16,
    marginRight: 24,
    // margin: 24,
    // marginBottom: 90
    // backgroundColor: 'red',
    height: 40

  },
  scrollText: {
    // margin: 10,

    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    // backgroundColor: 'red',
    height: 70
  },
  staticText: {
    marginLeft: 25,
    // marginBottom: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    marginTop: 3,
    color: '#024092'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 5,
    // paddingVertical: 5,
    paddingHorizontal: 5,

    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2D4191',
    // width: 58,
    height: 25,
    borderRadius: 30,
    marginLeft: 10
  },
  text: {
    fontSize: 12,
    // lineHeight: 21,
    fontWeight: 'bold',
    // letterSpacing: 0.25,
    color: 'white',
  }

});
