import { useState } from "react";
import { StyleSheet, View, FlatList, Button} from "react-native";
import { StatusBar } from "expo-status-bar";
import Goalinput from "./components/Goalinput";
import Goalitem from "./components/Goalitem";

export default function App() {
  const [modelisvisible, setModelIsVisible]=useState(false)
  const [coursegoals, setCourseGoals] = useState([]);

  function startAddGoalHnadler(){
    setModelIsVisible(true);
  };

  function endAddGoalHnadler(){
    setModelIsVisible(false);
  };


  function addGoalHandler(enterdGoalText) {
    setCourseGoals((currentgoals) => [
      ...currentgoals,
      { text: enterdGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHnadler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentgoals) => {
      return currentgoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appcontainer}>
      <Button title="Add New Goal" color='#8550ca' onPress={startAddGoalHnadler}/>
      <Goalinput addGoal={addGoalHandler} visible={modelisvisible} oncancel={endAddGoalHnadler}/>

      <View style={styles.goalcontainer}>
        <FlatList
          data={coursegoals}
          renderItem={(itemdata) => {
            return (
              <Goalitem
                value={itemdata.item.text}
                id={itemdata.item.id}
                ondeleteitem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalcontainer: {
    flex: 4,
  },
});
