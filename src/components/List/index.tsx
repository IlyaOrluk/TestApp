import React from "react";
import {
  View,
} from "react-native";
import { vehicles } from "../../data/mock";
import ListItem from "./item";
import { listStyles } from "./styles";
interface IList {
  filters?: string[];
}
const List: React.FC<IList> = ({ filters }) => {
  return (
    <View style={listStyles.list}>
      {vehicles
        .filter(({ vehicle_category }) =>
          filters?.length ? filters.includes(vehicle_category) : true
        )
        .map((vehicle) => {
          return (
            <ListItem
              key={`${vehicle.id} + ${vehicle.vehicle_category}`}
              {...vehicle}
            />
          );
        })}
    </View>
  );
};



export default List;
