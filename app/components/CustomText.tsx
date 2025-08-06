import React from "react";
import { Text, StyleSheet, TextStyle, TextProps } from "react-native";
import Colors from "../constants/colors";
import { StyleProp } from "react-native";


interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const CustomText: React.FC<CustomTextProps> = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.defaultText, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    color: Colors.darkGray,
  },
});

export default CustomText;
