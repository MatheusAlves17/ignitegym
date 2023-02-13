import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from '@services/api';

import { Button } from "./Button";
import { Input } from "./Input";

import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

type TFormDataProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome"),
  email: yup.string().required("Informe o email").email("Email inválido"),
  password: yup.string().required("Informe a senha").min(8, 'A senha deve ter pelo menos 6 digitos'),
  confirmPassword: yup.string().required('Confirme a senha').oneOf([yup.ref('password')], 'As senhas não são iguais')
});

export function SignUp() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  async function handleSignUp({
    name,
    email,
    password
  }: TFormDataProps) {
    console.log('cadastrando');
    
    const response = await api.post('/users',{name, email, password});
    console.log(response.data);
    

    // await fetch('http://192.168.18.14:3333/users',{
    //   method: 'POST',
    //   headers:{
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({name, email, password})
    // }).then(response => {
    //   const data = response.json()
    //   console.log(data);
    // }).catch((error) => {
    //   console.log(error);
      
    // })
    // console.log('cadastrado');
    
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Imagem de fundo"
          resizeMode="contain"
          position="absolute"
        />
        <Center my="24">
          <LogoSvg />
          <Text color="gray.100" font-size="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" font-size="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirme a senha"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.confirmPassword?.message}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="done"
              />
            )}
          />
          <Button
            title="Criar e acessar"
            onPress={handleSubmit(handleSignUp)}
          />
        </Center>
        <Button
          mt={24}
          title="Voltar para o login"
          variant={"outline"}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
