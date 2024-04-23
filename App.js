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
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderColor: "#333",
    borderWidth: 1,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 20,
  },

  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  editButton: {
    color: "#333",
    fontSize: 16,
  },
  deleteButton: {
    color: "red",
    fontSize: 16,
  },
});

export default App;