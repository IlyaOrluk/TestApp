import React, { useState } from "react";
import List from "../components/List";
import { SafeAreaView, View, Text, ScrollView, Button } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useNavigation } from "@react-navigation/core";
import { listScreenStyles } from "./styles";
import * as Haptics from "expo-haptics";

type ListScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  "ListScreen"
>;
const CATEGORIES: string[] = [
  "Все",
  "Грузовой",
  "Пассажирский",
  "Спецтранспорт",
];
const addFilter = (filter: string, filters: string[]) => {
  if (filters.includes(filter)) {
    return filters.filter((filterEl) => filterEl !== filter);
  } else {
    return [...filters, filter];
  }
};

const ListScreen: React.FC<{}> = () => {
  const { navigate } = useNavigation<ListScreenNavigationType>();
  const [filters, setFilters] = useState<string[]>([]);
  return (
    <SafeAreaView style={listScreenStyles.safeArea}>
      <View style={listScreenStyles.wrapper}>
        <View style={listScreenStyles.title}>
          <Text style={listScreenStyles.titleFirstPart}>Okinawa</Text>
          <Text style={listScreenStyles.titleSecondPart}>Drivers</Text>
        </View>
        <View style={listScreenStyles.content}>
          <View style={listScreenStyles.list}>
            {CATEGORIES.map((category) => {
              const isAll = category === "Все";
              return (
                <BouncyCheckbox
                  key={category}
                  size={25}
                  fillColor="gray"
                  unfillColor="#FFFFFF"
                  text={category}
                  textStyle={listScreenStyles.checkboxText}
                  style={listScreenStyles.checkbox}
                  isChecked={
                    isAll ? !filters.length : filters.includes(category)
                  }
                  onPress={() => {
                    if (isAll) {
                      setFilters([]);
                    } else {
                      setFilters(addFilter(category, filters));
                    }
                  }}
                  disableBuiltInState
                />
              );
            })}
          </View>
        </View>
        <ScrollView style={listScreenStyles.scrollView}>
          <List filters={filters} />
        </ScrollView>
        <View>
          <Button
            title="To Map"
            onPress={() => {
              Haptics.selectionAsync();
              navigate("MapScreen", {
                mapPosition: {
                  latitude: 26.332537,
                  longitude: 127.804937,
                  latitudeDelta: 0.0413,
                  longitudeDelta: 0.0455,
                },
              });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;
