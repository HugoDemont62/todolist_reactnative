import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const App = () => {
  const [task, setTask] = useState({ value: "", complete: false });
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    //to write

  };

  const handleEditTask = (index) => {
    //to write

  };

  const handleCompleteTask = (index) => {
    //to write


  };

  const handleDeleteTask = (index) => {
    //to write
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.task}>
      <TouchableOpacity
        onPress={() => handleCompleteTask(index)}>
        <Text
          style={{ fontSize: 19, textDecorationLine: !item.complete ? "none" : "line-through" }}>{item.value}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleEditTask(index)}>
        <Text
          style={styles.editButton}>Modifier</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleDeleteTask(index)}>
        <Text
          style={styles.deleteButton}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{
        marginBottom: 30
      }}>
        <Text style={styles.heading}>My Todo List</Text>
        <TextInput
          style={styles.input}
          placeholder="Ajouter une tache"
          value={task.value}
          onChangeText={() => { }}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => { }}>
          <Text style={styles.addButtonText}>
            {editIndex !== -1 ? "Modifier" : "Ajouter"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={[]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 40,
  }
});

export default App;