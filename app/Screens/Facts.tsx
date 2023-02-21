import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { data, Gloss } from "../utils/Data";
import { Theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import { BULK, DID, SOL } from "../assets";

import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
const Facts = () => {
  const height = useBottomTabBarHeight();
  const [mining, setmining] = useState({
    cloud: true,
    pool: false,
  });
  const setval = (value: string) => {
    if (value === "cloud") {
      setmining({ pool: false, cloud: true });
    } else if (value === "pool") {
      setmining({ cloud: false, pool: true });
    }
  };
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 5,
          flexGrow: 1,
        }}
      >
        <View>
          <View
            style={{
              height: 200,
              width: Dimensions.get("window").width / 1.1,
              backgroundColor: "#0063FF",
              alignSelf: "center",
              marginTop: 2,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <Image
              source={DID}
              resizeMode={"contain"}
              style={{ height: 200, width: 200 }}
            />
            <View
              style={{
                marginHorizontal: 10,
                backgroundColor: Theme.colors.primary,
                height: 40,
                width: 140,
                alignSelf: "flex-start",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "600" }}>
                Solona Mining
              </Text>
            </View>
          </View>

          <ScrollView
            horizontal
            style={{
              flexDirection: "row",
              marginHorizontal: 2,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                height: 200,
                width: Dimensions.get("window").width / 1.4,
                backgroundColor: "#0063FF",
                alignSelf: "center",
                marginTop: 2,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                flexDirection: "row",
                marginHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 15, color: Theme.colors.primary }}>
                Solana is a proof-of-stake (PoS) blockchain that uses a
                consensus mechanism called Proof-of-History (PoH) to achieve
                high transaction throughput and low latency. As a result, Solana
                can process up to 65,000 transactions per second, which is
                significantly faster than most other blockchains.
              </Text>
            </View>
            <View
              style={{
                height: 200,
                width: Dimensions.get("window").width / 1.4,
                backgroundColor: "#0063FF",
                alignSelf: "center",
                marginTop: 2,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                flexDirection: "row",
                marginRight: 10,
              }}
            >
              <Text style={{ fontSize: 15, color: Theme.colors.primary }}>
                In order to mine Solana, you must participate in the network as
                a validator, who helps validate transactions and add new blocks
                to the blockchain. Validators are rewarded with SOL, the native
                cryptocurrency of the Solana blockchain, for their contributions
                to the network.
              </Text>
            </View>
            <View
              style={{
                height: 200,
                width: Dimensions.get("window").width / 1.4,
                backgroundColor: "#0063FF",
                alignSelf: "center",
                marginTop: 2,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                marginRight: 10,
                // flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 15, color: Theme.colors.primary }}>
                There are two primary methods for mining Solana: pool mining and
                cloud mining. Let's take a look at each of these methods in more
                detail.
              </Text>
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 10,
              marginHorizontal: 13,
            }}
          >
            <TouchableOpacity
              onPress={() => setval("cloud")}
              style={{
                height: 30,
                width: 110,
                backgroundColor: mining.cloud
                  ? Theme.colors.primary
                  : Theme.colors.white,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
            >
              <Text
                style={{
                  color: !mining.cloud
                    ? Theme.colors.primary
                    : Theme.colors.white,
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Cloud Mining{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setval("pool")}
              style={{
                height: 30,
                width: 100,
                backgroundColor: mining.pool
                  ? Theme.colors.primary
                  : Theme.colors.white,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: !mining.pool
                    ? Theme.colors.primary
                    : Theme.colors.white,
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Pool Mining{" "}
              </Text>
            </TouchableOpacity>
          </View>
          
            <>
              <View
                style={{
                  borderColor: Theme.colors.primary,
                  borderRadius: 20,
                  borderWidth: 2,
                  padding: 10,
                  width: Dimensions.get("window").width / 1.1,
                  alignSelf: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  marginBottom: 20,
                }}
              >
                {mining.cloud?
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "600",
                    color: Theme.colors.yellowDark,
                  }}
                >
                  Cloud mining involves renting computing power from a
                  third-party provider and using it to run a validator node on
                  the Solana network. This method is ideal for validators who do
                  not have the resources to run their own hardware or who prefer
                  not to deal with the technical details of setting up and
                  maintaining a node.
                  {"\n"}
                  <Text
                    style={{
                      color: Theme.colors.black,
                      backgroundColor: Theme.colors.primary,
                    }}
                  >
                    To get started with cloud mining, you will need to follow
                    these steps:
                  </Text>
                </Text>:
                <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  color: Theme.colors.yellowDark,
                }}
              >
                Pool mining involves joining a group of other validators to combine your computing power and increase your chances of being chosen to validate transactions and add blocks to the blockchain. This method is ideal for smaller-scale validators who may not have the resources to operate their own full node.
                {"\n"}
                <Text
                  style={{
                    color: Theme.colors.black,
                    backgroundColor: Theme.colors.primary,
                  }}
                >
                 To get started with pool mining, you will need to follow these steps:
                </Text>
              </Text>
                }
              </View>
            {mining.cloud? 
            <>
            {data.map((item, index) => {
                let col = index * 2.78;
                console.log(col);
                return (
                  <>
                    <View
                      style={{
                        backgroundColor: Theme.colors.sec,
                        height: 30,
                        marginLeft: 10,
                        width: 120,
                        borderRadius: 5,
                        top: 10,
                        zIndex: 2,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: Theme.colors.primary,
                          fontSize: 20,
                          fontWeight: "bold",
                        }}
                      >
                        Step{index + 1}{" "}
                      </Text>
                    </View>
                    <View
                      style={{
                        borderRadius: 5,
                        // height: 100,
                        padding: 20,
                        width: Dimensions.get("window").width / 1.1,
                        alignSelf: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        marginBottom: 10,
                        paddingHorizontal: 5,
                        backgroundColor: "#dee7e8",
                      }}
                    >
                      {/* <View
                style={{
                  borderBottomColor: Theme.colors.black,
                  borderBottomWidth: 1,
                }}
              > */}

                      <View
                        style={{
                          height: 55,
                          width: 55,
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: Theme.colors.white,
                          borderRadius: 10,
                        }}
                      >
                        <Image
                          source={SOL}
                          resizeMode={"contain"}
                          style={{ height: 50, width: 50 }}
                        />
                      </View>
                      <View style={{ width: 280, paddingLeft: 4 }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: Theme.colors.black,
                            alignSelf: "center",
                            textAlign: "auto",
                          }}
                        >
                          {item.text}
                        </Text>
                      </View>
                    </View>
                  </>
                );
              })}
              </>
              :
              <>
              {Gloss.map((item, index) => {
                let col = index * 2.78;
                console.log(col);
                return (
                  <>
                    <View
                      style={{
                        backgroundColor: Theme.colors.sec,
                        height: 30,
                        marginLeft: 10,
                        width: 120,
                        borderRadius: 5,
                        top: 10,
                        zIndex: 2,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: Theme.colors.primary,
                          fontSize: 20,
                          fontWeight: "bold",
                        }}
                      >
                        Step{index + 1}{" "}
                      </Text>
                    </View>
                    <View
                      style={{
                        borderRadius: 5,
                        // height: 100,
                        padding: 20,
                        width: Dimensions.get("window").width / 1.1,
                        alignSelf: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        marginBottom: 10,
                        paddingHorizontal: 5,
                        backgroundColor: "#dee7e8",
                      }}
                    >
                      {/* <View
                style={{
                  borderBottomColor: Theme.colors.black,
                  borderBottomWidth: 1,
                }}
              > */}

                      <View
                        style={{
                          height: 55,
                          width: 55,
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: Theme.colors.white,
                          borderRadius: 10,
                        }}
                      >
                        <Image
                          source={SOL}
                          resizeMode={"contain"}
                          style={{ height: 50, width: 50 }}
                        />
                      </View>
                      <View style={{ width: 280, paddingLeft: 4 }}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: Theme.colors.black,
                            alignSelf: "center",
                            textAlign: "auto",
                          }}
                        >
                          {item.text}
                        </Text>
                      </View>
                    </View>
                  </>
                );
              })}
              </>
              
              }
              
              
              <View>
                <View
                  style={{
                    width: Dimensions.get("window").width / 1.1,
                    alignSelf: "center",
                    backgroundColor: "#dee7e8",
                    borderRadius: 10,
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      color: Theme.colors.black,
                      fontSize: 20,
                      fontWeight: "600",
                      textDecorationLine: "underline",
                    }}
                  >
                   {mining.cloud? "Advantages of cloud mining:":"Advantages of cloud mining:"}
                  </Text>
                  {mining.cloud?<Text style={{ color: Theme.colors.black, marginTop: 10 }}>
                    
                    Easy to get started: Cloud mining requires minimal technical
                    expertise and can be set up quickly and easily.
                    {"\n"} Lower hardware costs: Cloud mining eliminates the
                    need to invest in expensive hardware and infrastructure,
                    which can be a significant cost savings.
                    {"\n"} Greater flexibility: Cloud mining allows you to scale
                    up or down your computing resources as needed, providing
                    greater flexibility and agility.
                  </Text>
                 : <Text style={{ color: Theme.colors.black, marginTop: 10 }}>
                  Lower technical requirements: Pool mining requires less technical expertise and hardware than running a validator node on your own. This makes it more accessible to a wider range of users.

{'\n'}Higher chances of earning rewards: By pooling your resources with other validators, you increase your chances of being chosen to validate transactions and earn rewards.

{'\n'}More predictable rewards: Pool mining offers more predictable rewards, as they are distributed based on the pool's total contribution to the network.

                  </Text>}
                </View>
                <View
                  style={{
                    width: Dimensions.get("window").width / 1.1,
                    alignSelf: "center",
                    backgroundColor: "#dee7e8",
                    borderRadius: 10,
                    padding: 10,
                    marginTop: 10,
                    marginBottom: 120,
                  }}
                >
                  <Text
                    style={{
                      color: Theme.colors.black,
                      fontSize: 20,
                      fontWeight: "600",
                      textDecorationLine: "underline",
                    }}
                  >
                   { mining.cloud? "Disadvantages of cloud mining:":"Disadvantages of pool mining:"}
                  </Text>
                 { mining.pool?<Text style={{ color: Theme.colors.black, marginTop: 10 }}>
                 Lower rewards: As the rewards are distributed among all the validators in the pool, each validator receives a smaller share of the total rewards.

                 {'\n'}}Less control: When you delegate your SOL to a pool, you are entrusting the pool operator to manage your stake. This means that you have less control over your rewards and may be subject to the pool's rules and fees.



                  </Text>
                  :<Text style={{ color: Theme.colors.black, marginTop: 10 }}>
                  
                    Higher fees: Cloud mining providers typically charge a fee
                    for their services, which can eat into your profits.
                    {"\n"}Less control: When you use a cloud mining provider,
                    you are entrusting your validator node to a third-party
                    provider. This means that you have less control over the
                    technical details and operation of your node.
                    {"\n"}Security risks: Cloud mining introduces additional
                    security risks, as you are entrusting your private keys and
                    validator node to a third-party provider.
                    {"\n"}In conclusion, both pool mining and cloud mining are
                    effective ways to mine Solana, and the choice between them
                    will depend on your specific needs and resources. Whether
                    you choose to pool your resources with other validators or
                    rent computing power from a third-party provider, the key to
                    success is to choose a reliable and reputable provider and
                    stay up to date on the latest trends and developments in the
                    Solana ecosystem.
                  </Text>}
                </View>
              </View>
            </>
         
        </View>
      </ScrollView>
    </>
  );
};

export default Facts;

const styles = StyleSheet.create({});
