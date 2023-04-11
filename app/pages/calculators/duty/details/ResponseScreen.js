import React from 'react';
import { View, Text } from 'react-native';

export default function ResponseScreen({ result }) {
  return (
    <View>
      <Text>VDP: {result.VDP}</Text>
      <Text>Total Duty Charge: {result.TotalDutyCharge}</Text>
      <Text>Error Code: {result.ErrorCode}</Text>
    </View>
  );
}
