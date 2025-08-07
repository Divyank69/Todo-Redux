import React from "react";
import {Modal,View,TouchableOpacity,TextInput,Text,} from "react-native";
import styles from "../styles/globalStyles";
import Colors from "../constants/colors";
import CustomButton from "./CustomButton";
import { useAppDispatch, useAppSelector } from "../redux";
import { RootState } from "../redux";
import {setModalVisible,setIsEditing,setText,} from "../redux/slices/screenStateSlice";

type Props = {
    onSave: () => void;
};

const CustomModal = ({ onSave }: Props) => {

    const dispatch = useAppDispatch();
    const{text,modalVisible,isEditing} = useAppSelector((state: RootState) => state.screenState);

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
                    <CustomButton isEditing={isEditing} onPress={onSave}/>
                    
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
