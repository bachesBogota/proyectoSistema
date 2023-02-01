import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Container,
  Icon,
  Text,
} from "./SigninElements";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);

    PostData(username, password).then((result) => {
      console.log('RESPUESTA API');
      console.log(result);
      if(result.autorizado === true && result.tipo === 'Contrato'){
        localStorage.setItem("authenticated", true);
        localStorage.setItem("username", username);
        navigate("/profile");
      }
    });

  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Baches Bogotá</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleChange}>
              <FormH1>Ingresa en tú cuenta</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Contraseña</FormLabel>
              <FormInput
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FormButton type="submit">Continuar</FormButton>
              {/* <Text>Forgot password</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
export function PostData(username, password) {
  let BaseUrl = "https://darvaron14.pythonanywhere.com/usuarios/"+username;

  console.log('pass '+password);
  return new Promise((resolve) => {
    fetch(BaseUrl, {
      mode: 'cors',
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOiJEZXYiLCJjbGllbnRfc2VjcmV0IjoiRGV2UGFzcyJ9.z6N3qREztea2sj35gMMY0LPJBlH8t_k4RbfSDfs-wLo",
        'contrasena': password ,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  });

}
