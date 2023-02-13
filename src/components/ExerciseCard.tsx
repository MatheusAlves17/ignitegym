import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Heading, HStack, Image, Text, VStack, Icon } from "native-base";
import { Entypo } from "@expo/vector-icons";

type TExerciseCardProps = TouchableOpacityProps & {
  name: string;
  series: string;
};

export function ExerciseCard({ name, series, ...rest }: TExerciseCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems={"center"}
        p={2}
        pr={4}
        mb={3}
        rounded={"md"}
      >
        <Image
          source={{
            uri: "https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg",
          }}
          alt="Imagem do exercício"
          h={16}
          w={16}
          mr={4}
          rounded="md"
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading color="white" fontSize={"lg"} fontFamily="heading">
            {name}
          </Heading>
          <Text color="gray.200" fontSize={"sm"} mt={1} numberOfLines={2}>
            {series}
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}
