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
import { Header } from "react-native-elements";
import db from "../config";
export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      inputTitle: "",
      inputAuthor: "",
      inputStory: "",
      title: "",
      author: "",
      story: "",
    };
  }

  submitStory = async () => {
    // this.setState({
    //   title: this.state.inputTitle,
    //   author: this.state.inputAuthor,
    //   story: this.state.inputStory,
    // });
    db.collection("story").add({
      inputTitle: this.state.inputTitle,
      inputAuthor: this.state.inputAuthor,
      inputStory: this.state.inputStory,
    });
    Alert.alert("Your Story Has Been Submitted");
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <Text style={styles.title}>Story Hub</Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/submitIMG.png")}
              style={styles.imgstyle}
            />
          </TouchableOpacity>
          <Text style={styles.text2}>STORY TITLE</Text>
          <TouchableOpacity>
            <TextInput
              style={styles.inputBox1}
              placeholder="Title"
              placeholderTextColor="grey"
              onChangeText={(text) => {
                this.setState({ inputTitle: text });
              }}
              value={this.state.inputTitle}
            />
          </TouchableOpacity>
          <Text style={styles.text3}>AUTHOR NAME</Text>
          <TextInput
            style={styles.inputBox2}
            placeholder="Author"
            placeholderTextColor="grey"
            onChangeText={(text) => {
              this.setState({ inputAuthor: text });
            }}
            value={this.state.inputAuthor}
          />
          <Text style={styles.text4}>WRITE YOUR STORY</Text>
          <TextInput
            style={styles.inputBox3}
            placeholder="Write your story"
            placeholderTextColor="grey"
            onChangeText={(text) => {
              this.setState({ inputStory: text });
            }}
            value={this.state.inputStory}
          />
          <TouchableOpacity
            onPress={async () => {
              this.submitStory();
            }}
          >
            <Text style={styles.title2}>SUBMIT</Text>
          </TouchableOpacity>
          <Image
            source={require("../assets/tick.png")}
            style={styles.imgstyle2}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
  inputBox2: {
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
