

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { hp,wp,fp } from '../utils/helpers';
type Props = {
  isEditing: boolean;
  onPress: () => void;
};

const CustomButton = ({ isEditing, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>
        {isEditing ? 'Update' : 'Add Task'}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF', 
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(26),
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
    marginTop: hp(0.1),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: fp(2),
    fontWeight: '600',
  },
});
