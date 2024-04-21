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
    if (task.value) {
      if (editIndex !== -1) {
        // Edit existing task 
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        // Add new task 
        setTasks([...tasks, task]);
      }
      setTask({ value: "", complete: false });
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    setEditIndex(index);
  };

  const handleCompleteTask = (index) => {
    const taskToEdit = tasks[index];
    taskToEdit.complete = true
    // Edit existing task 
    const updatedTasks = [...tasks];
    updatedTasks[index] = taskToEdit;
    setTasks(updatedTasks);

  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
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
          onChangeText={(text) => setTask({ value: text, complete: false })}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddTask}>
          <Text style={styles.addButtonText}>
            {editIndex !== -1 ? "Modifier" : "Ajouter"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 7,
    color: "green",
  },
  input: {
    borderWidth: 3,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
  },

  taskButtons: {
    flexDirection: "row",
  },
  editButton: {
    marginRight: 10,
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default App;