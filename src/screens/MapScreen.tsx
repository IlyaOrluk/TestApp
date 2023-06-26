import React from "react";
import Map from "../components/Map";
import { TouchableOpacity, View, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { RootStackParamList } from "../types";
import { mapScreenStyles } from "./styles";
type MapScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  "MapScreen"
>;
const MapScreen: React.FC<{}> = () => {
  const { navigate } = useNavigation<MapScreenNavigationType>();
  const { params } = useRoute<RouteProp<RootStackParamList, "MapScreen">>();
  return (
    <View style={mapScreenStyles.wrapper}>
      <View style={mapScreenStyles.arrow}>
        <TouchableOpacity onPress={() => navigate("ListScreen")}>
          <Image
            style={mapScreenStyles.arrowImage}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/271/271220.png",
            }}
          />
        </TouchableOpacity>
      </View>
      <Map mapPosition={params?.mapPosition} />
    </View>
  );
};

export default MapScreen;
