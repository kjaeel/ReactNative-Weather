/* eslint-disable react-native/no-inline-styles */
/*
 * Login page that allows user to login using email and password or a social provider
 */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,

  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,

  Alert, Modal, Pressable,
} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export const PaymentScreen = ({ navigation }) => {

  const [topMessage, setTopMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  const payments = require('../../assets/payment.png');
  const popup = require('../../assets/popup.png');
  console.log(selected1)


  useEffect(() => {

    setTimeout(() => {
      setModalVisible(true)
      }, 500);


  
  }, []);


  return (

    <ScrollView style={styles.centered}>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginLeft: 12, marginTop: 12, marginRight: 0, backgroundColor: 'white',
        }}
      >


        <MaterialIcons name="arrow-back-ios" size={30} color={'#000'} />
      </TouchableOpacity>


      <Image source={payments} style={styles.paymentImage} />

      <Text style={styles.upgradeText}>
        Upgrade to Premium
      </Text>

      <Text style={styles.upgradeText1}>
        Unlimited resources and many premium quality
        news and information related Law
      </Text>


      <View style={styles.row}>


        <TouchableOpacity
          onPress={() => { setSelected1(true), setSelected2(false), setSelected3(false) }}
          style={{ ...styles.threeMonths, backgroundColor: selected1 === true ? '#024092' : '#fff', }}
        >
          <View style={{ ...styles.middleText, backgroundColor: selected1 === true ? '#fff' : '#024092' }}>
            <Text style={{ ...styles.innertext, color: selected1 === true ? '#024092' : '#fff' }}>
              Free 3 Months
            </Text>
          </View>
          <Text style={{ ...styles.monthPlan1, fontSize: 35, color: selected1 === true ? '#fff' : '#000' }}>
            3

          </Text>
          <Text style={{ ...styles.monthPlan1, fontSize: 15, color: selected1 === true ? '#fff' : '#000' }}>
            Months
          </Text>

          <Text style={{ ...styles.monthPlan1, fontSize: 19, color: selected1 === true ? '#fff' : '#000' }}>
            Free Trial
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.threeMonths, width: 135, height: 122, marginTop: 0, backgroundColor: selected2 === true ? '#024092' : '#fff', }}
          onPress={() => { setSelected1(false), setSelected2(true), setSelected3(false) }}>
          <View style={{ ...styles.middleText, backgroundColor: selected2 === true ? '#fff' : '#024092' }}>
            <Text style={{ ...styles.innertext, color: selected2 === true ? '#024092' : '#fff' }}>
              Save 33%
            </Text>
          </View>
          <Text style={{ ...styles.monthPlan1, fontSize: 35, color: selected2 === true ? '#fff' : '#000' }}>
            6

          </Text>
          <Text style={{ ...styles.monthPlan1, fontSize: 15, color: selected2 === true ? '#fff' : '#000' }}>
            Months
          </Text>

          <Text style={{ ...styles.monthPlan1, fontSize: 14, color: selected2 === true ? '#fff' : '#000' }}>
            Rs. 599 + GST
          </Text>
        </TouchableOpacity>



        <TouchableOpacity
          style={{ ...styles.threeMonths, backgroundColor: selected3 === true ? '#024092' : '#fff', }}
          onPress={() => { setSelected1(false), setSelected2(false), setSelected3(true) }}
        >
          <View style={{ ...styles.middleText, backgroundColor: selected3 === true ? '#fff' : '#024092' }}>
            <Text style={{ ...styles.innertext, color: selected3 === true ? '#024092' : '#fff' }}>
              Save 45%
            </Text>
          </View>
          <Text style={{ ...styles.monthPlan1, fontSize: 35, color: selected3 === true ? '#fff' : '#000' }}>
            12

          </Text>
          <Text style={{ ...styles.monthPlan1, fontSize: 15, color: selected3 === true ? '#fff' : '#000' }}>
            Months
          </Text>

          <Text style={{ ...styles.monthPlan1, fontSize: 14, color: selected3 === true ? '#fff' : '#000' }}>
            Rs. 999 + GST
          </Text>
        </TouchableOpacity>








      </View>

      <TouchableOpacity style={styles.freeTrial}>
      <View style={styles.row}>
        <View>
          <TouchableOpacity>
            <Text style={styles.trialtext1}>
              Get 3 Months
            </Text>
          </TouchableOpacity>
        </View>

        <View>
        <Text style={styles.trialtext2}>
            Free Trial
          </Text>
        </View>

      </View>
      </TouchableOpacity>



      <Text style={styles.faq}>
      Does My Subscription Auto Renew?
      </Text>


      <View style={{width: '80%', alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 100}}>
      <Text style={styles.ans}>
      Yes, You can disable this at any time with just 
one tab in the play store.
      </Text>
      </View>




      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
      <Image source= {popup}/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>

    </ScrollView>
  );
};
const styles = StyleSheet.create({
  centered: {
    // flex: 1,

    // zIndex: 1,
    backgroundColor: '#fff'
  },

  row: {
    flexDirection: 'row',


    alignSelf: 'center',
    marginTop: 20,

  },
  paymentImage: {
    width: 302,
    height: 291,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  upgradeText: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Roboto-Bold',
    color: '#1E1E1E',
    fontSize: 27
  },
  upgradeText1: {
    textAlign: 'center',
    // marginTop: 10,
    fontFamily: 'Roboto-Regular',
    color: '#000',
    fontSize: 16
  },
  threeMonths: {
    width: 97,
    height: 114,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 15,
    margin: 5,
    // backgroundColor: selected1 = true ? '#024092': '#fff',
    marginTop: 12
  },
  middleText: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 68,
    height: 25,
    borderRadius: 17,
    backgroundColor: 'white',
    marginTop: -10,
    color: '#024092',
    borderColor: 'black',
    borderWidth: 1
  },
  middleText1: {

    marginBottom: 0,

  },
  innertext: {
    fontSize: 9,
    fontFamily: 'Roboto-SemiBold',
    alignItems: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: 5
  },
  monthPlan1: {
    color: 'white',
    fontSize: 'Roboto-SemiBold',
    fontSize: 14,
    textAlign: 'center'
  },
  freeTrial: {
    width: '80%',
    height: 60,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FF1A1A',
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 40
  },
  trialtext1: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center'
  },
  trialtext2: {
    color: 'white',
    fontFamily: 'Roboto-MediumItalic',
    fontSize: 18,
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    marginLeft: 5
  },
  faq: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    textAlign: 'center',
    color: '#EF2F2F',
    // width: '80%'
  },
  ans: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: '#000000',
    // marginBottom: 50
    // width: '80%'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },


});
