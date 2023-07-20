import { useState } from "react";
import { View, TextInput, Button, Modal, Image } from "react-native";
import { StyleSheet } from "react-native";

function Goalinput(props) {
  const [enterdGoalText, setEnterdGoalText] = useState("");

  function goalInputHandler(enterdtext) {
    setEnterdGoalText(enterdtext);
  }

  function addGoalHandler() {
    props.addGoal(enterdGoalText);
    setEnterdGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="fade">
    <View style={styles.inputcontainer}>
      <Image style={styles.image} source={require("../assets/Images/goal.png")}/>
      <TextInput
        style={styles.textinput}
        placeholder="Your Course Goals...."
        onChangeText={goalInputHandler}
        value={enterdGoalText}
      />
      <View style={styles.buttoncontainer}>
        <View style={styles.button }>
          <Button title="Add Goals" onPress={addGoalHandler} color="#5e0acc" />
        </View>
      <View  style={styles.button }>
              <Button title="Cancel" onPress={props.oncancel} color="#f31282"/>
      </View>

      </View>
      
    </View>
    </Modal>
  );
}

export default Goalinput;

const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:16,
    backgroundColor:"#311b6b"
     
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius:6,
    backgroundColor:"#e4d0ff",
    color:"#120438",
    width: "100%",
    padding: 10,
  },
  buttoncontainer:{
    flexDirection:"row",
    marginTop:16
    
  },
  button:{
    width:100,
    marginHorizontal:9
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
});
