import { StyleSheet } from "react-native";
import { hp,wp,fp } from "../utils/helpers";

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    top: hp(0.2),
    right: wp(5),
    backgroundColor: "#007bff",
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  addButtonText: {
    color: "#fff",
    fontSize: fp(2.8),
    marginBottom: hp(0.5),

  },
  modalBackground: {
    flex: 1,
    backgroundColor: "#000000aa",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: wp(80),
    backgroundColor: "#fff",
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

  }, todaystask: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(1),
    paddingVertical: hp(1.5)
  }
});

export default styles;