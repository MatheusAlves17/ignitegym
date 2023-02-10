import { HStack, VStack, Text, Heading } from "native-base";
import { UserImage } from "./UserImage";

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserImage
      alt="Foto do usuário"
        size={16}
        mr={4}
        source={{ uri: "https://github.com/rodrigorgtic.png" }}
      />
      <VStack>
        <Text color={"gray.100"} fontSize={"md"}>
          Olá,
        </Text>
        <Heading color={"gray.100"} fontSize={"md"}>
          Rodrigo
        </Heading>
      </VStack>
    </HStack>
  );
}
