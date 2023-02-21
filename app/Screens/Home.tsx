import {
  Dimensions,
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

const Home = () => {
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
  const CALULATION = async (bal) => {
    // getAllCoin();
    console.log(bal, HASH, CONS, POWER, Dif, POOL, live, "getValue");
    const Profit =
      ((HASH * 12.5) / ((Dif * 2) ^ 32)) *
      (86400 / (1 + POOL)) *
      (bal - (CONS * POWER) / 1000);
    console.log(Profit, "PRRR");
    setTotal(Profit);
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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearGradient
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
      </LinearGradient>
      <View
        style={{
          backgroundColor: Theme.colors.black,
          borderRadius: 30,
          width: "80%",
          height: 400,
          padding: 20,
          marginBottom: 10,
        }}
      >
        <Text
          style={{ color: Theme.colors.white, fontSize: 15, fontWeight: "600" }}
        >
          Lite Coin Hashrate:
        </Text>
        <LinearGradient
          colors={["#27567B", "#05386B"]}
          style={{
            height: 40,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <CustomInput
            type={"numeric"}
            value={HASH}
            onChangeText={setHash}
            style={styles.input}
            INPUT={styles.INPUT}
          />
        </LinearGradient>
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: Theme.colors.white,
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Power Consumption in watt:
          </Text>
          <LinearGradient
            colors={["#27567B", "#05386B"]}
            style={{
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <CustomInput
              type={"numeric"}
              value={CONS}
              onChangeText={setCONSUMP}
              style={styles.input}
              INPUT={styles.INPUT}
            />
          </LinearGradient>
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: Theme.colors.white,
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Power Cost Per KWH::
          </Text>
          <LinearGradient
            colors={["#27567B", "#05386B"]}
            style={{
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <CustomInput
              type={"numeric"}
              value={POWER}
              onChangeText={setPOWER}
              style={styles.input}
              INPUT={styles.INPUT}
            />
          </LinearGradient>
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: Theme.colors.white,
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Difficulty:
          </Text>
          <LinearGradient
            colors={["#27567B", "#05386B"]}
            style={{
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <CustomInput
              type={"numeric"}
              value={Dif}
              onChangeText={setDIF}
              style={styles.input}
              INPUT={styles.INPUT}
            />
          </LinearGradient>
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              color: Theme.colors.white,
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            Pool Fee:
          </Text>
          <LinearGradient
            colors={["#27567B", "#05386B"]}
            style={{
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
              // paddingLeft: 10,
            }}
          >
            <CustomInput
              type={"numeric"}
              value={POOL}
              onChangeText={setPOOL}
              style={styles.input}
              INPUT={styles.INPUT}
            />
          </LinearGradient>
        </View>
      </View>
      <View
        style={{
          // width: Dimensions.get("window").width / 1.4,
          // flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* <LinearGradient
          colors={["#27567B", "#05386B"]}
          style={{
            height: 40,
            width: 100,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            // disabled={gender ? false : true}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={CLEAR}
          >
            <Text
              style={{
                color: Theme.colors.white,
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              Clear
            </Text>
          </TouchableOpacity>
        </LinearGradient> */}
        <LinearGradient
          colors={["#27567B", "#053"]}
          style={{
            height: 40,
            width: Dimensions.get("window").width / 1.4,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            disabled={POOL && HASH && CONS ? false : true}
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
              Convert
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Home;

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
  },
  INPUT: {
    marginLeft: 0,
    marginRight: 2,
    // paddingHorizontal: -10,
    // paddingVertical: units.height / 34,
    fontSize: 17,

    // marginTop: 12,
    flex: 1,
    color: "#fff",
  },
});
