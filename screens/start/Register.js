import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAvoidingView } from "react-native-web";
import { SafeAreaView } from "react-navigation";
import styles from "../../styles";
// import firebase from "firebase";

export default class RegisterScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      emailInput: "",
      passwordInput: "",
      confirmPasswordInput: "",
      errorMessage: "",
    };
  }

  render() {
    // if (firebase.auth().currentUser) {
    //   this.props.navigation.navigate("HomeTabs");
    // }
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.sav} />
        <Text style={styles.titleText}>Register</Text>
        <View style={{ width: "100%" }}>
          <TextInput
            style={styles.optionTextInput}
            placeholder="Email"
            value={this.state.emailInput}
            onChangeText={(emailInput) => {
              this.setState({ emailInput });
            }}
          />
          <TextInput
            style={styles.optionTextInput}
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.passwordInput}
            onChangeText={(passwordInput) => {
              this.setState({ passwordInput });
            }}
          />
          <TextInput
            style={styles.optionTextInput}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={this.state.confirmPasswordInput}
            onChangeText={(confirmPasswordInput) => {
              this.setState({ confirmPasswordInput });
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.blueCoolButton}
          onPress={() => {
            this.props.navigation.navigate("MainTabN");
          }}
        >
          <Text style={styles.coolButtonText}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 40 }}
          onPress={() => {
            this.props.navigation.navigate("SignIn");
          }}
        >
          <Text>Aldready have an accout?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
