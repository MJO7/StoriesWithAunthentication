import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import { Header } from "react-native-elements";
import { block } from "react-native-reanimated";
import db from "../config";

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      inputSearch: "",
      search: "",
      searchedTitle: "",
      searchedAuthor: "",
      searchedStory: "",
      allTransactions: [],
      search: "",
      lastVisibleTransaction: null,
    };
  }
  // searchStory = async () => {
  //   this.setState({ search: this.state.inputSearch });
  //   const storyRef = db
  //     .collection("stories")
  //     .where("title", "==", this.state.search)
  //     .get();
  //   var story = "";
  //   if (storyRef.docs.length === 0) {
  //     Alert.alert("", "There is no such story with that title");
  //     this.setState({ search: "" });
  //   }
  // // };
  // searchStory = async (text) => {
  //   var enterText = text.split("");
  //   var text = text.toLowerCase();
  //   if (enterText[0] === "b") {
  //     const transaction = await db
  //       .collection("transactions")
  //       .where("bookId", "==", text)
  //       .get();
  //     transaction.docs.map((doc) => {
  //       this.setState({
  //         allTransactions: [...this.state.allTransactions, doc.data()],
  //         lastVisibleTransaction: doc,
  //       });
  //     });
  //   } else if (enterText[0] === "s") {
  //     const transaction = await db
  //       .collection("transactions")
  //       .where("studentId", "==", text)
  //       .get();
  //     transaction.docs.map((doc) => {
  //       this.setState({
  //         allTransactions: [...this.state.allTransactions, doc.data()],
  //         lastVisibleTransaction: doc,
  //       });
  //     });
  //   }
  // };

  componentDidMount = async () => {
    const queries = await db.collection("story").get();
    queries.docs.map((doc) => {
      this.setState({
        allTransactions: [...this.state.allTransactions, doc.data()],
      });
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
          style={styles.inputBox2}
          placeholder="Search Here"
          placeholderTextColor="grey"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            justifyContent: "center,",
            alignItems: "center",
            width: 150,
            height: 50,
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.allTransactions}
          renderItem={({ item }) => (
            <View>
              <Text
                style={{
                  marginLeft: 170,
                  color: "white",
                  fontSize: 30,
                  fontWeight: "bold",
                  width: 300,
                }}
              >
                Title-
                {item.inputTitle}
              </Text>
              <Text
                style={{
                  marginLeft: 170,
                  color: "white",
                  fontSize: 23,
                  width: 300,
                }}
              >
                Author-
                {item.inputAuthor}
              </Text>

              <Image
                source={require("/Users/rachanajoshi/Stories/redling.png")}
                style={{
                  width: 50,
                  height: 50,
                  alignSelf: "center",
                  marginTop: 10,
                }}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={this.fetchMoreTransactions}
          onEndReachedThreshold={0.7}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 40,
    alignSelf: "center",
    backgroundColor: "black",
    height: 2700,
    marginTop: 0,
    width: 700,
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
  imgstyle: {
    marginLeft: 440,
    marginTop: -55,
    height: 60,
    width: 60,
  },
  inputBox2: {
    borderWidth: 2,
    width: 400,
    fontSize: 30,
    textAlign: "left",
    borderColor: "yellow",
    alignSelf: "center",
    marginTop: 30,
    height: 50,
    color: "white",
  },
});
