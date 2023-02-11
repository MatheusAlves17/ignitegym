import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
  name: yup.string().required("Informe um nome"),
  email: yup.string().required("Informe um email").email("Email inválido"),
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

  function handleSignUp({
    email,
    name,
    password,
    confirmPassword,
  }: TFormDataProps) {
    console.log({ email, name, password, confirmPassword });
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
