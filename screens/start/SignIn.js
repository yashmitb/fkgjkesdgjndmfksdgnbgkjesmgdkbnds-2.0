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

export default class SignInScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      emailInput: "",
      passwordInput: "",
      errorMessage: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.sav} />

        <Text style={styles.titleText}>Sign in</Text>

        <TextInput
          style={styles.optionTextInput}
          placeholder="Email"
          value={this.state.emailInput}
          keyboardType="email-address"
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
        <TouchableOpacity
          style={styles.blueCoolButton}
          onPress={() => {
            this.props.navigation.navigate("MainTabN");
          }}
        >
          <Text style={styles.coolButtonText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 40 }}
          onPress={() => {
            this.props.navigation.navigate("Register");
          }}
        >
          <Text>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
