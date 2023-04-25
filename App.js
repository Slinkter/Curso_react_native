import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={style.wrapper}>
      <View style={style.container}>
        <Text style={style.temp}> 6</Text>
        <Text style={style.feels}> Feels link 5</Text>
        <View style={style.highLowWrapper}>
          <Text style={style.highLow}> High :8</Text>
          <Text style={style.highLow}>Low : 6 </Text>
        </View>
        <View style={style.bodyWrapper}>
          <Text style={style.description}> Its sunny</Text>
          <Text style={style.message}> Its perfect t-shirt weather </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    /* backgroundColor: "pink", */
    flex: 1,
    alignItems: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default App;
