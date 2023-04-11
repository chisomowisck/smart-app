import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import axios from "axios";

export default function InputScreen({ onSubmit }) {
  const [cif, setCIF] = useState("");
  const [portCharges, setPortCharges] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [age, setAge] = useState("");
  const [fxCurrency, setFXCurrency] = useState("");

  const handlePress = () => {
    console.log("Button pressed!");
    let xmls =
      '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\
                            xmlns:web="http://www.webserviceX.NET/">\
            <soapenv:Header/>\
            <soapenv:Body>\
              <web:ConversionRate>\
                <web:FromCurrency>INR</web:FromCurrency>\
                <web:ToCurrency>USD</web:ToCurrency>\
              </web:ConversionRate>\
            </soapenv:Body>\
          </soapenv:Envelope>';

    axios
      .post("http://www.webservicex.com/CurrencyConvertor.asmx?wsdl", xmls, {
        headers: { "Content-Type": "text/xml" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="CIF"
        value={cif}
        onChangeText={(text) => setCIF(text)}
      />
      <TextInput
        placeholder="Port Charges"
        value={portCharges}
        onChangeText={(text) => setPortCharges(text)}
      />
      <TextInput
        placeholder="Engine Capacity"
        value={engineCapacity}
        onChangeText={(text) => setEngineCapacity(text)}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
        placeholder="FX Currency"
        value={fxCurrency}
        onChangeText={(text) => setFXCurrency(text)}
      />
      <Button title="Submit" onPress={handlePress} />
    </View>
  );
}
