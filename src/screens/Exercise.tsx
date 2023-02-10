import { Heading, HStack, Icon, Text, VStack, Image, Box } from "native-base";
import { ScrollView, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import BodySvg from "@assets/body.svg";
import SeriesSGV from "@assets/series.svg";
import RepetitionsSGV from "@assets/repetitions.svg";

import { Button } from "./Button";
export function Exercise() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <ScrollView>
        <VStack px={8} bg="gray.600" pt={12}>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
          </TouchableOpacity>
          <HStack
            justifyContent="space-between"
            alignContent="center"
            mt={4}
            mb={8}
          >
            <Heading color={"gray.100"} fontSize="lg" flexShrink={1}>
              Puxada frontal
            </Heading>
            <HStack alignContent="center">
              <BodySvg />
              <Text color="gray.200" ml={1} textTransform="capitalize">
                costas
              </Text>
            </HStack>
          </HStack>
        </VStack>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{
              uri: "https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg",
            }}
            mb={3}
            alt="Nome do exercício"
            resizeMode="cover"
            rounded="lg"
          />
          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack
              alignContent="center"
              justifyContent="space-around"
              mt={5}
              mb={6}
            >
              <HStack>
                <SeriesSGV />
                <Text color="gray.200" fontSize="md" ml={2}>
                  3 séries
                </Text>
              </HStack>
              <HStack>
                <RepetitionsSGV />
                <Text color="gray.200" fontSize="md" ml={2}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>
            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
