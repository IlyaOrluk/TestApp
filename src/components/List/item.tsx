import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { PositionType, RootStackParamList } from "../../types";
import { vehiclesImages } from "../Map";
import { listItemStyles } from "./styles";

type ListScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  "ListScreen"
>;

interface IListItem {
  id: number;
  vehicle_category: string;
  driver_name: string;
  position: PositionType;
}

const ListItem: React.FC<IListItem> = ({
  id,
  vehicle_category,
  driver_name,
  position,
}) => {
  const { navigate } = useNavigation<ListScreenNavigationType>();

  return (
    <TouchableOpacity
      onPress={(): void => {
        navigate("MapScreen", {
          mapPosition: position,
        });
      }}
    >
      <View style={listItemStyles.item}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={listItemStyles.marker}
            source={{
              uri: vehiclesImages[vehicle_category],
            }}
          />
          <View>
            <Text>{`${vehicle_category} #${id}`}</Text>
            <Text style={listItemStyles.itemText}>{driver_name}</Text>
          </View>
        </View>
        <Image
          style={listItemStyles.arrow}
          source={{
            uri: "https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png",
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
