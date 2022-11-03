import { Text, View } from "react-native";
import PropTypes from "prop-types";

const Saludar = ({ name = "Mundo" }) => {
  return (
    <View>
      <Text>Hola {name}.</Text>
    </View>
  );
};

export default Saludar;

Saludar.propTypes = {
  name: PropTypes.string,
};
