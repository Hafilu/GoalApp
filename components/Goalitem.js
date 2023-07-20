import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native";

function Goalitem(props) {
  return (
    <View style={styles.goalitems}>
    <Pressable android_ripple={{color:"#cec8d6"}} onPress={props.ondeleteitem.bind(this, props.id)}>
      <Text style={styles.goaltext}>{props.value}</Text>
    </Pressable>
    </View>
  );
}

export default Goalitem;

const styles = StyleSheet.create({
  goalitems: {
    margin: 8,
    
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    
  },
  goaltext:{
    color: "white",
    padding: 8,
  }
});
