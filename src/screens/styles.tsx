import { StyleSheet } from "react-native";

export const listScreenStyles = StyleSheet.create({
  safeArea: { height: "100%", backgroundColor: "#fff" },
  wrapper: { height: "100%", backgroundColor: "#eff1f4", flex: 1 },
  title: {
    width: "100%",
    height: "15%",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  titleFirstPart: { fontSize: 32, fontWeight: "700" },
  titleSecondPart: { fontSize: 16, fontWeight: "400" },
  content: {
    height: "15%",
    justifyContent: "flex-end",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  checkbox: { width: "50%", padding: 10 },
  checkboxText: {
    textDecorationLine: "none",
  },
  scrollView: { height: "65%" },
});

export const mapScreenStyles = StyleSheet.create({
  wrapper: { position: "relative" },
  arrow: {
    position: "absolute",
    left: 30,
    top: 30,
    zIndex: 9999,
  },
  arrowImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

export const vehicleScreenStyles = StyleSheet.create({
  safeArea: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    alignItems: "center",
  },
  header: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25
  },
  title: { fontSize: 24, color: "#fff" },
  arrow: {
    position: "absolute",
    top: 5,
    left: 25,
  },
  arrowImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    tintColor: "#fff",
  },
  map: {
    width: 250,
    height: 250,
    marginTop: 50,
    marginBottom: 30,
    borderRadius: 125,
  },
  marker: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    margin: 5,
    tintColor: "#fff",
  },
  infoItem: { fontSize: 16, color: "#fff", marginTop: 10 },
  buttons: { flexDirection: "row" },
});
