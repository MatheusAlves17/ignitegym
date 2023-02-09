import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import { Button } from "./Button";
import { Input } from "./Input";

import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";


export function SignUp() {
  return (
    <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
    >
        <VStack
            flex={1}
            bg="gray.700"
            px={10}
            pb={16}
        >
        <Image
            source={BackgroundImg}
            alt="Imagem de fundo"
            resizeMode="contain"
            position="absolute"
        />
        <Center my="24">
            <LogoSvg />
            <Text
                color="gray.100"
                font-size="sm"
            >
            Treine sua mente e seu corpo
            </Text>
        </Center>
        <Center>
            <Heading
                color="gray.100"
                font-size="xl"
                mb={6}
                fontFamily="heading">
            Crie sua conta
            </Heading>
            <Input 
                placeholder="Nome"
            />
            <Input 
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Input 
                placeholder="Senha"
                secureTextEntry  
            />
            <Button title="Criar e acessar"/>
        </Center>
            <Button
                mt={24}
                title="Voltar para o login"
                variant={"outline"}
            />
        </VStack>
    </ScrollView>

  );
}
