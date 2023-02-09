import { Platform } from "react-native";
import { useTheme } from "native-base";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/home.svg";
import HistorySvg from "@assets/history.svg";
import ProfileSvg from "@assets/profile.svg";

import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Profile } from "@screens/Profile";
import { Home } from "@screens/Home";

type TAppRoutes = {
  exercise: undefined;
  history: undefined;
  profile: undefined;
  home: undefined;
};
export type TAppNavigationRoutesProps = BottomTabNavigationProp<TAppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<TAppRoutes>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();
  const iconSize = sizes["6"];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green["500"],
        tabBarInactiveTintColor: colors.gray['200'],
        tabBarStyle:{
          backgroundColor: colors.gray['600'],
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[6]
        }
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} height={iconSize} width={iconSize} />
          ),
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} height={iconSize} width={iconSize} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} height={iconSize} width={iconSize} />
          ),
        }}
      />
      <Screen name="exercise" component={Exercise} options={{tabBarButton: () =>  null }}/>
    </Navigator>
  );
}
