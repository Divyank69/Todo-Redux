import React from "react";
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


import { useEffect } from "react";
import { fetchTodos } from "../redux/slices/todoSlice";


//import { useAppSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from '../redux';
import { RootState } from "../redux";
import { addTodo, editTodo, toggleTodo, deleteTodo, Todo } from "../redux/slices/todoSlice";
import { setText, setModalVisible, setIsEditing, setEditingId, resetUIState, } from "../redux/slices/uiSlice";
import { generateId } from "../utils/helpers";
import { useColorScheme } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "../styles/globalStyles";
import  CustomButton  from "../components/CustomButton";
import Colors from "../constants/colors";


const TodoScreen = () => {

  const dispatch = useAppDispatch();

  const text = useAppSelector((state: RootState) => state.ui.text);
  const modalVisible = useAppSelector((state: RootState) => state.ui.modalVisible);
  const isEditing = useAppSelector((state: RootState) => state.ui.isEditing);
  const editingId = useAppSelector((state: RootState) => state.ui.editingId);


  //const todos = useAppSelector((state: RootState) => state.todo.todos);
  const { todos, loading, error } = useAppSelector((state: RootState) => state.todo);

  const isDarkMode = useColorScheme() === "dark";
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);


  //const { data: todos = [], isLoading, isError } = useGetTodosQuery();


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
    dispatch(resetUIState());
  };

  const startEditing = (todo: Todo) => {
    dispatch(setText(todo.title));
    dispatch(setEditingId(todo.id));
    dispatch(setIsEditing(true));
    dispatch(setModalVisible(true));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      <View style={{ flex: 1, padding: 20, paddingTop: 60 }}>
        <View style={styles.todaystask}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}> Today's Tasks</Text>

          <TouchableOpacity style={[styles.addButton, { position: 'relative', right: 0 }]} onPress={() => dispatch(setModalVisible(true))}>
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
                backgroundColor: item.completed ? Colors.lightGreenBg : Colors.lightRedBg,
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
                  <MaterialCommunityIcons name="delete" size={23} color= "red" />
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
              onChangeText={(text) => dispatch(setText(text))}
              style={styles.input}
            />
            {/* <Button title="Add Task" onPress={handleAdd} /> */}
            {/* <Button title={isEditing ? "Update Task" : "Add Task"} onPress={handleSave} /> */}

            <CustomButton
              isEditing={isEditing}
              onPress={handleSave}
            />
            <TouchableOpacity onPress={() => [dispatch(setModalVisible(false)),dispatch(setIsEditing(false))]}>
              <Text style={{ marginTop: 10, textAlign: "center", color: Colors.gray }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default TodoScreen;


