import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
const isAndroid = Platform.OS === 'android';
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.first_view}>
          <Text>Search</Text>
        </View>
        <View style={styles.second_view}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight:0
  },
  first_view: {
    justifyContent: "center",
    backgroundColor: "green",
    padding: 16
  },
  second_view:{
    flex:1,
    backgroundColor: "blue",
    padding: 16
  }

});
