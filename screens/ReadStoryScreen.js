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
      <View>
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
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            },
          }}
        />
        <TextInput
          style={{
            width: 150,
            borderWidth: 1,
            marginLeft: 50,
            marginTop: 30,
            borderColor: "blue",
          }}
          placeholder="Search Here"
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
                  marginLeft: 50,

                  fontWeight: "bold",
                  width: 300,
                }}
              >
                Title-
                {item.inputTitle}
              </Text>
              <Text
                style={{
                  marginLeft: 50,

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
