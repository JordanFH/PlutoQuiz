import React, { useState } from "react";
import { styles } from "../components/styles";
import colors from "../components/colors";

import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from "react-native";

export default function Signup({ navigation }) {
  const [password, setPassword] = useState(true);

  function signin() {
    navigation.navigate("Signin");
  }

  return (
    <>
      <StatusBar style="light" />
      <ScrollView style={styles.authPage}>
        <View style={styles.authBlock}>
          <Image
            resizeMode="cover"
            source={require("../../assets/card-pattern.png")}
            style={styles.authBlockbg}
          />
          <Image
            resizeMode="center"
            source={require("../../assets/app-logo.png")}
            style={styles.applogo}
          />
          <Text style={styles.authIntro}>Create New Account</Text>
          <View style={styles.authSummaryBlock}>
            <Text style={styles.authSummaryText}>Already have an account?</Text>
            <TouchableOpacity onPress={signin}>
              <Text style={styles.authlinkText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxstyles} />
        <View style={styles.boxstyle1} />
        <View style={styles.scrollbg}>
          <View style={styles.formbox}>
            <Text style={styles.formlabel}>Full Name</Text>
            <View>
              <Ionicons
                style={styles.formicon}
                name="person-outline"
                size={20}
                color={colors.inputcolor}
              />
              <TextInput
                style={styles.formInput}
                underlineColorAndroid="transparent"
                placeholder="Lucky Onagite"
                inputMode="text"
                placeholderTextColor={colors.inputcolor}
              />
            </View>
          </View>

          <View style={styles.formbox}>
            <Text style={styles.formlabel}>Email</Text>
            <View>
              <Ionicons
                style={styles.formicon}
                name="mail-outline"
                size={20}
                color={colors.inputcolor}
              />
              <TextInput
                style={styles.formInput}
                underlineColorAndroid="transparent"
                placeholder="lucky@luckyonagite.com"
                inputMode="email"
                placeholderTextColor={colors.inputcolor}
              />
            </View>
          </View>

          <View style={styles.formbox}>
            <Text style={styles.formlabel}>Password</Text>
            <View>
              <Ionicons
                style={styles.formicon}
                name="lock-open-outline"
                size={20}
                color={colors.inputcolor}
              />
              <TextInput
                style={styles.formInput}
                underlineColorAndroid="transparent"
                placeholder="************"
                inputMode="text"
                placeholderTextColor={colors.inputcolor}
                secureTextEntry={password}
              />
            </View>
          </View>
          <View style={styles.formbox}>
            <Text style={styles.formlabel}>Confirm Password</Text>
            <View>
              <Ionicons
                style={styles.formicon}
                name="lock-open-outline"
                size={20}
                color={colors.inputcolor}
              />
              <TextInput
                style={styles.formInput}
                underlineColorAndroid="transparent"
                placeholder="************"
                inputMode="text"
                placeholderTextColor={colors.inputcolor}
                secureTextEntry={password}
              />
            </View>
          </View>

          <View style={styles.formbtn}>
            <TouchableOpacity
              style={styles.appBtn}
              onPress={() => navigation.navigate("Main")}>
              <Text style={styles.appBtnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
