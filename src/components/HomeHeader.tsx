import { HStack, VStack, Text, Heading, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

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
      <VStack flex={1}>
        <Text color={"gray.100"} fontSize={"md"}>
          Olá,
        </Text>
        <Heading color={"gray.100"} fontSize={"md"} fontFamily="heading">
          Rodrigo
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon as={MaterialIcons} color="gray.200" name="logout" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
