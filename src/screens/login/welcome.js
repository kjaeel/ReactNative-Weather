/* eslint-disable react-native/no-inline-styles */
/**
 * Screen for handling the navigation flow of the what where why questions.
 * Quite unique design on this one, and it'll all be in one 'screen'
 */

import React, { useContext, useEffect, useState, useRef } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacityBase,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import FastImage from "react-native-fast-image";

import { UserContext } from "../../context";

import PaginationDot from "react-native-animated-pagination-dot";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export const Welcome = ({ navigation }) => {
  const { user, setUser, setTutorial } = React.useContext(UserContext);
  const [loader, setLoader] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const next = require("../../assets/next.png");
  const started = require("../../assets/Started.png");
  const [curPage, setCurPage] = useState(0);
  // const [curPage] = React.useState(0);
  const goHome = () => {
    // setLoader(true)
    // setTutorial(false);
    navigation.navigate("RegisterEditProfile");
  };

  const imageOne = () => {
    return (
      <View // Special animatable View
      >
        <ImageBackground
          resizeMode="contain"
          style={{
            width: widthPercentageToDP("100"),
            height: heightPercentageToDP("30"),
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 30,
            // opacity: 0.9,
          }}
          source={require("../../assets/welcome1.png")}
        ></ImageBackground>

        <Text
          style={{
            fontFamily: "Roboto-Semibold",
            fontSize: 32,
            textAlign: "center",
            marginLeft: 24,
            marginRight: 24,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Breaking legal news at your fingertips.
        </Text>

        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 18,
            textAlign: "center",
            marginLeft: 34,
            marginRight: 34,
            marginTop: 12,
            // lineHeight: 25,
          }}
        >
          Get access to accurate and objective reporting on the legal landscape,
          giving you the insights and knowledge you need to navigate the legal
          world with confidence.
        </Text>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 24,
          }}
        >
          <PaginationDot
            activeDotColor={"#024092"}
            curPage={curPage}
            maxPage={3}
            sizeRatio={1.5}
          />
        </View>
      </View>
    );
  };

  const imageTwo = () => {
    return (
      <View // Special animatable View
      >
        <ImageBackground
          resizeMode="contain"
          style={{
            width: widthPercentageToDP("100"),
            height: heightPercentageToDP("30"),
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 30,
            // opacity: 0.9,
          }}
          source={require("../../assets/welcome2.png")}
        ></ImageBackground>

        <Text
          style={{
            fontFamily: "Roboto-Semibold",
            fontSize: 32,
            textAlign: "center",
            marginLeft: 24,
            marginRight: 24,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Legal news that matters to you
        </Text>

        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 18,
            textAlign: "center",
            marginLeft: 34,
            marginRight: 34,
            marginTop: 12,
            lineHeight: 25,
          }}
        >
          Provides you with easy-to-digest coverage of the latest legal
          developments, so you can stay informed and engaged with the legal
          world.
        </Text>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 24,
          }}
        >
          <PaginationDot
            activeDotColor={"#024092"}
            curPage={curPage}
            maxPage={3}
            sizeRatio={1.5}
          />
        </View>
      </View>
    );
  };

  const imageThree = () => {
    return (
      <View // Special animatable View
      >
        <ImageBackground
          resizeMode="contain"
          style={{
            width: widthPercentageToDP("100"),
            height: heightPercentageToDP("30"),
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 30,
            // opacity: 0.9,
          }}
          source={require("../../assets/welcome3.png")}
        ></ImageBackground>

        <Text
          style={{
            fontFamily: "Roboto-Semibold",
            fontSize: 32,
            textAlign: "center",
            marginLeft: 24,
            marginRight: 24,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Personalized Categories
        </Text>

        <Text
          style={{
            fontFamily: "Roboto-Regular",
            fontSize: 18,
            textAlign: "center",
            marginLeft: 34,
            marginRight: 34,
            marginTop: 12,
            lineHeight: 25,
          }}
        >
          Customize your legal news experience with our app's personalized
          categories for the general public, students, and lawyers.
        </Text>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 24,
          }}
        >
          <PaginationDot
            activeDotColor={"#024092"}
            curPage={curPage}
            maxPage={3}
            sizeRatio={1.5}
          />

            <TouchableOpacity
              onPress={() => navigation.navigate("CreateNewAcc")}
              style={{
                width: 174,
                height: 47,
                backgroundColor: "#024092",
                borderRadius: 30,
                marginTop: 30
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  textAlignVertical: "center",
                  alignItems: "center",
                  marginTop: 10,
                  fontFamily: "Roboto-Medium",
                  color: "#E8EFFD",
                  fontSize: 18,
                }}
              >
                Get Started
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: "#F7FBFE", height: height }}>
      <View
        style={{
          position: "absolute",
          // left: heightPercentageToDP('5'),
          bottom: 40,
          flex: 1,
          flexDirection: 'row',
          zIndex: 10,
          // backgroundColor: 'black',
          margin: 30
        }}
      >
        {pageIndex === 3 ? (
        
          <View/>
        ) : (
          <>
            <View style={{ flex: 7 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateNewAcc")}
                style={{ marginLeft: widthPercentageToDP('3'), marginTop: 8}}
              >
                <Text
                  style={{
                    color: "#0065ff",
                    fontFamily: "Roboto-Bold",
                    fontSize: 22,
                  }}
                >
                  Skip
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 3 }}></View>
            <View style={{ flex: 6 }}>
              {/* <TouchableOpacity onPress={() => [setPageIndex(pageIndex - 1)]}>
                               <Text>ssssssssssss</Text>
                           </TouchableOpacity> */}

              <TouchableOpacity
                onPress={() => [
                  setPageIndex(pageIndex + 1),
                  setCurPage(curPage + 1),
                ]}
                style={{
                  width: 117,
                  height: 47,
                  backgroundColor: "#024092",
                  borderRadius: 30,
                  marginLeft: heightPercentageToDP('2')
                }}
              >
                {/* <Image source={next} style={{ width: 117, height: 47 }} /> */}
                <Text
                  style={{
                    textAlign: "center",
                    textAlignVertical: "center",
                    alignItems: "center",
                    marginTop: 10,
                    fontFamily: "Roboto-Medium",
                    color: "#E8EFFD",
                    fontSize: 18,
                  }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      {pageIndex === 1 && imageOne()}

      {pageIndex === 2 && imageTwo()}

      {pageIndex === 3 && imageThree()}
      {/* 

    {pageIndex === 2 && imageTwo()}

    {pageIndex === 3 && imageFour()}
 
    {pageIndex === 4 && goHome()} */}

      {/* </Animated.View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  pictures: {
    height: 62,
    width: 62,
    borderRadius: 30,
    marginBottom: 5,
  },
  input: {
    height: 40,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderColor: "white",
    color: "#000",
    fontSize: 16,
  },
});
