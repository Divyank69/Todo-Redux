import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    top: 1,
    right: 20,
    backgroundColor: "#007bff",
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 4,

  },
  modalBackground: {
    flex: 1,
    backgroundColor: "#000000aa",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    minHeight: 80,
    textAlignVertical: "top"

  },
});

export default styles;