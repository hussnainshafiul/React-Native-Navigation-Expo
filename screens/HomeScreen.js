import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import { freeGames, paidGames, sliderData } from "../model/data";

import { windowHeight, windowWidth } from "../utils/dimensions";
import Carousel from "react-native-snap-carousel";
import BannerSlider from "../components/BannerSlider";
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";
import GameDetailsScreen from "./GameDetailsScreen";
export default function HomeScreen({ navigation }) {
  const [gamesTab, setgamesTab] = useState(1);
  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = (value) => {
    setgamesTab(value);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 18,
          }}
        >
          <Text
            style={{
              fontSize: 17,
            }}
          >
            Hello Shafi
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../assets/images/user-profile.jpg")}
              style={{
                width: 35,
                height: 35,
                borderRadius: 45,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
        >
          <Feather
            name="search"
            size={20}
            color={"#C6C6C6"}
            style={{
              marginRight: 5,
            }}
          />
          <TextInput placeholder="Search" />
        </View>

        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                color: "#0aada8",
                fontSize: 16,
              }}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to Play"
            option2="Paid Games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          freeGames.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate("GameDetails", {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate("GameDetails", {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

//custom switch ->component
