import React from "react";
import { View, FlatList, TouchableOpacity, StatusBar, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useEffect } from "react";
import { fetchTodos } from "../redux/slices";
import { useAppDispatch, useAppSelector } from '../redux';
import { RootState } from "../redux";
import { addTodo, editTodo, toggleTodo, deleteTodo, Todo, setSearchText } from "../redux/slices";
import { setText, setModalVisible, setIsEditing, setEditingId, resetUIState, } from "../redux/slices";
import { generateId } from "../utils/helpers";
import { useColorScheme } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "../styles/globalStyles";
import Colors from "../constants/colors";
import { CustomModal, CustomText } from "../components";

import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  filter?: "all" | "pending" | "completed"; 
  showAddButton?: boolean; 
  heading?: string;
};


const TodoScreen = ({filter = "all", showAddButton = true, heading = "Today's Tasks" }: Props) => {

  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { text, isEditing, editingId } = useAppSelector((state: RootState) => state.screenState);
  const { todos, searchText, loading, error } = useAppSelector((state: RootState) => state.todo);

  const isDarkMode = useColorScheme() === "dark";
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

 const filteredTodos = todos.filter(todo => {
  const matchesSearch = todo.title.toLowerCase().includes(searchText.toLowerCase());

  if (!filter || filter === "all") return matchesSearch;
  if (filter === "pending") return matchesSearch && !todo.completed;
  if (filter === "completed") return matchesSearch && todo.completed;

  return matchesSearch;
});


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

  //rendering todos
  const renderTodo = ({ item }: { item: Todo }) => {
    return (
      <View
        style={[styles.todoItem, { backgroundColor: item.completed ? Colors.lightGreenBg : Colors.lightRedBg }]}
      >
        <View style={styles.todoLeft}>
          <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
            <MaterialCommunityIcons
              name={item.completed ? "checkbox-marked" : "checkbox-blank-outline"}
              size={24}
              color={item.completed ? "green" : "gray"}
              style={styles.checkboxIcon}
            />
          </TouchableOpacity>
          <CustomText
            onPress={() => navigation.navigate("TaskDetail", { title: item.title, completed: item.completed })}

            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              styles.todoText,
              item.completed ? styles.todoTextCompleted : null,
            ]}
          >
            {item.title}
          </CustomText>
        </View>

        <View style={styles.todoRight}>
          <TouchableOpacity onPress={() => startEditing(item)}>
            <MaterialCommunityIcons name="pencil" size={23} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(deleteTodo(item.id))}>
            <MaterialCommunityIcons name="delete" size={23} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  if (loading) {
  return (
    <SafeAreaView style={styles.safeareview}>
      <CustomText>Loading Todos...</CustomText>
    </SafeAreaView>
  );
}

  return (
    <SafeAreaView style={styles.safeareview} edges={['left', 'right']}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      <View style={styles.header}>
        <View style={styles.todaystask}>
          <CustomText style={styles.todaystasktext}>{heading}</CustomText>
          { showAddButton &&
          <TouchableOpacity style={[styles.addButton, styles.addButtonWrapper]} onPress={() => dispatch(setModalVisible(true))}>
            <CustomText style={styles.addButtonText}>＋</CustomText>
          </TouchableOpacity>
          }
        </View>

        <TextInput
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => dispatch(setSearchText(text))}
          style={styles.inputsearch}
        />

        <FlatList
          data={filteredTodos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTodo}
        />
      </View>

      <CustomModal onSave={handleSave} />
    </SafeAreaView>
  );
};

export default TodoScreen;


