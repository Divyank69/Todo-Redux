import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { addTodo, editTodo, toggleTodo, deleteTodo, Todo } from "../features/todo/todoSlice";
import { generateId } from "../utils/helpers";
import { useColorScheme } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "../styles/globalStyles";


const TodoScreen = () => {

  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);


  const isDarkMode = useColorScheme() === "dark";

  const todos = useSelector((state: RootState) => state.todo.todos);
  //const { data: todos = [], isLoading, isError } = useGetTodosQuery();

  const dispatch = useDispatch();

  // const handleAdd = () => {
  //   if (text.trim() === "") return;
  //   const newTodo: Todo = {
  //     id: generateId(),
  //     title: text,
  //     completed: false,
  //   };
  //   dispatch(addTodo(newTodo));
  //   setText("");
  //   setModalVisible(false);
  // };

  const handleSave = () => {
    if (text.trim() === "") return;

    if (isEditing && editingId) {
      dispatch(editTodo({ id: editingId, title: text }));
    } else {
      const newTodo: Todo = {
        id: generateId(),
        title: text,
        completed: false,
      };
      dispatch(addTodo(newTodo));
    }

    // Reset everything
    setText("");
    setIsEditing(false);
    setEditingId(null);
    setModalVisible(false);
  };

  const startEditing = (todo: Todo) => {
    setText(todo.title);
    setEditingId(todo.id);
    setIsEditing(true);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      {/* Task List */}
      <View style={{ flex: 1, padding: 20, paddingTop: 60 }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 1,
          padding: 10// Adjust as needed
        }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}> Today's Tasks</Text>

          <TouchableOpacity style={[styles.addButton, { position: 'relative', right: 0 }]} onPress={() => setModalVisible(true)}>
            <Text style={styles.addButtonText}>＋</Text>
          </TouchableOpacity>
        </View>

       <FlatList
            data={todos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 21,
                  alignItems: "center",
                  marginVertical: 9,
                  backgroundColor: item.completed ? "#d4edda" : "#f8d7da",
                  borderRadius: 8,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
                    <MaterialCommunityIcons
                      name={item.completed ? "checkbox-marked" : "checkbox-blank-outline"}
                      size={24}
                      color={item.completed ? "green" : "gray"}
                      style={{ marginRight: 10 }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      textDecorationLine: item.completed ? "line-through" : "none",
                      fontSize: 16,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                  <TouchableOpacity onPress={() => startEditing(item)}>
                    <MaterialCommunityIcons name="pencil" size={23} color="blue" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => dispatch(deleteTodo(item.id))}>
                    <MaterialCommunityIcons name="delete" size={23} color="red" />
                  </TouchableOpacity>
                </View>
              </View>

            )}
          />
         
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TextInput
              placeholder="Enter task"
              value={text}
              onChangeText={setText}
              style={styles.input}
            />
            {/* <Button title="Add Task" onPress={handleAdd} /> */}
            <Button title={isEditing ? "Update Task" : "Add Task"} onPress={handleSave} />

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ marginTop: 10, textAlign: "center", color: "gray" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default TodoScreen;


