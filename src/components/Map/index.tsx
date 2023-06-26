import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Image } from "react-native";
import { vehicles } from "../../data/mock";
import {
  PositionType,
  RootStackParamList,
  VehiclesImagesType,
} from "../../types";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { mapStyles } from "./styles";

export const vehiclesImages: VehiclesImagesType = {
  Грузовой: "https://cdn-icons-png.flaticon.com/512/226/226349.png",
  Пассажирский: "https://cdn-icons-png.flaticon.com/512/10808/10808520.png",
  Спецтранспорт: "https://cdn-icons-png.flaticon.com/512/1097/1097976.png",
};

interface IMap {
  mapPosition: PositionType;
}
type MapScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  "MapScreen"
>;
const Map: React.FC<IMap> = ({ mapPosition }) => {
  const { navigate } = useNavigation<MapScreenNavigationType>();
  return (
    <MapView
      userInterfaceStyle={"dark"}
      style={mapStyles.map}
      initialRegion={{
        latitude: mapPosition.latitude,
        longitude: mapPosition.longitude,
        latitudeDelta: mapPosition?.latitudeDelta || 0.0013,
        longitudeDelta: mapPosition?.longitudeDelta || 0.0055,
      }}
    >
      {vehicles.map(({ id, vehicle_category, position }) => {
        return (
          <Marker
            key={`${id} + ${vehicle_category}`}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
            onPress={() => navigate("VehicleScreen", { vehicleId: id })}
          >
            <Image
              style={mapStyles.marker}
              source={{
                uri: vehiclesImages[vehicle_category],
              }}
            />
          </Marker>
        );
      })}
    </MapView>
  );
};



export default Map;
