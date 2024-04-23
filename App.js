import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [task, setTask] = useState({value: '', complete: false});
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (task.value === '') {
      return;
    }

    if (editIndex !== -1) {
      const newTasks = [...tasks];
      newTasks[editIndex] = task;
      setTasks(newTasks);
      setEditIndex(-1);
    } else {
      setTasks([...tasks, task]);
    }
    setTask({value: '', complete: false});
  };

  const handleEditTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  const handleCompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].complete = !newTasks[index].complete;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const renderItem = ({item, index}) => (
    <View style={styles.task}>
      <TouchableOpacity
        onPress={() => handleCompleteTask(index)}>
        <Text
          style={{
            fontSize: 19,
            textDecorationLine: !item.complete ? 'none' : 'line-through',
          }}>{item.value}</Text>
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
        marginBottom: 30,
      }}>
        <Text style={styles.heading}>My Todo List</Text>
        <TextInput
          style={styles.input}
          placeholder="Ajouter une tache"
          value={task.value}
          onChangeText={(text) => {
            setTask({
              value: text,
              complete: false,
            });
          }}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={ handleAddTask}>
          <Text style={styles.addButtonText}>
            {editIndex !== -1 ? 'Modifier' : 'Ajouter'}
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
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  editButton: {
    color: '#333',
    fontSize: 16,
  },
  deleteButton: {
    color: 'red',
    fontSize: 16,
  },
});

export default App;