import { StyleSheet } from "react-native";
import { hp, wp, fp } from "../utils/helpers";
import Colors from "../constants/colors";

const styles = StyleSheet.create({

  safeareview: {
    flex: 1,
    backgroundColor: Colors.white
  },
  addButton: {
    position: "absolute",
    top: hp(0.2),
    right: wp(5),
    backgroundColor: Colors.primary,
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    justifyContent: "center",
    alignItems: "center",
    elevation: 5
  }, addButtonWrapper: {
    position: 'relative',
    right: 0
  },
  addButtonText: {
    color: "#fff",
    fontSize: fp(2.8),
    marginBottom: hp(0.5),

  },
  modalBackground: {
    flex: 1,
    backgroundColor: Colors.modalBackdrop,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: wp(80),
    backgroundColor: Colors.white,
    padding: wp(5),
    borderRadius: wp(3),
    elevation: 10,
  },
  input: {
    borderWidth: 1,
    padding: hp(2),
    marginBottom: hp(2.5),
    borderRadius: wp(2),
    minHeight: hp(10),
    textAlignVertical: "top"

  },

  todaystask: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(1),
    paddingVertical: hp(1.5)
  },
  todaystasktext: {
    fontSize: fp(3.2),
    fontWeight: "bold"
  },
  header: {
    flex: 1,
    padding: wp(5),
    paddingTop: hp(6)
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: hp(2.4),
    alignItems: "center",
    marginVertical: hp(1.1),
    borderRadius: wp(2),
  },

  todoLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },

  todoRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(3),
  },

  checkboxIcon: {
    marginRight: wp(1.5),
  },

  todoText: {
    fontSize: fp(2.2),
    flexShrink: 1,
  },

  todoTextCompleted: {
    textDecorationLine: "line-through",
  },

  inputsearch: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: wp(2),        
    padding: wp(2),             
    marginVertical: hp(1.2),
  }

});

export default styles;