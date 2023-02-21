import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Facts from "../Screens/Facts";
import Home from "../Screens/Home";
import Glossary from "../Screens/Glossary";

import { tabScreenOptions } from "./NavigationHelper";
import NavigationNames from "./NavigationNames";
import { Theme } from "../theme";
import Convertor from "../Screens/Convertor";
import Dashboard from "../Screens/Dashboard";
import api from "../services/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/reducers/userReducer";
import Annual from "../Screens/Annual";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomePageTabNavigator = () => {
  const [userr, setuser] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.root.user);

  useEffect(async () => {
    await api(
      "https://cryp-coin-tracker-server.herokuapp.com/screenEnabling/get/by/appId/" +
        "solona",
      null,
      "get"
    )
      .then((res) => {
        console.log(res.futureTrading, "ress");
        if (res) dispatch(setUser(res.futureTrading));
        setuser(res.futureTrading);
        // push = true;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {user ? (
        <Tab.Navigator
          //   initialRouteName="Dashboard"
          screenOptions={tabScreenOptions}
          tabBarOptions={{
            activeTintColor: Theme.colors.navbarActiveColor,
            inactiveTintColor: Theme.colors.navbarInactiveColor,
          }}
        >
          <Tab.Screen name={NavigationNames.Dashboard} component={Dashboard} />

          <Tab.Screen name={NavigationNames.Annual} component={Annual} />
          <Tab.Screen name={NavigationNames.SearchTab} component={Convertor} />
          <Tab.Screen name={NavigationNames.ProfileTab} component={Glossary} />
          <Tab.Screen name={NavigationNames.MenuTab} component={Facts} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          initialRouteName="Dashboard"
          screenOptions={tabScreenOptions}
          tabBarOptions={{
            activeTintColor: Theme.colors.navbarActiveColor,
            inactiveTintColor: Theme.colors.navbarInactiveColor,
          }}
        >
          <Tab.Screen name={NavigationNames.Annual} component={Annual} />
          <Tab.Screen name={NavigationNames.SearchTab} component={Convertor} />
          <Tab.Screen name={NavigationNames.ProfileTab} component={Glossary} />
          <Tab.Screen name={NavigationNames.MenuTab} component={Facts} />
        </Tab.Navigator>
      )}
    </>
  );
};

export default HomePageTabNavigator;
