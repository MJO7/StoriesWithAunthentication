import React from "react";
import { SafeAreaView } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import db from "../config";
import firebase from "firebase";
import { Header } from "react-native-elements";
import WriteStoryScreen from "./WriteStoryScreen";
export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }
  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        return Alert.alert("Sucessfully Logged in");
      })
      .catch((error) => {
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.title}>Story Hub</Text>
        <Image
          source={require("../assets/submitIMG.png")}
          style={styles.imgstyle}
        />
        <TextInput
          style={styles.inputBox2a}
          autoCapitalize={false}
          placeholder="Email ID"
          placeholderTextColor="grey"
          onChangeText={(text) => {
            this.setState({ emailId: text });
          }}
        />
        <TextInput
          style={styles.inputBox2}
          placeholder="Password"
          autoCapitalize={false}
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
        />
        <TouchableOpacity style={styles.text}>
          <Text
            style={{
              fontWeight: "bold",
              color: "yellow",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.title2}
          onPress={() => {
            this.userLogin(this.state.emailId, this.state.password);
            <WriteStoryScreen />;
          }}
        >
          <Text style={{ fontSize: 35, color: "white", fontWeight: "bold" }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.text}>
          <Text
            style={{
              fontWeight: "bold",
              color: "yellow",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#15415B",
    height: 1000,
  },

  loginButton: {
    borderWidth: 1,
    alignSelf: "center",
    marginTop: 45,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    width: 360,
    borderRadius: 15,
    borderColor: "#EA595D",
    backgroundColor: "#EA595D",
  },
  text: {
    marginLeft: 10,
    marginTop: 45,

    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#EA595D",
    marginLeft: 90,
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 70,
  },
  imageStyle: {
    marginLeft: 170,
    marginTop: 50,
    height: 90,
    width: 90,
  },
  text2: {
    fontSize: 32,
    marginTop: 40,
    marginLeft: -200,
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
  text3: {
    fontSize: 32,
    marginTop: 20,
    marginLeft: -160,
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
  text4: {
    fontSize: 32,
    marginTop: 20,
    marginLeft: -100,
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
  text5: {
    color: "blue",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    borderWidth: 2,
    height: 40,
    width: 200,
    flex: 1,
    marginLeft: 115,
    borderColor: "blue",
    borderRadius: 15,
    backgroundColor: "blue",
  },
  title: {
    color: "yellow",
    height: 50,
    borderColor: "red",
    backgroundColor: "black",
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: -90,
  },
  title2: {
    color: "white",
    backgroundColor: "red",
    height: 70,
    textAlign: "center",
    borderColor: "red",
    backgroundColor: "black",
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 45,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: -10,
    borderWidth: 1,
    borderRadius: 14,
    width: 240,
  },
  viewStyle: {
    marginTop: 40,
    alignSelf: "center",
    backgroundColor: "black",
    height: 2700,
    marginTop: 0,
    width: 700,
  },
  inputBox1: {
    borderWidth: 2,
    width: 400,
    fontSize: 30,
    textAlign: "left",
    borderColor: "yellow",
    alignSelf: "center",
    marginTop: 2,
    height: 50,
    color: "white",
  },
  inputBox2a: {
    borderWidth: 2,
    width: 400,
    fontSize: 30,
    textAlign: "left",
    borderColor: "yellow",
    alignSelf: "center",
    marginTop: 90,
    height: 50,
    color: "white",
  },
  inputBox2: {
    borderWidth: 2,
    width: 400,
    fontSize: 30,
    textAlign: "left",
    borderColor: "yellow",
    alignSelf: "center",
    marginTop: 40,
    height: 50,
    color: "white",
  },
  inputBox3: {
    borderWidth: 2,
    width: 400,
    fontSize: 30,
    textAlign: "left",
    borderColor: "yellow",
    alignSelf: "center",
    marginTop: 2,
    height: 280,
    color: "white",
  },
  imgstyle: {
    marginLeft: 440,
    marginTop: -55,
    height: 60,
    width: 60,
  },
  imgstyle2: {
    marginLeft: 470,
    marginTop: -70,
    height: 60,
    width: 60,
  },
});
