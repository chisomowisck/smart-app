import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity  } from 'react-native';
import styles from './DutyCalculator.style';
import { PickerIOS } from '@react-native-picker/picker';
import { engineCapacityOptions, currencyOptions, routes } from '../../../constants';
import axios from 'axios';
import { parseString } from 'xml2js';
import { useRouter } from 'expo-router';

const DutyCalculatorComponent = () => {
  const [currency, setCurrency] = useState(null);
  const [cif, setCif] = useState('');
  const [portCharge, setPortCharge] = useState('');
  const [yearOfMake, setYearOfMake] = useState('');
  const [engineCapacity, setEngineCapacity] = useState(null);
  const [response, setResponse] = useState({});
  const router = useRouter();

  const calculateDuty = async () => {
      try {
        const url = 'https://eservices.mra.mw/ws/info/dutycalculatorws.asmx'; // replace with your SOAP service URL
        const headers = {
          'Content-Type': 'text/xml;charset=UTF-8',
          'SOAPAction': 'http://www.mra.mw/CalculateDuty', // replace with your SOAP action
          'Accept-Encoding': 'gzip, deflate',
          'Connection': 'keep-alive',
          'Accept': '*/*'
        };
        const args = {
          CIF: 3500,
          PortCharges: 200,
          EngineCapacity: '1500-1999',
          Age: 10,
          FXCurrency: 'USD'
        };

        const data = [3500, 200, '1500-1999', 10, 'USD'];

        
        const body = `
          <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:mra="http://www.mra.mw/">
            <soapenv:Header/>
            <soapenv:Body>
              <mra:CalculateDuty>
                <mra:CIF>${args.CIF}</mra:CIF>
                <mra:PortCharges>${args.PortCharges}</mra:PortCharges>
                <mra:EngineCapacity>${args.EngineCapacity}</mra:EngineCapacity>
                <mra:Age>${args.Age}</mra:Age>
                <mra:FXCurrency>${args.FXCurrency}</mra:FXCurrency>
              </mra:CalculateDuty>
            </soapenv:Body>
          </soapenv:Envelope>
        `;
        const response = await axios.post(url, body, { headers });
        const xml = response.data;
        parseString(xml, (err, result) => {
          if (err) {
            console.error(err);
          } else {
            const { VDP, TotalDutyCharge, ErrorCode } = result['soap:Envelope']['soap:Body'][0].CalculateDutyResponse[0].CalculateDutyResult[0];
            setResponse({ VDP, TotalDutyCharge, ErrorCode });
            console.log(response)
            // router.push(`${routes.calculators.duty.details}/4444`)
            router.push(`/pages/calculators/duty-details/${data}`)
            // router.push('/pages/calculators/duty/details/3333')
          }
        });
      } catch (err) {
        console.error(err);
      }
    
  };



  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.textLabel}>Select Currency:</Text>
      <View style={styles.dropdownContainer}></View>
      <PickerIOS 
        selectedValue={currency}
        onValueChange={(itemValue) => setCurrency(itemValue)}
        style={styles.dropDown}
      >
        {currencyOptions.map((option) => (
          <PickerIOS.Item
            key={option.value ?? 'null'}
            label={option.label}
            value={option.value}
            style={styles.dropItem}
          />
        ))}
      </PickerIOS >

      <Text style={styles.textLabel}> Cost, Insurance & Freight (CIF):</Text>
      <TextInput
        value={cif}
        onChangeText={(text) => setCif(text)}
        placeholderTextColor="#a3a3a3"
        keyboardType="numeric"
        style={styles.textInput}
      />

      <Text style={styles.textLabel}>Port charge:</Text>
      <TextInput
        value={portCharge}
        onChangeText={(text) => setPortCharge(text)}
        keyboardType="numeric"
        style={styles.textInput}
      />

      <Text style={styles.textLabel}>Year of Make:</Text>
      <TextInput
        value={yearOfMake}
        onChangeText={(text) => setYearOfMake(text)}
        keyboardType="numeric"
        style={styles.textInput}
      />

      <Text style={styles.textLabel}> Select Engine Capacity:</Text>
      <PickerIOS 
        selectedValue={engineCapacity}
        onValueChange={(itemValue) => setEngineCapacity(itemValue)}
        style={styles.dropDown}
      >
        {engineCapacityOptions.map((option) => (
          <PickerIOS.Item
            key={option.value ?? 'null'}
            label={option.label}
            value={option.value}
            style={styles.dropItem}
          />
        ))}
      </PickerIOS>
      </View>
      <View>
      <TouchableOpacity style={styles.submitButton} onPress={calculateDuty}> 
        <Text style={styles.btntext}>Submit</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default DutyCalculatorComponent;