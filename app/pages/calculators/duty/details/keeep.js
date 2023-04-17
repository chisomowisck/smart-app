import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { parseString } from 'xml2js';

const App = () => {
  const [response, setResponse] = useState({});
  
  const handlePress = async () => {
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
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <View>
      <Button title="Calculate Duty" onPress={handlePress} />
      <Text>VDP: {response.VDP}</Text>
      <Text>Total Duty Charge: {response.TotalDutyCharge}</Text>
      <Text>ErrorCode: {response.ErrorCode}</Text>
    </View>
  );
};

export default App;
