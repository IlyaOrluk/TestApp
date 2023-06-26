import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  Button,
  Image,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Haptics from "expo-haptics";

import MapView, { Marker } from "react-native-maps";
import { vehiclesImages } from "../components/Map";
import { vehicles } from "../data/mock";
import { RootStackParamList } from "../types";
import { vehicleScreenStyles } from "./styles";
import { StatusBar } from "expo-status-bar";
type VehicleScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  "VehicleScreen"
>;
const MESSAGE =
  "Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе";
const VehicleScreen: React.FC<{}> = () => {
  const { goBack } = useNavigation<VehicleScreenNavigationType>();
  const { params } = useRoute<RouteProp<RootStackParamList, "VehicleScreen">>();
  const currentVehicle = vehicles.find(({ id }) => id === params?.vehicleId);
  return (
    <SafeAreaView style={vehicleScreenStyles.safeArea}>
      <View style={vehicleScreenStyles.header}>
        <TouchableOpacity
          style={vehicleScreenStyles.arrow}
          onPress={() => goBack()}
        >
          <Image
            style={vehicleScreenStyles.arrowImage}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/271/271220.png",
            }}
          />
        </TouchableOpacity>
        <Text style={vehicleScreenStyles.title}>
          {`${currentVehicle?.vehicle_category} #${currentVehicle?.id}`}
        </Text>
      </View>
      {currentVehicle && (
        <MapView
          userInterfaceStyle={"dark"}
          style={vehicleScreenStyles.map}
          initialRegion={{
            latitude: currentVehicle.position.latitude,
            longitude: currentVehicle.position.longitude,
            latitudeDelta: 0.0013,
            longitudeDelta: 0.0055,
          }}
        >
          <Marker
            key={`${currentVehicle?.id} + ${currentVehicle?.vehicle_category}`}
            coordinate={{
              latitude: currentVehicle?.position.latitude,
              longitude: currentVehicle?.position.longitude,
            }}
          >
            <Image
              style={vehicleScreenStyles.marker}
              source={{
                uri: vehiclesImages[currentVehicle?.vehicle_category],
              }}
            />
          </Marker>
        </MapView>
      )}
      <Text style={vehicleScreenStyles.infoItem}>
        Driver Name: {currentVehicle?.driver_name}
      </Text>
      <Text style={vehicleScreenStyles.infoItem}>
        Driver Phone: {currentVehicle?.driver_phone}
      </Text>
      <Text style={vehicleScreenStyles.infoItem}>
        Vehicle Position:{" "}
        {`${currentVehicle?.position.latitude} ${currentVehicle?.position.longitude}`}
      </Text>
      <View style={vehicleScreenStyles.buttons}>
        <Button
          title="Call"
          onPress={() => {
            Haptics.selectionAsync();
            Linking.openURL(`tel:${currentVehicle?.driver_phone}`);
          }}
        />
        <Button
          title="Chat"
          onPress={() =>
            Linking.openURL(
              `whatsapp://send?text=${MESSAGE}&phone=${currentVehicle?.driver_phone}`
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default VehicleScreen;
