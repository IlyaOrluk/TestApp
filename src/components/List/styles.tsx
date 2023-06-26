import { StyleSheet } from "react-native";

export const listStyles = StyleSheet.create({
  list: {
    width: "100%",
  },
});

export const listItemStyles = StyleSheet.create({
  arrow: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  item: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
    padding: 16,
  },
  itemText: {
    fontSize: 12,
    color: "grey",
  },
  marker: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    margin: 8,
  },
});
