import React, { useState } from 'react';
import { View, Text, TextInput  } from 'react-native';
import styles from './DutyCalculator.style';
import { Picker } from '@react-native-picker/picker'; 

const currencyOptions = [
  { label: 'Select Currency', value: null },
  { label: 'US Dollar', value: 'USD' },
  { label: 'Japanese Yen', value: 'JPY' },
  { label: 'South African Rand', value: 'ZAR' },
  { label: 'Euro', value: 'EUR' },
  { label: 'British Pound', value: 'GBP' },
  { label: 'Zambian Kwacha', value: 'ZMK' },
  { label: 'Zimbabwean Dollar', value: 'ZWD' },
  { label: 'Saudi Riyal', value: 'SAR' },
  { label: 'United Arab Emirates Dirham', value: 'AED' },
  { label: 'Australian Dollar', value: 'AUD' },
  { label: 'Botswana Pula', value: 'BWP' },
  { label: 'Canadian Dollar', value: 'CAD' },
  { label: 'Chinese Yuan Renminbi', value: 'CNY' },
  { label: 'Danish Krone', value: 'DKK' },
  { label: 'North Korean Won', value: 'KPW' },
  { label: 'Hong Kong Dollar', value: 'HKD' },
  { label: 'Indian Rupee', value: 'INR' },
  { label: 'Indonesian Rupiah', value: 'IDR' },
  { label: 'Irish Pound', value: 'IEP' },
  { label: 'Kenyan Shilling', value: 'KES' },
  { label: 'Malaysian Ringgit', value: 'MYR' },
  { label: 'Mozambican Metical', value: 'MZM' },
  { label: 'New Zealand Dollar', value: 'NZD' },
  { label: 'Norwegian Krone', value: 'NOK' },
  { label: 'Pakistani Rupee', value: 'PKR' },
  { label: 'South Korean Won', value: 'KRW' },
  { label: 'Singapore Dollar', value: 'SGD' },
  { label: 'Special Drawing Rights', value: 'SDR' },
  { label: 'Swazi Lilangeni', value: 'SZL' },
  { label: 'Swiss Franc', value: 'CHF' },
  { label: 'Tanzanian Shilling', value: 'TZS' },
  { label: 'Thai Baht', value: 'THB' }
];

const engineCapacityOptions = [
  { label: 'Select Engine Capacity', value: null },
  { label: '0-999cc', value: '0-999' },
  { label: '1000-1499cc', value: '1000-1499' },
  { label: '1500-1999cc', value: '1500-1999' },
  { label: '2000-2499cc', value: '2000-2499' },
  { label: '2500-2999cc', value: '2500-2999' },
  { label: 'Exceeding 3000cc', value: '3000+' }
];

const DutyCalculatorComponent = () => {
  const [currency, setCurrency] = useState(null);
  const [cif, setCif] = useState('');
  const [portCharge, setPortCharge] = useState('');
  const [yearOfMake, setYearOfMake] = useState('');
  const [engineCapacity, setEngineCapacity] = useState(null);

  return (
    <View style={styles.container}>
      <Text>Select Currency:</Text>
      <Picker 
        selectedValue={currency}
        onValueChange={(itemValue) => setCurrency(itemValue)}
      >
        {currencyOptions.map((option) => (
          <Picker .Item
            key={option.value ?? 'null'}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker >

      <Text>Cost, Insurance & Freight (CIF):</Text>
      <TextInput
        value={cif}
        onChangeText={(text) => setCif(text)}
        keyboardType="numeric"
      />

      <Text>Port charge:</Text>
      <TextInput
        value={portCharge}
        onChangeText={(text) => setPortCharge(text)}
        keyboardType="numeric"
      />

      <Text>Year of Make:</Text>
      <TextInput
        value={yearOfMake}
        onChangeText={(text) => setYearOfMake(text)}
        keyboardType="numeric"
      />

      <Text>Select Engine Capacity:</Text>
      <Picker 
        selectedValue={engineCapacity}
        onValueChange={(itemValue) => setEngineCapacity(itemValue)}
      >
        {engineCapacityOptions.map((option) => (
          <Picker .Item
            key={option.value ?? 'null'}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
};

export default DutyCalculatorComponent;