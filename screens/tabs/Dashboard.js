import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Pedometer } from "expo-sensors";

import CircularProgress from "react-native-circular-progress-indicator";
import styles from "../../styles";

export default function App() {
  const [PedomaterAvailability, SetPedomaterAvailability] = useState("");

  const [StepCount, SetStepCount] = useState(0);

  var WindowHeight = Dimensions.get("window").height;

  var Dist = StepCount / 1300;

  var DistanceCovered = Dist.toFixed(4);

  var cal = DistanceCovered * 60;

  var caloriesBurnt = cal.toFixed(4);

  React.useEffect(() => {
    subscribe();
  }, []);

  subscribe = () => {
    const subscription = Pedometer.watchStepCount((result) => {
      SetStepCount(result.steps);
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        SetPedomaterAvailability(String(result));
      },

      (error) => {
        SetPedomaterAvailability(error);
      }
    );
  };
  let exercises = [
    {
      title: "Diet Recommendation",
      image: require("../../assets/Exercise1.png"),
      subTitle:
        "Live happier and healthier by learning the fundamentals of diet recommendation",
      duration: "5-20 MIN Course",
    },
    {
      title: "Exercises",
      image: require("../../assets/Exercise2.png"),
      subTitle:
        "Live happier and healthier by learning the fundamentals of kegel exercises",
      duration: "10-20 MIN Course",
    },
    {
      title: "Settings",
      image: require("../../assets/Settings-icon.png"),
      subTitle:
        "Live happier and healthier by learning the fundamentals of meditation and mindfulness",
      duration: "3-10 MIN Course",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.0001 }} />

      <View
        style={{
          flex: 0.55,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <CircularProgress
          value={StepCount}
          maxValue={6500} //based on steps
          radius={100}
          textColor={"black"}
          activeStrokeColor={"black"}
          inActiveStrokeColor={"#5c5c5c"}
          // these 3 have to be changed with scale 0.0125:1:1
          inActiveStrokeOpacity={0.125}
          inActiveStrokeWidth={10}
          activeStrokeWidth={10}
          title={"Step Count"}
          titleColor={"black"}
          titleStyle={{ fontWeight: "bold" }}
        />
      </View>

      <View
        style={{ flex: 0.35, justifyContent: "center", alignItems: "center" }}
      >
        <View style={{ flex: 0.3 }}>
          <Text style={styles.textDesign}>Target: 6,500 steps</Text>
          {/* <TextInput placeholder="Steps" keyboardType="numeric" /> */}
        </View>

        <View style={{ flex: 0.3 }}>
          <Text style={[styles.textDesign, {}]}>
            Distance Covered : {DistanceCovered} km
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={[styles.textDesign, {}]}>
            Calories Burnt : {caloriesBurnt}
          </Text>
        </View>

        <StatusBar style="auto" />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={exercises}
          style={{
            paddingHorizontal: 20,
            marginTop: -60,
          }}
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <ExerciseItem exercise={item} />}
        />
      </View>
    </View>
  );
}

const ExerciseItem = ({ exercise }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (exercise.title === "Settings") {
          console.log("Go to settings");
        } else if (exercise.title === "Exercises") {
          console.log("Go to Exercises");
        } else if (exercise.title === "Diet Recommendation") {
          console.log("Go to Diet Recommendation");
        }
      }}
      activeOpacity={0.8}
      style={{
        backgroundColor: "white",
        width: 0.5 * SIZES.width - 35,
        margin: 10,
        height: 180,
        borderRadius: 10,
        padding: 15,
        shadowColor: "#9e9898",
        elevation: 5,
      }}
    >
      <Image
        source={exercise.image}
        style={{
          width: "100%",
          resizeMode: "cover",
          flex: 1,
        }}
      />
      <Text style={{ marginTop: 20, textAlign: "center", fontSize: 16 }}>
        {exercise.title}
      </Text>
    </TouchableOpacity>
  );
};
// import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const SIZES = {
  base: 10,
  width,
  height,
};
