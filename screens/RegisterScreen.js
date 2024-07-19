import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import React, { useState } from "react";
import RegisterationSVG from "../assets/images/misc/registration.svg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { SafeAreaView } from "react-native-safe-area-context";
import { Touchable } from "react-native";
import GoogleSVG from "../assets/images/misc/google.svg";
import FacebookSVG from "../assets/images/misc/facebook.svg";
import TwitterSVG from "../assets/images/misc/twitter.svg";

import { TouchableOpacity } from "react-native";
import InputField from "../components/InputField";
import DateTimePicker from "@react-native-community/datetimepicker";
import { auth } from "../firebase";
import CustomButton from "../components/CustomButton";
export default function RegisterScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [dateofBirth, setDateofBirth] = useState("");
  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.messsage));
  };
  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatepicker();
        setDateofBirth(currentDate.toDateString());
      }
    } else {
      toggleDatepicker();
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 20 }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <RegisterationSVG
            height={250}
            width={250}
            style={{
              transform: [{ rotate: "-5deg" }],
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 23,
            fontWeight: "500",
            color: "#333",
            marginBottom: 20,
          }}
        >
          Register
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: 30,
          }}
        >
          {" "}
          Or,Register with email...
        </Text>

        <InputField
          label={"Full Name"}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />

        <InputField
          label={"Email ID"}
          icon={
            <MaterialIcons
              name="alternate-email"
              keyboardType="email-address"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />

        <InputField
          label={"Password"}
          inputType="password"
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />

        <InputField
          label={"Confirm Password"}
          inputType="password"
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}
        >
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />

          {!showPicker && (
            <TouchableOpacity onPress={toggleDatepicker}>
              <Text
                style={{
                  color: "#666",
                  marginLeft: 4,
                  marginTop: 4,
                }}
              >
                {dateofBirth ? dateofBirth : "Select a date"}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {showPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            onChange={onChange}
          />
        )}

        {/*{!showPicker && (<Pressable onPress={toggleDatepicker}>
    <TextInput 
    style={{
        color: '#666',
        marginLeft: 4,
        marginTop: 4
    }}
    placeholder='Sat Aug 21 2004'
    value= {dateofBirth}
    onChangeText={setDateofBirth}
    placeholderTextColor= "#11182744"
    editable = {false}
  /> 

  </Pressable>)}

 */}
        <CustomButton label={"Register"} onPress={handleRegister} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>AlreadyRegisterd?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: "#AD40AF", fontWeight: "700" }}>
              {" "}
              Login to your Account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
