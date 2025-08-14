import { StyleSheet } from "react-native";
import { hp, wp, fp } from "../utils/helpers";
import Colors from "../constants/colors";

export const taskstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
  },
  heading: {
    fontSize: fp(3.2),
    color: Colors.black,
    marginBottom: hp(6),
    fontWeight: "bold",
    marginLeft: wp(22),
    marginTop: hp(4),
  },
  card: {
    backgroundColor: Colors.white,
    padding: wp(6),
    borderRadius: wp(4),
    width: "100%",
    shadowColor: Colors.darkGray,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  label: {
    color: Colors.gray,
    fontSize: fp(2.3),
    fontWeight: "600",
    marginBottom: hp(0.5),
    marginTop: hp(1.5),
  },
  title: {
    color: Colors.black,
    fontSize: fp(2.5),
    fontWeight: "bold",
    marginBottom: hp(1),
  },
  status: {
    fontSize: fp(2.3),
    fontWeight: "600",
    marginTop: hp(0.5),
  },
  completedStatus: {
  color: Colors.completed,
},

pendingStatus: {
  color: Colors.pending,
},
});
