import React from "react";
import { Text } from "react-native";

export default ({ min, max }) => {
  return (
    (min > max)
      ? <Text>Valor {min} e maior que valor {max} </Text>
      : (min == max)
      ? <Text>Valor {min} e {max} são iguais</Text>
      : <Text>Valor {max} e maior que valor {min} </Text>
  );
}