import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { TAuthNavigatorRoutesProps } from "@routes/auth.routes"; 

import { Button } from "./Button";
import { Input } from "./Input";

import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

export function SignIn() {
  const navigation = useNavigation<TAuthNavigatorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('signUp')
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
            Acesse sua conta
          </Heading>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Acessar" />
        </Center>
        <Center mt={24}>
          <Text color={"gray.100"} fontSize={"sm"} mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" onPress={handleNewAccount} variant={"outline"} />
        </Center>
      </VStack>
    </ScrollView>
  );
}
