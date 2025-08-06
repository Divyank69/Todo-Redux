import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  text: string;
  modalVisible: boolean;
  isEditing: boolean;
  editingId: string | null;
}

const initialState: UIState = {
  text: "",
  modalVisible: false,
  isEditing: false,
  editingId: null,
};

const screenStateSlice = createSlice({
  name: "screenState",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setModalVisible: (state, action: PayloadAction<boolean>) => {
      state.modalVisible = action.payload;
    },
    setIsEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
    setEditingId: (state, action: PayloadAction<string | null>) => {
      state.editingId = action.payload;
    },
    resetUIState: (state) => {
      state.text = "";
      state.modalVisible = false;
      state.isEditing = false;
      state.editingId = null;
    }
  }
});

export const {
  setText,
  setModalVisible,
  setIsEditing,
  setEditingId,
  resetUIState
} = screenStateSlice.actions;

export default screenStateSlice.reducer;
