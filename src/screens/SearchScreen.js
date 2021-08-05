import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

function SearchScreen(props) {
  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("term submitted")}
      />
      <Text>Text updated</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;
