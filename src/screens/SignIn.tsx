import { VStack, Image, Text, Center, Heading } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "./Input";

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
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
            font-size="sm">
          Treine sua mente e seu corpo
        </Text>
      </Center>
      <Center>
        <Heading
            color="gray.100"
            font-size="xl"
            mb={6}
            fontFamily="heading">
          Acesse sua conta
        </Heading>
        <Input placeholder="Email"/>
        <Input placeholder="Senha"/>
      </Center>
    </VStack>
  );
}
