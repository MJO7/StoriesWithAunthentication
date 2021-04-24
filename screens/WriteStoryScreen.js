import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
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
        <View style={{ marginTop: 40, alignSelf: "center" }}>
          <Header
            backgroundColor={"white"}
            centerComponent={{
              text: "Story Hub",
              style: {
                color: "blue",
                height: 50,
                borderColor: "red",

                fontWeight: "bold",
                fontSize: 40,
                textAlign: "center",
                alignSelf: "center",
                justifyContent: "center",
              },
            }}
          />
          <Text style={styles.text2}>STORY TITLE</Text>
          <TouchableOpacity>
            <TextInput
              style={{
                borderWidth: 2,
                width: 400,
                fontSize: 30,
                textAlign: "center",
                borderColor: "green",
                alignSelf: "center",
                marginTop: 2,
                height: 50,
              }}
              placeholder="Title"
              onChangeText={(text) => {
                this.setState({ inputTitle: text });
              }}
              value={this.state.inputTitle}
            />
          </TouchableOpacity>
          <Text style={styles.text3}>AUTHOR NAME</Text>
          <TextInput
            style={{
              borderWidth: 2,
              width: 400,
              fontSize: 30,
              textAlign: "center",
              borderColor: "red",
              alignSelf: "center",
              marginTop: 2,
              height: 50,
            }}
            placeholder="Author"
            onChangeText={(text) => {
              this.setState({ inputAuthor: text });
            }}
            value={this.state.inputAuthor}
          />
          <Text style={styles.text4}>WRITE YOUR STORY</Text>
          <TextInput
            style={{
              borderWidth: 2,
              width: 400,
              fontSize: 30,
              textAlign: "center",
              borderColor: "blue",
              alignSelf: "center",
              marginTop: 2,
              height: 280,
            }}
            placeholder="Write your story"
            onChangeText={(text) => {
              this.setState({ inputStory: text });
            }}
            value={this.state.inputStory}
          />
          <TouchableOpacity
            style={styles.text5}
            onPress={async () => {
              this.submitStory();
            }}
          >
            <Text style={{ fontSize: 30 }}>SUBMIT</Text>
          </TouchableOpacity>
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
    color: "green",
  },
  text3: {
    fontSize: 32,
    marginTop: 20,
    marginLeft: -160,
    alignItems: "center",
    textAlign: "center",
    color: "red",
  },
  text4: {
    fontSize: 32,
    marginTop: 20,
    marginLeft: -100,
    alignItems: "center",
    textAlign: "center",
    color: "blue",
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
});
