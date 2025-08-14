import React from "react";
import { View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { taskstyles } from "../styles";
import { CustomText } from "../components";

type TaskDetailRouteProp = RouteProp<RootStackParamList, "TaskDetail">

function TaskDetailScreen() {
  const route = useRoute<TaskDetailRouteProp>();
  const { title, completed } = route.params;

  return (
    <View style={taskstyles.container}>
      <CustomText style={taskstyles.heading}>📝 Task Details</CustomText>

      <View style={taskstyles.card}>
        <CustomText style={taskstyles.label}>Title</CustomText>
        <CustomText style={taskstyles.title}>{title}</CustomText>

        <CustomText style={taskstyles.label}>Status</CustomText>
        <CustomText style={[taskstyles.status, completed ? taskstyles.completedStatus : taskstyles.pendingStatus]}>
          {completed ? "✅ Completed" : "⌛ Pending"}
        </CustomText>

      </View>
    </View>
  );
};

export default TaskDetailScreen;




