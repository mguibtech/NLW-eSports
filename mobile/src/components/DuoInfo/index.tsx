import React from 'react';
import { View, Text, ColorValue } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface Props{
  label: string;
  value: string;
  colorValue?: ColorValue;
}

export function DuoInfo({label, colorValue = THEME.COLORS.TEXT, value}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text 
        style={[styles.value, {color: colorValue}]}
        numberOfLines={1}
      >
        {value}
      </Text>

    </View>
  );
}