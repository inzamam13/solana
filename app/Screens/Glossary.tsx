import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
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
import { SOL } from "../assets";

const Glossary = () => {
  const [HASH, setHash] = useState(null);
  const [CONS, setCONSUMP] = useState(null);
  const [POWER, setPOWER] = useState(null);
  const [Dif, setDIF] = useState(null);
  const [POOL, setPOOL] = useState(null);
  const [live, setTotal] = useState(null);

  const getAllCoin = async () => {
    const url =
      "https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd";

    try {
      const response = await axios.get(url);
      console.log(response.data.litecoin);
      const Val = Object.values(response.data.litecoin);
      console.log(Val[0], "val");
      // Object.keys(response.data.litecoin)
      // if (response) {
      //   return Val[0] * Values;
      // }
      CALULATION(Val[0]);
    } catch (e) {
      console.log(e, "dd");
    }
  };
  const CALULATION = (bal) => {
    // getAllCoin();

    // console.log(bal, HASH, CONS, POWER, Dif, POOL, live, "getValue");
    const Profit = (HASH / CONS) * (POWER / 86400) * (1 - Dif);
    console.log(Profit, "PRRR");

    Alert.alert("Estimated Daily Reward", `${Profit}`, [
      {
        text: "Okay",
        onPress: () => {},
        style: "default",
      },
    ]);
  };
  const CLEAR = () => {
    console.log("djd");
    setCONSUMP(0), setDIF(0), setTotal(null), setHash(null);
    setPOWER(0);
    setPOOL(0);
    console.log("djd", HASH);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {/* <LinearGradient
        colors={["#27567B", "#05386B"]}
        style={{
          backgroundColor: Theme.colors.black,
          borderRadius: 30,
          width: "80%",
          height: 100,
          padding: 20,
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: Theme.colors.navbarActiveColor,
          }}
        >
          Litecoin Mining Calculator:
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
      </LinearGradient> */}
      <View style={{ height: 120 }}>
        <Image
          source={SOL}
          style={{ height: 200, width: 200, alignSelf: "center" }}
          resizeMode={"contain"}
        />
        {live && (
          <LinearGradient
            colors={["#27567B", "#05386B"]}
            style={{ height: 100, width: 300, borderRadius: 20, padding: 10 }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: Theme.colors.primary,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Estimated Daily Rewards
            </Text>
            <Text
              style={{
                alignSelf: "center",
                color: "#dee7e8",
                fontSize: 15,
                fontWeight: "bold",
                backgroundColor: Theme.colors.gray,
              }}
            >
              {live}
            </Text>
          </LinearGradient>
        )}
      </View>

      <View
        style={{
          backgroundColor: Theme.colors.primary,
          borderRadius: 30,
          width: "80%",
          height: 350,
          padding: 20,
          marginBottom: 10,
        }}
      >
        <Text
          style={{ color: Theme.colors.white, fontSize: 15, fontWeight: "600" }}
        >
          Network Hashrate:
        </Text>
        <View
          style={{
            height: 40,
            borderRadius: 10,
            justifyContent: "center",
            borderBottomColor: Theme.colors.sec,
            backgroundColor: "#dee7e8",
          }}
        >
          <CustomInput
            type={"numeric"}
            value={HASH}
            onChangeText={setHash}
            style={styles.input}
            INPUT={styles.INPUT}
          />
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: Theme.colors.white,
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Pool Hashrate:
          </Text>
          <View
            style={{
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
              backgroundColor: "#dee7e8",
            }}
          >
            <CustomInput
              type={"numeric"}
              value={CONS}
              onChangeText={setCONSUMP}
              style={styles.input}
              INPUT={styles.INPUT}
            />
          </View>
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: Theme.colors.white,
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Block Reward:
          </Text>
          <View
            style={{
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
              backgroundColor: "#dee7e8",
            }}
          >
            <CustomInput
              type={"numeric"}
              value={POWER}
              onChangeText={setPOWER}
              style={styles.input}
              INPUT={styles.INPUT}
            />
          </View>
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: Theme.colors.white,
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Pool Fees:
          </Text>
          <View
            style={{
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
              backgroundColor: "#dee7e8",
            }}
          >
            <CustomInput
              type={"numeric"}
              value={Dif}
              onChangeText={setDIF}
              style={styles.input}
              INPUT={styles.INPUT}
            />
          </View>
        </View>
        <View
          style={{
            height: 40,
            marginTop: 10,
            width: Dimensions.get("window").width / 1.5,
            alignSelf: "center",
            borderColor: Theme.colors.white,
            borderWidth: 2,
            borderRadius: 10,
            justifyContent: "center",
            backgroundColor: Theme.colors.black,
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
            disabled={Dif && HASH && CONS ? false : true}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={CALULATION}
          >
            <Text
              style={{
                color: Theme.colors.white,
                fontSize: 20,
                fontWeight: "700",
              }}
            >
              Calculate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          // width: Dimensions.get("window").width / 1.4,
          // flexDirection: "row",
          justifyContent: "center",
        }}
      ></View>
    </ScrollView>
  );
};

export default Glossary;

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: Dimensions.get("window").width / 1.43,

    marginLeft: 0,
    marginRight: 2,
  },
  INPUT: {
    marginLeft: 0,
    marginRight: 2,

    // paddingHorizontal: -10,
    // paddingVertical: units.height / 34,
    fontSize: 17,

    // marginTop: 12,
    flex: 1,
    color: Theme.colors.black,
  },
});
