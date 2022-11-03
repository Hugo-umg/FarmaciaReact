import {TextInput, Button, Text, View} from "react-native";

export default function LoginForm(){
    return(
        <View>
            <Text>Login</Text>
            <TextInput placeholder="Usuario"/>
            <TextInput placeholder="Contraseña" secureTextEntry={true}/>
            <Button title="Enviar" onPress={() => console.log("Enviando...")}/>
        </View>
    );
}