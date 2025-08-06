import React from "react";
import {Modal,View,TouchableOpacity,TextInput,Text,} from "react-native";
import styles from "../styles/globalStyles";
import Colors from "../constants/colors";
import CustomButton from "./CustomButton";
import { useAppDispatch, useAppSelector } from "../redux";
import { RootState } from "../redux";
import {setModalVisible,setIsEditing,setText,} from "../redux/slices/uiSlice";

type Props = {
    onSave: () => void;
};

const CustomModal = ({ onSave }: Props) => {
    const dispatch = useAppDispatch();
    const text = useAppSelector((state: RootState) => state.ui.text);
    const modalVisible = useAppSelector((state: RootState) => state.ui.modalVisible);
    const isEditing = useAppSelector((state: RootState) => state.ui.isEditing);

    return (
        <Modal visible={modalVisible} animationType="slide" transparent>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <TextInput
                        placeholder="Enter task"
                        value={text}
                        onChangeText={(t) => dispatch(setText(t))}
                        style={styles.input}
                    />

                    <CustomButton
                        isEditing={isEditing}
                        onPress={onSave}
                    />

                    <TouchableOpacity onPress={() => { dispatch(setModalVisible(false)); dispatch(setIsEditing(false));}} >
                        <Text style={{ marginTop: 10, textAlign: "center", color: Colors.gray }}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default CustomModal;
