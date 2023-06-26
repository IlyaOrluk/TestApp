export type PositionType = {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
};

export type VehicleType = {
  id: number;
  vehicle_category: string;
  driver_name: string;
  driver_phone: string;
  position: PositionType;
};

export type VehiclesImagesType = { [key: string]: string };

export type NavigatorParameters = {
  List: undefined;
  Map: undefined;
};

export type RootStackParamList = {
  ListScreen: { mapPosition: PositionType } | undefined;
  MapScreen: { mapPosition: PositionType };
  VehicleScreen: { vehicleId: number } | undefined;
};
