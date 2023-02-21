import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { getLIST } from "../services/ApiCalling";
import { Theme } from "../theme";
import { API_URL, ENDPOINTS } from "../utils/helpers";
import axios from "axios";
import { TextInput } from "react-native-gesture-handler";
import CustomInput from "../UI/Custominput";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import { CONVERT, SOL } from "../assets";

const Convertor = () => {
  const [invest, setHash] = useState(null);
  const [Growth, setCONSUMP] = useState(null);
  const [Period, setPOWER] = useState(null);
  const [pool, setPool] = useState(null);
  const [live, setTotal] = useState(null);

  const getAllCoin = () => {
    // getAllCoin();

    console.log(invest, Growth, Period, live, "getValue");
    const Profit = (invest / Growth) * (Period / 86400) * (1 - pool);
    console.log(Profit, "PRRR");

    Alert.alert("Estimated Daily Reward", `${Profit}`, [
      {
        text: "Okay",
        onPress: () => {},
        style: "default",
      },
    ]);

    // (Hashrate / Network Difficulty) * (Block Reward / 86400)
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
            color: Theme.colors.navbarActiveColor,
          }}
        ></Text>
        <Image
          source={SOL}
          style={{ height: 200, width: 200 }}
          resizeMode={"contain"}
        />
      </View>

      <View
        style={{
          // backgroundColor: Theme.colors.primaryColorDark,
          borderRadius: 30,
          // width: "80%",
          height: 240,
          padding: 20,
          marginVertical: 30,
          justifyContent: "center",
        }}
      >
        <Text
          style={{ color: Theme.colors.black, fontSize: 15, fontWeight: "600" }}
        >
          Hashrate:
        </Text>
        <View
          style={{
            height: 70,
            borderRadius: 10,
            justifyContent: "center",
            borderColor: Theme.colors.touchableHighlightUnderlayColor,
          }}
        >
          <CustomInput
            type={"numeric"}
            onChangeText={setHash}
            style={[styles.input, { bordercolor: Theme.colors.primary }]}
            INPUT={styles.INPUT}
          />
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: Theme.colors.black,
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Network Difficulty:
          </Text>
          <View
            style={{
              height: 70,
              borderRadius: 10,
              justifyContent: "center",
              borderColor: Theme.colors.touchableHighlightUnderlayColor,
            }}
          >
            <CustomInput
              type={"numeric"}
              onChangeText={setCONSUMP}
              style={styles.input}
              INPUT={styles.INPUT}
              border={Theme.colors.primary}
            />
          </View>
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: Theme.colors.black,
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Block Reward:
          </Text>
          <View
            style={{
              height: 70,
              width: 290,
              borderRadius: 10,
              justifyContent: "center",
              // alignSelf:'center',
              borderColor: Theme.colors.touchableHighlightUnderlayColor,
            }}
          >
            <CustomInput
              type={"numeric"}
              onChangeText={setPOWER}
              style={styles.input}
              INPUT={styles.INPUT}
              border={Theme.colors.green}
            />
          </View>

          {live && (
            <LinearGradient
              colors={["#27567B", "#05386B"]}
              style={{
                backgroundColor: Theme.colors.black,
                borderRadius: 30,
                width: "100%",
                height: 70,
                padding: 20,
                // marginBottom: 10,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: Theme.colors.navbarActiveColor,
                }}
              >
                Estimated Daily Rewards:
              </Text>

              {live && (
                <View style={{ backgroundColor: "#fff", borderRadius: 5 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "700",
                      color: Theme.colors.navbarActiveColor,
                    }}
                  >
                    {live}
                  </Text>
                </View>
              )}
            </LinearGradient>
          )}
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: Theme.colors.black,
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Pool Fee:
          </Text>
          <View
            style={{
              height: 70,
              width: 290,
              borderRadius: 10,
              justifyContent: "center",
              // alignSelf:'center',
              borderColor: Theme.colors.touchableHighlightUnderlayColor,
            }}
          >
            <CustomInput
              type={"numeric"}
              onChangeText={setPool}
              style={styles.input}
              INPUT={styles.INPUT}
              border={Theme.colors.primaryColorDark}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          // width: Dimensions.get("window").width / 1.4,
          // flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 40,
            width: Dimensions.get("window").width / 1.4,
            backgroundColor: Theme.colors.green,
            borderRadius: 10,
            justifyContent: "center",
            marginVertical: 50,
            marginBottom: 100,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <TouchableOpacity
            disabled={invest && Growth && Period ? false : true}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={getAllCoin}
          >
            <Text
              style={{
                color: Theme.colors.white,
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              Calculate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Convertor;

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 60,
    marginLeft: 0,
    marginRight: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // bordercolor: Theme.colors.primary,
    // borderWidth: 1,
  },
  INPUT: {
    // marginLeft: 0,
    marginRight: 2,
    // width:200,
    // paddingHorizontal: -10,
    // paddingVertical: units.height / 34,
    fontSize: 17,

    // marginTop: 12,
    // flex: 1,
    color: Theme.colors.sec,
  },
});
